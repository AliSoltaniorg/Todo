using EndPoint.Entities;
using Microsoft.EntityFrameworkCore;

namespace EndPoint.Services.Interfaces
{
    public interface IAppDbContext
    {
        #region Tables
        public DbSet<Todo> Todos { get; }

        #endregion

        #region Overrides
        DbSet<TEntity> Set<TEntity>() where TEntity : class;

        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);

        int SaveChanges();

        void Dispose();

        #endregion
    }
}
