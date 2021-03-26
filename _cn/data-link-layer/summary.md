---
title:  "Flow Control Summary"
description: "Flow Control data link layer."
child_of: Data Link Layer
nav_order: 8
sub: true
---

|Efficiency|Stop and Wait|Go back N|Selecive Repeat|Remark|
|-|-|-|-|-|
|Efficiency|1/(1+2a)|n/(1+2a)|n/(1+2a)|GBN and SR has better efficiency than SW|
|Window size|Sender and Reciever winddow size = 1|Sender window size = n and reciever window size = 1|Sender window size = n and reciever window size = n|SR require more buffer|
|Minimum sequence numbers requires|2|n+1|n+n|SR require larger number of sequence numbers.|
|Retransmissions|Only the last packet is retransmitted|n packets (entire window) is retransmitted|Only the lost packet is retransmitted|SR is better than GBN|
|Bandwidth requirements|Bandwidth requirement is low|Bandwidth requirement is high, because in retransmission we need to send entire window again.| Bandwidth requirement is moderate.|SR is better than GBN in terms of bandwidth requirement.|
|CPU usage|Low|Moderate| High due to searching and sorting at the reciever side.|
|Acknowledgements|Used independent ACKs for each packet.|Uses cumulative ACKs but also can use independent ACKs.|Used independent ACKs for each packet.|Cumulative ACK reduce the traffic in network but also if it gets lost then the ACK for multiple packets also gets lost.|
