---
title: TCP
description: "Transport Layer Tutorial."
child_of:  Transport Layer
nav_order: 2
---

- It **adds connection-oriented and reliability features** to the services of IP.
- TCP uses flow and error control mechanisms at the transport level.

# TCP Services

### Stream Delivery Service

- TCP allows the sending process to **deliver data as a stream of bytes** and allows the receiving process to **obtain data as a stream of bytes.**
- TCP creates an environment in which the **two processes seem to be connected by an imaginary "tube" that carries their data** across the Internet.


### Full-Duplex Communication

- TCP offers full-duplex service, in which **data can flow in both directions at the same time.**


### Connection-Oriented Service

- When a process at site A wants to send and receive data from another process at site B, the following occurs:
    - **The two TCPs establish a connection between them.**
    - **Data are exchanged in both directions.**
    - **The connection is terminated.**
- Note that this is a **virtual connection, not a physical** connection. 

### Error Detection

- TCP protocol detects error using checksums in TCP packets.

### Error Control

- If error happens TCP uses **Go-back-n** method to solve the errors.

### Reliable Service

- TCP is a reliable transport protocol. It uses an **acknowledgment mechanism** to check the safe and sound arrival of data.

## Congestion Avoidance Algorithm

- TCP uses **multiplicative decrease and slow start** technique to avoid congestion.


# Well Knwon UDP Ports And Applications

| Port | Protocol | Description |
|-|-|-|
| 7 | Echo Echoes a received datagram back to the sender. |
|25 | SMTP | Simple Mail Transfer Protocol|
|80 | HTTP | Hypertext Transfer Protocol|
|23 | TELNET | Tenninal Network|


# Features of TCP

## Numbering System

- There are two fields in TCP header called the **sequence number** and the **acknowledgment number.**
- These two fields **refer to the byte number and not the segment number.**
- Numbering is independent in each direction.
- **The bytes of data being transferred in each connection are numbered by TCP. The numbering starts with a randomly generated number.**
    - For example, if the random number happens to be 1057 and the total data to be sent are 6000 bytes, the bytes are numbered from 1057 to 7056.
- **The sequence number for each segment is the number of the first byte carried in that segment.**

***

## Acknowledgement

- The value of the acknowledgment field in a segment defines the number of the next byte a party expects to receive.
- The acknowledgment number is cumulative.
    - The term cumulative here means that if a party uses 5643 as an acknowledgment number, it has received all bytes **from the  beginning up to 5642.**
    - Note that this does not mean that the party has received 5642 bytes because the first byte number does not have to start from O.

***

## Flow Control

- TCP, unlike UDP, provides flow control. 
- The receiver of the data controls the amount of data that are to be sent by the sender.
- The numbering system allows TCP to use a byte-oriented flow control.

***

## Error Control

- To provide reliable service, TCP implements an error control mechanism.


