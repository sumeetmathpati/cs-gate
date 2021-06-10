---
title:  IPv4 Datagram Format
description: "IPv4 Datagram Format IPv4 header format"
child_of: Network Layer
nav_order: 3
sub: true
---

- Packets used by network layers are called datagrams.
- A datagram is variable length packet consisting of two parts, **header** and **payload.**
- The header is 20 to 60 bytes long and contain essential information for routing and delivery.

![IP Datagram]({{ site.baseurl }}/assets/images/cn/ip-datagram.png)

# IP Header Format

![IP Datagram]({{ site.baseurl }}/assets/images/cn/ip-header.png)

## VERSION

- This if 4 bit field.
- This field represents the version of IP protocol being used.
- This field is first because according to the protocol version the coming fields may be different.

***

## HLEN

- This is 4 bit field.
- As a name suggests, if represents header length (in bytes).

### Scaling

- We know that,
    - Header length can be betweeen 20 to 60 bytes.
    - But with 4 bits, we only can represent numbers between 0 to 15 (inclusive).
- Therefore to scale the range 0-15 upto 20-60 we multiply the value with 4.
- Example, to represent 20 bytes 
    - We write 0101 (5 in binary)
    - When we myltiply 5 by 4 (scaling), we get 20.

***

## Service

- This is 8 bit field.
- The first 3 bits of this field are used to define the priority.
    - This priority can be used in case of congestion to discard packets with lowest priority.
    - Lower the value; lower the priority.
- The last bit is unused.
- This field used to define how the datagram should be handled, i.e. used in QoS (quality of service).
- The 4 bits represent **D, T, R, C**
    - **D:** Minimize Delay
    - **T:** Maximize Throughput
    - **R:** Maximum Reliability
    - **C:** Minimize Cost

|DTRC Bits|Description|
|-|-|
|0000|Normal|
|0001|Minimize Cost|
|0010|Maximum Reliability|
|0100|Maximize Throughput|
|1000|Minimize Dealay|   

- Let's see some of the applications which use specific DTRC bits.

|Protocol|DTRC|Description|
|-|-|-|
|ICMP|0000|Normal|
|BOOTP|0000|Normal|
|NNTP|0001|Minimize Cost|
|IGP|0010|Maximize Reliability|
|SNMP|0010|Maximize Reliability|
|TELNET|1000|Minimize Delay|
|FTP(Data)|0100|Maximize Throughput|
|FTP(Control)|1000|Minimize Delay|
|TFTP|1000|Minimize Delay|
|SMTP(Command)|1000|Minimize Delay|
|SMTP(Data)|0100|Maximize Throughput|
|DNS(UDP Query)|1000|Minimize Delay|
|DNS(TCP Query)|0000|Normal|
|DNS Zone|0100|Maximize Throughput|

***

## Total Length

- Total length is a 16 bit field
- It represents the total length of the datagram (in bytes).
- **Total length = Header length + Payload length**
    - From this field we can conslude **Length of data = Total length - HLEN * 4**
- Minimum total length of datagram = 20 bytes (20 bytes header + 0 bytes data)
- Maximum total length of datagram = Maximum value of 16 bit word = 65535 bytes

***

## Identification

- Identification is a 16 bit field.
- It is used for the identification of the fragments of an original IP datagram.

***

## DF Bit

- DF bit stands for **Do Not Fragment bit.**
- Its value may be 0 or 1.
- When DF bit is set to 0, it grants the permission to the intermediate devices to fragment the datagram if required.
- When DF bit is set to 1, it indicates the intermediate devices not to fragment the IP datagram at any cost.
- If MTU is less than the packer size and DF bit is set; then packet is discarded.
    - An error message is sent to the sender saying that the datagram has been discarded due to its settings. This is done using ICMP packet.

***

## MF Bit

- MF bit stands for **More Fragments bit.**
- Its value may be 0 or 1.
- When MF bit is set to 0, it indicates to the receiver that there are no more fragments after this fragments.
    - I.e. either this fragment is the last fragment in the set or that it is the only fragment.

- When MF bit is set to 1, it indicates to the receiver that the current datagram is a fragment of some larger datagram.
    - More fragments are following.
- MF bit is set to 1 on all the fragments except the last one.

***

## TTL

- Time to live (TTL) is a **8 bit field.**
- It **indicates the maximum number of hops a datagram can take to reach the destination.**
- The main purpose of TTL is to prevent the IP datagrams from looping around forever in a routing loop.
- The value of TTL is decremented by 1 when.
    - Datagram takes a hop to any intermediate device having network layer.
    - Datagram takes a hop to the destination.
- If the value of TTL becomes zero before reaching the destination, then datagram is discarded.

***

## Protocol

- Protocol is a **  **
- It tells the network layer at the destination host to which protocol the IP datagram belongs to.
- In other words, it tells the next level protocol to the network layer at the destination side.
- Protocol number of ICMP is 1, IGMP is 2, TCP is 6 and UDP is 17.
