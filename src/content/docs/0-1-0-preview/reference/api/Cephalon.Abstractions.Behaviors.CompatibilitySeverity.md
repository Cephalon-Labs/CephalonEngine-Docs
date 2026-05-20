---
title: Enum CompatibilitySeverity
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-compatibilityseverity
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Severity level of a behavior compatibility rule violation.

```csharp
public enum CompatibilitySeverity
```

## Fields

`Advisory = 0` 

The violation is informational only.



`Error = 2` 

The violation prevents application startup.



`Warning = 1` 

The violation may cause runtime issues but does not prevent startup.
