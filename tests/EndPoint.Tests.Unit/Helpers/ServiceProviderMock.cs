using EndPoint.Entities;
using EndPoint.Entities.Common;
using EndPoint.Services;
using EndPoint.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Moq;
using System.Linq.Expressions;

namespace EndPoint.Tests.Unit.Helpers
{
    public abstract class ServiceProviderMock<TEntity,TServices> 
        where TEntity : class,IEntity where TServices : class
    {
        private readonly Mock<IServiceProvider> _serviceProviderMock;

        protected readonly IServiceProvider ServiceProvider;

        private readonly Mock<IAppDbContext> _dbContextMock;

        private readonly Mock<DbSet<TEntity>> _dbSetMock;

        public TServices? Services { get;protected set; }

        public ServiceProviderMock()
        {
            _serviceProviderMock = new Mock<IServiceProvider>();

            _dbContextMock = new Mock<IAppDbContext>();

            _dbSetMock = new Mock<DbSet<TEntity>>();

            ServiceProvider = _serviceProviderMock.Object;

            _serviceProviderMock.Setup(x => x.GetService(typeof(IAppDbContext))).Returns(ServiceProvider);

        }

        public void SetupDbSet(Expression<Func<IAppDbContext,DbSet<TEntity>>> expression)
        {
            _dbContextMock.SetupGet(expression).Returns(_dbSetMock.Object);
        }

        public void VerifyDbSet(Expression<Action<DbSet<TEntity>>> expression,int count = 1)
        {
            _dbSetMock.Verify(expression, Times.Exactly(count));
        }
        public void VerifySaveChangesAsync(int count = 1)
        {
            _dbContextMock.Verify(c => c.SaveChangesAsync(It.IsAny<CancellationToken>()),Times.Exactly(count));
        }

        public void VerifyNotSaveChangesAsync(int count = 1)
        {
            _dbContextMock.Verify(c => c.SaveChangesAsync(It.IsAny<CancellationToken>()),Times.Never);
        }

        public void VerifyDbSetWithSaveChangesAsync(Expression<Action<DbSet<TEntity>>> expression,int count = 1)
        {
            _dbSetMock.Verify(expression, Times.Exactly(count));
            VerifySaveChangesAsync();
        }
    }
}
