using System;
using System.Buffers;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET.Library.Functions
{
    internal static class TypeSearcher
    {
        /// <summary>
        /// Search for strings in List<string> that contain searchString
        /// </summary>
        /// <param name="typeNames"></param>
        /// <param name="searchString"></param>
        /// <returns>List<string> that match request</returns>
        public static List<string> Search(List<string> typeNames, string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            {
                return new List<string>();
            }

            List<string> result = new List<string>();
            result = typeNames.ToList().FindAll(o => o.Contains(searchString));

            return result;
        }
    }
}
