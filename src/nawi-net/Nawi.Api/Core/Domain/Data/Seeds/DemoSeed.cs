using Bogus;
using Nawi.Api.Core.Domain.Data.Entities;

namespace Nawi.Api.Core.Domain.Data.Seeds
{
    public static class DemoSeed
    {
        public static async Task Seed(NawiDbContext context)
        {
            if (!context.Demos.Any())
            {
                context.Demos.AddRange(GetDemoGenerator().Generate(50));
                await context.SaveChangesAsync();
            }
        }

        private static Faker<Demo> GetDemoGenerator()
        {
            return new Faker<Demo>()
                //.RuleFor(e => e.Id, _ => Guid.NewGuid())
                .RuleFor(e => e.Name, f => f.Name.FirstName())
                .RuleFor(e => e.Quantity, f => f.Random.Int(1, 100))
                .RuleFor(e => e.IsActive, f => f.Random.Bool());
        }
    }
}
