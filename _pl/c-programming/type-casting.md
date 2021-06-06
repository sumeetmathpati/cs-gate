---
title: Type Casting
description: "Type casting bit endian little endian"
child_of: "C Programming"
nav_order: 16
---

# Little and Bit Endial

- Suppose we have array: 
    - 'int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};'
    - To store above array; we require 20 bytes (assuming each integer is of 2 bytes), suppose we have memory from address 1000 to 1900.
- These array elements are stored in memory as binary data.
- In litte endian format, the lower byte of data is stored in lower byte of memory.
- In big endian format, the lowee byte of data is stored in higher byte of memory.
- The memory representation of little nad big endian formats is given below.

|Address|Little Endian|Big Endian|
|-|-|-|
|1000|0001|0000|
|1001|0000|0001|
|1002|0010|0000|
|1003|0000|0010|
|1004|0011|0000|
|1005|0000|0011|
|1006|0100|0000|
|1007|0000|0100|
|1008|0101|0000|
|1009|0000|0101|
|1010|0110|0000|
|1011|0000|0110|
|1012|0111|0000|
|1013|0000|0111|
|1014|1000|0000|
|1015|0000|1000|
|1016|1001|0000|
|1017|0000|1001|
|1018|1010|0000|
|1019|0000|1010|

# Type Casting

## Example

{% highlight ruby %}
main() {
    int a[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int *b = a;
    char *cp = (char *)a;
    float *fp = (float *)a;
    void *vp = a;
}
{% endhighlight %}

- In above code
    - *b will read 2 bytes from starting of array a.
    - *cp will read 1 bytes from starting of array a.
    - *fp will read 4 bytes from starting of array a.
    - vp will give error.
    - b+1 will increment 2 bytes.
    - cp+1 will increment 1 bytes.
    - fp+1 will increment 4 bytes.
    - vp+1 will give error.



# Questions

## Q1

Find the output.

{% highlight ruby %}
main() {
    int i = 300;
    char *ptr = (char *)&i;
    *++ptr = 2;
    printf("%d", i);
}
{% endhighlight %}

**Output:**

556

***

## Q2

Find the output.

{% highlight ruby %}
main() {
    int arr[3] = {2, 3, 4};
    char *p;
    p = (char *)arr;
    printf("%d ", *p);
    p = p+1;
    printf("%d ", *p);
    return 0

}
{% endhighlight %}

**Output:**

2 0