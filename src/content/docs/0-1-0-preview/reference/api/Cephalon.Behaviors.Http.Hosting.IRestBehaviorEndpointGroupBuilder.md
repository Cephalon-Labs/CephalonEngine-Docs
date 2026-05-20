---
title: Interface IRestBehaviorEndpointGroupBuilder
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Hosting](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting/)  
Assembly: Cephalon.Behaviors.Http.dll  

Describes one public REST route group backed by Cephalon behaviors.

```csharp
public interface IRestBehaviorEndpointGroupBuilder
```

## Remarks

Mapping a behavior through this contract automatically declares module ownership for that
behavior. Use <xref href="Cephalon.Behaviors.Http.Hosting.IRestBehaviorModuleBuilder.Internal%60%601" data-throw-if-not-resolved="false"></xref> when a behavior
should remain internal-only or when the module needs a custom/manual endpoint mapping path.

## Methods

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_AllowHostGovernance"></a> AllowHostGovernance\(\)

Opts explicit module-DSL endpoints in this route group into host-level REST governance.

```csharp
IRestBehaviorEndpointGroupBuilder AllowHostGovernance()
```

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent configuration.

#### Remarks

Descriptor-backed shorthand routes published through <xref href="Cephalon.Behaviors.Http.Hosting.IRestBehaviorEndpointGroupBuilder.MapProfile%60%601(System.Action%7bMicrosoft.AspNetCore.Builder.RouteHandlerBuilder%7d)" data-throw-if-not-resolved="false"></xref>
and <xref href="Cephalon.Behaviors.Http.Hosting.IRestBehaviorEndpointGroupBuilder.MapGeneratedProfiles" data-throw-if-not-resolved="false"></xref> already participate in host-level suppression and
override rules. This opt-in only makes explicit <code>MapGet</code>/<code>MapPost</code>/<code>MapPut</code>/<code>MapPatch</code>/<code>MapDelete</code>
module-DSL endpoints governable by host-level <code>RestApi:Suppressions</code> and <code>RestApi:Overrides</code>.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_ApiVersion_System_Int32_"></a> ApiVersion\(int\)

Assigns the route group to the supplied public API major version.

```csharp
IRestBehaviorEndpointGroupBuilder ApiVersion(int major)
```

#### Parameters

`major` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The public API major version.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent configuration.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_Configure_System_Action_Microsoft_AspNetCore_Routing_RouteGroupBuilder__"></a> Configure\(Action<RouteGroupBuilder\>\)

Applies additional Minimal API route-group conventions when the group is materialized.

```csharp
IRestBehaviorEndpointGroupBuilder Configure(Action<RouteGroupBuilder> configure)
```

#### Parameters

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteGroupBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.routegroupbuilder)\>

The callback that can add route-group conventions.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent configuration.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_MapDelete__1_System_String_System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapDelete<TBehavior\>\(string, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>DELETE</code> endpoint that dispatches into the specified behavior.

```csharp
IRestBehaviorEndpointGroupBuilder MapDelete<TBehavior>(string pattern, Action<RouteHandlerBuilder>? configureEndpoint = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configureEndpoint` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional endpoint-level Minimal API customization.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent route composition.

#### Type Parameters

`TBehavior` 

The behavior type to expose.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_MapDelete__1_System_String_System_Action_Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder__System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapDelete<TBehavior\>\(string, Action<IBehaviorTopologyBuilder\>, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>DELETE</code> endpoint that dispatches into the specified behavior and applies an
explicit topology override while registering ownership.

```csharp
IRestBehaviorEndpointGroupBuilder MapDelete<TBehavior>(string pattern, Action<IBehaviorTopologyBuilder> configureTopology, Action<RouteHandlerBuilder>? configureEndpoint = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configureTopology` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IBehaviorTopologyBuilder\>

The explicit topology selection callback.

`configureEndpoint` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional endpoint-level Minimal API customization.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent route composition.

#### Type Parameters

`TBehavior` 

The behavior type to expose.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_MapGeneratedProfiles"></a> MapGeneratedProfiles\(\)

Maps all generated REST profiles from the owning module assembly whose behavior ids match the
route-group prefix convention.

```csharp
IRestBehaviorEndpointGroupBuilder MapGeneratedProfiles()
```

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent route composition.

#### Remarks

<p>
This is an explicit module-owned low-code opt-in. It never publishes public REST from
<code>[AppBehavior]</code> alone.
</p>
<p>
Cephalon derives the behavior-id prefix from the group prefix by trimming leading and
trailing slashes and replacing remaining <code>/</code> separators with <code>.</code>. Use
<xref href="Cephalon.Behaviors.Http.Hosting.IRestBehaviorEndpointGroupBuilder.MapGeneratedProfiles(System.String)" data-throw-if-not-resolved="false"></xref> when behavior ids do not follow that convention.
</p>

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_MapGeneratedProfiles_System_String_"></a> MapGeneratedProfiles\(string\)

Maps all generated REST profiles from the owning module assembly whose behavior ids match the
supplied behavior-id prefix.

```csharp
IRestBehaviorEndpointGroupBuilder MapGeneratedProfiles(string behaviorIdPrefix)
```

#### Parameters

`behaviorIdPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The behavior-id prefix used to select generated REST profiles from the owning module assembly.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent route composition.

#### Remarks

This is an explicit module-owned low-code opt-in. It prefers source-generated REST profile
hints and keeps generated routes in the same normalized projection and precedence pipeline as
the rest of the REST DSL.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_MapGet__1_System_String_System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapGet<TBehavior\>\(string, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>GET</code> endpoint that dispatches into the specified behavior.

```csharp
IRestBehaviorEndpointGroupBuilder MapGet<TBehavior>(string pattern, Action<RouteHandlerBuilder>? configureEndpoint = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configureEndpoint` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional endpoint-level Minimal API customization.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent route composition.

#### Type Parameters

`TBehavior` 

The behavior type to expose.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_MapGet__1_System_String_System_Action_Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder__System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapGet<TBehavior\>\(string, Action<IBehaviorTopologyBuilder\>, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>GET</code> endpoint that dispatches into the specified behavior and applies an
explicit topology override while registering ownership.

```csharp
IRestBehaviorEndpointGroupBuilder MapGet<TBehavior>(string pattern, Action<IBehaviorTopologyBuilder> configureTopology, Action<RouteHandlerBuilder>? configureEndpoint = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configureTopology` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IBehaviorTopologyBuilder\>

The explicit topology selection callback.

`configureEndpoint` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional endpoint-level Minimal API customization.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent route composition.

#### Type Parameters

`TBehavior` 

The behavior type to expose.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_MapPatch__1_System_String_System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapPatch<TBehavior\>\(string, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>PATCH</code> endpoint that dispatches into the specified behavior.

```csharp
IRestBehaviorEndpointGroupBuilder MapPatch<TBehavior>(string pattern, Action<RouteHandlerBuilder>? configureEndpoint = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configureEndpoint` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional endpoint-level Minimal API customization.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent route composition.

#### Type Parameters

`TBehavior` 

The behavior type to expose.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_MapPatch__1_System_String_System_Action_Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder__System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapPatch<TBehavior\>\(string, Action<IBehaviorTopologyBuilder\>, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>PATCH</code> endpoint that dispatches into the specified behavior and applies an
explicit topology override while registering ownership.

```csharp
IRestBehaviorEndpointGroupBuilder MapPatch<TBehavior>(string pattern, Action<IBehaviorTopologyBuilder> configureTopology, Action<RouteHandlerBuilder>? configureEndpoint = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configureTopology` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IBehaviorTopologyBuilder\>

The explicit topology selection callback.

`configureEndpoint` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional endpoint-level Minimal API customization.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent route composition.

#### Type Parameters

`TBehavior` 

The behavior type to expose.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_MapPost__1_System_String_System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapPost<TBehavior\>\(string, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>POST</code> endpoint that dispatches into the specified behavior.

```csharp
IRestBehaviorEndpointGroupBuilder MapPost<TBehavior>(string pattern, Action<RouteHandlerBuilder>? configureEndpoint = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configureEndpoint` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional endpoint-level Minimal API customization.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent route composition.

#### Type Parameters

`TBehavior` 

The behavior type to expose.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_MapPost__1_System_String_System_Action_Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder__System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapPost<TBehavior\>\(string, Action<IBehaviorTopologyBuilder\>, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>POST</code> endpoint that dispatches into the specified behavior and applies an
explicit topology override while registering ownership.

```csharp
IRestBehaviorEndpointGroupBuilder MapPost<TBehavior>(string pattern, Action<IBehaviorTopologyBuilder> configureTopology, Action<RouteHandlerBuilder>? configureEndpoint = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configureTopology` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IBehaviorTopologyBuilder\>

The explicit topology selection callback.

`configureEndpoint` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional endpoint-level Minimal API customization.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent route composition.

#### Type Parameters

`TBehavior` 

The behavior type to expose.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_MapProfile__1_System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapProfile<TBehavior\>\(Action<RouteHandlerBuilder\>?\)

Maps a REST endpoint by consuming the metadata-only REST profile declared on the specified behavior.

```csharp
IRestBehaviorEndpointGroupBuilder MapProfile<TBehavior>(Action<RouteHandlerBuilder>? configureEndpoint = null) where TBehavior : class
```

#### Parameters

`configureEndpoint` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional endpoint-level Minimal API customization.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent route composition.

#### Type Parameters

`TBehavior` 

The behavior type to expose through the owning module.

#### Remarks

The owning module still controls the public group prefix, tags, and published OpenAPI documents.
The behavior profile contributes only the candidate method, relative pattern, and optional API
major version metadata.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_MapProfile__1_System_Action_Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder__System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapProfile<TBehavior\>\(Action<IBehaviorTopologyBuilder\>, Action<RouteHandlerBuilder\>?\)

Maps a REST endpoint by consuming the metadata-only REST profile declared on the specified behavior
while applying an explicit topology override during ownership registration.

```csharp
IRestBehaviorEndpointGroupBuilder MapProfile<TBehavior>(Action<IBehaviorTopologyBuilder> configureTopology, Action<RouteHandlerBuilder>? configureEndpoint = null) where TBehavior : class
```

#### Parameters

`configureTopology` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IBehaviorTopologyBuilder\>

The explicit topology selection callback.

`configureEndpoint` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional endpoint-level Minimal API customization.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent route composition.

#### Type Parameters

`TBehavior` 

The behavior type to expose through the owning module.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_MapPut__1_System_String_System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapPut<TBehavior\>\(string, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>PUT</code> endpoint that dispatches into the specified behavior.

```csharp
IRestBehaviorEndpointGroupBuilder MapPut<TBehavior>(string pattern, Action<RouteHandlerBuilder>? configureEndpoint = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configureEndpoint` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional endpoint-level Minimal API customization.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent route composition.

#### Type Parameters

`TBehavior` 

The behavior type to expose.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_MapPut__1_System_String_System_Action_Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder__System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapPut<TBehavior\>\(string, Action<IBehaviorTopologyBuilder\>, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>PUT</code> endpoint that dispatches into the specified behavior and applies an
explicit topology override while registering ownership.

```csharp
IRestBehaviorEndpointGroupBuilder MapPut<TBehavior>(string pattern, Action<IBehaviorTopologyBuilder> configureTopology, Action<RouteHandlerBuilder>? configureEndpoint = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configureTopology` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IBehaviorTopologyBuilder\>

The explicit topology selection callback.

`configureEndpoint` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional endpoint-level Minimal API customization.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent route composition.

#### Type Parameters

`TBehavior` 

The behavior type to expose.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_WithHostGovernanceScope_System_String_"></a> WithHostGovernanceScope\(string\)

Tags the route group with a stable host-governance scope that suppression and override
selectors can target without changing the authored route shape.

```csharp
IRestBehaviorEndpointGroupBuilder WithHostGovernanceScope(string hostGovernanceScope)
```

#### Parameters

`hostGovernanceScope` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable host-governance scope for the authored route group.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent configuration.

#### Remarks

This scope contributes additional original-projection selector truth, but it does not opt
explicit module-DSL endpoints into host governance by itself. Use
<xref href="Cephalon.Behaviors.Http.Hosting.IRestBehaviorEndpointGroupBuilder.AllowHostGovernance" data-throw-if-not-resolved="false"></xref> when explicit module-DSL endpoints should allow host
governance to participate.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_WithOpenApiDocumentName_System_String_"></a> WithOpenApiDocumentName\(string\)

Overrides the published OpenAPI document name for the route group.

```csharp
IRestBehaviorEndpointGroupBuilder WithOpenApiDocumentName(string openApiDocumentName)
```

#### Parameters

`openApiDocumentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The OpenAPI document name to publish.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent configuration.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_WithTagDescription_System_String_"></a> WithTagDescription\(string?\)

Overrides the published OpenAPI tag description for the route group.

```csharp
IRestBehaviorEndpointGroupBuilder WithTagDescription(string? description)
```

#### Parameters

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tag description to publish. Pass <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> to clear it.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent configuration.

### <a id="Cephalon_Behaviors_Http_Hosting_IRestBehaviorEndpointGroupBuilder_WithTagName_System_String_"></a> WithTagName\(string\)

Overrides the published OpenAPI tag name for the route group.

```csharp
IRestBehaviorEndpointGroupBuilder WithTagName(string tagName)
```

#### Parameters

`tagName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tag name to publish.

#### Returns

 [IRestBehaviorEndpointGroupBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-irestbehaviorendpointgroupbuilder/)

The same group builder for fluent configuration.
