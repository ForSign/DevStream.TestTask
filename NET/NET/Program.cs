using NET.Model;
using NET.Services;
using System.Diagnostics;
using NET.Library;

namespace NET
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<string> names = InstanceService<Vehicle>.GetNames(InstanceService<Vehicle>.GetInstances());
            foreach (string name in names)
            {
                Console.WriteLine(name); // Write all names to console (Task3)
            }

            var x = "TEST T SET";
            Trace.WriteLine(PalindromeChecker.IsPalindrome(x));

            foreach (int element in ElementFinder.MissingElements([4,6,9]))
            {
                Trace.WriteLine(element);
            }
        }
    }
}
