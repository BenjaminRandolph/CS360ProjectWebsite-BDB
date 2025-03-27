using Microsoft.AspNetCore.Mvc;

namespace BDB_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReturnUserAccountController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<ReturnUserAccountController> _logger;

        public ReturnUserAccountController(ILogger<ReturnUserAccountController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetUserAccount")]
        public IEnumerable<UserAccount> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new UserAccount
            {
                id = 0,
                userName = /*call database*/ "This is a name that the frontend will recieve",
                userPassword = /*call database*/ "This is a password that the frontend will recieve",
                phoneNumber = /*call database*/ "This is a phone number that the frontend will recieve",
                email = /*call database*/ Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
