using EndPoint.Entities;
using EndPoint.ViewModels;

namespace EndPoint.Services.Interfaces
{
    public interface ITodoServices
    {
        Task<IEnumerable<Todo>> GetAll();

        Task<Todo> Add(Todo todo);
        Task<Todo> Edit(Todo todo);
        Task Delete(int id);
    }
}
