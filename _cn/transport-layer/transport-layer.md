---
title:  Transport Layer
description: "Transport Layer Tutorial."
parent: true
nav_order: 5
---

- Transport layer send's message **from process (of sender) to process (of reciever).**
    - It means that transport layer does not knowor care about the underneath layers and just define the protocols for process to process delivery.
- As DLL used MAC address (to address host), Network Layer uses IP address the same (to address network), the transport layer needs to address the process on reciever's machine; for that it uses a **16 bit port number.**
- Generally we have two approaches:
    - **Connection oriented (TCP)**
    - **Connectionless (UDP)**

# Port Numbers

- It's of 16 bit; hence we can have 65536 port addresses.
- These are IDs given to the client and server processes.
- We can group them into three groups:
    - **0 to 1023**, well known or server port addresses.
    - **1024 to 49151**, registered port addresses.
    - **49152 to 65535**, ephemeral or client port addresses.

# Client Server Paradigm

- Common way to achieve process to process communication is client server architecture.
- Process on the local host **(client process)** which make request to the process on server process **(server process).**
- Server process listens for request on **well known port** and client uses temporary or **ephemeral port** to make request and recieve response.
- So in short for communication we first need 
    - **Local host,** 
    - **Local process,** 
    - **Remote host,** and 
    - **Remote process**

Server uses well known permanant port number because client has to know where to send request. Client uses temporary ephemeral port because server don't need to know about the client process.
{: .note}

# Reliability and Unreliability

- The transport layer service can be reliable or unreliable. 
- If the application layer program needs reliability, we use a reliable transport layer protocol by implementing **flow and error control** at the transport layer. 
- This means a **slower and more complex service.**
- If the application program does not need reliability because it uses its own flow and error control mechanism or it needs fast  ervice or the nature of the service does not demand flow and error control (real-time applications), then an unreliable protocol can be used.
- Even though DLL has flow and error control but it's only between teo nodes; we need reliability between two ends (which may be in different netwrks) as network layer is unreliable.

# Connectionless Versus Connection-Oriented Service

## Connectionless Service

- In a connectionless service, the packets are sent from one party to another with **no need for connection establishment** (and hence connection release).
- The packets are not numbered; they may be delayed or lost or may arrive **out of sequence. **
- There is **no acknowledgment**.
- **UDP,** is connectionless.

***

## Connection~Oriented Service

- In a connection-oriented service, a connection is first established between the sender and the receiver and then data are transferred.  
- At the end, the connection is released. We will see shortly that **TCP and SCTP** are connection-oriented protocols.

# Ports

## UDP

- The User Datagram Protocol (UDP) is called a **connectionless, unreliable transport protocol.** 
- It does not add anything to the services of IP except to provide process-to-process communication instead of host-to-host communication. 
- Also, it performs very **limited error checking.**
- UDP is a very **simple** protocol with **minimal overhead.**

### Well Knwon UDP Ports And Applications

| Port | Protocol | Description |
|-|-|-|
| 7 | Echo Echoes a received datagram back to the sender. |

***

### Header

- UDP have a fixed-size header of **8 bytes.**

![UDP Header]({{ site.baseurl }}/assets/images/cn-transport-layer-udp-header.png)

#### Destination Port Number:

- Port number used to specify destination process on host machine.
- This can be used by server (to send respose to the client) or the client (to sent the request to the server).
- As this field contains port number; it's of 16 bits.

#### Length:

- This is a **16-bit field** that defines the total length of the user datagram, **header plus data.**

The length field in a UDP user datagram is actually not necessary. A user datagram is encapsulated in an IP datagram. There is a field in the IP datagram that defines the total length. There is another field in the IP datagram that defines the length of the  header. So if we subtract the value of the second field from the first, we can deduce the length of a UDP datagram that is encapsulated in an IP datagram.
{: .note}

#### Checksum

- The UDP checksum calculation is different from the one for IP and ICMP.
- Here the checksum includes three sections: 
    - **A pseudoheader,** 
    - **The UDP header,** and 
    - **The data coming from the application layer.**

### Operation

- User datagram sent by UDP is an independent datagram. There is no relationship between the different user datagrams even if they are coming from the same source process and going to the same destination program.
    - The user datagrams are not numbered.
- There is no flow control and hence no window mechanism.
- There is no error control mechanism in UDP except for the checksum.
    - This means that the sender does not know if a message has been lost or duplicated. When the receiver detects an error through the checksum, the user datagram is silently discarded.
