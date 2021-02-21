---
title: Variables in C language
description: "Array data structure tutorial."
child_of: "C Programming"
nav_order: 2
---

- Variable in C is used to store data of specific type associated with that variable, i.e. `int` variable stored integer data.
- When we declare variable in C, specific amount of memory is allocated in memory. 
    - Different tyeps of variables require different amount of memory.
- Different types of variables has different set of operations can be performed on them.

# Variable Declaration

- **Syntax:**   
    - `<type_keyword> <variable_identifier>;`
    - `<type_keyword> <variable_1_identifier>, <variable_2_identifier>;`
- In abose statements variables are declared and **memory is allocated** to them.
    - If these variables are local to some functions then after declaration they contain garbage value.
    - If thay are global variables then they are assigned value 0.

Declaration and definition are two different things. Declaration means just creating variable in memory of specific type and definition means defining value to the variable. Declaration and definition can be done at the same type, example `int c = 10`.
{: .note}

- **Variable identifier:**
    - Variable name can start with any character (upper or lower case), an underscore (_).
    - Variable **name cannot start with number.**



{% highlight c %}

// Preprocessor section (Optional)
#include <stdio.h>      // Include  header files.
# define pi 3.14        // Define a macro.

int main()              // Main function definition. (Mandatory)
{                       // Function body.
    ...
    ...
    ...
    return 0;
}
{% endhighlight %}

# Variable Types

## Local Variables

- The variable is declared and used inside a specific block (block is defined using two curly brackets (`{}`)) is called **local variable.**
- Local variable can't be used outside the block they've been declared.

{% highlight c %}
#include <stdio.h>
int main() {
    int a = 10;
    {
        int a = 20;
        int b = 30;
        
        printf("a in inner block = %d\n", a);
        printf("b in inner block = %d\n", b);
    }
    printf("a in outer block = %d\n", a);
    return 0;
}

/*
OUTPUT:
a in inner block = 20
b in inner block = 30
a in outer block = 10
*/
{% endhighlight %}

***

## Global Variables

- Global variables are NOT declared inside any block.
- Can be accessed from anywhere in the program (any file in the single program).

{% highlight c %}
#include <stdio.h>
int x = 10;     //global variable

void f1() {
    printf("Global variable x = %d\n" , x);
}
void f2() {
    int x = 20;
    printf("Local variable x = %d\n" , x);
}
int main() {
 
    f1();
    f2();
    return 0;
}
/*
OUTPUT:
Global variable x = 10
Local variable x = 20
*/
{% endhighlight %}

***

## Static Variable

- Normal local variable loss their value after they go out of scope.
- But that's not the case with static variable.
- Static variables initialized only once and preserve their previous value.
- Static variables are declared with keyword `static`.
- Syntax: `static <type_keyword> <variable_identifier>;`

{% highlight c %}
#include <stdio.h>
int x = 10;     //global variable
void f() {
    int var = 0;
    static int static_var = 0;
    
    var++;
    static_var++;
    
    printf("var = %d\n", var);
    printf("static var = %d\n\n", static_var);
}
int main() {
 
    for(int i = 0; i < 3; i++) {
        f();
    }
    return 0;
}

/*
OUTPUT:
var = 1
static var = 1

var = 1
static var = 2

var = 1
static var = 3
*/
{% endhighlight %}

***

## External Variable

- Remember we discusses that global variable can be used anywhere in the program even in different file in same program.
- To do that we have to tell in each different file that the variable is declared in some other file before using it.
- We do that by `extern` keyword. In short we have to redeclare it again with extern keyword in another file.
- Example
    - Let's take two C source files. `main.c` and `secondfile.c`.

<div class="w3-theme-l5 codebox">
<p class=" w3-center w3-theme-l4 code-name">main.c</p>
{% highlight c %}
#include <stdio.h>
#include "secondfile.c"

extern int a; // Variable declared in some other file. 

int main() {
	printf("a = %d\n", a);
	return 0;
}
/*
OUTPUT:
a = 10
*/
{% endhighlight %}
</div>

<div class="w3-theme-l5 codebox">
    <p class=" w3-center w3-theme-l4 code-name">secondfile.c</p>
{% highlight c %}
int a = 10; // Variable declared here.
{% endhighlight %}
</div>

