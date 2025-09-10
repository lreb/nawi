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
  public async Task<IActionResult> GetDemoList()
  {
    // var demos = new List<Demo>
    //     {
    //         new Demo { Id = 1, Name = "Demo 1" },
    //         new Demo { Id = 2, Name = "Demo 2" },
    //         new Demo { Id = 3, Name = "Demo 3" },
    //         new Demo { Id = 4, Name = "Demo 4" },
    //         new Demo { Id = 5, Name = "Demo 5" },
    //         new Demo { Id = 6, Name = "Demo 6" },
    //         new Demo { Id = 7, Name = "Demo 7" }
    //     };

    var result = await _demoRepository.GetDemoList(1, 5);
    return Ok(result);
  }
}
