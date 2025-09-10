namespace Nawi.Api.Core.Domain.Data.Entities
{
  /// <summary>
  /// Represents a demo entity with an ID and a name.
  /// </summary>
  public class Demo
  {
    /// <summary>
    /// Gets or sets the unique identifier for the demo.// |-- Models/
    /// </summary>
    public int Id { get; set; }
    /// <summary>
    /// Gets or sets the name of the demo.
    /// </summary>
    public required string Name { get; set; }
    /// <summary>
    /// Gets or sets the description of the demo.
    /// </summary>
    public int Quantity { get; set; }
    /// <summary>
    /// Gets or sets a value indicating whether the demo is active.
    /// </summary>
    public bool IsActive { get; set; } = true;
  }
}
