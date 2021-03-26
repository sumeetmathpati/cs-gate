---
title: Asympotic Notations
description: "Strings tutorial."
child_of: Algorithm Analysis
nav_order: 2
---

- Character array is called string.
- String ends with null (`\0`) character.
    - ASCII value of null character is 0.
- Format specifier `%s` takes bae address of string and prints all the characters from base address to the null character.
- Every character in the string is stored in the memory in the contigous manner.

# Declaration and Initialization

## Initialize With Array of Characters

- We can pass ana rray of characters we want in our string and also including null character at the end to initialize the string.

`char str[7] = {'B', 'H', 'A', 'R', 'A', 'T', '\0'};`

## Initialiing With String Literal

- Following statement is same as above statement:

`char str[7] = "BHARAT";`

- We can also skip the size of the array; compiler will automatically calculate the size for the string (with extra null character).

`char str[] = "BHARAT";`

## String Constant

- We can also declare a string constant.
- It's stored in read only memory.
- As it's constant and stored in ROM, we can't change it's content.
    - As in previous case we can change the characters of the character array and hence the string.

`char *p = "INDIA";`

***

# String Functions

- The string functions provided by C language are in string library which can be used by including header file `string.h`.
- Some of the common string functions are:
 
### strcpy(s1, s2);
- `char* strcpy(char* destination, const char* source);`
- Copies string s2 into string s1.

### strcat(s1, s2);
- `char *strcat(char *destination, const char *source)`
- Concatenates string s2 onto the end of string s1.

### strlen(s1);
- Returns the length of string s1.

### strcmp(s1, s2);
- `int strcmp (const char* str1, const char* str2);`
- Returns 0 if s1 and s2 are the same, 
- Returns value less than 0 if s1 < s2, and
- Returns value greater than 0 if s1 > s2.

### strchr(s1, ch);
- `char *strchr(const char *s, int c);`
- Returns a pointer to the first occurrence of character ch in string s1.

 ### strstr(s1, s2);
- Returns a pointer to the first occurrence of string s2 in string s1.

***

# Problems

## Q1

Find the output of following code.

{% highlight c %}
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv) {
    
    char str1[20] = "Hello";
    char str2[20] = "Hello";

    if (str1 == str2) {
        printf("They are same");
    } else {
        printf("They are not same");
    }
    
    return 0;
}			
/*
OUTPUT:
They are not same
*/
{% endhighlight %}

**Answer:** They are not same because `str1` is an address of character array in memory and `str2` is an address of an different character array in memory. Both will have different addresses and hence on comparing them we get false.

***

## Q2

Find the output of following code.

{% highlight c %}
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv) {

    if (*"Hi" == *"Hello") {
        printf("They are same");
    } else {
        printf("They are not same");
    }
    
    return 0;
}			
/*
OUTPUT:
They are same
*/
{% endhighlight %}

**Answer:** They are same because `"Hi"` is an string literal stored in memory and `"Hello"` is an string literal stored in memory. Each of the string will give their base address. When we dereference them with `*` we get first character of the string; and in both of the strings it's `H`.

Anything within `" "` (double quotes) will give base address of that string. In above example we are comparing first character of both the string.
{: .note}