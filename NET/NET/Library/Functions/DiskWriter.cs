using NET.Model;
using System;
using System.Collections.Generic;
using System.IO.Enumeration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Serialization;

namespace NET.Library.Functions
{
    internal class DiskWriter
    {
        /// <summary>
        /// Generate files with randomizer
        /// </summary>
        /// <param name="randomSet">I</param>
        /// <param name="pathDir">Save directory</param>
        public static void SaveVehicles(IEnumerable<Vehicle> ie, string pathDir)
        {
            foreach (Vehicle item in ie)
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
