---
title: Class EventDispatchExecutionOutcomes
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchexecutionoutcomes
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Defines the stable outcome identifiers used when reporting durable event-dispatch activity.

```csharp
public static class EventDispatchExecutionOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventDispatchExecutionOutcomes](/0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchexecutionoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Eventing_Services_EventDispatchExecutionOutcomes_Failed"></a> Failed

Gets the outcome identifier used when dispatch fails for one staged message.

```csharp
public const string Failed = "failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchExecutionOutcomes_RetryScheduled"></a> RetryScheduled

Gets the outcome identifier used when dispatch schedules or expects another retry attempt.

```csharp
public const string RetryScheduled = "retry-scheduled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchExecutionOutcomes_Skipped"></a> Skipped

Gets the outcome identifier used when dispatch intentionally skips one staged message.

```csharp
public const string Skipped = "skipped"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchExecutionOutcomes_Started"></a> Started

Gets the outcome identifier used when dispatch begins for one staged message.

```csharp
public const string Started = "started"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchExecutionOutcomes_Succeeded"></a> Succeeded

Gets the outcome identifier used when dispatch completes successfully for one staged message.

```csharp
public const string Succeeded = "succeeded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
