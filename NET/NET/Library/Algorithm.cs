using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET.Library
{
    public static class Algorithm
    {
        /// <summary>
        /// Checks for palindrome in string
        /// Skips spaces
        /// </summary>
        /// <param name="s"></param>
        /// <returns>True if string is palindrome</returns>
        public static bool IsPalindrome(string s)
        {
            if (string.IsNullOrEmpty(s)) return false;

            for (int i = 0, j = s.Length - 1; j > i;)
            {
                if (!char.IsLetterOrDigit(s[i])) // Skip spaces
                {
                    i++;
                    continue;
                }

                if (!char.IsLetterOrDigit(s[j])) // Skip spaces
                {
                    j--;
                    continue;
                }

                if (char.ToLower(s[i++]) != char.ToLower(s[j--])) return false; // Not Palindrome
            }

            return true;
        }


        /// <summary>
        /// Finds missing elements in a sorted array.
        /// Element count missing if it is not exist in array after
        /// incrementing previous element
        /// </summary>
        /// <param name="arr"></param>
        /// <returns>List of elements that are missing</returns>
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
