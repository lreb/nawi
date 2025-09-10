using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

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
        private readonly DbContext _context;

        public GenericRepository(DbContext context)
        {
            _context = context;
        }

        public async Task<PaginateResult<T>> GetList(Expression<Func<T, bool>> filter, int pageNumber, int pageSize)
        {
            var query = _context.Set<T>().AsQueryable().AsNoTracking();

            if (filter != null)
            {
                query = query.Where(filter);
            }
            var totalCount = query.Count();
            var items = await query.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
            return new PaginateResult<T>
            {
                Items = items,
                TotalCount = totalCount,
                PageSize = pageSize,
                CurrentPage = pageNumber
            };
        }

        // public IEnumerable<T> GetPage(int page, int pageSize)
        // {
        //     var offset = (page - 1) * pageSize;
        //     return _context.Set<T>().Skip(offset).Take(pageSize).ToList();
        // }
    }
}
