---
title:  "Framing"
description: "Framing in data link layer."
child_of: Data Link Layer
nav_order: 1
---

- Bit stream recieved from physical layer is composed and frames are created.
- We add header and trailer (checksum) to the frames.
- There are various framing methods.
- Framing can be of two types
    - **Fixed Length Framing**
    - **Variable Length Framing**
        - In variable length framing, we have to also take care of that the reciever should be able to identify the starting and ending of the frame.
        - There are various tyeps of variable framing types and those are discussed below.

***

# Character Count

- In this method, we **specify the number characters in the frame.**
    - And hence, reciever can know the the size of the frame and hence the start and end of frame.
- As you can see in the first diagram in a picture below, reciever can count the characters in a frame given in the frame and know start and end of it.

![Character Count]({{ site.baseurl }}/assets/images/cn-character-count.jpg)

## Problem in Character Count

- But if the character count number gets changed in transmission reciever will not be able to find the correct character count.
- As we can see in the second diagram in picture above, character has changed and hence other data in the frame is getting treated as character count which is not desired result.

***

# Character Stuffing

- In this method, frame starts ans ends with specific ASCII character.
- Reciever can know the frame boundaries with FLAG character.

![Character Count]({{ site.baseurl }}/assets/images/cn-character-stuffing.jpg)

## Problem in Character Stuffing

- The characters we are using for FLAG may occur in the data itself.
- Solutio for this is we **add the escape character** before the FLAG in the data, so that the reciever will know that it's a data and not the FLAG.

![Character Count]({{ site.baseurl }}/assets/images/cn-character-stuffing-example.jpg)

***

# Bit Stuffing

- To overcome the disadvantage of character stuffing, we use this method.
- Instead of characters we stff 1 bit instead of 8 bits.
- Each frame starts with the pattern 01111110 or 7E in hexadeciaml.
- **If the sender has 5 consecutive 1s in it's data, it stuffs a bit of 0 value.**
- **Example**
	- **01111111111110010** is **Original data**
	- **0111110111110110010** is data after **Bit stuffed**
	- **01111111111110010** is data what **Reciever recieves**