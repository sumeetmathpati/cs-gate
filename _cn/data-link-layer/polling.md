---
title:  "Polling"
description: "TDM Access control mechanism in data link layer."
child_of: Data Link Layer
nav_order: 13
sub: true
---

- In this method, 
    - A poll is conducted between all the stations willing to send data.
    - The polling algorithm chooses one of the stations to send the data.
    - The chosen station sends the data to the destination.
    - This cycle repeats.
- Here,
    - Tsend = Transmission time + Propogation time = Tt = Tt + Tp
    - Tpoll = polling time
    - **Total time = Tpoll + Tsend**
- Efficiency = Tt/(Tt + Tp + Tpoll)

# Advantages 

- Unlike TDM the time slot is never wasted.
- It leads to maximum efficiency.

# Disadvantes

- Time wasted during polling.
- Link sharing is not fair, because each station has equal probability of winning each round.
- Starvation is there.