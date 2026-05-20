---
title: Class BehaviorRestEndpointGroup
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-behaviorrestendpointgroup
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Hosting](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting/)  
Assembly: Cephalon.Behaviors.Http.dll  

Wraps a Minimal API route group so REST endpoints can dispatch directly into Cephalon behaviors
while keeping module metadata, OpenAPI tags, and version defaults aligned.

```csharp
public sealed class BehaviorRestEndpointGroup : IEndpointConventionBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorRestEndpointGroup](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-behaviorrestendpointgroup/)

#### Implements

[IEndpointConventionBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.iendpointconventionbuilder)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[CephalonRateLimitingEndpointConventionBuilderExtensions.ApplyCephalonRateLimiting<BehaviorRestEndpointGroup\>\(BehaviorRestEndpointGroup, IServiceProvider, string, string?\)](Cephalon.AspNetCore.Hosting.CephalonRateLimitingEndpointConventionBuilderExtensions.md\#Cephalon\_AspNetCore\_Hosting\_CephalonRateLimitingEndpointConventionBuilderExtensions\_ApplyCephalonRateLimiting\_\_1\_\_\_0\_System\_IServiceProvider\_System\_String\_System\_String\_), 
[IdentityEndpointConventionBuilderExtensions.WithCephalonAuthenticationSchemes<BehaviorRestEndpointGroup\>\(BehaviorRestEndpointGroup, params string\[\]\)](Cephalon.Identity.AspNetCore.Transports.Rest.IdentityEndpointConventionBuilderExtensions.md\#Cephalon\_Identity\_AspNetCore\_Transports\_Rest\_IdentityEndpointConventionBuilderExtensions\_WithCephalonAuthenticationSchemes\_\_1\_\_\_0\_System\_String\_\_\_)

## Properties

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_ApiVersionMajor"></a> ApiVersionMajor

Gets the explicit API major version applied to newly mapped endpoints when configured.

```csharp
public int? ApiVersionMajor { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_Module"></a> Module

Gets the module instance that owns the route group.

```csharp
public IModule Module { get; }
```

#### Property Value

 IModule

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_ModuleDescriptor"></a> ModuleDescriptor

Gets the descriptor for the owning module.

```csharp
public ModuleDescriptor ModuleDescriptor { get; }
```

#### Property Value

 ModuleDescriptor

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_ModuleVersionMajor"></a> ModuleVersionMajor

Gets the major version parsed from the module descriptor when available.

```csharp
public int? ModuleVersionMajor { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_OpenApiDocumentName"></a> OpenApiDocumentName

Gets the OpenAPI document name that newly mapped endpoints join by default.

```csharp
public string OpenApiDocumentName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_Routes"></a> Routes

Gets the underlying Minimal API route group.

```csharp
public RouteGroupBuilder Routes { get; }
```

#### Property Value

 [RouteGroupBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.routegroupbuilder)

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_TagDescription"></a> TagDescription

Gets the OpenAPI tag description used for endpoints in this group when one is available.

```csharp
public string? TagDescription { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_TagName"></a> TagName

Gets the OpenAPI tag name used for endpoints in this group.

```csharp
public string TagName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_Add_System_Action_Microsoft_AspNetCore_Builder_EndpointBuilder__"></a> Add\(Action<EndpointBuilder\>\)

Adds the specified convention to the builder. Conventions are used to customize <xref href="Microsoft.AspNetCore.Builder.EndpointBuilder" data-throw-if-not-resolved="false"></xref> instances.

```csharp
public void Add(Action<EndpointBuilder> convention)
```

#### Parameters

`convention` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[EndpointBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.endpointbuilder)\>

The convention to add to the builder.

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_ApiVersion_System_Int32_"></a> ApiVersion\(int\)

Assigns subsequently mapped endpoints to the OpenAPI document represented by the supplied API major version.

```csharp
public BehaviorRestEndpointGroup ApiVersion(int major)
```

#### Parameters

`major` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The API major version to apply.

#### Returns

 [BehaviorRestEndpointGroup](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-behaviorrestendpointgroup/)

The same group instance for fluent endpoint composition.

#### Remarks

Call this before mapping endpoints when a module needs its REST surface to appear in a document other than the default <code>v1</code>.

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_MapBehaviorDelete__1_System_String_System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapBehaviorDelete<TBehavior\>\(string, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>DELETE</code> endpoint that dispatches into the specified behavior.

```csharp
public RouteHandlerBuilder MapBehaviorDelete<TBehavior>(string pattern, Action<RouteHandlerBuilder>? configure = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional callback for additional Minimal API conventions such as authorization or custom
response metadata.

#### Returns

 [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The route handler builder for further customization.

#### Type Parameters

`TBehavior` 

The behavior type to dispatch.

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_MapBehaviorGet__1_System_String_System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapBehaviorGet<TBehavior\>\(string, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>GET</code> endpoint that dispatches into the specified behavior.

```csharp
public RouteHandlerBuilder MapBehaviorGet<TBehavior>(string pattern, Action<RouteHandlerBuilder>? configure = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional callback for additional Minimal API conventions such as authorization or custom
response metadata.

#### Returns

 [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The route handler builder for further customization.

#### Type Parameters

`TBehavior` 

The behavior type to dispatch.

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_MapBehaviorPatch__1_System_String_System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapBehaviorPatch<TBehavior\>\(string, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>PATCH</code> endpoint that dispatches into the specified behavior.

```csharp
public RouteHandlerBuilder MapBehaviorPatch<TBehavior>(string pattern, Action<RouteHandlerBuilder>? configure = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional callback for additional Minimal API conventions such as authorization or custom
response metadata.

#### Returns

 [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The route handler builder for further customization.

#### Type Parameters

`TBehavior` 

The behavior type to dispatch.

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_MapBehaviorPost__1_System_String_System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapBehaviorPost<TBehavior\>\(string, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>POST</code> endpoint that dispatches into the specified behavior.

```csharp
public RouteHandlerBuilder MapBehaviorPost<TBehavior>(string pattern, Action<RouteHandlerBuilder>? configure = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional callback for additional Minimal API conventions such as authorization or custom
response metadata.

#### Returns

 [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The route handler builder for further customization.

#### Type Parameters

`TBehavior` 

The behavior type to dispatch.

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_MapBehaviorPut__1_System_String_System_Action_Microsoft_AspNetCore_Builder_RouteHandlerBuilder__"></a> MapBehaviorPut<TBehavior\>\(string, Action<RouteHandlerBuilder\>?\)

Maps a REST <code>PUT</code> endpoint that dispatches into the specified behavior.

```csharp
public RouteHandlerBuilder MapBehaviorPut<TBehavior>(string pattern, Action<RouteHandlerBuilder>? configure = null) where TBehavior : class
```

#### Parameters

`pattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route pattern relative to the group prefix.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)\>?

Optional callback for additional Minimal API conventions such as authorization or custom
response metadata.

#### Returns

 [RouteHandlerBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.routehandlerbuilder)

The route handler builder for further customization.

#### Type Parameters

`TBehavior` 

The behavior type to dispatch.

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_WithOpenApiDocumentName_System_String_"></a> WithOpenApiDocumentName\(string\)

Overrides the OpenAPI document name applied to subsequently mapped endpoints in this group.

```csharp
public BehaviorRestEndpointGroup WithOpenApiDocumentName(string openApiDocumentName)
```

#### Parameters

`openApiDocumentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The OpenAPI document name to publish.

#### Returns

 [BehaviorRestEndpointGroup](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-behaviorrestendpointgroup/)

The same group instance for fluent endpoint composition.

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_WithTagDescription_System_String_"></a> WithTagDescription\(string?\)

Overrides the OpenAPI tag description applied to this group.

```csharp
public BehaviorRestEndpointGroup WithTagDescription(string? description)
```

#### Parameters

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tag description to publish. Pass <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> to clear it.

#### Returns

 [BehaviorRestEndpointGroup](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-behaviorrestendpointgroup/)

The same group instance for fluent endpoint composition.

### <a id="Cephalon_Behaviors_Http_Hosting_BehaviorRestEndpointGroup_WithTagName_System_String_"></a> WithTagName\(string\)

Overrides the OpenAPI tag name applied to subsequently mapped endpoints in this group.

```csharp
public BehaviorRestEndpointGroup WithTagName(string tagName)
```

#### Parameters

`tagName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The public tag name to publish.

#### Returns

 [BehaviorRestEndpointGroup](/0-1-0-preview/reference/api/cephalon-behaviors-http-hosting-behaviorrestendpointgroup/)

The same group instance for fluent endpoint composition.
