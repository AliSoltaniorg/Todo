using EndPoint.Entities;
using EndPoint.ViewModels;

namespace EndPoint.Services.Interfaces
{
    public interface ITodoServices
    {
        Task<IEnumerable<TodosViewModel>> GetAll();

        Task<TodosViewModel> Add(Todo todo);
    }
}
