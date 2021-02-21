---
title: "Enum, Struct and Union"
description: "Pointers in C programming language."
child_of: "C Programming"
nav_order: 12
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
