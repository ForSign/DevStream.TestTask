using NET.Model;
using NET.Services;
using System.Diagnostics;
using NET.Library.Functions;

namespace NET
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<string> names = GetTypeNames.GetNames(InstanceService<Vehicle>.GetInstances());
            foreach (string name in names)
            {
                Console.WriteLine(name); // Write all names to console (Task3)
            }

            DiskWriter.SaveVehicles(InstanceService<Vehicle>.GetInstances(), "");
        }
    }
}
