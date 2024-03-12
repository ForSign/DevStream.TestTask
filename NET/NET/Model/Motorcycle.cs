using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET.Model
{
    public class Motorcycle : Vehicle
    {
        public Motorcycle()
        {
            this.Name = "TheMotor";
            this.Weight = 200;
            this.Price = 1000;
        }
    }
}
