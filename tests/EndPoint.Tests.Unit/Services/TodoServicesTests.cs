using EndPoint.Context;
using EndPoint.Entities;
using EndPoint.Services;
using EndPoint.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace EndPoint.Tests.Unit.Services
{
    public class TodoServicesTests
    {
        private readonly Mock<AppDbContext> _appDbContextMock;

        public TodoServicesTests()
        {
            _appDbContextMock = new Mock<AppDbContext>();
        }

        [Fact]
        public void Should_Add_Todo()
        {
            //arrange
            //var services = new TodoServices(_appDbContextMock.Object);

            //act


            //assert
        }
    }
}
