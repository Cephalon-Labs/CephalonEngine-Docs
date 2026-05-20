---
title: Interface IBehaviorCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorcatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Provides read access to all registered behavior topology descriptors.

```csharp
public interface IBehaviorCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorCatalog_All"></a> All

Gets all registered behavior topology descriptors.

```csharp
IReadOnlyList<BehaviorTopologyDescriptor> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BehaviorTopologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviortopologydescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorCatalog_FindById_System_String_"></a> FindById\(string\)

Finds a behavior by identifier (case-insensitive), or returns <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if not found.

```csharp
BehaviorTopologyDescriptor? FindById(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [BehaviorTopologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviortopologydescriptor/)?

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorCatalog_GetByPattern_System_String_"></a> GetByPattern\(string\)

Gets all behaviors registered with the specified pattern.

```csharp
IReadOnlyList<BehaviorTopologyDescriptor> GetByPattern(string pattern)
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BehaviorTopologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviortopologydescriptor/)\>

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorCatalog_GetByTransport_System_String_"></a> GetByTransport\(string\)

Gets all behaviors registered with the specified transport.

```csharp
IReadOnlyList<BehaviorTopologyDescriptor> GetByTransport(string transportId)
```

#### Parameters

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BehaviorTopologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviortopologydescriptor/)\>
