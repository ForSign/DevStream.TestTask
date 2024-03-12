using NET.Model;
using NET.Services;
using System.Diagnostics;

namespace NET
{
    internal class Program
    {
        static void Main(string[] args)
        {
            foreach (Vehicle vehicle in InstanceService<Vehicle>.GetInstances())
            {
                Trace.WriteLine(vehicle);
            };
        }
    }
}
