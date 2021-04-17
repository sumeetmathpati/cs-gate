---
title: Graph Based Protocol
description: "Two phase locking protocol, conservative two phase locking, strict two phase locking, rigorous two phase locking."
nav_order: 3
child_of: Concurrency Control
sub: true
---

||IS|IX|S|X|
|-|-|-|-|-|
|IS|T|T|T|F|
|IX|T|T|F|F|
|S|T|F|T|F|
|X|F|F|F|F|