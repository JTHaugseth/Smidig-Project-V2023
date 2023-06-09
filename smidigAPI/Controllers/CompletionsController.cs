using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace smidigAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompletionsController : ControllerBase
    {
        private const string API_KEY = "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";
        private static readonly HttpClient httpClient = new HttpClient();

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ChatMessageRequest messageRequest)
        {
            try
            {
                var options = new
                {
                    model = "gpt-3.5-turbo",
                    messages = new[]
                    {
                        new { role = "user", content = messageRequest.Message }
                    },
                    max_tokens = 100
                };
                var json = JsonConvert.SerializeObject(options);
                var content = new StringContent(json, Encoding.UTF8, "application/json");
                httpClient.DefaultRequestHeaders.Clear();
                httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {API_KEY}");
                var response = await httpClient.PostAsync("https://api.openai.com/v1/chat/completions", content);
                response.EnsureSuccessStatusCode();
                var data = await response.Content.ReadAsStringAsync();
                return Ok(data);
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine(ex);
                return StatusCode(500);
            }
        }
    }

    public class ChatMessageRequest
    {
        public string? Message { get; set; }
    }
}