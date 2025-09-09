namespace Nawi.Api.Layers.Application.DTOs
{
  public record DemoDTO
  {
    public int DemoId { get; set; }
    public required string Name { get; set; }
  }
}
