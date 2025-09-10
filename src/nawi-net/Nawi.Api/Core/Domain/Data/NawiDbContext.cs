using Microsoft.EntityFrameworkCore;
using Nawi.Api.Core.Domain.Data.Entities;

namespace Nawi.Api.Core.Domain.Data 
{
    public class NawiDbContext : DbContext
    {
        public NawiDbContext(DbContextOptions<NawiDbContext> options) : base(options) { }
        public DbSet<Demo> Demos { get; set; }

        // protected override void OnConfiguring(DbContextOptionsBuilder options)
        // {
        //     options.UseSqlServer(@"Server=myserver;Database=mydatabase;User Id=myuser;Password=mypassword;");
        // }
    }
}