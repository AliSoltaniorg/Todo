using EndPoint.Entities;
using EndPoint.Services.Interfaces;
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
        public async Task<IEnumerable<Todo>> GetTodos()
        {
            return await _todoServices.GetAll();
        }

        [HttpPost]
        public async Task<ActionResult<Todo>> AddTodo(Todo todo)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.Values.SelectMany(c => c.Errors).Select(c => c.ErrorMessage).ToList());
            var result = await _todoServices.Add(todo);
            return result;
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<Todo>> EditTodo(int id,Todo todo)
        {
            if (id != todo.Id)
                return BadRequest("Invalid todo id");
            if (!ModelState.IsValid)
                return BadRequest(ModelState.Values.SelectMany(c => c.Errors).Select(c => c.ErrorMessage).ToList());
            var result = await _todoServices.Edit(todo);
            return result;
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteTodo(int id)
        {
            if (id <= 0)
                return BadRequest("Invalid todo id");
            await _todoServices.Delete(id);
            return Ok();
        }
    }
}
