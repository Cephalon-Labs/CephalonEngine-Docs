---
title: Class BehaviorCatalog
slug: 0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorcatalog
editUrl: false
---

Namespace: [Cephalon.Behaviors.Services](/0-1-0-preview/reference/api/cephalon-behaviors-services/)  
Assembly: Cephalon.Behaviors.dll  

Exposes the merged set of behavior topology descriptors contributed to the active runtime.
Contributors are discovered via DI enumeration over <xref href="Cephalon.Abstractions.Behaviors.IBehaviorContributor" data-throw-if-not-resolved="false"></xref>.

```csharp
public sealed class BehaviorCatalog : IBehaviorCatalog
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorCatalog](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorcatalog/)

#### Implements

IBehaviorCatalog

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Services_BehaviorCatalog__ctor_System_Collections_Generic_IEnumerable_Cephalon_Abstractions_Behaviors_IBehaviorContributor__"></a> BehaviorCatalog\(IEnumerable<IBehaviorContributor\>\)

Initializes a new <xref href="Cephalon.Behaviors.Services.BehaviorCatalog" data-throw-if-not-resolved="false"></xref> by collecting contributions from all registered contributors.

```csharp
public BehaviorCatalog(IEnumerable<IBehaviorContributor> contributors)
```

#### Parameters

`contributors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IBehaviorContributor\>

The contributors that project behavior topology descriptors.

## Properties

### <a id="Cephalon_Behaviors_Services_BehaviorCatalog_All"></a> All

Gets all registered behavior topology descriptors.

```csharp
public IReadOnlyList<BehaviorTopologyDescriptor> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<BehaviorTopologyDescriptor\>

## Methods

### <a id="Cephalon_Behaviors_Services_BehaviorCatalog_FindById_System_String_"></a> FindById\(string\)

Finds a behavior by identifier (case-insensitive), or returns <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if not found.

```csharp
public BehaviorTopologyDescriptor? FindById(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 BehaviorTopologyDescriptor?

### <a id="Cephalon_Behaviors_Services_BehaviorCatalog_GetByPattern_System_String_"></a> GetByPattern\(string\)

Gets all behaviors registered with the specified pattern.

```csharp
public IReadOnlyList<BehaviorTopologyDescriptor> GetByPattern(string pattern)
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<BehaviorTopologyDescriptor\>

### <a id="Cephalon_Behaviors_Services_BehaviorCatalog_GetByTransport_System_String_"></a> GetByTransport\(string\)

Gets all behaviors registered with the specified transport.

```csharp
public IReadOnlyList<BehaviorTopologyDescriptor> GetByTransport(string transportId)
```

#### Parameters

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<BehaviorTopologyDescriptor\>
