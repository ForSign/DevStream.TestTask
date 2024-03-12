using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET.Model
{
    internal class Plane : Vehicle
    {
        public int MaxPassenger { get; set; }
        public float MaxSpeed { get; set; }
        public float MaxHeight { get; set; }
        public string EngineType { get; set; } // better enum

        public Plane() : this("ThePlane") { }
        public Plane(string name = "ThePlane") : this(name, 300f, 2, 2500f, 20.000, 6.6f, "Piston") { }
        public Plane(string name,
                     float maxSpeed,
                     int maxPassenger,
                     float weight,
                     double price,
                     float maxHeight,
                     string engineType)
        {
            this.Name = name;
            this.MaxSpeed = maxSpeed;
            this.MaxPassenger = maxPassenger;
            this.Weight = weight;
            this.Price = price;

            this.MaxHeight = maxHeight;
            this.EngineType = engineType;
        }
    }
}
