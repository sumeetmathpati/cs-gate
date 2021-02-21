---
title:  "‒ Selective Repeat"
description: "Selective Repeat protocol in data link layer."
child_of: Data Link Layer
nav_order: 6
---

# Window Size

- In this protocol **sender's window size and reciever's window size is same.**
- Window size id greater than 1; or else it will be stop and wait protocol.

# ACKs

- Selective repeat; we use independent ACKs only.
- I.e. we do not use cumulative ACKs.

# Negetive ACKs

- When reciever recieves the currupted frame, **it discards it and sends NACK.**
