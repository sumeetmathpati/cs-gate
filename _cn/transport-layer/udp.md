---
title: UDP
description: "Transport Layer Tutorial."
child_of:  Transport Layer
nav_order: 1
---

- The User Datagram Protocol (UDP) is called a **connectionless, unreliable transport protocol.** 
- It does not add anything to the services of IP except to provide process-to-process communication instead of host-to-host communication. 
- Also, it performs very **limited error checking.**
- UDP is a very **simple** protocol with **minimal overhead.**

# Well Knwon UDP Ports And Applications

| Port | Protocol | Description |
|-|-|-|
| 7 | Echo Echoes a received datagram back to the sender. |

***

# Header

- UDP have a fixed-size header of **8 bytes.**

![UDP Header]({{ site.baseurl }}/assets/images/cn-transport-layer-udp-header.png)

## Destination Port Number:

- Port number used to specify destination process on host machine.
- This can be used by server (to send respose to the client) or the client (to sent the request to the server).
- As this field contains port number; it's of 16 bits.

***

## Length:

- This is a **16-bit field** that defines the total length of the user datagram, **header plus data.**

The length field in a UDP user datagram is actually not necessary. A user datagram is encapsulated in an IP datagram. There is a field in the IP datagram that defines the total length. There is another field in the IP datagram that defines the length of the  header. So if we subtract the value of the second field from the first, we can deduce the length of a UDP datagram that is encapsulated in an IP datagram.
{: .note}

***

## Checksum

- This **16-bit** field contains the checksum. 
- The UDP checksum calculation is different from the one for IP and ICMP.
- Here the checksum includes three sections: 
    - **The UDP header**, 
    - **The data coming from the application layer**, and
    - **A pseudoheader** 
        - It's a part of IP header. which includes:
            - Source IP (32 bits)
            - Destination IP (32 bits)
            - Protocol Field (8 bits)
            - UDP segment length
        - Used as an extra security to check that the packet is delivered to correct IP.
- The inclusion of the checksum in the UDP datagram is **optional.**

# Operation

- User datagram sent by UDP is an independent datagram. There is no relationship between the different user datagrams even if they are coming from the same source process and going to the same destination program.
    - The user datagrams are not numbered.
- There is no flow control and hence no window mechanism.
- There is no error control mechanism in UDP except for the checksum.
    - This means that the sender does not know if a message has been lost or duplicated. When the receiver detects an error through the checksum, the user datagram is silently discarded.
