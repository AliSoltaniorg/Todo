using EndPoint.Entities;
using EndPoint.Services;
using EndPoint.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace EndPoint.Tests.Unit.Services
{
    public class TodoServicesTests
    {
        private readonly Mock<IServiceProvider> _serviceProviderMock;
        private readonly Mock<IAppDbContext> _dbContextMock;
        private readonly Mock<DbSet<Todo>> _dbSetMock;
        private readonly ITodoServices _todoServices;
        public TodoServicesTests()
        {
            _serviceProviderMock = new Mock<IServiceProvider>();

            _dbContextMock = new Mock<IAppDbContext>();

            _dbSetMock = new Mock<DbSet<Todo>>();

            _dbContextMock.SetupGet(c => c.Todos).Returns(_dbSetMock.Object);

            _serviceProviderMock.Setup(x => x.GetService(typeof(IAppDbContext))).Returns(_dbContextMock.Object);

            _todoServices = new TodoServices(_serviceProviderMock.Object);
        }

        [Fact]
        public void Should_Add_Todo()
        {
            //arrange

            //act
            Func<Task<Todo>> add = async()=> await _todoServices.Add(new Todo());
            add();

            //assert
            _dbSetMock.Verify(c => c.AddAsync(It.IsAny<Todo>(),It.IsAny<CancellationToken>()));
            _dbContextMock.Verify(c => c.SaveChangesAsync(It.IsAny<CancellationToken>()));
        }

        [Fact]
        public void Should_Edit_Todo()
        {
            //arrange

            //act
            Func<Task<Todo>> edit = async () => await _todoServices.Edit(new Todo());
            edit();

            //assert
            _dbSetMock.Verify(c => c.Update(It.IsAny<Todo>()));
            _dbContextMock.Verify(c => c.SaveChangesAsync(It.IsAny<CancellationToken>()));
        }

        [Fact]
        public void Should_Delete_Todo()
        {
            //arrange
            _dbSetMock.Setup(c => c.FindAsync(It.IsAny<int>())).ReturnsAsync(new Todo());

            //act
            Func<Task> edit = async () => await _todoServices.Delete(0);
            edit();

            //assert
            _dbSetMock.Verify(c => c.Remove(It.IsAny<Todo>()));
            _dbContextMock.Verify(c => c.SaveChangesAsync(It.IsAny<CancellationToken>()));
        }

        [Fact]
        public void Should_Not_Delete_When_Entity_Not_Found()
        {
            //arrange
            _dbSetMock.Setup(c => c.FindAsync(It.IsAny<int>())).ReturnsAsync(()=> null);

            //act
            Func<Task> edit = async () => await _todoServices.Delete(0);
            edit();

            //assert
            _dbSetMock.Verify(c => c.Update(It.IsAny<Todo>()),Times.Never);
            _dbContextMock.Verify(c => c.SaveChangesAsync(It.IsAny<CancellationToken>()),Times.Never);
        }
    }
}
