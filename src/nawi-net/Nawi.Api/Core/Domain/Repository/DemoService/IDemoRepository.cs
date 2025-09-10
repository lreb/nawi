using Nawi.Api.Core.Domain.Data.Entities;
using Nawi.Api.Core.Domain.Repository.Common;

namespace Nawi.Api.Core.Domain.Data.Repository.DemoService
{
    public interface IDemoRepository
    {
        Task<PaginateResult<Demo>> GetDemoList(int pageNumber, int pageSize);
    }
}