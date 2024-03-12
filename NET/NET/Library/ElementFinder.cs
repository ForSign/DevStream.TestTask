using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET.Library
{
    public static class ElementFinder
    {
        public static IEnumerable<int> MissingElements(int[] arr)
        {
            if (arr.Length <= 1) return new int[0];

            List<int> result = new List<int>();

            for (int i = 1; i < arr.Length; i++) // Loop through integers
            {
                int range = arr[i] - arr[i - 1];
                if (range == 1)
                {
                    continue;
                }

                List<int> localResult = Enumerable.Range(arr[i - 1] + 1, range - 1).ToList(); // Add missing integers
                result.AddRange(localResult);
            }

            return result;
        }
    }
}
