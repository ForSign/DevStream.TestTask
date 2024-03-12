using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET.Model
{
    internal class Bicycle : Vehicle
    {
        public int WheelCount { get; set; }
        public string RoadType { get; set; } // Should be enum

        public Bicycle(string name = "TheBicycle") : this(name, 2, "Mountains", 2.5f, 1000.99) { }
        public Bicycle(string name, int wheels, string roadType, float weight, double price)
        {
            this.Name = name;
            this.WheelCount = wheels;
            this.RoadType = roadType;
            this.Weight = weight;
            this.Price = price;
        }
    }
}
