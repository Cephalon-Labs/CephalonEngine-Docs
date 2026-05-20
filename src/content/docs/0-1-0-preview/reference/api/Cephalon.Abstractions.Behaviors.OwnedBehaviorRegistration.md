---
title: Class OwnedBehaviorRegistration
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ownedbehaviorregistration
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Describes one explicit module-owned behavior registration collected during engine composition.

```csharp
public sealed class OwnedBehaviorRegistration
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OwnedBehaviorRegistration](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ownedbehaviorregistration/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Behaviors_OwnedBehaviorRegistration__ctor_System_String_System_String_System_Type_System_Action_Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder__"></a> OwnedBehaviorRegistration\(string, string, Type, Action<IBehaviorTopologyBuilder\>?\)

Initializes a new <xref href="Cephalon.Abstractions.Behaviors.OwnedBehaviorRegistration" data-throw-if-not-resolved="false"></xref>.

```csharp
public OwnedBehaviorRegistration(string sourceModuleId, string behaviorId, Type behaviorType, Action<IBehaviorTopologyBuilder>? configureTopology = null)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable module identifier that owns the behavior.

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier.

`behaviorType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The concrete behavior implementation type.

`configureTopology` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)\>?

An optional topology callback used when the owning module needs to select an explicit behavior topology.

## Properties

### <a id="Cephalon_Abstractions_Behaviors_OwnedBehaviorRegistration_BehaviorId"></a> BehaviorId

Gets the stable behavior identifier.

```csharp
public string BehaviorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_OwnedBehaviorRegistration_BehaviorType"></a> BehaviorType

Gets the concrete behavior implementation type.

```csharp
public Type BehaviorType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="Cephalon_Abstractions_Behaviors_OwnedBehaviorRegistration_ConfigureTopology"></a> ConfigureTopology

Gets the optional topology callback supplied by the owning module.

```csharp
public Action<IBehaviorTopologyBuilder>? ConfigureTopology { get; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)\>?

### <a id="Cephalon_Abstractions_Behaviors_OwnedBehaviorRegistration_SourceModuleId"></a> SourceModuleId

Gets the stable module identifier that owns the behavior.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
