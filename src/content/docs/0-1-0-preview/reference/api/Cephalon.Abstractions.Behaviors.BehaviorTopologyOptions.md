---
title: Class BehaviorTopologyOptions
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviortopologyoptions
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Optional feature flags for a behavior topology entry.

```csharp
public sealed class BehaviorTopologyOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorTopologyOptions](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviortopologyoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyOptions__ctor"></a> BehaviorTopologyOptions\(\)

Initializes a new instance of <xref href="Cephalon.Abstractions.Behaviors.BehaviorTopologyOptions" data-throw-if-not-resolved="false"></xref>.

```csharp
public BehaviorTopologyOptions()
```

## Properties

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyOptions_EventSourcingEnabled"></a> EventSourcingEnabled

Gets or sets a value indicating whether event sourcing is wired into the behavior context.

```csharp
public bool EventSourcingEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyOptions_InboxEnabled"></a> InboxEnabled

Gets or sets a value indicating whether inbox deduplication is enabled.

```csharp
public bool InboxEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyOptions_OutboxEnabled"></a> OutboxEnabled

Gets or sets a value indicating whether outbox staging is enabled.

```csharp
public bool OutboxEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
