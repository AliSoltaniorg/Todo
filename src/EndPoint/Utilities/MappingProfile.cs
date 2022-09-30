using AutoMapper;
using EndPoint.Entities;
using EndPoint.ViewModels;

namespace EndPoint.Utilities
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Todo, TodosViewModel>().ReverseMap();
        }
    }
}
