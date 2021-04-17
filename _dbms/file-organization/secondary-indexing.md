---
title: Secondary Indexing
description: "Secondary Indexing"
nav_order: 4
child_of: File Organization
sub: true
---

- It's called secondary indexing because we do it when we already have primary or clustered indexing.
    - Suppose we want to search database with more than one of it's attribute, then we have to create multiple indexes.
- Hence data is not sorted according to the attribute we care creating index on.
    - But remember the data may not be sorted, but the index we are creating will be sorted.
- It can be **done on a candidate key (which has unique values) or on a non-key attribute (which has duplicate values).**
- There can be many secondary indices.
- Unlike primary and clustered indices, data is not sorted and hence insertion and deletionis not expensive.
- Index entry is created for each record in data file because we cannot have anchor record as the data is not sorted in table according to the attribute we are using for secondary indexing.
- Hence it's **dense indexing.**
- It needs more storage, but increases searching speed.

![Secondary Indexing On Non Key]({{ site.baseurl }}/assets/images/dbms/secondary-indexing-on-non-key.png)

![Secondary Indexing On Key]({{ site.baseurl }}/assets/images/dbms/secondary-indexing-on-key.png)
