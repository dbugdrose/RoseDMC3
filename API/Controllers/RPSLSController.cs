using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RPSLSController : ControllerBase
    {
        private readonly RPSLSServices _rpslsServices;

        public RPSLSController(RPSLSServices rpslsServices)
        {
            _rpslsServices = rpslsServices;
        }

            [HttpGet("CPU/{userinput}")]
        public string Rpsls(string userinput)
        {
            return _rpslsServices.RandomChoice(userinput);
        }

        [HttpGet("PVP/{user1input}/{user2input}")]
        public string pvp(string user1input, string user2input)
        {
            return _rpslsServices.PVP(user1input, user2input);
        }
    }
}