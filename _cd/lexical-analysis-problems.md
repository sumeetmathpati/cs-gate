---
title:  "Problems on Lexical Analysis"
description: "Questions, problems, examples on lexical analysis."
serial: 3
---

- The starting and ending double quotes and the content inside it is considered as single token.
- For some operators we have to see the next character before considering it as token. Some of them are:
    -  `+`
        - Next could be `+`, `=`.
    -  `-`
        - Next could be `-`, `=`.
    - `=`
        - Next could be `=`.

***

## 1st problem

Find number of tokens.

{% highlight c linenos %}

int main )(  
}
    x = y + z;
    int x, y, z;
    printf("sum %d %d", x);
{
{% endhighlight %}

Answer: 26

line 1: 4
line 2: 1
line 3: 6
line 4: 7
line 5: 7
line 6: 1


As there is not closing double quote, all the content after opening quote is considered as one.

***

## 2nd problem

Find number of tokens.

{% highlight c linenos %}
int a = 10;
char b = "abc";
in i c = 10;
ch ar d = "xyz";
in /* comment */ t m = 40.5;
}
{% endhighlight %}

Answer: 29

line 1: 5
line 2: 5
line 3: 6
line 4: 6
line 5: 6
line 6: 1