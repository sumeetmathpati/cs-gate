---
title:  IP Protocols
description: "IP Protocols ARP RARP ICMP IGMP"
child_of: Network Layer
nav_order: 8
---

# ARP

- Used to find the MAC address of a other device on a same network when we have it's IP address.
- ARP maps the IP address to the logical link address (MAC address).
    - ARP teks IP address from the IP protocol.
    - Maps the IP with corresponding link-layer address.
    - Passes it to the data-link layer.

## Working

- Anytime any host or router on a network need the link-layer address of another device on a same newtork; it send an ARP request packet.
- This request packet incudes:
    - Source MAC address.
    - Source IP address.
    - Destination IP address.
- This packet is broadccasted on a network and hence recieved by all the devices.
- All the deviced process this ARP request, but only intended device (of whose IP is the *destination IP* in request packet) give response.
- Response packet contains the recipient's IP address and MAC address.
    - This response packet is unicasted directly to the reciever (who has first sent the request packet).

# RARP

- Unlike ARP; RARP is used to find the IP address of a other device on a same network when we have it's MAC address.

# ICMP

- IP had two drawbacks:
    - Lack of error control.
    - Lack of assistant mechanisms.
- IP protocol has no error-reposting or error correcting mechanism.
- We want to know about the if some problem occurs with our packet:
    - If something goes wrong with the packet.
    - If router must discard the packet because it cannot finf the path.
    - If router must discard the packet because TTL becomes 0.
    - etc.
- The ICMP messages are divided into two categories
    1. **error reporting**
        - The *error-reporting* messages reports the problems that router or host (destination) may encounter when it processes IP packet.
    2. **query messages**
        - The query message, which occurs in pair, helps a host or a network manager to get specific information from router or another host.

## Error Reporting

- One of the main responsibility of the ICMP protocol.
- ICMP does NOT correct the errors, hust reports it to the source.
- Error reporting is done in various situations and the error condition is defined by type number:
    - **Type 3:** Destination unrecahble
    - **Type 4:** Source quench
    - **Type 11:** Time exceeded
    - **Type 12:** Parameter problem
    - **Type 5:** Redirection
- NO ICMP message will be generated for:
    - Lost ICMP packet.
    - Losing / corruption of datagram which is not first fragment.
    - Losing / corruption of multicast datagram.
    - Losing / corruption of datagram with special address like 128.0.0.0 or 0.0.0.0.

***

## Querying

- With error reporing, ICMP can dignose some network problems, this is accomplished thriugh query messaging.
- Query messages are groups of four different pairs of messages.
- Query messages and their types:
    - **Type 8 and 0:** Echo request and reply.
    - **Type 13 and 14:** Timestamp request and reply.
    - **Type 17 and 18:** Address mask request and reply.
    - **Type 10 and 9:** Router solicitation and advertisement.

# IGMP

- Stands for **internet group message protocol.**
- Sometimes we want to send packet to the multiple destinations i.e. one-to-many communication.
- IPv6 is capable of multicasting on itslef, it doesn't need IGMP.
