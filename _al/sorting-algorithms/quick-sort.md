---
title: Quick Sort
description: "Quick sort algorithm explained."
child_of: Sorting ALlgorithms
nav_order: 1
---

- Most used sorting algorithm in industry.
- It's **in-place** sorting algorithm.
    - In-place means it id requires constant or less than (log n) space for execution.
- It's **not stable.**
    - Not stable means the elements with same key may change the sequence in the output.
- It's **divide and conquer** algorithm.
    - We divide the array with *partition algorithm* and then recursively sort parts again with the same algorithm.