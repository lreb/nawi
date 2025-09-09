using Nawi.Api.Layers.Domain.Entities;

namespace Nawi.Api.Layers.Domain.Interfaces
{
  public interface IDemoRepository
  {
    IEnumerable<Demo> GetAll();
  }
}
