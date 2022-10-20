using EndPoint.Controllers;
using EndPoint.Entities;
using EndPoint.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace EndPoint.Tests.Unit.Controllers
{
    public class TodosControllerTests
    {
        private readonly Mock<ITodoServices> _todoServicesMock;
        private readonly TodosController _controller;
        public TodosControllerTests()
        {
            _todoServicesMock = new Mock<ITodoServices>();
            _controller = new TodosController(_todoServicesMock.Object);
        }

        [Fact]
        public void Should_Get_AllTodos()
        {
            //arrange

            //act
            Func<Task<IEnumerable<Todo>>> actual = async () => await _controller.GetTodos();
            actual();

            //assert
            _todoServicesMock.Verify(c => c.GetAll());
        }

        [Fact]
        public void Should_Add_Todo()
        {
            //arrange

            //act
            Func<Task<ActionResult<Todo>>> actual = async () => await _controller.AddTodo(new Todo());
            actual();

            //assert
            _todoServicesMock.Verify(c => c.Add(It.IsAny<Todo>()));
        }

        [Fact]
        public void Should_Not_Add_Todo_When_ModelState_IsNotValid()
        {
            //arrange
            _controller.ModelState.AddModelError("Title", "Title is required!");

            //act
            Func<Task<ActionResult<Todo>>> actual = async () => await _controller.AddTodo(new Todo());
            actual();

            //assert
            _todoServicesMock.Verify(c => c.Add(It.IsAny<Todo>()),Times.Never);
        }

        [Fact]
        public void Should_Delete_Todo()
        {
            //arrange

            //act
            Func<Task<IActionResult>> actual = async () => await _controller.DeleteTodo(1);
            actual();

            //assert
            _todoServicesMock.Verify(c => c.Delete(It.IsAny<int>()));
        }

        [Fact]
        public void Should_Not_Delete_Todo_When_Id_Lower_Than_Zero()
        {
            //arrange

            //act
            Func<Task<IActionResult>> actual = async () => await _controller.DeleteTodo(0);
            actual();

            //assert
            _todoServicesMock.Verify(c => c.Delete(It.IsAny<int>()),Times.Never);
        }

        [Fact]
        public void Should_Edit_Todo()
        {
            //arrange
            const int expectedId = 1;

            //act
            Func<Task<ActionResult<Todo>>> actual = async () => await _controller.EditTodo(expectedId, new Todo() { Id = expectedId });
            actual();

            //assert
            _todoServicesMock.Verify(c => c.Edit(It.IsAny<Todo>()));
        }

        [Fact]
        public void Should_Not_Edit_When_Id_NotEqual()
        {
            //arrange

            //act
            Func<Task<ActionResult<Todo>>> actual = async () => await _controller.EditTodo(10, new Todo() { Id = 15 });
            actual();

            //assert
            _todoServicesMock.Verify(c => c.Edit(It.IsAny<Todo>()),Times.Never);
        }

        [Fact]
        public void Should_Not_Edit_When_ModelState_IsNotValid()
        {
            //arrange
            _controller.ModelState.AddModelError("Title", "Title is required!");
            const int expectedId = 1;

            //act
            Func<Task<ActionResult<Todo>>> actual = async () => await _controller.EditTodo(expectedId, new Todo() { Id = expectedId });
            actual();

            //assert
            _todoServicesMock.Verify(c => c.Edit(It.IsAny<Todo>()),Times.Never);
        }
    }
}
