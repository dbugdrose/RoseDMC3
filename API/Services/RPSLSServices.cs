using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public class RPSLSServices
    {
      public string RandomChoice()
        { string [] choices = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
            Random rnd = new Random();
            int selection = rnd.Next(0,5);
            string CPU = choices[selection];
            return CPU;
        }
    }
}