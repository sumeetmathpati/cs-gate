---
title:  IPv4
description: "IPv4 addressing"
child_of: Network Layer
nav_order: 2
---

- IPv4 address is a **32 bit address,** used to identify the communication device over network layer.
- IP address is not permanant, it may change.
- IP has two versions, IPv4 and IPv4.
- We have total 4,294,967,296 IPv4 addresses.

# IP Address Part

- IP address has two parts (saperated bits), 
    - **Network ID**
    - **Host ID**

## Network ID

- This is the leftmost part of the IP address.
- In a network all the hosts will have same network IP part indicating that they are in same network.

***

## Host ID

- It's the right part of the IP.
- It consists of the bits not consists in network ID.
- In a network, all the netowrks will have same data in netowrk ID part but will have different data in host ID part indicating that they are different hosts in same network.   

***

## Network Mask

- *Network mask* or simply *mask* is used to represent the two saperated parts of IP.
- If *n* bits IP are used for net IP, then the rightmost *n* bits are set to 1's and all the other bits are set to 0's.
    - Example 11111111.11111111.11111111.00000000<sub>(2)</sub> = 255.255.11111255111.0<sub>(10)</sub> says that the net IP is of 24 bits.

### Getting Network ID from IP

- As we know mask has all *n* bits set to 1 for *n* bit IP address.
- If we AND the IP with MASK we will get net IP.
- Example,
    - IP = 192.168.0.1
    - Mask = 255.255.255.255
    - Then Net IP = 11111111.11111111.11111111.00000000<sub>(2)</sub> AND 11000000.10101000.00000000.00000001<sub>(2)</sub>
        - = 11000000.10101000.00000000.00000000<sub>(2)</sub>
        - = 192.168.0.0<sub>(10)</sub>
