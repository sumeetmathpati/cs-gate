---
title: Input/output Organization
nav_order: 5
description: "Input output organization in computer organization"
---

- IO devices (like HDD, printer, etc.) are vary **slow devices.**
- Hence they are **not directly connected to system bus.**
- Communication between CPU and IO devices is done through **high speed interface device.**

# Interface Devices

- IO devices are not as fast as CPU.
- IO devices are CPU may have different operating modes, word format, data transfer rate etc.
- **To gap these differences and syncronize the transmission we need IO interface devices.**

## Working

- CPU tells IO device about its requirements (IO device, address, amount of data) and gets busy doing other work, and IO interface gets the data from the desired IO device to the buffer.
- After storing data into buffer, interface device signals the CPU and waits for ACK from CPU.
- After getting ACK from CPU, IO interface transfers the data from buffer to the CPU. 

# IO Transfer Modes

- There are three different modes to transfer the data between IO to memory.
    - **Programmed IO**
    - **Interrupt drivenIO**
    - **Direct memory access (DMA)**

***

## Programmed IO

- Here **IO interface device is not used.**
- **CPU waits for IO operation** to finish.
    - The waiting time is depends on the speed of IO device.
- Data transfer is **word by word.**

***

## Interrupt Driven IO

- In this mode **we use high speed interface device** to communiate CPU and IO devices, that means CPU does not communicate with IO devices directly.
- We use **interrupt controller microprocessor.**
- Efficient CPU utilization.
- Data transfer is **byte by byte.**

***

## Direct Memory Access (DMA)

- In this technique we **transfer data in bulk from IO to main memory.**    
- All the secondary storage devices are communicate with CPU and main memory through **DMA controller.**
    - We use 8237 or 8257 DMA controller.

### Working

- The CPU initializes the DMA controller with **IO address**, **Cound** and **Control signal** and gets busy with another task.
- DMA controller interprets the request and eable corresponding IO device. And currently CPU is busy in other task as the BUS is free.
- After preparing the data, the device transfers it to the buffer.
- When the data is available in buffer then DMA enables **HLD** signal to gain the control of the BUS waiting for ACK.
- After recieving **HLDA** (HLD ACK) it gains the control of BUS and transfers the data to the main memory until count becomes zero. Now the CPU is idle as BUS is used by DMA.
- After transfer it releases the BUS control.

![DMA Controller Working]({{ site.baseurl }}/assets/images/coa/io-dma-controller.png)

# DMA Modes

- DMA works in following three modes.
    - **Burst Mode:** In the burst mode of DMA, after recieving HLDA signal it transfers the data in bulk to the main memory.
    - **Cycle stealing:** In this mode, DMA controller forcefully suspends the CPU operation and gains the control of BUS to transfer very important data before recieving HLDA signal.
    - **Block Mode:** In this technique, after recieving the HLDA it transfers the data block by block.