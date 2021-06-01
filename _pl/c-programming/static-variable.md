---
title: Static & Extern
description: "Static extern variables"
child_of: "C Programming"
nav_order: 4
---

# Static

- We know that global variables are allocated memory in compile time in *static/data* segment of memory, and local variables are sored in *stack*.
- By using keywork`static` in front of variable declaration, we tell compiler that *"allocate the memory for this variable in compile time in static area; even if it's local variable"*.

## Working oF `static` Variables

- Memory allocated at compile time, and stored in the data segment.
- If not initialized; then they have value 0.
- Hence, when a function is a program runs; and it has static variable; it do not redeclare it as it knows it's already declared in *data* section at compile time.

# Extern

## Local Extern Variables

- If we declare local variables as extern, they will not get space in the memory and will use the memory of variable declared globally with the same name.
    - Compiler will not check if the variable exist with the same name globally or not.
    - If we use that variable and there it no global variable with same name, we will get error.
    - If we do not use that variable, we will not get error.
- We cannot initialize local extern variable.
    
## Global Extern Variable

- If we declare global extern variable without initializing it will try to use the space of another global variable declared with same name.


# Questions

## Q1

Find the output.

{% highlight ruby %}
int a, b, c = 0;

void printFunc() {
    static int a = 2;
    int b = 1;
    a += ++b;
    printf(" \n %d %d", a, b);
}

void main() {
    static int a = 1;
    printFunc();
    a += 1;
    printFunc();
    printf(" \n %d %d", a, b);
}
{% endhighlight %}

**Output:**

{% highlight ruby %}
4 2
6 2
2 0
{% endhighlight %}

## Q2

Find the output.

{% highlight ruby %}
void total(int v) {
    static int count = 0;
    while (v) {
        count += v & 1;
        v >>= 1;
    }
    return count;
}

void main() {
    static int x = 0;
    int i = 5;
    for(; i > 0; i--) {
        x = x + total(i);
    }
    printf("%d\n", x);
}
{% endhighlight %}

**Output:**

{% highlight ruby %}
23
{% endhighlight %}

## Q3

Find the output.

{% highlight ruby %}
void main() {
    extern int a;
    printf("%d", a);
}
{% endhighlight %}

**Output:**

{% highlight ruby %}
Error
{% endhighlight %}

## Q4

Find the output.

{% highlight ruby %}
void main() {
    extern int a;
    printf("Hi");
}
{% endhighlight %}

**Output:**

{% highlight ruby %}
Hi
{% endhighlight %}

## Q5

Find the output.

{% highlight ruby %}
int a = 20;
void main() {
    extern int a;
    printf("%d", a);
}
{% endhighlight %}

**Output:**

{% highlight ruby %}
20
{% endhighlight %}

## Q6

Find the output.

{% highlight ruby %}
extern int a;
void main() {
    extern int a;
    printf("%d", a);
}
{% endhighlight %}

**Output:**

{% highlight ruby %}
Error
{% endhighlight %}

## Q7

Find the output.

{% highlight ruby %}
extern int a = 20;
void main() {
    extern int a;
    printf("%d", a);
}
{% endhighlight %}

**Output:**

{% highlight ruby %}
20
{% endhighlight %}

## Q8

Find the output on static and dynamic scoping.

{% highlight ruby %}
int a = 99, b;
main() {
    int a = 5, int b = 6;
    B();
    printf(a, b);
    D();
}

B() {
    static int a = 7;
    printf(a, b);
    a = 3;
    b = 4;
    C(b);
    printf(a, b);
}

C(int a) {
    printf(a, b);
    b = 55;
    D();
    printf(a, b);
}

D() {
    extern int a;
    printf(a, b);
    E();
}

E() {
    register int b = 9;
    static int a;
    printf(a, b);
    a = 1, b = 2;

}
{% endhighlight %}

**Answer:**

- **Static Scoping:** 7 0 4 4 99 55 0 9 4 55 3 55 5 6 99 55 1 9
- **Dynamic Scoping:** 7 6 4 4 99 55 0 9 4 55 3 55 5 55 99 55 1 9

