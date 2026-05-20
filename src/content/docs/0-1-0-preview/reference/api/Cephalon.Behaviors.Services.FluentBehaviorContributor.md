---
title: Class FluentBehaviorContributor
slug: 0-1-0-preview/reference/api/cephalon-behaviors-services-fluentbehaviorcontributor
editUrl: false
---

Namespace: [Cephalon.Behaviors.Services](/0-1-0-preview/reference/api/cephalon-behaviors-services/)  
Assembly: Cephalon.Behaviors.dll  

A behavior contributor that carries a topology descriptor built via fluent DI registration.
This contributor represents Layer 4 (highest priority) in the topology resolution chain.

```csharp
public sealed class FluentBehaviorContributor : IBehaviorContributor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FluentBehaviorContributor](/0-1-0-preview/reference/api/cephalon-behaviors-services-fluentbehaviorcontributor/)

#### Implements

IBehaviorContributor

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Services_FluentBehaviorContributor__ctor_Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_"></a> FluentBehaviorContributor\(BehaviorTopologyDescriptor\)

Initializes the contributor with the pre-built topology descriptor.

```csharp
public FluentBehaviorContributor(BehaviorTopologyDescriptor descriptor)
```

#### Parameters

`descriptor` BehaviorTopologyDescriptor

The behavior topology descriptor to contribute.

## Methods

### <a id="Cephalon_Behaviors_Services_FluentBehaviorContributor_Contribute"></a> Contribute\(\)

Returns the single behavior topology descriptor carried by this contributor.

```csharp
public IReadOnlyList<BehaviorTopologyDescriptor> Contribute()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<BehaviorTopologyDescriptor\>

The contributed descriptor.
