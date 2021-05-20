---
title:  "TDM"
description: "Polling Access control mechanism in data link layer."
child_of: Data Link Layer
nav_order: 12
sub: true
---

- In TDM fixed time slots are assigned to the devices in which they can access the link.
- Time slots are alloted to the devices in **Round Robbin** manner.
- **Disadvantage:**
    - If in it's time slot station doesn't have anything to transfer, it's time slot goes wasted. 
- **Size of the each time slot = Tr + Tp**
- **Efficiency** = Tt/(Tt + Tp) = **1 / (1 + a)** where a = Tt/Tp.
