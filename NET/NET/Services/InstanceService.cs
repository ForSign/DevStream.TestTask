using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET.Services
{
    internal static class InstanceService<T>
    {
        /// <summary>
        /// Create an iterable instances of (inherited) types
        /// if not Abstract and if had an empty constructor defined
        /// </summary>
        /// <returns>Instance of type</returns>
        public static IEnumerable<T> GetInstances()
        {
            var baseType = typeof(T);

            var instnaceTypes = AppDomain.CurrentDomain.GetAssemblies()
                .SelectMany(a => a.GetTypes()) // Linq over all types in assembly
                .Where (
                    t => baseType.IsAssignableFrom(t) && !t.IsAbstract // Check if of baseType and not Abstract
                    && (t.GetConstructor(Type.EmptyTypes) != null) //Check for empy constuctor for creating
                );

            foreach ( var type in instnaceTypes )
            {
                yield return (T)Activator.CreateInstance(type); // Iterable
            }
        }
    }
}
