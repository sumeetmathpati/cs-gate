---
title: Problems in File System
parent: DBMS
serial: 2
---

# Problems in File System
{: .no_toc }

***

File systems manages data in secondary storage devices like **Hard drives**. 

Users use that space according to their requirement. They create files, folders, delete data, move data, copy data, etc.

Following are the **problems with the file system** which are overcomed by **database management system**.

***

## Redundancy of Data

- Data is redundant if it's copied at many places.
- Example,
    - If student wants to change his phone number, he has to do it at many places.
    - Similarly, old records must be deleted from all sections representing that student.

***

## Inconsistency of Data

- Data is said to be inconsistent if multiple copies of same data does not match with each other. 
- Example, 
    - If email address is different in Library and Admission section, it will be inconsistent. 
    - Inconsistency may be because of typing errors or not updating all copies of same data.

***

## Difficult Data Access

- In file system user has to remember location of the data stored.
- In DBMS we have various easy methods to retrieve methods.

***

## Unauthorized Access

- File system does not provode any mehtods to prevent unauthorized acces.
- Example,
    - If in student databse if some student try to access his data; he can also get the details of other students.

***

## No Concurrent Access

- In file system single data item can be accessed by only one user at a time.

***

## No Backup and Recovery

- File system has no mechanism of backup and recovery of the data it it gets lost. or currupted.