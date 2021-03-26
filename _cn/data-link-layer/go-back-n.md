---
title:  "Go Back n Protocol"
description: "Go back n protocol in data link layer."
child_of: Data Link Layer
nav_order: 7
sub: true
---

# Window size

- In this protocol
    - Sender window size is n
    - Reciever window size is always 1.

***

# ACKs

- Here we use cumulative ACKs.
- When reciever recieves a frame, it start an ACK timer.
    - Each time new frame arrives; it restarts the timer.
- When timer times out; it sends ACK for all the unacknowledged frames.

***

# No Negetive ACKs

- When reciever recieves the currupted frame, it discards it and does nothing.

***

# Going Back N

- Reciever does not accept currupted or out of order frame. It discards them and does not send ACK.
- When time out timer expires as sender (who already sent n frames) assumes that all the n frames got discarded by reciever.
- And hence it **goes back n frames and retransmits all those n frames.**
- That is why, the protocol has been named **Go back N**.



