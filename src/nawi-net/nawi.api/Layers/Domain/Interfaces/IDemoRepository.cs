using nawi.api.Layers.Domain.Entities;

namespace nawi.api.Layers.Domain.Interfaces
{
  public interface IDemoRepository
  {
    IEnumerable<Demo> GetAll();
  }
}
