---
title: Enum DiagnosticSeverity
slug: 0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticseverity
editUrl: false
---

Namespace: [Cephalon.Engine.Diagnostics](/0-1-0-preview/reference/api/cephalon-engine-diagnostics/)  
Assembly: Cephalon.Engine.dll  

Describes the severity attached to a published diagnostics event definition.

```csharp
public enum DiagnosticSeverity
```

## Fields

`Critical = 5` 

The event indicates a critical condition that usually requires immediate attention.



`Debug = 1` 

The event is intended for debug-oriented diagnostics.



`Error = 4` 

The event indicates an error condition.



`Information = 2` 

The event describes expected informational runtime behavior.



`Trace = 0` 

The event is useful only for highly detailed trace output.



`Warning = 3` 

The event highlights a warning condition or degraded behavior.
