---
title: Class OpenApiEndpointOptions
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-documentation-openapiendpointoptions
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Documentation](/0-1-0-preview/reference/api/cephalon-aspnetcore-documentation/)  
Assembly: Cephalon.AspNetCore.dll  

Configures the host-level OpenAPI JSON and Scalar UI endpoints exposed by Cephalon ASP.NET Core hosts.

```csharp
public sealed class OpenApiEndpointOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenApiEndpointOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-documentation-openapiendpointoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These options stay in the ASP.NET Core adapter because they describe HTTP route layout for generated
documentation assets rather than engine-core behavior.

## Constructors

### <a id="Cephalon_AspNetCore_Documentation_OpenApiEndpointOptions__ctor"></a> OpenApiEndpointOptions\(\)

Initializes a new <xref href="Cephalon.AspNetCore.Documentation.OpenApiEndpointOptions" data-throw-if-not-resolved="false"></xref> with the canonical Cephalon OpenAPI and Scalar routes.

```csharp
public OpenApiEndpointOptions()
```

## Fields

### <a id="Cephalon_AspNetCore_Documentation_OpenApiEndpointOptions_SectionName"></a> SectionName

Gets the root configuration section used for OpenAPI endpoint routing.

```csharp
public const string SectionName = "OpenApi"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_AspNetCore_Documentation_OpenApiEndpointOptions_BehaviorRestDocumentedStatusCodes"></a> BehaviorRestDocumentedStatusCodes

Gets or sets the HTTP status codes that Cephalon's behavior-owned REST helpers publish in OpenAPI documents by default.

```csharp
public IReadOnlyList<int> BehaviorRestDocumentedStatusCodes { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

#### Remarks

This list controls documentation metadata only. It does not change the runtime HTTP status codes emitted by ASP.NET Core.

### <a id="Cephalon_AspNetCore_Documentation_OpenApiEndpointOptions_RoutePattern"></a> RoutePattern

Gets or sets the route pattern used by <code>MapOpenApi(...)</code>.

```csharp
public string RoutePattern { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The pattern must include the <code>{documentName}</code> placeholder so versioned and named documents remain addressable.

### <a id="Cephalon_AspNetCore_Documentation_OpenApiEndpointOptions_ScalarRoutePrefix"></a> ScalarRoutePrefix

Gets or sets the route prefix used by the Scalar UI.

```csharp
public string ScalarRoutePrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The value may be supplied with or without a leading slash. Cephalon normalizes it to a rooted path such as <code>/scalar</code>.

## Methods

### <a id="Cephalon_AspNetCore_Documentation_OpenApiEndpointOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds and normalizes OpenAPI endpoint options from configuration.

```csharp
public static OpenApiEndpointOptions FromConfiguration(IConfiguration configuration, string sectionPath = "OpenApi")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path to bind.

#### Returns

 [OpenApiEndpointOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-documentation-openapiendpointoptions/)

The normalized OpenAPI endpoint options.
