---
title: Pointers & Arrays
description: "Pointers arrays"
child_of: "C Programming"
nav_order: 12
---

- Variables of specific data type are used to store the data of that type, like them **pointers of specific type are used to store memory address of variables of that type.**
    - For example, integer pointer stores the address of `int` variable and character pointer stores the address of `char` variable.
- The name is *pointer* is because it *points* to the variable in memory location.
- The pointer is also an variable which has name and stored in memory.
- It has size
    - On 64 bit machine it has size of 64 bits which is **8 Bytes.**
    - On 32 bit machine it has size of 32 bits which is **4 Bytes.**

# `*` and `&` Operators

- In pointer operations dereference (`*`) and referenece (`&`) operators are used.

## The Reference Operator (`&`)

- We store address of variable in side the pointer variable, but first we need to get the address of the variable to store in pointer. That's where `&` operator is used.
- The `&` is unary operator and it's used to get memory address of variable.
- Syntax: `int *ptr = &num;`

***

## The Dereference Operator (`*`)

- Dereference is an unary oeprator and it's ued for two things:
    - To Declare a pointer variable.
        - Syntax: `int *ptr;`.
    - To get the value stored at address (stored by pointer) also called dereferencing.
        - Syntax: `printf("%d", *ptr);`.

# Working of Pointer

See the example program below.

{% highlight c linenos%}
#include <stdio.h>
int main() {
    
    int a = 10;     // Integer variable declared and defined.
    int *ptr;       // Integer pointer declared.
    ptr = &a;       // Address of integer 'a' stored in ptr.
    
    /* Alternatively we can define and declare integer pointer 
       at the same time with following syntax.
       
       int *ptr = &a;
       
   */
   
   printf("%d\n", a);     // Prints the integer stored in 'a'.
   printf("%p\n",ptr);    // Prints the value (address of 'a') stored in pointer.
   printf("%d\n", *ptr);   // Prints the value stored at address pointed by ptr (dereferencing)

    return 0;
}
/*
OUTPUT:
10
293038756
10
*/
{% endhighlight %}

**%p** format specifier can be used to print address stored in pointer in hexadecimal format.
{: .note}

![Pointer]({{ site.baseurl }}/assets/images/plds-pointer.png)

***

# Pointer Arithmetic

- Pointer contains the address of some variable, hence when we perform arithmetic operatons on pointer we are performing them on memory addresses.
- The operations can be performed on pointers are:
    - Between pointer and integer.
    - Between two pointers.

## Between Pointer and Integer

- Between pointer and integer we can perform following operations:
    - Increment (--)
    - Decrement (++)
    - Adding integer (+ or +=)
    - Subtracting integer (- or -=)

{% highlight c%}
#include <stdio.h>
int main() {
    
    int a = 10;     // Integer variable declared and defined.
    int *ptr;       // Integer pointer declared.
    ptr = &a;       // Address of integer 'a' stored in ptr.
    
    printf("%p\n",ptr);
    ptr++;              // Increment by 1
    printf("%p\n",ptr);
    ptr += 5;           // Increment by 5
    printf("%p\n",ptr);
    ptr -= 5;           // Decrement by 5
    printf("%p\n",ptr);
    ptr--;              // Decrement by 1
    printf("%p\n",ptr);
    
    return 0;
}
{% endhighlight %}


- It would be better use of these operations if we perform them on array, so that we can traverse the array by incrementing the pointer and it would point to the next array element because array is stored contigously in memory.

We don't have to use reference operator to array because array name points to the first element of array and hence automatically gives address of first element of array.
{: .note}

{% highlight c%}
#include <stdio.h> 
  
int main() { 
    int arr[3] = {10, 2, 3}; 
    
    int *ptr; 
    ptr = arr; 
    
    for (int i = 0; i < 3; i++) { 
        printf("Value of *ptr = %d\n", *ptr); 
        printf("Value of ptr = %p\n\n", ptr); 
        ptr++; 
    } 
} 
/*
OUTPUT:
Value of *ptr = 10
Value of ptr = 0x7ffda8b735e8

Value of *ptr = 2
Value of ptr = 0x7ffda8b735ec

Value of *ptr = 3
Value of ptr = 0x7ffda8b735f0
*/
{% endhighlight %}


***

## Between pointers
- Between pointers, we can only perform subtraction operation.
- Subtraction between two pointer can be performed if and only if:
    - They both are pointing to the same array
    - We can do **p1 - P2** iff **P1 > P2**.

We cant perform other operations like addition on pointers because if we add two addresses we would know wheat address we will get and even if we calculate, it would be useless. <br><br>The subtraction of two pointers is done to get offset bewteen two array elements.
{: .note}

# Array

- Name of the array **points to the first element of array.**
- We can think that array name is pointer to the first element. **It's not a saperate variable pointing to the array.**

## Array As a Pointer    

- If `arr` is an array `printf("%d", *arr)` will print the first element of an array.
- `*arr` is same as `*(arr + 0)` which is same as `arr[0]`.
- Hence, if we want to access the nth element of an array we have to skip (n-1) elements by `*(arr + n)` or by shortcut `arr[n]`.

***

- If we have an array `arr`, 
	- value of `arr` (address of first element) and `&arr` (address of array) are different things but have same value.
    - Because address of first element (arr) and address of array (&arr) will be same.
- But `arr+1`, `&arr+1` gives us different value.
    - `arr+1` gives second element in array.
    - `&arr+1` given the next element after last element in the array. Because here we are considering address of complete array

- See the example program below:

{% highlight c%}
#include <stdio.h>
int main(int argc, char** argv) {
	char arr[6] = {10, 20, 30, 40, 50, 60};
	
	printf("%d\n", arr);    // Address of first element of an array.
	printf("%d\n", &arr);   // Address of an array.
	printf("%d\n", arr+1);  // Address of second element of an array.
	printf("%d\n", &arr+1); // Address of an element after the last element of an array.
	
	return 0;
}		
/*
OUTPUT:
995178810
995178810
995178811
995178816
*/	
{% endhighlight %}

# Multidimentional Array

- In multidimentional array we can have arrays as an elements of array.
- For example `{ {1, 2, 3}, {4, 5, 6}, {7, 8, 9} }`. Here we have an array with 3 arrays and those three arrays are of three integers.
- In n multidimentional array, the array name points to the base address of first (n-1) dimentional array.
	- Example,
		- In 2-D array array name points to the base address of first 1-D array.
		- In 3-D array array name points to the base address of first 2-D array.

## 2D array

### Declaraion and Definition

- A 2D array is delared and defined as
    - `int a[5][3] = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12}, {13, 14, 15} };`
        - It has 5 rows and 3 columns
- The abobe array can also be defines declared as:
    - `int a[5][3] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};`
    - Compiler will automatically create 2D array of 5 rows with 3 columns.
- Specifying number of rows is optional.
    - `int a[][3] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};`
    - Compiler will automatically calculate number of rows according to the number of columns and number of elements.

### Accessing 2D Array

- So, we know that `arr[i][j]` is equivalent to `*(*(arr+i)+j)`
    - As `arr` is array of arrays and `+i` will skip `i` rows and `+j` will skip `j` columns.
    - With `i` we will locate a array within an outer array.
    - With `j` we will locate an coulmn within an inner array.
- Let's take an array `int a[5][3] = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12}, {13, 14, 15} };`

|Pointer Notation| Array Notation | Value in Array|
|-|-|-|
|\*(\*array)|	array[0][0]|	1|
|\*(\*array + 1)|	array[0][1]|	2|
|\*(\*array + 2)|	array[0][2]|	3|
|\*(\*(array + 1))|	array[1][0]|	4|
|\*(\*(array + 1) + 1)|	array[1][1]|	5|
|\*(\*(array + 1) + 2)|	array[1][2]|	6|



{% highlight c%}
#include <stdio.h>
int main(int argc, char** argv) {

    char a[5][3] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};

    printf("a = %d\n", a); // Base address of an array [1000]
    printf("a + 1 = %d\n", a + 1); // Skipping one row, i.e. base address of array [4, 5, 6]. [1012]
    printf("a + 3 = %d\n", a + 3); // Skipping three rows, i.e. base address of array [10, 11, 12]. [1036]
    printf("a + 10 =  %d\n", a + 10); // Skipping 10 rows. [1120]
    printf("a + 0 %d\n", a + 0);    // Skipping 0 row. [1000]
    printf("*(a + 2) = %d\n", *(a + 2)); // Value of third element of an array, which is third array. [1024]

    return 0;
}
/*
OUTPUT:
a = 1448797153
a + 1 = 1448797156
a + 3 = 1448797162
a + 10 =  1448797183
a + 0 1448797153
*(a + 2) = 1448797159
*/
{% endhighlight %}

# Constant Pointer and Pointer to Constant

## Pointer to Constant

- Syntax: `const type *ptr;`

## Constant Pointer

- Syntax: `type *const ptr;`

# Problems With Pointers

- Following are the problems with heap allocation and pointer.

## Memory Leak

- Memory leak is when we allocate memory in head using `malloc` and point it using pointer and then we don't free that memory.
{% highlight c %}
int *p;
...
...
p = (int*)malloc(sizeof(4));
...
... 
{% endhighlight %}

## Dangling Pointer

- We have pointing to the memory which does not exist.
- Program will crash.

{% highlight c%}
int *p, *q;
p = new int[10];
q = p;
free(q);
printf(*p);
{% endhighlight %}



## Uninitialized Pointer

- We are using uninitialized pointer, i.e. the pointer to which we havn't assigned/allocated memory.

{% highlight c %}
main() {
    int *p;
    printf("%d", p);
}
{% endhighlight %}


# Array

- A[i] = *(A + i) = *(i + A) = i[A]
- A[i][j] = *(*(a + i) + j)

# Questions

## Q1

{% highlight c %}
main() {
    char a[] = "gate2011";
    printf("%s", a + a[3] - a[1]);
}
{% endhighlight %}

- **Answer:** 2011
- **Solution:**
    - a + a[3] - a[1]
    - = BASE_ADDR + 'e' - 'a'
    - = BASE_ADDR + 101 - 97
    - = BASE_ADDR + 101 - 97
    - = BASE_ADDR + 4

## Q2

Find the output.

{% highlight c %}
int main() {
    int a[6] = {10, 20, 30, 40, 50, 60};
    int *b[] = {a+2, a+3, a, a+1, a+4, a+5};
    int **c = b;
    *c++;
    printf("%d %d %d\n", c-b, *c - a, **c);
    *++*c;
    printf("%d %d %d\n", c-b, *c - a, **c);
    ++**c++;
    printf("%d %d %d\n", c-b, *c - a, **c);
    return 0;
}
{% endhighlight %}

- **Output**

{% highlight bash %}
1 3 40
1 4 50
2 0 10
{% endhighlight c%}

## Q3

Find the output

{% highlight c %}
int main() {
    float c[6] = {70, 20, 60, 50, 10, 30};
    float *a[] = {c+1, c+2, c+3, c, c+4, c+5};
    float **b = a;
    b + 2;
    *b + 1;
    printf("%d %d %d\n", b-a, *b - c, **b);
    ++**b;
    *++*(b+2);
    printf("%d %d %d\n", b-a, *b - c, **b);
}
{% endhighlight %}

- **Output**

{% highlight bash %}
0 1 20
1 2 61
{% endhighlight c%}

## Q4

Find the output

{% highlight c %}
int main() {
    char *a[] = {"buffalo", "pig", "dog", "paapa", "bacha", "modiji", "didiji"};
    char **b[] = {a+2, a+3, a+6, a+5, a, a+1, a+4};
    char ***c = b;
    ***c++;
    printf("%s\n", **(c+3) + 2);
    ***c+2;
    printf("%c\n", *(**c + 2) + 5);
}
{% endhighlight %}

- **Output**

{% highlight bash %}
ffalo
f
{% endhighlight c%}

## Q5

Find the output

{% highlight c %}
int main() {
    int a[3][5] = {10, 20, 30, ... 150};
    printf("%u %u %u\n", a+2, *a+2, a[2]+3);
    printf("%u %u %u %d\n", *(a+2)+7, a+3, &a, **a+7); 
}
{% endhighlight %}

- **Output**

{% highlight bash %}
1020 1004 1026
1023 1030 1000 17
{% endhighlight c%}