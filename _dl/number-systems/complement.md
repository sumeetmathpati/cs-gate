---
title:  "Complement"
description: "Complement"
child_of: Number Systems
nav_order: 2
mathjax: true
---

- For any number system with base r; we could find
	- **r's complement**
	- **(r - 1)'s complement**
- Example
	- For binary number system there will be
		- 2's complement and 1's complement
	- For octal number system there will be
		- 8's complement and 7's complement
	- For decimal number system there will be
		- 10's complement and 9's complement
	- For hexadcimal number system there will be
		- 16's complement and F's complement


# Complement of a number with any base b

- **Steps to find (b-1)’s complement:** To find (b-1)’s complement,

	- Subtract each digit of the number from the largest number in the number system with base b.
	- For example, if the number is a three digit number in base 9, then subtract the number from 888 as 8 is the largest number in base 9 number system.
	- The obtained result is the (b-1)’s (8’s complement) complement.

- **Steps to find b’s complement:** To find b’s complement, just add 1 to the calculated (b-1)’s complement.
	
	- Now this holds true for any base in the number system that exists. It can be tested with familiar bases that is the 1’s and 2’s complement.

# Notes

## Quickly find 2's complement

- Start copying digits from right side until first 1 is encountered (include that 1 also).
- After that invert all the digits.