---
title: Class RestBehaviorEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-restbehaviorenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Hosting](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting/)  
Assembly: Cephalon.Behaviors.Http.dll  

Extends <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref> with low-code registration for module-owned REST behavior modules.

```csharp
public static class RestBehaviorEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestBehaviorEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-restbehaviorenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorEngineBuilderExtensions_AddGeneratedRestBehaviorModule__1_Cephalon_Engine_Composition_EngineBuilder_Cephalon_Abstractions_Modules_ModuleDescriptor_System_Action_Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder__"></a> AddGeneratedRestBehaviorModule<TMarker\>\(EngineBuilder, ModuleDescriptor, Action<IRestBehaviorEndpointGroupBuilder\>?\)

Adds a low-code generated REST module whose generated behavior-id prefix is the inline
module descriptor id.

```csharp
public static EngineBuilder AddGeneratedRestBehaviorModule<TMarker>(this EngineBuilder engine, ModuleDescriptor descriptor, Action<IRestBehaviorEndpointGroupBuilder>? configureGroup = null)
```

#### Parameters

`engine` EngineBuilder

The engine builder to extend.

`descriptor` ModuleDescriptor

The descriptor that identifies the inline module. <xref href="Cephalon.Abstractions.Modules.ModuleDescriptor.Id" data-throw-if-not-resolved="false"></xref> must
also be a valid dot-separated generated behavior-id prefix.

`configureGroup` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)\>?

An optional callback that applies group-level conventions such as <code>ApiVersion(...)</code> or
<code>WithTagName(...)</code> before the generated profiles are mapped.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Type Parameters

`TMarker` 

A stable marker type from the module's behavior assembly. Cephalon uses this marker both to
create a distinct module type for engine validation and to resolve generated REST profile
hints from the correct assembly.

#### Remarks

Use this overload when the inline module id already matches the generated behavior-id
prefix the module should own. When the module id and generated prefix should differ, use
<xref href="Cephalon.Behaviors.Http.Hosting.RestBehaviorEngineBuilderExtensions.AddGeneratedRestBehaviorModule%60%601(Cephalon.Engine.Composition.EngineBuilder%2cCephalon.Abstractions.Modules.ModuleDescriptor%2cSystem.String%2cSystem.Action%7bCephalon.Behaviors.Http.Hosting.IRestBehaviorEndpointGroupBuilder%7d)" data-throw-if-not-resolved="false"></xref>
explicitly. This helper still creates a real module and still never publishes public REST
from <code>[AppBehavior]</code> alone.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorEngineBuilderExtensions_AddGeneratedRestBehaviorModule__1_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_String_System_Action_Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder__System_String_"></a> AddGeneratedRestBehaviorModule<TMarker\>\(EngineBuilder, string, string, string, Action<IRestBehaviorEndpointGroupBuilder\>?, string?\)

Adds a low-code generated REST module whose generated behavior-id prefix is the inline
module id.

```csharp
public static EngineBuilder AddGeneratedRestBehaviorModule<TMarker>(this EngineBuilder engine, string moduleId, string displayName, string description, Action<IRestBehaviorEndpointGroupBuilder>? configureGroup = null, string? version = null)
```

#### Parameters

`engine` EngineBuilder

The engine builder to extend.

`moduleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable module identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable module name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module description.

`configureGroup` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)\>?

An optional callback that applies group-level conventions such as <code>ApiVersion(...)</code> or
<code>WithTagName(...)</code> before the generated profiles are mapped.

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared module version, when one is available.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Type Parameters

`TMarker` 

A stable marker type from the module's behavior assembly. Cephalon uses this marker both to
create a distinct module type for engine validation and to resolve generated REST profile
hints from the correct assembly.

#### Remarks

Use this overload when the module id already matches the generated behavior-id prefix the
inline module should own. When the module needs explicit dependency, tag, or metadata
declarations, use the descriptor-based overload explicitly.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorEngineBuilderExtensions_AddGeneratedRestBehaviorModule__1_Cephalon_Engine_Composition_EngineBuilder_Cephalon_Abstractions_Modules_ModuleDescriptor_System_String_System_Action_Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder__"></a> AddGeneratedRestBehaviorModule<TMarker\>\(EngineBuilder, ModuleDescriptor, string, Action<IRestBehaviorEndpointGroupBuilder\>?\)

Adds a low-code generated REST module whose public route-group path is derived from a
dot-separated behavior-id prefix.

```csharp
public static EngineBuilder AddGeneratedRestBehaviorModule<TMarker>(this EngineBuilder engine, ModuleDescriptor descriptor, string behaviorIdPrefix, Action<IRestBehaviorEndpointGroupBuilder>? configureGroup = null)
```

#### Parameters

`engine` EngineBuilder

The engine builder to extend.

`descriptor` ModuleDescriptor

The descriptor that identifies the inline module.

`behaviorIdPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The dot-separated behavior-id prefix whose segments become the route-group path. For
example, <code>showcase.cart</code> becomes <code>/showcase/cart</code>.

`configureGroup` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)\>?

An optional callback that applies group-level conventions such as <code>ApiVersion(...)</code> or
<code>WithTagName(...)</code> before the generated profiles are mapped.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Type Parameters

`TMarker` 

A stable marker type from the module's behavior assembly. Cephalon uses this marker both to
create a distinct module type for engine validation and to resolve generated REST profile
hints from the correct assembly.

#### Remarks

This helper still creates a real module and still maps through the same generated-profile
projection, precedence, governance, and runtime-catalog pipeline as
<xref href="Cephalon.Behaviors.Http.Hosting.RestBehaviorEngineBuilderExtensions.AddRestBehaviorModule%60%601(Cephalon.Engine.Composition.EngineBuilder%2cCephalon.Abstractions.Modules.ModuleDescriptor%2cSystem.Action%7bCephalon.Behaviors.Http.Hosting.IRestBehaviorModuleBuilder%7d)" data-throw-if-not-resolved="false"></xref>.
It does not publish public REST from <code>[AppBehavior]</code> alone.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorEngineBuilderExtensions_AddGeneratedRestBehaviorModule__1_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_String_System_String_System_Action_Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder__System_String_"></a> AddGeneratedRestBehaviorModule<TMarker\>\(EngineBuilder, string, string, string, string, Action<IRestBehaviorEndpointGroupBuilder\>?, string?\)

Adds a low-code generated REST module whose public route-group path is derived from a
dot-separated behavior-id prefix without requiring a manually constructed
<xref href="Cephalon.Abstractions.Modules.ModuleDescriptor" data-throw-if-not-resolved="false"></xref>.

```csharp
public static EngineBuilder AddGeneratedRestBehaviorModule<TMarker>(this EngineBuilder engine, string moduleId, string displayName, string description, string behaviorIdPrefix, Action<IRestBehaviorEndpointGroupBuilder>? configureGroup = null, string? version = null)
```

#### Parameters

`engine` EngineBuilder

The engine builder to extend.

`moduleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable module identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable module name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module description.

`behaviorIdPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The dot-separated behavior-id prefix whose segments become the route-group path. For
example, <code>showcase.cart</code> becomes <code>/showcase/cart</code>.

`configureGroup` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)\>?

An optional callback that applies group-level conventions such as <code>ApiVersion(...)</code> or
<code>WithTagName(...)</code> before the generated profiles are mapped.

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared module version, when one is available.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Type Parameters

`TMarker` 

A stable marker type from the module's behavior assembly. Cephalon uses this marker both to
create a distinct module type for engine validation and to resolve generated REST profile
hints from the correct assembly.

#### Remarks

Use this overload when the inline module should keep the low-ceremony string-based module
descriptor path but its module id and generated behavior-id prefix should differ. When the
module needs explicit dependency, tag, or metadata declarations, use the descriptor-based
overload explicitly.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorEngineBuilderExtensions_AddGeneratedRestBehaviorModuleGroups__1_Cephalon_Engine_Composition_EngineBuilder_Cephalon_Abstractions_Modules_ModuleDescriptor_System_Action_Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder__"></a> AddGeneratedRestBehaviorModuleGroups<TMarker\>\(EngineBuilder, ModuleDescriptor, Action<IRestBehaviorEndpointGroupBuilder\>?\)

Adds a low-code generated REST module that fans one generated behavior-id root prefix out
into several derived route groups while reusing the descriptor id as the generated prefix.

```csharp
public static EngineBuilder AddGeneratedRestBehaviorModuleGroups<TMarker>(this EngineBuilder engine, ModuleDescriptor descriptor, Action<IRestBehaviorEndpointGroupBuilder>? configureGroup = null)
```

#### Parameters

`engine` EngineBuilder

The engine builder to extend.

`descriptor` ModuleDescriptor

The descriptor that identifies the inline module. <xref href="Cephalon.Abstractions.Modules.ModuleDescriptor.Id" data-throw-if-not-resolved="false"></xref> must
also be a valid dot-separated generated behavior-id prefix.

`configureGroup` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)\>?

An optional callback that applies shared group-level conventions such as
<code>ApiVersion(...)</code>, <code>WithTagName(...)</code>, or <code>WithHostGovernanceScope(...)</code> to
each derived route group before the generated profiles are mapped.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Type Parameters

`TMarker` 

A stable marker type from the module's behavior assembly. Cephalon uses this marker both to
create a distinct module type for engine validation and to resolve generated REST profile
hints from the correct assembly.

#### Remarks

Use this overload when the inline module id already matches the generated root prefix whose
parent segments should become several owned public route groups. When module identity and
generated ownership prefix should differ, use
<xref href="Cephalon.Behaviors.Http.Hosting.RestBehaviorEngineBuilderExtensions.AddGeneratedRestBehaviorModuleGroups%60%601(Cephalon.Engine.Composition.EngineBuilder%2cCephalon.Abstractions.Modules.ModuleDescriptor%2cSystem.String%2cSystem.Action%7bCephalon.Behaviors.Http.Hosting.IRestBehaviorEndpointGroupBuilder%7d)" data-throw-if-not-resolved="false"></xref>
explicitly. This helper still creates a real module and still never publishes public REST
from <code>[AppBehavior]</code> alone.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorEngineBuilderExtensions_AddGeneratedRestBehaviorModuleGroups__1_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_String_System_Action_Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder__System_String_"></a> AddGeneratedRestBehaviorModuleGroups<TMarker\>\(EngineBuilder, string, string, string, Action<IRestBehaviorEndpointGroupBuilder\>?, string?\)

Adds a low-code generated REST module that fans one generated behavior-id root prefix out
into several derived route groups while reusing the inline module id as the generated
prefix.

```csharp
public static EngineBuilder AddGeneratedRestBehaviorModuleGroups<TMarker>(this EngineBuilder engine, string moduleId, string displayName, string description, Action<IRestBehaviorEndpointGroupBuilder>? configureGroup = null, string? version = null)
```

#### Parameters

`engine` EngineBuilder

The engine builder to extend.

`moduleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable module identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable module name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module description.

`configureGroup` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)\>?

An optional callback that applies shared group-level conventions such as
<code>ApiVersion(...)</code>, <code>WithTagName(...)</code>, or <code>WithHostGovernanceScope(...)</code> to
each derived route group before the generated profiles are mapped.

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared module version, when one is available.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Type Parameters

`TMarker` 

A stable marker type from the module's behavior assembly. Cephalon uses this marker both to
create a distinct module type for engine validation and to resolve generated REST profile
hints from the correct assembly.

#### Remarks

Use this overload when the module id already matches the generated root prefix the inline
module should own. When the module needs explicit dependency, tag, or metadata declarations,
use the descriptor-based overload explicitly.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorEngineBuilderExtensions_AddGeneratedRestBehaviorModuleGroups__1_Cephalon_Engine_Composition_EngineBuilder_Cephalon_Abstractions_Modules_ModuleDescriptor_System_String_System_Action_Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder__"></a> AddGeneratedRestBehaviorModuleGroups<TMarker\>\(EngineBuilder, ModuleDescriptor, string, Action<IRestBehaviorEndpointGroupBuilder\>?\)

Adds a low-code generated REST module that fans one generated behavior-id root prefix out
into several derived route groups.

```csharp
public static EngineBuilder AddGeneratedRestBehaviorModuleGroups<TMarker>(this EngineBuilder engine, ModuleDescriptor descriptor, string behaviorIdPrefix, Action<IRestBehaviorEndpointGroupBuilder>? configureGroup = null)
```

#### Parameters

`engine` EngineBuilder

The engine builder to extend.

`descriptor` ModuleDescriptor

The descriptor that identifies the inline module.

`behaviorIdPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root dot-separated behavior-id prefix whose child parent prefixes become the derived
public route groups.

`configureGroup` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)\>?

An optional callback that applies shared group-level conventions such as
<code>ApiVersion(...)</code>, <code>WithTagName(...)</code>, or <code>WithHostGovernanceScope(...)</code> to
each derived route group before the generated profiles are mapped.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Type Parameters

`TMarker` 

A stable marker type from the module's behavior assembly. Cephalon uses this marker both to
create a distinct module type for engine validation and to resolve generated REST profile
hints from the correct assembly.

#### Remarks

This helper still creates a real module and still maps through the same generated
profile-group projection, precedence, governance, and runtime-catalog pipeline as
<xref href="Cephalon.Behaviors.Http.Hosting.IRestBehaviorModuleBuilder.MapGeneratedProfileGroups(System.String)" data-throw-if-not-resolved="false"></xref>. It does not
publish public REST from <code>[AppBehavior]</code> alone.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorEngineBuilderExtensions_AddGeneratedRestBehaviorModuleGroups__1_Cephalon_Engine_Composition_EngineBuilder_Cephalon_Abstractions_Modules_ModuleDescriptor_System_Action_System_String_Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder__"></a> AddGeneratedRestBehaviorModuleGroups<TMarker\>\(EngineBuilder, ModuleDescriptor, Action<string, IRestBehaviorEndpointGroupBuilder\>\)

Adds a low-code generated REST module that fans one generated behavior-id root prefix out
into several derived route groups while applying per-derived-group conventions with
awareness of the derived generated behavior-id prefix.

```csharp
public static EngineBuilder AddGeneratedRestBehaviorModuleGroups<TMarker>(this EngineBuilder engine, ModuleDescriptor descriptor, Action<string, IRestBehaviorEndpointGroupBuilder> configureGroup)
```

#### Parameters

`engine` EngineBuilder

The engine builder to extend.

`descriptor` ModuleDescriptor

The descriptor that identifies the inline module.

`configureGroup` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)\>

The callback applied to each derived route group before the generated profiles are mapped.
The first argument is the derived behavior-id prefix for that route group.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Type Parameters

`TMarker` 

A stable marker type from the module's behavior assembly. Cephalon uses this marker both to
create a distinct module type for engine validation and to resolve generated REST profile
hints from the correct assembly.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorEngineBuilderExtensions_AddGeneratedRestBehaviorModuleGroups__1_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_String_System_Action_System_String_Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder__System_String_"></a> AddGeneratedRestBehaviorModuleGroups<TMarker\>\(EngineBuilder, string, string, string, Action<string, IRestBehaviorEndpointGroupBuilder\>, string?\)

Adds a low-code generated REST module that fans one generated behavior-id root prefix out
into several derived route groups while applying per-derived-group conventions with
awareness of the derived generated behavior-id prefix.

```csharp
public static EngineBuilder AddGeneratedRestBehaviorModuleGroups<TMarker>(this EngineBuilder engine, string moduleId, string displayName, string description, Action<string, IRestBehaviorEndpointGroupBuilder> configureGroup, string? version = null)
```

#### Parameters

`engine` EngineBuilder

The engine builder to extend.

`moduleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable module identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable module name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module description.

`configureGroup` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)\>

The callback applied to each derived route group before the generated profiles are mapped.
The first argument is the derived behavior-id prefix for that route group.

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared module version, when one is available.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Type Parameters

`TMarker` 

A stable marker type from the module's behavior assembly. Cephalon uses this marker both to
create a distinct module type for engine validation and to resolve generated REST profile
hints from the correct assembly.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorEngineBuilderExtensions_AddGeneratedRestBehaviorModuleGroups__1_Cephalon_Engine_Composition_EngineBuilder_Cephalon_Abstractions_Modules_ModuleDescriptor_System_String_System_Action_System_String_Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder__"></a> AddGeneratedRestBehaviorModuleGroups<TMarker\>\(EngineBuilder, ModuleDescriptor, string, Action<string, IRestBehaviorEndpointGroupBuilder\>\)

Adds a low-code generated REST module that fans one generated behavior-id root prefix out
into several derived route groups while applying per-derived-group conventions with
awareness of the derived generated behavior-id prefix.

```csharp
public static EngineBuilder AddGeneratedRestBehaviorModuleGroups<TMarker>(this EngineBuilder engine, ModuleDescriptor descriptor, string behaviorIdPrefix, Action<string, IRestBehaviorEndpointGroupBuilder> configureGroup)
```

#### Parameters

`engine` EngineBuilder

The engine builder to extend.

`descriptor` ModuleDescriptor

The descriptor that identifies the inline module.

`behaviorIdPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root dot-separated behavior-id prefix whose child parent prefixes become the derived
public route groups.

`configureGroup` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)\>

The callback applied to each derived route group before the generated profiles are mapped.
The first argument is the derived behavior-id prefix for that route group.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Type Parameters

`TMarker` 

A stable marker type from the module's behavior assembly. Cephalon uses this marker both to
create a distinct module type for engine validation and to resolve generated REST profile
hints from the correct assembly.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorEngineBuilderExtensions_AddGeneratedRestBehaviorModuleGroups__1_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_String_System_String_System_Action_System_String_Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder__System_String_"></a> AddGeneratedRestBehaviorModuleGroups<TMarker\>\(EngineBuilder, string, string, string, string, Action<string, IRestBehaviorEndpointGroupBuilder\>, string?\)

Adds a low-code generated REST module that fans one generated behavior-id root prefix out
into several derived route groups without requiring a manually constructed
<xref href="Cephalon.Abstractions.Modules.ModuleDescriptor" data-throw-if-not-resolved="false"></xref>, while applying per-derived-group conventions with
awareness of the derived generated behavior-id prefix.

```csharp
public static EngineBuilder AddGeneratedRestBehaviorModuleGroups<TMarker>(this EngineBuilder engine, string moduleId, string displayName, string description, string behaviorIdPrefix, Action<string, IRestBehaviorEndpointGroupBuilder> configureGroup, string? version = null)
```

#### Parameters

`engine` EngineBuilder

The engine builder to extend.

`moduleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable module identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable module name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module description.

`behaviorIdPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root dot-separated behavior-id prefix whose child parent prefixes become the derived
public route groups.

`configureGroup` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)\>

The callback applied to each derived route group before the generated profiles are mapped.
The first argument is the derived behavior-id prefix for that route group.

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared module version, when one is available.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Type Parameters

`TMarker` 

A stable marker type from the module's behavior assembly. Cephalon uses this marker both to
create a distinct module type for engine validation and to resolve generated REST profile
hints from the correct assembly.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorEngineBuilderExtensions_AddGeneratedRestBehaviorModuleGroups__1_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_String_System_String_System_Action_Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder__System_String_"></a> AddGeneratedRestBehaviorModuleGroups<TMarker\>\(EngineBuilder, string, string, string, string, Action<IRestBehaviorEndpointGroupBuilder\>?, string?\)

Adds a low-code generated REST module that fans one generated behavior-id root prefix out
into several derived route groups without requiring a manually constructed
<xref href="Cephalon.Abstractions.Modules.ModuleDescriptor" data-throw-if-not-resolved="false"></xref>.

```csharp
public static EngineBuilder AddGeneratedRestBehaviorModuleGroups<TMarker>(this EngineBuilder engine, string moduleId, string displayName, string description, string behaviorIdPrefix, Action<IRestBehaviorEndpointGroupBuilder>? configureGroup = null, string? version = null)
```

#### Parameters

`engine` EngineBuilder

The engine builder to extend.

`moduleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable module identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable module name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module description.

`behaviorIdPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root dot-separated behavior-id prefix whose child parent prefixes become the derived
public route groups.

`configureGroup` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)\>?

An optional callback that applies shared group-level conventions such as
<code>ApiVersion(...)</code>, <code>WithTagName(...)</code>, or <code>WithHostGovernanceScope(...)</code> to
each derived route group before the generated profiles are mapped.

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared module version, when one is available.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Type Parameters

`TMarker` 

A stable marker type from the module's behavior assembly. Cephalon uses this marker both to
create a distinct module type for engine validation and to resolve generated REST profile
hints from the correct assembly.

#### Remarks

Use this overload when the inline module should keep the low-ceremony string-based module
descriptor path but its module id and generated root prefix should differ. When the module
needs explicit dependency, tag, or metadata declarations, use the descriptor-based overload
explicitly.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorEngineBuilderExtensions_AddRestBehaviorModule__1_Cephalon_Engine_Composition_EngineBuilder_System_String_System_String_System_String_System_Action_Cephalon_Behaviors_Http_Hosting_IRestBehaviorModuleBuilder__System_String_"></a> AddRestBehaviorModule<TMarker\>\(EngineBuilder, string, string, string, Action<IRestBehaviorModuleBuilder\>, string?\)

Adds a low-code behavior-backed REST module without requiring a dedicated
<xref href="Cephalon.Behaviors.Http.Hosting.RestBehaviorModuleBase" data-throw-if-not-resolved="false"></xref> subclass or a manually constructed
<xref href="Cephalon.Abstractions.Modules.ModuleDescriptor" data-throw-if-not-resolved="false"></xref>.

```csharp
public static EngineBuilder AddRestBehaviorModule<TMarker>(this EngineBuilder engine, string moduleId, string displayName, string description, Action<IRestBehaviorModuleBuilder> configureRestBehaviors, string? version = null)
```

#### Parameters

`engine` EngineBuilder

The engine builder to extend.

`moduleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable module identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable module name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module description.

`configureRestBehaviors` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IRestBehaviorModuleBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviormodulebuilder/)\>

The callback that declares owned behaviors and their public REST surface.

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared module version, when one is available.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Type Parameters

`TMarker` 

A stable marker type from the module's behavior assembly. Cephalon uses this marker both to
create a distinct module type for engine validation and to resolve generated REST profile
hints from the correct assembly when <code>MapGeneratedProfiles(...)</code> is used.

#### Remarks

This helper keeps the common inline module path low-ceremony while still materializing a
real module descriptor and using the same projection, precedence, governance, and runtime
catalog pipeline as the descriptor-based overload. When a module needs explicit dependency,
tag, or metadata declarations, use the
<xref href="Cephalon.Behaviors.Http.Hosting.RestBehaviorEngineBuilderExtensions.AddRestBehaviorModule%60%601(Cephalon.Engine.Composition.EngineBuilder%2cCephalon.Abstractions.Modules.ModuleDescriptor%2cSystem.Action%7bCephalon.Behaviors.Http.Hosting.IRestBehaviorModuleBuilder%7d)" data-throw-if-not-resolved="false"></xref>
overload explicitly.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorEngineBuilderExtensions_AddRestBehaviorModule__1_Cephalon_Engine_Composition_EngineBuilder_Cephalon_Abstractions_Modules_ModuleDescriptor_System_Action_Cephalon_Behaviors_Http_Hosting_IRestBehaviorModuleBuilder__"></a> AddRestBehaviorModule<TMarker\>\(EngineBuilder, ModuleDescriptor, Action<IRestBehaviorModuleBuilder\>\)

Adds a low-code behavior-backed REST module without requiring a dedicated
<xref href="Cephalon.Behaviors.Http.Hosting.RestBehaviorModuleBase" data-throw-if-not-resolved="false"></xref> subclass.

```csharp
public static EngineBuilder AddRestBehaviorModule<TMarker>(this EngineBuilder engine, ModuleDescriptor descriptor, Action<IRestBehaviorModuleBuilder> configureRestBehaviors)
```

#### Parameters

`engine` EngineBuilder

The engine builder to extend.

`descriptor` ModuleDescriptor

The descriptor that identifies the inline module.

`configureRestBehaviors` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IRestBehaviorModuleBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviormodulebuilder/)\>

The callback that declares owned behaviors and their public REST surface.

#### Returns

 EngineBuilder

The same engine builder for fluent composition.

#### Type Parameters

`TMarker` 

A stable marker type from the module's behavior assembly. Cephalon uses this marker both to
create a distinct module type for engine validation and to resolve generated REST profile
hints from the correct assembly when <code>MapGeneratedProfiles(...)</code> is used.

#### Remarks

This helper remains explicit and module-owned. It does not publish public REST from
<code>[AppBehavior]</code> alone. Use a dedicated <xref href="Cephalon.Behaviors.Http.Hosting.RestBehaviorModuleBase" data-throw-if-not-resolved="false"></xref> subclass
when a module needs richer lifecycle hooks, custom services, or additional manual endpoints.
Use one stable marker type per inline module so engine module-type validation stays
deterministic.
