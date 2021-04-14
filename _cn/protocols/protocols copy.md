---
title: "ICMP"
child_of: Protocols
description: "Computer networks protocol."
nav_order: 1
---

- It's a **network layer** protocol.
- It is used by network devices (like routers) to send error messages and operational information indicating success or failure when communicating with another IP address.
    - For example, an error is indicated when a requested service (like SSH) is not available, or a host is not reachable.
- Used by tools like *ping* or *traceroute*.

# Errors

## TTL Exceed

- If the packet gets into loop and the completed number of hops mentioned in ttl field of the IP header, a router wil discard the packet.
- After discarding the packer, it will send an ICMP packet to the source.
- Priority of ICMP packet is low.

# Types of ICMP packet

## Error Handling 

- TTL exceed
- Parameter problem
- Source quench
- Source redirect
- Destination unreachable

## Request and Reply

- Echo request and reply
- Timestamp request and reply
- Netmast request and reply
- Solicitation and advertisement