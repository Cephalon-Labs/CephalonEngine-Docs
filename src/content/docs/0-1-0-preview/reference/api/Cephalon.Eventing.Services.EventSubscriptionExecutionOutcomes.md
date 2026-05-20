---
title: Class EventSubscriptionExecutionOutcomes
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutionoutcomes
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Defines the stable outcome identifiers used when reporting declared event-subscription activity.

```csharp
public static class EventSubscriptionExecutionOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventSubscriptionExecutionOutcomes](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutionoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionOutcomes_Failed"></a> Failed

Gets the outcome identifier used when subscription handling fails for one message.

```csharp
public const string Failed = "failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionOutcomes_RetryScheduled"></a> RetryScheduled

Gets the outcome identifier used when subscription handling schedules or expects another retry attempt.

```csharp
public const string RetryScheduled = "retry-scheduled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionOutcomes_Skipped"></a> Skipped

Gets the outcome identifier used when subscription handling intentionally skips one message.

```csharp
public const string Skipped = "skipped"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionOutcomes_Started"></a> Started

Gets the outcome identifier used when subscription handling begins for one message.

```csharp
public const string Started = "started"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionExecutionOutcomes_Succeeded"></a> Succeeded

Gets the outcome identifier used when subscription handling completes successfully for one message.

```csharp
public const string Succeeded = "succeeded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
