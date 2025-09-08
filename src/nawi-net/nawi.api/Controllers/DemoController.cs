using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using nawi.api.Layers.Domain.Entities;

[Route("api/[controller]")]
public class DemoController : ControllerBase
{
  [HttpGet, Route("")]
  public async Task<IActionResult> GetDemos()
  {
    var demos = new List<Demo>
        {
            new Demo { Id = 1, Name = "Demo 1" },
            new Demo { Id = 2, Name = "Demo 2" },
            new Demo { Id = 3, Name = "Demo 3" }
        };

    return Ok(demos);
  }
}
