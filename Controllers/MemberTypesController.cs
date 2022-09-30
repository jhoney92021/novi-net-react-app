using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using JaySharp.Shared.Loggers;

namespace novi_ams.Controllers;

[ApiController]
[Route("[controller]")]
public class MemberTypesController : ControllerBase
{
    private readonly HttpClient _client;

    private readonly ILogger<MemberTypesController> _logger;

    public MemberTypesController(ILogger<MemberTypesController> logger)
    {
        _logger = logger;
        _client = new HttpClient();
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        JayLogger.PrintInBlue("~~~ Getting member types ~~~");
        var getUrl = "https://180930b.novitesting.com/api/member-types";
        
        var header = new AuthenticationHeaderValue("Basic", "oNiPIWDjyGSkvLuxwHTzbXgBg2woNoW2TjU/tJs0E7U=");
        _client.DefaultRequestHeaders.Authorization = header;

        var result = await _client.GetAsync(getUrl);

        JayLogger.PrintWithColor($"~~~ result {result.Content.ToString()} ~~~  ", ConsoleColor.Green);
        JayLogger.PrintWithColor($"~~~ WATCH WORKS", ConsoleColor.Green);

        var convertedResult = JsonSerializer.Deserialize<MemberTypeResponse>(result.Content.ReadAsStream());

        JayLogger.PrintWithColor($"~~~ convertedResult {convertedResult.Results[0].Name} ~~~  ", ConsoleColor.Green);

        return new ObjectResult(convertedResult)
        {
            StatusCode = (int)result.StatusCode
        };
    }
}
