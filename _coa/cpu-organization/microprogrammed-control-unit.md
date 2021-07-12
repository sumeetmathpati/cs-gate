---
title: Microprogrammed Control Unit
description: "Control unit, control signals"
child_of: CPU Organization
nav_order: 4
sub: true
---

- As name suggests, the control logic is implemented with micro-programs.
- One advantage is **updating the logic is very easy.**
- But it's **slower than hardwired control unit.**

# Control Memory

- All the possible control words for specific micro-operations will be stored into the storage called the *control memory.* Based on the requirements, specific control words are used to send the control signals by the control unit.
	- Control memory is special memory in side the CPU.
- Each instruction may need more than one micro operations, and hence for one instruction we need more than one control words, hence we **group all the control words needed for single instruction using links.**
- A single cell of control memory contains *control word*, *Addressing Mode*, and *next* field.
	- We call this *micro-instruction.*
- The last micro-instruction needed for the instruction don't have any link for the next control word. Hence then we need external input to know which CW requires next.

![Control Memory]({{ site.baseurl }}/assets/images/coa/control-memory.png)


# Standard Micro-instruction Format

|Control Word|Mux Select|Next Address|

- Note that there could be more fields in micro instructions. 

## MUX Select

- Unitl now we've seen only two methods to generate address for control memory
	1. External input
	2. *Next address* field
- But there could be more than two methods. To select one addrss from more than one sources we use MUX.
- As we can see in the micro-instruction format, hat micro-instruction itself tells the next addressing mode.

# Types of Microprogrammed Control Unit

## Horizontal Microprogrammed Control Unit

- We've seen that in one control word, 1 bit is used for 1 control signal, this organization is called horizontal microprogrammed control unit.
	- Hence it the system supports *n* signals, then control word will hece *n* bits.

## Vertical Microprogrammed Control Unit

- Here we divide the all signals in groups, and this group information is stored in encoded form.
- Each group has signals of which only one can be enabled at a time.
	- For example, we can create group of signals for *out* or *write* pins of registers and memory, because we want only one device should be able to write data onto the data bus.
- After creating grups we encode this data. And when we want to use that data, we use decoder.
- Example, 
	- Suppose we want to store the 4 signals in a group.
	- In horizontal organizaiton we would have stored these signals saperately using 4 bits.
	- But in vertical control unit, we store these 4 signals using 2 bits in encoded format.
	- When we want to to use them; we use decoder. Decoder has only one output line enabled and we also want only one signal out of these 4 enabled.

If some signals cannot be kept in any groups; then they are stored as horiontal organization.
{: .note}

***

![Control Mmory]({{ site.baseurl }}/assets/images/coa/horizontal-and-vertical-control-unit.png)

Note that, we've created groups of signals such that we need only one of them enabled at a time.
{: .note}

***

|Horizontal Organization|Vertical Organization|
|-|-|
|1 bit for each signal.|Singls are stored in encoded format.|
|No decoder requried.|Decoder required.|
|Control word will be large.|Control word will be smaller than horozontal organization.|
|Faster|Slower|
|Maximum number of signals enables at a time = Total number of signals in CPU.|Maximum number of signals enables at a time = Total number of groups in CPU.|