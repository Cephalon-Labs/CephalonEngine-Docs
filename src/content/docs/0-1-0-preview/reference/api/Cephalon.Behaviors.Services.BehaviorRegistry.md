---
title: Class BehaviorRegistry
slug: 0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorregistry
editUrl: false
---

Namespace: [Cephalon.Behaviors.Services](/0-1-0-preview/reference/api/cephalon-behaviors-services/)  
Assembly: Cephalon.Behaviors.dll  

Simple list-backed registry that collects <xref href="Cephalon.Abstractions.Behaviors.BehaviorTopologyDescriptor" data-throw-if-not-resolved="false"></xref> instances from contributors.

```csharp
public sealed class BehaviorRegistry : IBehaviorRegistry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-services-behaviorregistry/)

#### Implements

IBehaviorRegistry

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Services_BehaviorRegistry__ctor"></a> BehaviorRegistry\(\)

Initializes a new instance of <xref href="Cephalon.Behaviors.Services.BehaviorRegistry" data-throw-if-not-resolved="false"></xref>.

```csharp
public BehaviorRegistry()
```

## Methods

### <a id="Cephalon_Behaviors_Services_BehaviorRegistry_Add_Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_"></a> Add\(BehaviorTopologyDescriptor\)

Adds a behavior topology descriptor to the registry.

```csharp
public void Add(BehaviorTopologyDescriptor descriptor)
```

#### Parameters

`descriptor` BehaviorTopologyDescriptor

### <a id="Cephalon_Behaviors_Services_BehaviorRegistry_GetAll"></a> GetAll\(\)

Returns a snapshot of all currently registered descriptors.

```csharp
public IReadOnlyList<BehaviorTopologyDescriptor> GetAll()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<BehaviorTopologyDescriptor\>
