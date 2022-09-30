using AutoMapper;
using EndPoint.Services.Interfaces;

namespace EndPoint.Services
{
    public abstract class BaseServices
    {
        private IMapper? _mapper;
        private IAppDbContext? _context;
        private IServiceProvider _services;

        public BaseServices(IServiceProvider services)
        {
            _services = services;
        }
        protected IMapper Mapper => _mapper ??= _services.GetRequiredService<IMapper>();
        protected IAppDbContext DbContext => _context ??= _services.GetRequiredService<IAppDbContext>();
    }
}
