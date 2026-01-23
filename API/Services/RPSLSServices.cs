using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public class RPSLSServices
    {
      public string RandomChoice(string userinput)
        { string [] choices = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
            string result = "";
            if (choices.Contains(userinput.ToUpper()))
            {Random rnd = new Random();
            int selection = rnd.Next(0,5);
            string CPU = choices[selection];
            if (userinput.ToUpper() == CPU)
            {result = "It's a tie!";}

    else if (userinput.ToUpper() == "ROCK" && (CPU == "SCISSORS" || CPU == "LIZARD") ||
            (userinput.ToUpper() == "PAPER" && (CPU == "ROCK" || CPU == "SPOCK")) ||
            (userinput.ToUpper() == "SCISSORS" && (CPU == "PAPER" || CPU == "LIZARD")) ||
            (userinput.ToUpper() == "LIZARD" && (CPU == "PAPER" || CPU == "SPOCK")) ||
            (userinput.ToUpper() == "SPOCK" && (CPU == "ROCK" || CPU == "SCISSORS")))
                          {result = "You won! Bazinga!";}
    else {result = "You lost! Better luck next time.";}

            return "You entered... " + userinput.ToUpper() + "! Challenger chose... " + CPU + "! " + result;
            }
            else 
            {return "Please enter only either 'rock', 'paper', 'scissors', 'lizard', or 'spock'.";}
        }


        public string PVP(string user1input, string user2input)
        { string [] choices = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
            string result = "";
            if (choices.Contains(user1input.ToUpper()) && choices.Contains(user2input.ToUpper()) )
            {
            if (user1input.ToUpper() == user2input.ToUpper())
            {result = "It's a tie!";}

    else if (user1input.ToUpper() == "ROCK" && (user2input.ToUpper() == "SCISSORS" || user2input.ToUpper() == "LIZARD") ||
            (user1input.ToUpper() == "PAPER" && (user2input.ToUpper() == "ROCK" || user2input.ToUpper() == "SPOCK")) ||
            (user1input.ToUpper() == "SCISSORS" && (user2input.ToUpper() == "PAPER" || user2input.ToUpper() == "LIZARD")) ||
            (user1input.ToUpper() == "LIZARD" && (user2input.ToUpper() == "PAPER" || user2input.ToUpper() == "SPOCK")) ||
            (user1input.ToUpper() == "SPOCK" && (user2input.ToUpper() == "ROCK" || user2input.ToUpper() == "SCISSORS")))
        {result = "Player 1 won! Bazinga!";}
    else {result = "Player 2 won! Bazinga!";}

            return "Player 1 entered... " + user1input.ToUpper() + "! Player 2 chose... " + user2input.ToUpper() + "! " + result;
            }
            else 
            {return "Please enter only either 'rock', 'paper', 'scissors', 'lizard', or 'spock'.";}
        }
    }
}