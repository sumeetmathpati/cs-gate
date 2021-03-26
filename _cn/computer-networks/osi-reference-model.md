---
title:  "OSI reference model"
description: "OSI networking model tutorial."
child_of: Computer Networks
nav_order: 2
sub: true
---

![OSI model]({{ site.baseurl }}/assets/images/cn-osi-model.jpg)

***

- OSI model has 7 layers.
- The data travels through all the layers.
    - When sender sends data it starts from sender's application layer and ends into reciever's application layer.
- Each layer has different name for data present in it.
- Below we've explained work of each layer.

***

## The Physical Layer

- In this layer data is in the form of **bits**.
- **Physical layer concerns with:**
    - Physical characteristics of interfaces and medium.
	- Representation of bits.
	- Data rates.
	- Synchronization of bits.
	- Line configuration (Point-to-point or multipoint).
	- Physical topology.
	- Transmission mode (Simplex, half-duplex, or full-duplex.)
- **Phycical layer also answers the questions like:**
    - How to represent 0s and 1s with analog signals in wire?
    - Whether the transmission should be done simultaneously or sequentially?
    - What network connector should be used? How many pins it would have? What each pin does?

***

## The Data Link Lyer

- In this layer data is in the form of **frames** which are collection of bits.
- **The data link layer has following responsibilities:**
    - Framing.
	- Acknowledgment : Sent by the receiving end to inform the source that the frame was received without any error.
	- Physical addressing. 
        - Used header which includes physical (MAC) address of sender and reciever.
	- Flow control.
	- Error control (Achieved through a trailer).
	- Access control.
- **Issue for data link layer (and some above layers) to solve are:**
    - Keep a fast sender from drowning the slower reciever.
    - Control the access to the shared channel.
        - In data link layer we have special sublayer called **medium access control** to deal with this problem.
    - Detect and fix errors in data communication.

***

## The Network Layer

- In this layer data is in the form of **packets**.
- **Responsibilities of the network layer include the following:**
	- Logical addressing 
        - Used header which includes logical (IP) address of sender and reciever.
	- Routing. 
        - This deals with determining how packets will be routed (transferred) from source to destination. 

***

## The Transport Layer

- In this layer data is in the form of **segments**.
- Transfers data from application from sender's machine to application of reciever's machine.
- With the help of layers below it, transport layer creates an end to end connection with applications running on sender and reciever machine.
    - Applications (like telnet, ftp, ssh) on the both machines doesn't know anything about layers below it.
    - Those applications think they have direct connection with each other.
- **Other responsibilities of the transport layer include the following:** 
	- Service-point (PORT) addressing.
	- Segmentation and reassembly.
	- Connection control.
	- Flow control.
	- Error control.

***

## The Session Layer

- **Sessions offer various services:**
    - Dialog control (keeping track of whose turn it is to transmit).
    - Token management (preventing two parties from attempting the same critical operation simultaneously).
    - Synchronization (checkpointing long transmissions to allow them to pick up from where they left off in the event of a crash and subsequent recovery).

***

## The Presentation Layer

- **Responsibilities of the presentation layer includes:**
	- Translation.
	- Encryption.
	- Compression

***

## The Application Layer

- **Responsibilities of the application layer includes:**
    - Network virtual terminal.
	- File transfer, access, and management.
	- Mail services.
	- Directory services.