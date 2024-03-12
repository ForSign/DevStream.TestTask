using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET.Model
{
    internal class Car : Vehicle
    {
        public int MaxPassenger { get; set; }
        public float MaxSpeed { get; set; }

        public Car() : this("TheCar") { }
        public Car(string name) : this(name, 150f, 4, 2.5f, 1000.99) { }
        public Car(string name, float maxSpeed, int maxPassenger, float weight, double price)
        {
            this.Name = name;
            this.MaxSpeed = maxSpeed;
            this.MaxPassenger = maxPassenger;
            this.Weight = weight;
            this.Price = price;
        }
    }
}
