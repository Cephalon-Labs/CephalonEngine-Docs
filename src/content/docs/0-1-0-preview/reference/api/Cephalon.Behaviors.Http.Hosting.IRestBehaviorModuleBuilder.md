---
title: Interface IRestBehaviorModuleBuilder
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviormodulebuilder
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Hosting](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting/)  
Assembly: Cephalon.Behaviors.Http.dll  

Collects behavior ownership and public REST exposure for a <xref href="Cephalon.Behaviors.Http.Hosting.RestBehaviorModuleBase" data-throw-if-not-resolved="false"></xref>.

```csharp
public interface IRestBehaviorModuleBuilder
```

## Remarks

Public REST behavior routes automatically imply module ownership. Use
<xref href="Cephalon.Behaviors.Http.Hosting.IRestBehaviorModuleBuilder.Internal%60%601" data-throw-if-not-resolved="false"></xref> or
<xref href="Cephalon.Behaviors.Http.Hosting.IRestBehaviorModuleBuilder.Internal%60%601(System.Action%7bCephalon.Abstractions.Behaviors.IBehaviorTopologyBuilder%7d)" data-throw-if-not-resolved="false"></xref> when a module also owns
internal-only behaviors or behaviors that will be exposed through a custom/manual route path.

## Methods

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorModuleBuilder_Group_System_String_"></a> Group\(string\)

Creates a REST route group that can map one or more behavior-backed endpoints.

```csharp
IRestBehaviorEndpointGroupBuilder Group(string prefix)
```

#### Parameters

`prefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The public route prefix relative to the host REST root.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

A builder used to describe the group's public REST endpoints.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorModuleBuilder_GroupFromBehaviorIdPrefix_System_String_"></a> GroupFromBehaviorIdPrefix\(string\)

Creates a REST route group whose public path is derived from a dot-separated behavior-id prefix.

```csharp
IRestBehaviorEndpointGroupBuilder GroupFromBehaviorIdPrefix(string behaviorIdPrefix)
```

#### Parameters

`behaviorIdPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The behavior-id prefix whose segments become the route-group path, such as
<code>showcase.cart</code> becoming <code>/showcase/cart</code>.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

A builder used to describe the group's public REST endpoints.

#### Remarks

Use this helper for the common generated-profile path where the public route group should
mirror the owning behavior-id prefix while remaining an explicit module-owned REST surface.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorModuleBuilder_Internal__1"></a> Internal<TBehavior\>\(\)

Declares that the current REST-capable module owns the specified behavior as an internal or
custom/manual-route behavior without exposing it through the default REST route builder.

```csharp
IRestBehaviorModuleBuilder Internal<TBehavior>() where TBehavior : class
```

#### Returns

 [IRestBehaviorModuleBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviormodulebuilder/)

The same builder for fluent authoring.

#### Type Parameters

`TBehavior` 

The concrete behavior type owned by the module.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorModuleBuilder_Internal__1_System_Action_Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder__"></a> Internal<TBehavior\>\(Action<IBehaviorTopologyBuilder\>\)

Declares that the current REST-capable module owns the specified behavior as an internal or
custom/manual-route behavior and applies an explicit topology override during registration.

```csharp
IRestBehaviorModuleBuilder Internal<TBehavior>(Action<IBehaviorTopologyBuilder> configureTopology) where TBehavior : class
```

#### Parameters

`configureTopology` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IBehaviorTopologyBuilder\>

The explicit topology selection callback.

#### Returns

 [IRestBehaviorModuleBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviormodulebuilder/)

The same builder for fluent authoring.

#### Type Parameters

`TBehavior` 

The concrete behavior type owned by the module.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorModuleBuilder_MapGeneratedProfileGroups_System_String_"></a> MapGeneratedProfileGroups\(string\)

Maps matching generated REST profiles from the owning module assembly into one or more
derived route groups.

```csharp
IRestBehaviorModuleBuilder MapGeneratedProfileGroups(string behaviorIdPrefix)
```

#### Parameters

`behaviorIdPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root behavior-id prefix used to select generated REST profiles from the owning module
assembly.

#### Returns

 [IRestBehaviorModuleBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviormodulebuilder/)

The same builder for fluent authoring.

#### Remarks

This broader low-code opt-in remains explicit and module-owned. Cephalon groups matching
behavior ids by their parent prefix, so behaviors such as <code>showcase.orders.lookup</code> and
<code>showcase.orders.create</code> share one derived route group while
<code>showcase.inventory.lookup</code> lands in another. Use
<xref href="Cephalon.Behaviors.Http.Hosting.IRestBehaviorModuleBuilder.GroupFromBehaviorIdPrefix(System.String)" data-throw-if-not-resolved="false"></xref> plus
<xref href="Cephalon.Behaviors.Http.Hosting.IRestBehaviorEndpointGroupBuilder.MapGeneratedProfiles(System.String)" data-throw-if-not-resolved="false"></xref> when each
generated route group should still be declared manually.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorModuleBuilder_MapGeneratedProfileGroups_System_String_System_Action_Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder__"></a> MapGeneratedProfileGroups\(string, Action<IRestBehaviorEndpointGroupBuilder\>\)

Maps matching generated REST profiles from the owning module assembly into one or more
derived route groups while applying shared group-level conventions.

```csharp
IRestBehaviorModuleBuilder MapGeneratedProfileGroups(string behaviorIdPrefix, Action<IRestBehaviorEndpointGroupBuilder> configureGroup)
```

#### Parameters

`behaviorIdPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root behavior-id prefix used to select generated REST profiles from the owning module
assembly.

`configureGroup` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)\>

The optional callback applied to each derived route group before the generated profiles are
mapped.

#### Returns

 [IRestBehaviorModuleBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviormodulebuilder/)

The same builder for fluent authoring.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorModuleBuilder_MapGeneratedProfileGroups_System_String_System_Action_System_String_Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder__"></a> MapGeneratedProfileGroups\(string, Action<string, IRestBehaviorEndpointGroupBuilder\>\)

Maps matching generated REST profiles from the owning module assembly into one or more
derived route groups while applying per-group conventions with awareness of each derived
generated behavior-id prefix.

```csharp
IRestBehaviorModuleBuilder MapGeneratedProfileGroups(string behaviorIdPrefix, Action<string, IRestBehaviorEndpointGroupBuilder> configureGroup)
```

#### Parameters

`behaviorIdPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root behavior-id prefix used to select generated REST profiles from the owning module
assembly.

`configureGroup` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)\>

The callback applied to each derived route group before the generated profiles are mapped.
The first argument is the derived behavior-id prefix for that route group, such as
<code>showcase.generated.orders</code>.

#### Returns

 [IRestBehaviorModuleBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviormodulebuilder/)

The same builder for fluent authoring.
