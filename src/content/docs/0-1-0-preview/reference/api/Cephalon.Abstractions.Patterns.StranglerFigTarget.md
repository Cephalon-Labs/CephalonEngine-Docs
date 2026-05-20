---
title: Enum StranglerFigTarget
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigtarget
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Identifies which side of a strangler-fig migration boundary currently owns traffic.

```csharp
public enum StranglerFigTarget
```

## Fields

`Legacy = 0` 

Routes traffic to the legacy boundary.



`Modern = 1` 

Routes traffic to the modern Cephalon boundary.
