using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET.Library
{
    public static class Extensions
    {
        /// <summary>
        /// Reverse string using while loop by
        /// appending to the end of new string from old one
        /// </summary>
        /// <param name="s"></param>
        /// <returns></returns>
        public static string CustomReverser(this string s)
        {
            string r = "";
            int l = s.Length - 1;

            while (l >= 0)
            {
                r += s[l];
                l--;
            }

            return r;
        }
    }
}
