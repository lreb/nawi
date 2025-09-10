using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Nawi.Api.Core.Domain.Data;

namespace Nawi.Api.Core.Domain.Repository.Common
{
    /// <summary>
    /// Generic repository implementation, can be used for any entity type injected on each feature repository
    /// </summary>
    /// <typeparam name="T">Entity type</typeparam>
    /// <returns>paginated result</returns>
    public class GenericRepository<T> : IRepositoryRead<T>
    where T : class
    {
        private readonly NawiDbContext _context;

        public GenericRepository(NawiDbContext context)
        {
            _context = context;
        }

        public async Task<PaginateResult<T>> GetList(Expression<Func<T, bool>> filter, int pageNumber, int pageSize, CancellationToken cancellationToken = default)
        {
            var query = _context.Set<T>().AsQueryable().AsNoTracking();

            if (filter != null)
            {
                query = query.Where(filter);
            }
            var totalCount = query.Count();
            var items = await query.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync(cancellationToken);
            return new PaginateResult<T>
            {
                Items = items,
                TotalCount = totalCount,
                PageSize = pageSize,
                CurrentPage = pageNumber
            };
        }
    }
}
