using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET.Library.Functions
{
    internal static class GetTypeNames
    {
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
    }
}
