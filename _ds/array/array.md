---
title: Array
parent: true
nav_order: 2
description: "Array data structure tutorial."
---

- Array is used where,
    - We need to store elements of **same type,**
    - Store elements in **contigous fashion,** and
    - We know the number of elements we are going to store; becasue we **can't increase or decrease the size** allocated to array in the memory.

# 2.1 One Dimentional Array

## Memory Representation

- Array is stored in a main memory in contigous fashion.
- The array arr in `int arr[5] = {10, 20, 30, 40, 50};` is stored as:
    - We assume that integer is of 2 bytes.

![Array Memory Representation]({{ site.baseurl }}/assets/images/ds-array-memory-representation.png)

***

## Address of An Array

- Name of the array points to the first element of array.
    - But **It's not a variable pointing to the array.**
- In `int arr[5]`, 
	- value of `arr` and `&arr` is same.
		- Because address of first element (`arr`) and address of array (`&arr`) will be same.
- But `arr+1` and `&arr+1` are different
    - `arr+1` gives second element in array.
    - `&arr+1` given the next element after last element in the array. Because here we are considering address of complete array

{% highlight c %}
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv) {
    char arr[6] = {10, 20, 30, 40, 50, 60};
    char *ptr = (char *)(&arr + 1); // Address of one byte after the array.

    printf("%d %d %d %d\n", arr, &arr, arr+1, &arr+1);
    printf("%d %d", *(arr + 1), *(ptr - 1));
    return 0;
}			
/*
OUTPUT:
1954710354 1954710354 1954710355 1954710360
20 60
*/
{% endhighlight %}

***

## Declaration syntax:

- `type arrayName [ arraySize ];`
- Example, `int arr[10]`

***

## Initialization syntax

### Initializing While Declaration

- `int arr[5] = {1, 2, 3, 4, 5};`

- If you don't provide the size in square bracket; it will callocate the array size equal to the number of elements in curly bracket. For example array given below wil have size 3.

- `int arr[] = {1, 2};`

### Initialization After Decalration

We can also insert value in array after declaration.

{% highlight c %}
int main() {
    int arr[2];
    arr[1] = 1;
    arr[2] = 2;
    arr[3] = 3;

    return 0;
}
{% endhighlight %}

***

## Accessing Array Elements

- Inserting single value in array `arr` at position 0:
    - `arr[0] = 100;`
- Getting value from position 3 from array `arr`:
    - `int a = arr[3];`

***

# 2.2 N Dimentional Array

## Declaration

- While declaring we mension number of rows and columns we want in an array.
    - `int a[5][3] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};`
- While declaring an multidimensional array; mentioning row numbers is optional but column number if not optional.
    - `int a[][3] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};` 

***

- In n dimentional array, the array name points to the base address of first (n-1) dimentional array.
	- Example,
		- In 2-D array array name points to the base address of first 1-D array.
		- In 3-D array array name points to the base address of first 2-D array.
- Example,

{% highlight c %}
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv) {

    int a[5][3] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};

    printf("a = %d\n", a); // Base address of an array [1000]
    printf("a + 1 = %d\n", a + 1); // Skipping one row, i.e. base address of array [4, 5, 6]. [1012]
    printf("a + 3 = %d\n", a + 3); // Skipping three row, i.e. base address of array [10, 11, 12]. [1036]
    printf("a + 10 =  %d\n", a + 10); // Skipping 10 row. [1120]
    printf("a + 0 %d\n", a + 0);    // Skipping 0 rows. [1000]
    printf("*(a + 0) = %d\n", *(a + 0)); // Value of first element of array, which is first array in side array. [1000]
    printf("a + 2 = %d\n", a + 2); // Skipping 2 rows. [1024]
    printf("*(a + 2) = %d\n", *(a + 2)); // Value of third element of an array, which is third array. [1024]

    return 0;
}
{% endhighlight %}