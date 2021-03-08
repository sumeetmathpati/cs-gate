---
title: Variables Scoping
description: "Array data structure tutorial."
child_of: "C Programming"
nav_order: 3
---


- A scope of a variable is a **region of a program** where we can access the variable. We can't access the variable outside it's scope. 
- Because of scopes of the variables, we can assign same name for variables in different scopes without overriding the values of other variable.

***

# Why study Scoping?

- We can have situations like
    - Having multiple variables in our scope having same name.
    - Accessing variable which is not declared in our scope.
- In those kinds of cases, scoping methods decides which variables to use and which are not.

***

# Scoping Methods

- We have two types of scopings, they are **Static scoping** and **Dynamic scoping**. 
- Different languages can use different types of scoping.

## Static Scoping

- It's also called **lexical scoping**.
- In static scoping, **if varible is not declared under block, then global variable is used**.
- This method is **independent of the runtime function call stack**, i.e. it's not depent upon the caller of variable.
- Easy to find the scope.
- Most modern languages use static scoping
    - Static scoping used in languages like **C**, **C++**, **Java**.
### Example

{% highlight c linenos %}
int a = 5;

main() {
    int a = 10;
    A();
}

int A() {
    printf("%d", a);
}

/*
OUTPUT:
5
*/
{% endhighlight %}

- In above code we have two variables declared with the same name (line 1 and 4).   
    - Variable declared on line 2 has global scope.
    - Variable declared on line 4 has scope between line 3 and 6.
- In `A()` we are using variable `a`, but `A()` doesn't have variable `a` declared in it.
- As here we are using static scoping, `A()` will use global `a` variable, and hence it will output `5`.
    - In case you don't have global variable either, you will get an error.
    - It doesn't have to do anything with caller function (in this case `main()`).

## Dynamic Scoping

- In dynamic scoping, 
    - if varible is used is not declared inside the block, then 
    - it is checked **if variable is declared inside the block who is calling the function**; 
        - if it is, then it's used'; 
        - if it's not, then global variable is used.

All the calling functions recursivly cheked for variable declaration, it not found; then only we use global variable.
{: .note}

***

# Examples

*The programs below are general instruction and do not represent syntax of any programming language.*

## 1st example

{% highlight python linenos %}
b = True

def p():
    print(b)

def main():
    b = False
    p()

main()

# OUTPUT:
# Static scoping: True
# Dynamic scoping: False
{% endhighlight %}

### 2nd eaxample

{% highlight c linenos %}
int x;

void A() {
    printf("%d", x);
}

void B() {
    int x;
    x = 0.125;
    A();
}

void main() {
    x = 0.25
    A();
    B();
}

/* 
OUTPUT:
Static scoping: 0.25 0.25
Dynamic scoping: 0.25 0125
*/

{% endhighlight %}

### 3rd example

{% highlight c linenos %}
int x;

void two() {
    printf("%d", x);
}

void one() {
    int x;
    x = 5;
    two();
}

main() {
    x = 2;
    two();
    one();
    two();
}

/*
OUTPUT:
Static scoping: 2 2 2
Dynamic scoping: 2 5 2
*/
{% endhighlight %}

### 4th example

{% highlight c linenos %}
int x, y;

void P(int n) {
    x = (n + 2) / (n - 3);
}

void Q() {
    int x, y;
    x = 3;
    y = 4;

    P(y);
    printf("%d", x);
}

void main() {
    x = 7;
    y = 3;

    Q();
    printf("%d", x);
}
/*
OUTPUT:
Static scoping: 3 6
Dynamic scoping: 6 7
*/
{% endhighlight %}