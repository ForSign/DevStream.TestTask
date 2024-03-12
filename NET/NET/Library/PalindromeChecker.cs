using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NET.Library
{
    public static class PalindromeChecker
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
    }
}
