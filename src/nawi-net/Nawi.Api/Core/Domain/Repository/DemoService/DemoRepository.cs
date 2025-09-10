using System.Linq.Expressions;
using Nawi.Api.Core.Domain.Data.Entities;
using Nawi.Api.Core.Domain.Repository.Common;

namespace Nawi.Api.Core.Domain.Data.Repository.DemoService
{
    public class DemoRepository : IDemoRepository
    {
        public readonly IRepositoryRead<Demo> _repository;
        public DemoRepository(IRepositoryRead<Demo> repository)
        {
            _repository = repository;
        }

        Task<PaginateResult<Demo>> IDemoRepository.GetDemoList(int pageNumber, int pageSize)
        {
            Expression<Func<Demo, bool>> predicate = item => item.IsActive && item.Quantity > 0;
            var result = _repository.GetList(predicate, pageNumber, pageSize);
            return result;
        }
  }
}