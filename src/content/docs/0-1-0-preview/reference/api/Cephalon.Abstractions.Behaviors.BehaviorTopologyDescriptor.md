---
title: Class BehaviorTopologyDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviortopologydescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Describes the resolved topology for a single behavior, including its pattern, transports,
feature flags, and shared logical API surface.

```csharp
public sealed class BehaviorTopologyDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorTopologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviortopologydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor__ctor_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Boolean_System_Boolean_System_Boolean_Cephalon_Abstractions_Behaviors_BehaviorApiSurfaceDescriptor_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> BehaviorTopologyDescriptor\(string, string, IReadOnlyList<string\>, bool, bool, bool, BehaviorApiSurfaceDescriptor?, string?, string?, IReadOnlyList<string\>?, string?, IReadOnlyDictionary<string, string\>?\)

Initializes a new instance of <xref href="Cephalon.Abstractions.Behaviors.BehaviorTopologyDescriptor" data-throw-if-not-resolved="false"></xref>.

```csharp
public BehaviorTopologyDescriptor(string id, string pattern, IReadOnlyList<string> transportIds, bool inboxEnabled = false, bool outboxEnabled = false, bool eventSourcingEnabled = false, BehaviorApiSurfaceDescriptor? apiSurface = null, string? displayName = null, string? description = null, IReadOnlyList<string>? requiredFeatureFlagIds = null, string? sourceModuleId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

`transportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`inboxEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`outboxEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`eventSourcingEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`apiSurface` [BehaviorApiSurfaceDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorapisurfacedescriptor/)?

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`requiredFeatureFlagIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

## Properties

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_ApiSurface"></a> ApiSurface

Gets the logical public API surface projected by route-shaped transport adapters.

```csharp
public BehaviorApiSurfaceDescriptor ApiSurface { get; }
```

#### Property Value

 [BehaviorApiSurfaceDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorapisurfacedescriptor/)

#### Remarks

When no explicit API surface is supplied, the descriptor derives one from the behavior
identifier so route-shaped transports can project canonical paths without hard-coding the
behavior id into every transport binding.

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_Description"></a> Description

Gets the optional description.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_DisplayName"></a> DisplayName

Gets the optional display name.

```csharp
public string? DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_EventSourcingEnabled"></a> EventSourcingEnabled

Gets a value indicating whether event sourcing is wired into the behavior context.

```csharp
public bool EventSourcingEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_Id"></a> Id

Gets the behavior identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_InboxEnabled"></a> InboxEnabled

Gets a value indicating whether inbox deduplication is enabled.

```csharp
public bool InboxEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_Metadata"></a> Metadata

Gets additional metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_OutboxEnabled"></a> OutboxEnabled

Gets a value indicating whether outbox staging is enabled.

```csharp
public bool OutboxEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_Pattern"></a> Pattern

Gets the pattern identifier (e.g. "cqrs", "event-driven", "saga-step", "saga-choreography", "process-manager", "durable-execution", "direct").

```csharp
public string Pattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_RequiredFeatureFlagIds"></a> RequiredFeatureFlagIds

Gets the ordered feature-flag identifiers that must resolve to enabled before the behavior
can execute.

```csharp
public IReadOnlyList<string> RequiredFeatureFlagIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_SourceModuleId"></a> SourceModuleId

Gets the module identifier that owns this behavior when ownership is known at runtime.

```csharp
public string? SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_TransportIds"></a> TransportIds

Gets the transport identifiers configured for this behavior.

```csharp
public IReadOnlyList<string> TransportIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
