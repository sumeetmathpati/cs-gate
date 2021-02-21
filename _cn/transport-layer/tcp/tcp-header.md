---
title: TCP Header
description: "TCP Header Tutorial."
child_of:  Transport Layer
nav_order: 3
sub: true
---

# TCP Header

![TCP Header]({{ site.baseurl }}/assets/images/cn-transportlayer-tcp-header.png)

- The segment consists of a **20 to 60 bytes header, followed by data** from the application program.
- The header is 20 bytes if there are no options and up to 60 bytes if it contains options.

***

## Source Port Address:

- This is a 16-bit field that defines the port number of the application program in the host that is sending the segment. 

***

## Destination Port Address:

- This is a 16-bit field that defines the port number of the application program in the host that is receiving the segment.

***

## Sequence Number:

- This 32-bit field defines the **number assigned to the first byte of data** contained in this segment. 
- As we said before, TCP is a stream transport protocol. To ensure connectivity, each byte to be transmitted is numbered. 
- The sequence number tells the destination which byte in this sequence comprises the first byte in the segment. 
- **During connection establishment, each party uses a random number generator to create an initial sequence number**, which is usually different in each direction.

***

## Acknowledgment Number:

- This 32-bit field defines the **byte number that the receiver of the segment is expecting to receive** from the other party. 
- If the receiver of the segment has successfully received byte number x from the other party, it defines x + I as the  acknowledgment number. 
- Acknowledgment and data can be piggybacked together.

***

## Header length:

- This 4-bit field indicates the number of 4-byte words in the TCP header. The length of the header can be between 20 and 60  bytes. 
- Therefore, the value of this field can be between 5 (5 x 4 = 20) and 15 (15 x 4 = 60).

***

## Reserved:

- This is a 6-bit field reserved for future use.

***

## Control:

- This field defines 6 different control bits or flags as shown in figure. 
- These bits enable **flow control, connection establishment and termination, connection abortion, and the mode of data transfer** in TCP.

|Flag |Description|
|-|-|
|URG |The value of the urgent pointer field is valid.|
|ACK |The value of the acknowledgment field is valid.|
|PSH |Push the data.|
|RST |Reset the connection.|
|SYN |Synchronize sequence numbers during connection.|
|FIN |Terminate the connection.|

***

## Window Size:

- This field defines the size of the window, in bytes, that the other party must maintain. 
- Note that the length of this field is 16-bits, which means that the maximum size of the window is 65,535 bytes. 
- This value is normally referred to as the receiving window and is determined by the receiver. 
- The sender must obey the dictation of the receiver in this case.

***

## Checksum:

- This **16-bit** field contains the checksum. 
- The calculation of the checksum for TCP follows the same procedure as the one  described for UDP, which is
    - **The TCP header**, 
    - **The data coming from the application layer**, and
    - **A pseudoheader** 
        - It's a part of IP header. which includes:
            - Source IP (32 bits)
            - Destination IP (32 bits)
            - Protocol Field (8 bits)
            - UDP segment length
        - Used as an extra security to check that the packet is delivered to correct IP. 
- Inclusion of the checksum for TCP is mandatory.

***

## Urgent Pointer. 

- This l6-bit field, which is **valid only if the urgent flag is set,** is used when the segment contains urgent data. 
- It defines the number that must be added to the sequence number to obtain the number of the last urgent byte in the data section of the  segment.

***

## Options:

- There can be up to 40 bytes of optional information in the TCP header.