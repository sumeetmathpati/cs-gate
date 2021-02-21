---
title: TCP Communiation
description: "TCP Communiation Tutorial."
child_of:  Transport Layer
nav_order: 4
sub: true
---

- **Revision:**
    - TCP is connection-oriented; and hence has three phases of communication
        - Connection establishment,
        - Data transfer, and
        - Connection termination.
    - TCP sends all the segments through the IP which is connectionless protocol.
    - If a segment is lost or corrupted, it is retransmitted; IP is unaware of this retransmission. 
    - If a segment arrives out of order, TCP holds it until the missing segments arrive; IP is unaware of this reordering.
    - TCP transmission requires three phases: connection establishment, data transfer, and connection termination.

# Connection Establishment

- When two TCPs in two machines are connected, they are able to send segments to each other simultaneously. 
- The connection establishment is done with **three-way-handshaking.**
    - This is called three way because it contains three phases: **SYN**, **SYN-ACK**, and **ACK**

![Three Way Handshaking]({{ site.baseurl }}/assets/images/cn-transportlayer-three-way-handshaking.png)

## SYN

- The client sends the first segment, a SYN segment, in which **only the SYN flag is set.**
- This segment is for **synchronization of sequence numbers.** 
- It **consumes one sequence number.** 
- When the data transfer starts, the sequence number is incremented by 1. 
- We can say that the **a SYN segment cannot carry data, but it consumes one sequence number.**

## SYN+ACK

- The server sends the second segment, a SYN + ACK segment, with **2 flag bits set: SYN and ACK.** 
- This segment has a dual purpose. 
    - It is a SYN segment for communication in the other direction, and 
    - Serves as the acknowledgment for the SYN.
- **It consumes one sequence number.**
- We can say that **a SYN + ACK segment cannot carry data, but does consume one sequence number.**

## ACK

- The client sends the third segment. This is just an **ACK** segment. 
- It acknowledges the receipt of the second segment with the **ACK flag and acknowledgment number field.** 
- Note that the sequence number in this segment is the same as the one in the SYN segment; the **ACK segment does not consume any sequence numbers.**
- We can say that **an ACK segment, if carrying no data, consumes no sequence number.**

***

# Data Transfer

- After connection is established, bidirectional data transfer can take place.
- The client and server can both send data and acknowledgments.
- The **acknowledgment is piggybacked with the data.**
- In the image below you can see (you can think of following image as continuation of previous image):
    - Client sends the frame with ACK flag on (to ACK previous segment) along with some data (may be some request information)
    - Server has send the segment ACK flag on (to ACK segment sent by client) with some data (may be some response).
    - Client has again sent one segment to only ACK the segment sent by server, it doesn't contain data and hence it doesn't use sequence number (use previous one).
![Transport Layer TCP Data Transfer]({{ site.baseurl }}/assets/images/cn-transportlayer-data-transfer.png)

# Data Retransmission

- A TCP segment sent by the sender may get lost.
- Due to this, reciever doesn't recieve the segment and hence it sends ACK for that fram which has been lost.
- Hence sender retransmits the segment.
- There are two cases when sender can know that segment it had sent is lost:
    - **Time out timer gets expired**, or
    - **It receives three duplicate acknowledgements.**

## Retransmission After Expiring Time Out Timer

- Sender retransmits the segment is:
    - **The sender recieve the ACK for the lost segment**, or
    - **Sender does not recieve the ACK and timer times out.**

## Retransmission After Three Duplicate ACKs

- When can sender get three duplicate ACKs?
    - Suppose sendet has sent 5 segments, and
    - Segment 2 got lost in transmission.
    - Reciever will send 4 ACKs (as it has recieved 4 segments)
        - On recieving segment 1 =
            - => ACK for segment 2 **(Origional ACK)**
        - On recieving segment 3 
            - ==> ACK for segment 2, because it didn't get segment 2 **(Duplicate ACK)**
        - On recieving segment 4 
            - ==> ACK for segment 2, becuase it still didn't get segment 2, **(Duplicate ACK)**
        - On recieving segment 5 
            - ==> ACK for segment 2, becuase it still didn't get segment 2, **(Duplicate ACK)**

![Transport Layer TCP Three DUplicate ACKs]({{ site.baseurl }}/assets/images/cn-transportlayer-three-duplicate-acks.png)

- After receiving the retransmition on segment-2,
    - Receiver does not send the acknowledgement asking for segment-3 or 4 or 5,as it already has recieved those segments
    - Receiver sends the acknowledgement asking for segment-6 directly from the sender, and due to cumulative ACK, sender will know that it must have recieved segments 3, 5, and 5 as it's asking for 6.

***

# Connection Termination

- Any of the two parties involved in exchanging data (client or server) can close the connection.
- Connection termination is also done with **three-way-handshaking.**
    - Unlike connection establishment is dontains different three phases and those are **FIN**, **FIN+ACK**, and **ACK**.

## FIN

- When client want to terminate connection, sends the first segment, a FIN segment in which the **FIN flag is set.** 
- Note that a **FIN segment can include the last chunk of data** sent by the client, **or it can be just the control segment** as shown in the figure below.
- Consumes sequence number.

## FIN+ACK

- The server TCP, after receiving the FIN segment, and sends a **FIN + ACK segment,** to confirm the receipt of the FIN segment from the client and at the same time to announce the closing of the connection in the other direction.
- **This segment can also contain the last chunk of data from the server.**
- It consumes only one sequence number.

## ACK

- The client TCP sends the last segment, an ACK segment, to confirm the receipt of the FIN segment from the TCP server. 
- This segment contains the acknowledgment number, which is 1 plus the sequence number received in the FIN segment from the server. 
- **This segment cannot carry data and consumes no sequence numbers.**

![Transport Layer Connection Termination]({{ site.baseurl }}/assets/images/cn-transportlayer-three-way-handshaking-fin.png)

