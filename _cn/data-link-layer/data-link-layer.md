---
title:  "Data Link Layer"
description: ""
parent: true
nav_order: 3
---

# Responsibilities

- **Framing**

    - It creates **frames** of the bits it has recieved from physical layer.
    - The frames are more managable than individual bits.
    - We can create **headers, trailers for the frame.**
    
- **Node To Node Delivery**
    
    - Provides **communication between devices inside the network using MAC/physical address.**
    
- **Flow Control**

    - Controls the flow so that the data don't get ovwerflowed when one of the device is slow. 

- **Error Control**

    - Check for error while sending the data. 

- **Access Control**
	
    - Inside the network, medium is shared in bromultipoint network more than two devices has access to the netwok.
    - This also **manages the access control of the shared medium** so that data sent by different devices don't get collided with each other. 

- **Physical Address**

    - Identifies all the devices in the network with MAC address.

