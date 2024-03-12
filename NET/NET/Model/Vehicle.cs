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
    internal abstract class Vehicle
    {
        protected string? Name { get; set; }
        protected float Weight { get; set; }
        protected double Price { get; set; }
    }
}
