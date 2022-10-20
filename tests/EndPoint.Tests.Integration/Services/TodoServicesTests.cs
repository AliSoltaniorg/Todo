using EndPoint.Context;
using EndPoint.Entities;
using EndPoint.Services;
using EndPoint.Services.Interfaces;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace EndPoint.Tests.Integration.Services
{
    public class TodoServicesTests
    {
        private readonly IAppDbContext _dbContext;
        private readonly TodoServices _todoServices;
        private readonly IServiceProvider _serviceProvider;
        public TodoServicesTests()
        {
            var serviceCollection = new ServiceCollection();
            serviceCollection.AddDbContext<AppDbContext>(config =>
            {
                config.UseInMemoryDatabase("TodoAppDb");
            });
            serviceCollection.AddTransient<IAppDbContext, AppDbContext>();
            var serviceProvider = serviceCollection.BuildServiceProvider();
            _serviceProvider = serviceProvider;
            _dbContext = _serviceProvider.GetRequiredService<IAppDbContext>();


            _todoServices = new TodoServices(_serviceProvider);
        }


        [Fact]
        public async void Should_GetAll_Todos()
        {
            //arrange
            var entry = await _dbContext.Todos.AddAsync(new Entities.Todo() { Title = "Test 1" });
            _dbContext.SaveChanges();

            //act
            Func<Task<IEnumerable<Todo>>> actual = async () => await _todoServices.GetAll();

            //assert
            var result = await actual();
            result.Should().Contain(c => c.Id == entry.Entity.Id);
        }

        [Fact]
        public async void Should_Add_Todo()
        {
            //arrange

            //act
            var entry = await _todoServices.Add(new Todo() { Title = "Test 1" });
            _dbContext.SaveChanges();

            //assert
            _dbContext.Todos.Any(c=>c.Id == entry.Id).Should().BeTrue();
        }

        [Fact]
        public async void Should_Delete_Todo()
        {
            //arrange
            var entry = await _todoServices.Add(new Todo() { Title = "Test 1" });
            _dbContext.SaveChanges();

            //act
            await _todoServices.Delete(entry.Id);

            //assert
            _dbContext.Todos.Any(c => c.Id == entry.Id).Should().BeFalse();
        }

        [Fact]
        public async void Should_Edit_Todo()
        {
            //arrange
            var todo = new Todo() { Title = "Test 1" };
            await _todoServices.Add(todo);
            _dbContext.SaveChanges();

            //act
            todo.Title = "Test 2";
            await _todoServices.Edit(todo);

            //assert
            _dbContext.Todos.Any(c => c.Title == todo.Title).Should().BeTrue();
        }
    }
}
