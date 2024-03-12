using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET.Model
{
    /// <summary>
    /// Abstract class for vehicle properties that will be shared among
    /// all other  vehicle inheritors
    /// </summary>
    public abstract class Vehicle
    {
        public string? Name { get; set; }
        public float Weight { get; set; }
        public double Price { get; set; }
    }
}
