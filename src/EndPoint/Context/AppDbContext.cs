using EndPoint.Entities;
using EndPoint.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EndPoint.Context
{
    public class AppDbContext : DbContext, IAppDbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {

        }

        public DbSet<Todo> Todos => Set<Todo>();
    }
}
