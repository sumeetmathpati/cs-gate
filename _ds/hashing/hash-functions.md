---
title: Hash functions
nav_order: 3
description: "Hash Functions"
child_of: Hashing
---

- Hash functions are used to compress the number of keys into available table space.
- For example function $f(x) = x (mod 10)$
    - Let's say we hav ekeys {10, 11, 12}.
    - If we pass them throu the function $f$ we get values {0, 1, 2}.
    - Now we can store them in the table of size at least 2.
    - Unlike the DAT, to store these keys, we would have required at least 12 cells in table.

# Collision 

- If on passing two keys in the hash function we are getting same value, it's called **collision.**

# Typef of Hash Functions

## Division Modulo Functions [IMP]

- In this method; we take *(modulo m)* of the key; where *m* is the size of the table.
- Using this technique we can make sure that the key won't exceed the size of the table.

### Some Suggestions

- We shouldn't use the *m* in *(mod m)* power of 2.
    - Like 2, 4, 8, 16 etc.
- We should pick *m* in *(mod m)* value as prime number, but it shouldn't be near to the vlaue power of 2.
    - Example
        - Shouldn't use 1021.
        - We can use 719.
***

## Mid Square Method

- In this technique, we
    - First square the given key.
    - And then take the middle value.
    - On the index of this middle value, we store the origional key.
- **Example,**
    - Key: 87431
    - Table size: 1000 = (0 to 999)
    - 87431^2 = 7644179761
    - Middle =  417 or 179  
        - We've taken 3 digit middle value because we have more table spaces with 3 digit indexex.
    - We store the key at the table location 417 or 179.
        - table[417] = 87431

***

## Digit Extraction Method

- We digits from specific places (we can decide) and use them as our location of table to store the key.
- **Example,**
    - Key: 456123789
    - Table size: 1000 = (0 to 999)
    - $f(k) = digita of first, third and fourth places of the key from RHS.$
    - Hence $f(key) = 379
    - Therefor table[379] = 456123789
- This is more inefficient that the division modulo method because we can quicly find second key which can collide with the give one key.

***

## Folding Method

### Fold Shifting Method

- In this method we divide the key into sizes of *k* and add all those parts to ket the result of size *k*.
    - If overflow happens we again to the same process with the result.
- This process is called folding.
- **Example,**
    - Key: 456789123
    - Table size: 1000 = (0 to 999)
    - k = 3 ,becuase we want out result in terms of 3 digits and that's because out table contains location of 3 digits.
    - (456) + (123) + (789) = 1368
    -  = (136) + 8 = 144
    - Now we store the kay 456789123 at the 144 location in the table.
        - table[144] = 456789123

### Fold Boundry Method

- In this method we only add first and last k digits.
- **Example,**
    - Key: 456789123
    - Table size: 1000 = (0 to 999)
    - k = 3 ,becuase we want out result in terms of 3 digits and that's because out table contains location of 3 digits.
    - (456) + (123) = 579
    - Now we store the kay 456789123 at the 144 location in the table.
        - table[579] = 456789123

