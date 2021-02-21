---
layout: post
title:  "Powerful things you can do with the Markdown editor"
image: assets/images/16.jpg
description: "There are lots of powerful things you can do with the Markdown editor."
tags: ["Theory of Computation"]
serial: 1
---

# Symbols used

https://www.w3schools.com/charsets/ref_utf_math.asp

&forall;
&part;
&exist;
<p>&#8708;</p>
<p>&#x2204;</p>
&empty;
&isin;
&notin;
&sum;
&prop;
&and;
&or;
&cap;
&cup;
<p> &#8710;</p>
<p>&#x2206;</p>
<p>&#8711;</p>
<p>&#x2207;</p>
<p>&nabla;</p>
&there4;
<p>&#8757;</p>
<p>&#x2235;</p>
&sim;
&ne;
&le;
&ge;
&sub;
&sup;
&nsub;
&sube;
&supe;
&oplus;
&otimes;
&epsilon;
&alpha;
&beta;
&gamma;
&larr;
&uarr;
&rarr;
&darr;
&harr;

***

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

***

# List

- one
- two
    - two.one
        - two.one.one
- three

There are lots of powerful things you can do with the Markdown editor. If you've gotten pretty comfortable with writing in Markdown, then you may enjoy some more advanced tips about the types of things you can do with Markdown!

As with the last post about the editor, you'll want to be actually editing this post as you read it so that you can see all the Markdown code we're using.

## Special formatting

As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:

+ ~~strike through~~
+ ==highlight==
+ \*escaped characters\*


## Writing code blocks

There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, `like this`. Larger snippets of code can be displayed across multiple lines using triple back ticks:


#### HTML

<div class="codebox"> 
<h4>HTML Example</h4>
{% highlight html %}
<li class="ml-1 mr-1">
    <a target="_blank" href="#">
    <i class="fab fa-twitter"></i>
    </a>
</li>
{% endhighlight %}
</div>

#### CSS

<div class="codebox"> 
<h4>CSS Example</h4>
{% highlight css %}
.highlight .c {
    color: #999988;
    font-style: italic; 
}
.highlight .err {
    color: #a61717;
    background-color: #e3d2d2; 
}
{% endhighlight %}
</div>

#### JS

<div class="codebox"> 
<h4>JS Example</h4>
{% highlight js %}
// alertbar later
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 280) {
        $('.alertbar').fadeIn();
    } else {
        $('.alertbar').fadeOut();
    }
});
{% endhighlight %}
</div>


#### Python

<div class="codebox"> 
<h4>Python Example</h4>
{% highlight python %}
print("Hello World")
{% endhighlight %}
</div>

#### Ruby

<div class="codebox"> 
<h4>Ruby Example</h4>
{% highlight ruby %}
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
{% endhighlight %}
</div>

#### C

<div class="codebox"> 
<h4>C Example</h4>
{% highlight c %}
printf("Hello World");
{% endhighlight %}
</div>




![walking]({{ site.baseurl }}/assets/images/8.jpg)

## Reference lists

The quick brown jumped over the lazy.

Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference.

## Full HTML

Perhaps the best part of Markdown is that you're never limited to just Markdown. You can write HTML directly in the Markdown editor and it will just work as HTML usually does. No limits! Here's a standard YouTube embed code as an example:

<p><iframe style="width:100%;" height="315" src="https://www.youtube.com/embed/Cniqsc9QfDo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></p>

