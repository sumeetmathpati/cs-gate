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

# Working

- Choose any element at pivot element.
- We apply *partition* algorithm and after this partition array gets divided such that elements smaller than pivot are places on the left side and elements greater than pivot are placed on the right side (in case of scending order) and then in middle we place pivot element.
    - But one thing to keep in mind that the elements on the both side of the pivot are not sorted, only pivot element is placed in sorted place.
- Now recursively we sort the left and right partitions with same *partition* algorithm.

# C Program

```c
#include <stdio.h>

void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

void quickSort(int arr[], int left, int right) {
    if (left < right) {

        // First perform partition and get pivor element in its sorted place.
        // And get the index of the sorted elements.
        // Store it in pivotIndex variable.
        // The elements at the left of this index we shall have smaller elements
        // The elements at the right of this index we shall have larger elements
        pivotIndex = partition(arr, low, high);

        quickSort(arr, low, pi - 1); // Elements smaller than pivot.
        quickSort(arr, pi + 1, high); // Elements larger than pivot.
    }
}

partition(int arr[], int left, int right) {
    
    // In this case we whoose leftmost element as pivot element.
    int pivot = arr[left];
    int i = left;

    for (int j = i+1; j <= right; i++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[])

}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    quickSoft(arr, 0, n-1);
    printArr(arr, n);

    return 0;
}
```