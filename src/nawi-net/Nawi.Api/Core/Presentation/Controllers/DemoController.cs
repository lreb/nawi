using Microsoft.AspNetCore.Mvc;
using Nawi.Api.Core.Domain.Data.Repository.DemoService;

[Route("api/[controller]")]
public class DemoController : ControllerBase
{
  public readonly IDemoRepository _demoRepository;
  public DemoController(IDemoRepository demoRepository)
  {
    _demoRepository = demoRepository;
  }

  [HttpGet, Route("")]
  public async Task<IActionResult> GetDemoList([FromQuery] int pageNumber = 1, [FromQuery] int pageSize = 5)
  {
    var result = await _demoRepository.GetDemoList(pageNumber, pageSize, default);
    return Ok(result);
  }
}
