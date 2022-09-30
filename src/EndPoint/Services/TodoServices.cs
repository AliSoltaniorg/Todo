using EndPoint.Entities;
using EndPoint.Services.Interfaces;
using EndPoint.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace EndPoint.Services
{
    public class TodoServices : BaseServices,ITodoServices
    {
        public TodoServices(IServiceProvider services) : base(services) { }

        public async Task<TodosViewModel> Add(Todo todo)
        {
            var entry = await DbContext.Todos.AddAsync(todo);
            await DbContext.SaveChangesAsync();

            var result = Mapper.Map<Todo, TodosViewModel>(entry.Entity);
            return result;
        }

        public async Task<IEnumerable<TodosViewModel>> GetAll()
        {
            var result = Mapper.ProjectTo<TodosViewModel>(DbContext.Todos);
            return await result.ToListAsync();
        }
    }
}
