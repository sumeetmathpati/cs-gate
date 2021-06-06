---
title:  "Encoding techniques"
description: "Encoding techniques tutorial NRZ RZ manchester differential manchester"
child_of: Physical Layer
nav_order: 1
---

- Encoding is just means converting/representing the data in different format so that intended user can use it efficiently.
- In computer networks, we convert digital data into nother digital representation is called **Line Coding**.
- Line coding has different types, we've discussed them below.

# Uni-Polar Encoding

- Uses single voltage to represent data.
- Generall it uses,
    - **High voltage** for **1**
    - **No voltage** for **0**

![unipolar encoding]({{ site.baseurl }}/assets/images/cn-unipolar.jpg)


# Polar Encoding

- Here we use different voltage levels to represent binary data.
- There are differen polar encoding schemes.

## 1. NRZ (Non Return to Zero)

Not Important For GATE
{: .label .w3-red}

- Uses two different volatages to represent binary 1 and 0.
- Generally it uses,
- We have two different implementations of NRZ technique. NRZ-L and NRZ-I.

### Types of NRZ

#### NRZ-L

- L stands for **level**.
- NRZ-L changes voltage level at when a different bit is encountered, i.e. level represents the bit value.
    - **+ve voltage** for **1**
    - **-ve voltage** for **0**

#### NRZ-I

- L stands for **invert**.
- Whereas NRZ-I changes/inverts voltage when a 1 is encountered, i.e. change in signal represents bit value. 
    - **Invert** for **1**
    - **Don't invert** for **0**

![NRZ-I and NRZ-L]({{ site.baseurl }}/assets/images/cn-nrzi-nrzl.jpg)

***

## 2. RZ (Return to Zero)

Not Important For GATE
{: .label .w3-red}

- Problem with NRZ is:
    - The receiver cannot know when a bit ended and when the next bit is started, in case when sender and receiver’s clock are not synchronized.
    - DC component.
- RZ uses three voltage levels, 
    - **+ve voltage** for **1**
    - **-ve voltage** for **0**
    - **0vtg voltage** for **None**
- The change of signal happens during the the bits and not between bits.
- Requires **two signal changes to encode single bit** but because of this it occupies greater bandwidth.
- This technique is not used today. Instead of it we use better-performing Manchester and differential Manchester schemes.

![RZ]({{ site.baseurl }}/assets/images/cn-rz.jpg)


***

## 3. Manchester

- It is a **combination of  RZ and NRZ-L.**
- Bit time is divided into two halves. **The voltage remains at one level during the first half and moves to the other level in the second half.**
- **The transition at the middle of the bit provides synchronization.**
- In IEEE 802.3 
    - **High to Low** for **0**
    - **Low to High** for **1** 
    
***

## 4. Differential Manchester

- It is a **combination of RZ and NRZ-I.**
- It inverts/changes when 0 is encountered.
    - **Transition** for **0**
    - **No transition** for **1**

***

![Manchester and Differential Manchester]({{ site.baseurl }}/assets/images/cn-manchester-differential-manchester.jpg)

***

# Bipolar

Not Important For GATE
{: .label .w3-red}

- **Zero voltage** for **0**
- **Alternating +ve and -ve voltage levels** for **1**

