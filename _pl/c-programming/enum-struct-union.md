---
title: "Enum, Struct and Union"
description: "Pointers in C programming language."
child_of: "C Programming"
nav_order: 13
---

# Enums

- Enumeration (enum for short) is **user defined data type** in which we assign names to integral constants.
- It's main intention is to **make program more readable.**
- We define enum by `enum` keyword.
- **Syntax:** `enum flag {constant1, constant2, ..., constantN};`
- By default the values of `constant1` is `0`, `constant2` is `1` and so on.
- We can change these default values by explicitely assigning them to the values we want.
- **Two constants in enums can have same integer value assigned to them.**
- It we don't assign any value, **compiler will start assigning after the last value we've assigned or from 0.**

{% highlight c%}
enum week {
    Sunday = 1,     // Has value 1
    Monday = 2,     // Has value 2
    Tuesday,        // Has value 3
    Wednesday=0,    // Has value 0
    Thursday,       // Has value 1
    Friday,         // Has value 2
    Saturday        // Has value 3
};   
{% endhighlight %}

- The enum constants must be unique in scope. See the following program, it would generate error.

{% highlight c%}
enum state  {working, failed}; 
enum result {failed, passed}; 
{% endhighlight %}

# Structures

- Structure is a user defined data type which can contain heterogeneous data types (unlike array, in which we have to store data of the same type).

- **Declaration Syntax:**

{% highlight c %}
struct struct_name {
    data_type var1;
    data_type var2;
    data_type var3;
    ...
    ...
};
{% endhighlight %}

Please note the semicolon at the end of bloc.
{: .note}

- For all the fields in array; memory is allocated contiguously.

## Memory Allocation

- For the `struct` declaration; no memory will be created.
- Using declaration; we've just created a new data type, not some variabel.
- If we create variable using a that struct data type; then memory will be allocated to that variable.
- This memory will be equal to sum of all the data types in that struct.
- Example,
    - In example below, we have structure names `Person`, with one character array variable called `name` and integer variables named `age`.
    - In `main` function, we've declared a `struct Person` variables called `p1`.
    - Memory is created for this variable `p1` will be equal to 2 bytes (for int) + 8 bytes (for pointer) = 12 bytes.
    - All those 12 bytes will be contiguous.

{% highlight c %}
struct Person {
    char *name;
    int age;
};

int main() {
    struct Person p1;
}
{% endhighlight %}

# Questions

## Q1

Find the output of code below.

{% highlight c %}
#include <stdio.h>

struct Person {
    char *name;
    int age;
};

int main() {
    
    struct Person p1 = {"Sumeet", 21};
    struct Person *ptr;
    ptr = &p1;
    
    // Print data inside the struct
    printf("%s\n", p1.name);
    printf("%d\n", p1.age);
    
    // Print the address of struct
    printf("%p\n", &p1);
    printf("%p\n", ptr);
    
    // Print the data using pointer
    printf("%s\n", (*ptr).name);
    printf("%d\n", (*ptr).age);
    
    // The two statements below are same as two statements aboce.
    printf("%s\n", ptr->name);
    printf("%d\n", ptr->age);
    
    return 0;
}
{% endhighlight %}

**Output**

{% highlight bash %}
Sumeet
21
0x7ffd71aa53d0
0x7ffd71aa53d0
Sumeet
21
Sumeet
21
{% endhighlight %}

## Q2

Find the output of code below.

{% highlight c %}
struct S1 {
    int a;
    float b;
    char c;
};

struct S2 {
    float d;
    struct S1 e;
    int f;
};

int main() {
    struct S2 g = {10.5, {30, 30.5, 's'}, 40};
    printf()
}
{% endhighlight %}

**Output:**

{% highlight bash %}
Sumeet
21
0x7ffd71aa53d0
0x7ffd71aa53d0
Sumeet
21
Sumeet
21
{% endhighlight %}