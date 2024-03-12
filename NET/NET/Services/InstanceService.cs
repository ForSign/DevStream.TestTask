using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Serialization;

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


        /// <summary>
        /// Return all names of object types in IEnumerable
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="ie"></param>
        /// <returns></returns>
        public static List<string> GetNames<T>(IEnumerable<T> ie)
        {
            List<string> result = new List<string>();

            foreach (T t in ie)
            {
                result.Add(t.GetType().Name);
            }

            return result;
        }


        /// <summary>
        /// Search for strings in List<string> that contain searchString
        /// </summary>
        /// <param name="typeNames"></param>
        /// <param name="searchString"></param>
        /// <returns>List<string> that match request</returns>
        public static List<string> SearchTypes(List<string> typeNames, string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            {
                return new List<string>();
            }

            List<string> result = new List<string>();
            result = typeNames.ToList().FindAll(o => o.Contains(searchString));

            return result;
        }


        /// <summary>
        /// Serialize instance files to path + instanceName
        /// </summary>
        /// <param name="pathDir">Save directory</param>
        public static void SaveInstances<T>(IEnumerable<T> ie, string pathDir)
        {
            foreach (T item in ie)
            {
                if (item != null)
                {
                    string filename = pathDir + item.GetType().Name;
                    XmlSerializer serializer = new(item.GetType());

                    Stream fs = new FileStream(filename, FileMode.Create);
                    XmlTextWriter writer = new(fs, Encoding.Unicode);
                    serializer.Serialize(writer, item);
                    writer.Close();
                }
            }
        }
    }
}
