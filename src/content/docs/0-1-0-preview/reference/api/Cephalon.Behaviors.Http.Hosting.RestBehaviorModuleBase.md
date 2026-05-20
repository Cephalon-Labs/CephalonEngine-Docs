---
title: Class RestBehaviorModuleBase
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-restbehaviormodulebase
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Hosting](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting/)  
Assembly: Cephalon.Behaviors.Http.dll  

Base class for modules that own behaviors and expose a public REST surface for some of them.

```csharp
public abstract class RestBehaviorModuleBase : BehaviorModuleBase, IModuleLifecycle, IBehaviorOwnerModule, IRestModule, IModule
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ModuleBase ← 
BehaviorModuleBase ← 
[RestBehaviorModuleBase](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-restbehaviormodulebase/)

#### Implements

IModuleLifecycle, 
IBehaviorOwnerModule, 
[IRestModule](/0-1-0-preview/reference/api/cephalon-aspnetcore-transports-rest-irestmodule/), 
IModule

#### Inherited Members

BehaviorModuleBase.ConfigureBehaviors\(IBehaviorModuleBuilder\), 
ModuleBase.Descriptor, 
ModuleBase.ConfigureServices\(IServiceCollection\), 
ModuleBase.RegisterCapabilities\(ICapabilityRegistry\), 
ModuleBase.InitializeAsync\(ModuleContext, CancellationToken\), 
ModuleBase.StartAsync\(ModuleContext, CancellationToken\), 
ModuleBase.StopAsync\(ModuleContext, CancellationToken\), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

<p>
This base class keeps behavior ownership host-agnostic through <xref href="Cephalon.Behaviors.Modules.BehaviorModuleBase" data-throw-if-not-resolved="false"></xref>
while moving the common REST authoring path into a single REST-focused DSL. Behaviors mapped
through <xref href="Cephalon.Behaviors.Http.Hosting.RestBehaviorModuleBase.ConfigureRestBehaviors(Cephalon.Behaviors.Http.Hosting.IRestBehaviorModuleBuilder)" data-throw-if-not-resolved="false"></xref> are owned by the module
automatically, which removes the need to declare the same public behavior in both
<code>ConfigureBehaviors(...)</code> and <code>MapEndpoints(...)</code>.
</p>
<p>
Use <xref href="Cephalon.Behaviors.Modules.BehaviorModuleBase" data-throw-if-not-resolved="false"></xref> instead when a module owns behaviors but does not expose
a public REST surface. Use <xref href="Cephalon.Behaviors.Http.Hosting.RestBehaviorModuleBase.MapAdditionalEndpoints(Microsoft.AspNetCore.Routing.IEndpointRouteBuilder)" data-throw-if-not-resolved="false"></xref> only for
advanced/custom Minimal API work that falls outside the default REST behavior DSL.
</p>

## Methods

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorModuleBase_ConfigureBehaviors_Cephalon_Abstractions_Behaviors_IBehaviorModuleBuilder_"></a> ConfigureBehaviors\(IBehaviorModuleBuilder\)

Registers the behaviors owned by the current module.

```csharp
public override sealed void ConfigureBehaviors(IBehaviorModuleBuilder behaviors)
```

#### Parameters

`behaviors` IBehaviorModuleBuilder

The module-owned behavior builder.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorModuleBase_ConfigureRestBehaviors_Cephalon_Behaviors_Http_Hosting_IRestBehaviorModuleBuilder_"></a> ConfigureRestBehaviors\(IRestBehaviorModuleBuilder\)

Declares the module-owned behaviors and their public REST surface in one place.

```csharp
public abstract void ConfigureRestBehaviors(IRestBehaviorModuleBuilder behaviors)
```

#### Parameters

`behaviors` [IRestBehaviorModuleBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviormodulebuilder/)

The REST behavior-module builder.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorModuleBase_ConfigureServices_Microsoft_Extensions_DependencyInjection_IServiceCollection_"></a> ConfigureServices\(IServiceCollection\)

Configures services required by the module.

```csharp
public override void ConfigureServices(IServiceCollection services)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection receiving module services.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorModuleBase_GetRestBehaviorProfileSourceType"></a> GetRestBehaviorProfileSourceType\(\)

Gets the marker type used to resolve generated REST profile metadata for the current module.

```csharp
protected virtual Type GetRestBehaviorProfileSourceType()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

The marker type whose assembly Cephalon should treat as the source for generated REST
profile hints when <code>MapGeneratedProfiles(...)</code> or
<code>MapGeneratedProfileGroups(...)</code> is used.

#### Remarks

Most modules should use the default implementation, which points at the concrete module
type itself. Low-code wrappers can override this to point at a stable marker type from the
behavior assembly when the module instance is implemented by a reusable helper type.

### <a id="Cephalon_Behaviors_Http_Hosting_RestBehaviorModuleBase_MapAdditionalEndpoints_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapAdditionalEndpoints\(IEndpointRouteBuilder\)

Adds any advanced/manual Minimal API endpoints that are not covered by the default REST behavior DSL.

```csharp
protected virtual void MapAdditionalEndpoints(IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder receiving additional module endpoints.

#### Remarks

When a custom endpoint still dispatches into a Cephalon behavior, declare ownership first through
<xref href="Cephalon.Behaviors.Http.Hosting.RestBehaviorModuleBase.ConfigureRestBehaviors(Cephalon.Behaviors.Http.Hosting.IRestBehaviorModuleBuilder)" data-throw-if-not-resolved="false"></xref> using
<code>Internal&lt;TBehavior&gt;()</code> so engine composition remains deterministic.
