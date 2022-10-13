using EndPoint.Entities;
using EndPoint.Services.Interfaces;
using EndPoint.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace EndPoint.Services
{
    public class TodoServices : BaseServices,ITodoServices
    {
        public TodoServices(IServiceProvider services) : base(services) { }

        public async Task<Todo> Add(Todo todo)
        {
            var entry = await DbContext.Todos.AddAsync(todo);
            await DbContext.SaveChangesAsync();
            return entry.Entity;
        }

        public async Task<IEnumerable<Todo>> GetAll()
        {
            return await DbContext.Todos.ToListAsync();
        }
    }
}
