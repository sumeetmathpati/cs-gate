---
title:  "Ethernet"
description: "Ethernet 802.3"
child_of: Data Link Layer
nav_order: 16
mathjax: true
---

# Ethernet Fields

## Preamble

- It's a **7 byte field** that contains a pattern of alternating 0's and 1's.
- It alerts the stations that frame is going to start.
- It enables the sender and receiver to establish bit syncronization.
- It's added at **physical layer.**

***

## SFD

- It's **1 byte field,** which is always set to 10101011.
- The last two bits "11" indicate the end of start frame delimeter and marks the beginning of the frame.
- This field is added at the **physical layer.**

***

## Destination Address

- It's a **6 byte fiels** contains a MAC address of the destination for which the data is destined.
- MAC address can be of 3 types:
    - **Unicast**
        - The LSB of the first byte is 0.
        - All the source addresses will be unicast.
    - **Multicast**
        - LSB of the first byte is 0.
    - **Broadcast**
        - All bits are assigned 1's.

***

## Source Address

- It's a **6 byte fiels** contains a MAC address of the source which is sending the data.

## Length

- Ethernet uses variable sized frames, therefore we need length field.
- It's a **2 byte fiels**

***

## Data

- It's a variable field which contains the actual data.
- The lrngth of this field lies between 46 and 1500 bytes.
    - If we have data less than 46 bytes; we padd the data with 0's.
    - The minimum length restriction is there; because this protocol uses CSMA/CD which force us to have some minimum transmission time (Tt = 2Tp).
    - This minimum Tt in general is 64B and aswe already have minimum (6+6+2+4) bytes in DDL; we now just need 46B.
    - Therefore 46B are minimum data requirement.
- We have maximum length restriction due to:
    - Memory was very expensive when Ethernet was designed; a maximum length restriction helped to reduce the size of the buffer.
    - THe maxium length restriction prevents one station from monopolizing the medium.

***

## CRC

- Last field contains error detection information.
- At the time of transmission, CRC is calculated and hence it's at the end of the frame.
- It's 4 byte field.

![Ethernet]({{ site.baseurl }}/assets/images/cn/etherner.png)
