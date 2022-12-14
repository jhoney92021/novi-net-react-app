using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using JaySharp.Shared.Loggers;
using novi_ams.NoviResponses;

namespace novi_ams.Controllers;

[ApiController]
[Route("[controller]")]
public class MemberListController : ControllerBase
{
    private readonly HttpClient _client;

    private readonly ILogger<MemberListController> _logger;

    public MemberListController(ILogger<MemberListController> logger)
    {
        _logger = logger;
        _client = new HttpClient();
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {        
        var getUrl = "https://180930b.novitesting.com/api/members";
        
        var header = new AuthenticationHeaderValue("Basic", "oNiPIWDjyGSkvLuxwHTzbXgBg2woNoW2TjU/tJs0E7U=");
        _client.DefaultRequestHeaders.Authorization = header;

        var result = await _client.GetAsync(getUrl);       

        var convertedResult = JsonSerializer.Deserialize<MembersResponse>(result.Content.ReadAsStream());        

        return new ObjectResult(convertedResult)
        {
            StatusCode = (int)result.StatusCode
        };
    }
}
