---
title: Enum BehaviorIdempotencyMode
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behavioridempotencymode
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Describes whether a behavior execution is safe to replay automatically.

```csharp
public enum BehaviorIdempotencyMode
```

## Fields

`Idempotent = 1` 

Replaying the same logical behavior execution is expected to be safe.



`NonIdempotent = 2` 

Replaying the same logical behavior execution is not expected to be safe.



`Unknown = 0` 

No explicit idempotency contract was declared for the behavior.
