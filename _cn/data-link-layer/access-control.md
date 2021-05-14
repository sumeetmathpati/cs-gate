---
title:  "Access Control"
description: "Access control in data link layer."
child_of: Data Link Layer
nav_order: 11
---

- When there are multiple computer or networking devices present in the netowork, the capacity of the link is shared among those devices.
- As the channel is shared among devices, we have to make sure that no two devices should transfer data at the same time otherwise collision of the data can happer.
- So the **access control protocol is used to give access of the channel to single device to share data.**
- Only broadcast linkes (links where multiple divices are connected) require access control protocol and P2P don't require access control protocol.
- These protocols answers folowing questions
    - When can the station access the medium?
    - What can statio do is the medium is busy?
    - How can the station determine the success or failure of the transmission?
    - What can the station do if there is an access conflict?
        
# Types

## Random Access Protocols [IMP]

- Here no device has more priority over other.
- To send the data, any device DO NOT require any permission for it.
- As name suggests, there is no schedules time to send the data, **anyone can send data anytime.**
- After sending the data, next sender can be anyone, all the devices (who want to send the data) compete with each other for medium access.
- If more than one decive sends the frame at a time, collision may happen and the frame/data may get destroyed or modified.
- Implementations
    - **ALOHA**
    - **CSMA**
    - **CSMA/CD**
    - **CSMA/CD**

## Controlled Access Protocols

- Reservation
- Polling
- Token Passing
 
## Channelization Protocols

- FDMA
- TDMA
- CDMA
