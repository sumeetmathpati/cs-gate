---
title:  "CSMA/CD"
description: "CSMA/CD Access control mechanism in data link layer."
child_of: Data Link Layer
nav_order: 14
sub: true
mathjax: true
---

- Stands for **Carrier sence multiple access.**
- CSMA/CD is used in Ehernet protocol.

# Working

## Step 1: Carrier Sensing

- Any station willing to send data sense the carrier.
- If it finds the carrier free, it starts transmitting its data packets otherwise not

***

## Step 2: Collision Detection

- It's responsibility of the transmitting station to detect the collision.
- To be able to detect the collition we keep Tt >= 2 * Tp.

### Case 1

- If the collsion signal doesn't come back, it means no collision has happened.
- Data is transmitted successfully.

### Case 2

- If collition signal comes back, it means collision has happened.
- Transmission has failed.

***

## Step 3: Releasing Jam Signal.

- It is a 48 bit signal.
- When any station setects the collision it sends the jam signal, so that other stations can know that collision has happened in the channel and they should not send the data.
    - Otherwise there is huge possibility of the collision of their data also.
- The jam signal is send on other frequency than the frequency for data signal hence, jam signal and data don't get collided.

***

## Step 4: Waiting for Back-off time

- After collision, transmission stations wait for some random amount of time called as **back-off time.**
- After back-off time, it tries to transmitt the data again.
    - If collision happens again, it again waits for back-off time.
- Station keeps trying until the back-off time reahes its limit.
- After limit is reached, statio aborts the transmission.
- Back-off time is calculated using **back-off algorithm.**


# Carrier Sensing

- Each station can sense the carrier only at point of contact with the channel.
- It's not possible to sense the entire channel.
- Hence there is huge possibility that station might sense that channel is free even if it's not.

# Collision Detection

- When signals get collided with each other, they come back to stations.
- Then only station can know that collision has happened.
- The collision detection can happen only if collided data comes back, and station can know that if it was transmittiong the data at that time, hence transmission delay should be greater than 2 * Propogation delay.
- Hence we have to keep **Tt >= 2 * Tp.**

# Obserations

- Before successful transmission, there may be many numbers of collisions.
    - 2 * Tp time is wasted for each collision.
- Useful time = Tt
- Useless time = Time wasted during collision + propogation delay = c * 2 * Tp + Tp
- **Efficiency = Tt / (Tt + c * 2 * Tp + Tp)**
    - c is a variable, because number of collisions can varieable.

## Probability of Successful Transmission

- A successful transmission happens when only one station send the data and all the other do not.
- Therefore the Probability of Successful Transmission is   
    - $^nC_1 \times p \times (1-p)^{(n-1)}$
        - p is probability of a station to transfer the data.
    
# Notes

- CSMA/CD used in wired LANs.
- CSMA/CD is standardized in IEEE 802.3
- CSMA/CD only minimizes the recovery time.
