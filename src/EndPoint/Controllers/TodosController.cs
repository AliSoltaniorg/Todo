using EndPoint.Entities;
using EndPoint.Services.Interfaces;
using EndPoint.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EndPoint.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly ITodoServices _todoServices;

        public TodosController(ITodoServices todoServices)
        {
            _todoServices = todoServices;
        }

        [HttpGet]
        public async Task<IEnumerable<TodosViewModel>> GetTodos()
        {
            return await _todoServices.GetAll();
        }

        [HttpPost]
        public async Task<ActionResult<TodosViewModel>> AddTodo(Todo todo)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.Values.SelectMany(c => c.Errors).Select(c => c.ErrorMessage).ToList());
            var result = await _todoServices.Add(todo);
            return result;
        }
    }
}
