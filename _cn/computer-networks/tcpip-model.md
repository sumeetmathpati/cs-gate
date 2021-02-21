---
title:  "TCP/IP model"
description: "TCP/IP model tutorial."
child_of: Computer Networks
nav_order: 3
---

![TCP/IP model]({{ site.baseurl }}/assets/images/cn-tcpip-model.jpg)

***

- Unlike OSI reference model TCP/IP model implemented practically.
- Also unlike OSI model it only has 4 layers.
    - It doesn't mean that those functionalities are mission here, it's just they are merged in some other layer (as you can see in the diagram above).

***

## The Link Layer

- At the physical and data link layers, TCP/IP does not define any specific protocol.
    - It means the protocols we use at physical and data link layer are independent of TCP/IP model.

***

## The Network Layer

- In this mode at the network layer, we use protocol called **Internet Protocol (IP)**.
- IP, in turn, uses four supporting protocols: **ARP, RARP, ICMP, and IGMP**.


### 1. Internetworking Protocol (IP):
	
- The internet protocol (IP) is the transmission mechanism used by the TCP/IP protocols.
- It is an unreliable and connectionless protocol.
    - here we can apply mail system analogy. A person can drop a sequence of international letters into a mailbox in one country, and with a little luck, most of them will be delivered to the correct address in the destination country. The letters will probably travel through one or more international mail gateways along the way, but this is transparent to the users. Furthermore, that each country (i.e., each network) has its own stamps, preferred envelope sizes, and delivery rules is hidden from the users.
    - Here you can think of letters as packets in network layera and users as transport layer (which has no idea of working of layer under it).

### 2. Address Resolution Protocol

- Allows a host to discover its MAC address when it knows only its IP address.

### 3. Reverse Address Resolution Protocol

- Allows a host to discover its Internet address when it knows only its physical address.

### 4. Internet Control Message Protocol

- Is a mechanism used by hosts and gateways to send notification of datagram problems back to the sender. ICMP sends query and error reporting messages.

### 5. Internet Group Message Protocol

- Is used to facilitate the simultaneous transmission of a message to a group of recipients.

***

## The Transport Layer

- In transport layer we use following practically implemented protocols: 
    - **TCP**,  
    - **UDP**, and
    - **SCTP** (has been devised to meet the needs of some newer applications).

***

## The Application Layer

- The application layer in TCP/IP is equivalent to the combined
    - **session**, 
    - **presentation**, and 
    - **application** layers in the OSI modeL
- Many protocols are defined at this layer. 

***

In the diagram below you can see the protocols implemented in various layer os TCP/IP model.

![TCP/IP model]({{ site.baseurl }}/assets/images/questions/cn-tcpip-model-protocols.jpg)
