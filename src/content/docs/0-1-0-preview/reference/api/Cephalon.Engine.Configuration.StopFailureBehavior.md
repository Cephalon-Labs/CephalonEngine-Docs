---
title: Enum StopFailureBehavior
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-stopfailurebehavior
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes how stop failures are handled.

```csharp
public enum StopFailureBehavior
```

## Fields

`BestEffortContinue = 1` 

Continue stopping remaining modules and report failures afterward.



`FailFast = 0` 

Stop shutdown immediately and rethrow the failure.
