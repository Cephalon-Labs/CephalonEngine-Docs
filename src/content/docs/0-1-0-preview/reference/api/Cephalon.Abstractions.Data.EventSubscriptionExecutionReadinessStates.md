---
title: Class EventSubscriptionExecutionReadinessStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-eventsubscriptionexecutionreadinessstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines stable readiness-state identifiers for declared event-subscription execution paths.

```csharp
public static class EventSubscriptionExecutionReadinessStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventSubscriptionExecutionReadinessStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventsubscriptionexecutionreadinessstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These values describe how Cephalon can currently observe or bind a declared subscription
without claiming that the core eventing package owns a generic broker runtime.

## Fields

### <a id="Cephalon_Abstractions_Data_EventSubscriptionExecutionReadinessStates_ApplicationManagedState"></a> ApplicationManagedState

The subscription has reported application-managed runtime observations.

```csharp
public const string ApplicationManagedState = "application-managed-state"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventSubscriptionExecutionReadinessStates_DeclaredOnly"></a> DeclaredOnly

The subscription is declared but no execution path has been bound, linked, or observed.

```csharp
public const string DeclaredOnly = "declared-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventSubscriptionExecutionReadinessStates_HostedExecutionLinked"></a> HostedExecutionLinked

The subscription is linked to a host-managed execution service.

```csharp
public const string HostedExecutionLinked = "hosted-execution-linked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventSubscriptionExecutionReadinessStates_RuntimeBound"></a> RuntimeBound

The subscription is bound to a managed execution runtime contributed by a companion pack.

```csharp
public const string RuntimeBound = "runtime-bound"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
