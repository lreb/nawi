namespace Nawi.Api.Core.Domain.Repository.Common
{
    /// <summary>
    /// Paginated result class
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class PaginateResult<T>
    {
        public IEnumerable<T> Items { get; set; } = Enumerable.Empty<T>();
        public int TotalCount { get; set; }
        public int PageSize { get; set; }
        public int CurrentPage { get; set; }
        public int TotalPages => (int)Math.Ceiling((double)TotalCount / PageSize);
        public bool HasPrevious => CurrentPage > 1;
        public bool HasNext => CurrentPage < TotalPages;
    }
}