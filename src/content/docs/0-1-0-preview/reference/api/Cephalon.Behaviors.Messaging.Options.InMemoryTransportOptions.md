---
title: Class InMemoryTransportOptions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-messaging-options-inmemorytransportoptions
editUrl: false
---

Namespace: [Cephalon.Behaviors.Messaging.Options](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-options/)  
Assembly: Cephalon.Behaviors.Messaging.dll  

Configuration options for the in-memory messaging transport binding.

```csharp
public sealed class InMemoryTransportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InMemoryTransportOptions](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-options-inmemorytransportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Behaviors_Messaging_Options_InMemoryTransportOptions_Capacity"></a> Capacity

Gets or sets the maximum number of messages buffered before backpressure is applied.
Default: 1000.

```csharp
public int Capacity { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
