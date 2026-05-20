---
title: Class BehaviorDiagnostics
slug: 0-1-0-preview/reference/api/cephalon-behaviors-diagnostics-behaviordiagnostics
editUrl: false
---

Namespace: [Cephalon.Behaviors.Diagnostics](/0-1-0-preview/reference/api/cephalon-behaviors-diagnostics/)  
Assembly: Cephalon.Behaviors.dll  

Structured diagnostic event-id constants for the ABT behavior runtime.
IDs are in the range 5100–5109.

```csharp
public static class BehaviorDiagnostics
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorDiagnostics](/0-1-0-preview/reference/api/cephalon-behaviors-diagnostics-behaviordiagnostics/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Behaviors_Diagnostics_BehaviorDiagnostics_AdvisoryRaised"></a> AdvisoryRaised

Advisory contributor added an advisory for a behavior.

```csharp
public static readonly EventId AdvisoryRaised
```

#### Field Value

 [EventId](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.eventid)

### <a id="Cephalon_Behaviors_Diagnostics_BehaviorDiagnostics_BehaviorRegistered"></a> BehaviorRegistered

Behavior registered in the catalog.

```csharp
public static readonly EventId BehaviorRegistered
```

#### Field Value

 [EventId](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.eventid)

### <a id="Cephalon_Behaviors_Diagnostics_BehaviorDiagnostics_CompatibilityViolation"></a> CompatibilityViolation

Behavior compatibility matrix violation detected at startup.

```csharp
public static readonly EventId CompatibilityViolation
```

#### Field Value

 [EventId](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.eventid)

### <a id="Cephalon_Behaviors_Diagnostics_BehaviorDiagnostics_DispatchFailed"></a> DispatchFailed

Behavior dispatch failed with an exception.

```csharp
public static readonly EventId DispatchFailed
```

#### Field Value

 [EventId](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.eventid)

### <a id="Cephalon_Behaviors_Diagnostics_BehaviorDiagnostics_Dispatched"></a> Dispatched

Behavior dispatch completed successfully.

```csharp
public static readonly EventId Dispatched
```

#### Field Value

 [EventId](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.eventid)

### <a id="Cephalon_Behaviors_Diagnostics_BehaviorDiagnostics_Dispatching"></a> Dispatching

Behavior dispatch started.

```csharp
public static readonly EventId Dispatching
```

#### Field Value

 [EventId](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.eventid)

### <a id="Cephalon_Behaviors_Diagnostics_BehaviorDiagnostics_SlotCompiled"></a> SlotCompiled

Behavior execution slot compiled at startup.

```csharp
public static readonly EventId SlotCompiled
```

#### Field Value

 [EventId](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.eventid)

### <a id="Cephalon_Behaviors_Diagnostics_BehaviorDiagnostics_TopologyResolved"></a> TopologyResolved

Behavior topology resolved from configuration.

```csharp
public static readonly EventId TopologyResolved
```

#### Field Value

 [EventId](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.eventid)

### <a id="Cephalon_Behaviors_Diagnostics_BehaviorDiagnostics_TransportBindFailed"></a> TransportBindFailed

Transport binding failed to initialize.

```csharp
public static readonly EventId TransportBindFailed
```

#### Field Value

 [EventId](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.eventid)

### <a id="Cephalon_Behaviors_Diagnostics_BehaviorDiagnostics_TransportBound"></a> TransportBound

Transport binding initialized for a behavior.

```csharp
public static readonly EventId TransportBound
```

#### Field Value

 [EventId](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.eventid)
