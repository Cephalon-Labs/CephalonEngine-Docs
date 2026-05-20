---
title: Class ApiRoutesOptions
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-apiroutesoptions
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting/)  
Assembly: Cephalon.AspNetCore.dll  

Configures host-level HTTP route prefixes for Cephalon ASP.NET Core transports.

```csharp
public sealed class ApiRoutesOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ApiRoutesOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-apiroutesoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These settings describe the public HTTP surface of the ASP.NET Core adapter. They intentionally stay out of the engine core.

## Constructors

### <a id="Cephalon_AspNetCore_Hosting_ApiRoutesOptions__ctor"></a> ApiRoutesOptions\(\)

Initializes a new <xref href="Cephalon.AspNetCore.Hosting.ApiRoutesOptions" data-throw-if-not-resolved="false"></xref> with the canonical Cephalon route-prefix defaults.

```csharp
public ApiRoutesOptions()
```

## Fields

### <a id="Cephalon_AspNetCore_Hosting_ApiRoutesOptions_SectionName"></a> SectionName

Gets the configuration section used for API route settings.

```csharp
public const string SectionName = "ApiRoutes"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_AspNetCore_Hosting_ApiRoutesOptions_DefaultBehaviorDocumentName"></a> DefaultBehaviorDocumentName

Gets or sets the default document/version segment projected into generic behavior transport routes.

```csharp
public string DefaultBehaviorDocumentName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Hosting_ApiRoutesOptions_GraphQLPrefix"></a> GraphQLPrefix

Gets or sets the root prefix used by the built-in GraphQL transport mapper.

```csharp
public string GraphQLPrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Hosting_ApiRoutesOptions_GraphQLSsePrefix"></a> GraphQLSsePrefix

Gets or sets the canonical prefix used by the generic behavior GraphQL-over-SSE binding surface.

```csharp
public string GraphQLSsePrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Hosting_ApiRoutesOptions_GraphQLWsPrefix"></a> GraphQLWsPrefix

Gets or sets the canonical prefix used by the generic behavior GraphQL-over-WebSocket binding surface.

```csharp
public string GraphQLWsPrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Hosting_ApiRoutesOptions_GrpcPrefix"></a> GrpcPrefix

Gets or sets the root prefix used by the built-in gRPC transport mapper.

```csharp
public string GrpcPrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Hosting_ApiRoutesOptions_JsonRpcPrefix"></a> JsonRpcPrefix

Gets or sets the canonical prefix used by the generic behavior JSON-RPC binding surface.

```csharp
public string JsonRpcPrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Hosting_ApiRoutesOptions_RestPrefix"></a> RestPrefix

Gets or sets the root prefix used by the built-in REST transport mapper.

```csharp
public string RestPrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Hosting_ApiRoutesOptions_SsePrefix"></a> SsePrefix

Gets or sets the canonical prefix used by the generic behavior Server-Sent Events binding surface.

```csharp
public string SsePrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Hosting_ApiRoutesOptions_UseResultModelEnvelope"></a> UseResultModelEnvelope

Gets or sets a value indicating whether behavior-aware REST endpoints should emit the Cephalon result envelope.

```csharp
public bool UseResultModelEnvelope { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_ApiRoutesOptions_WsPrefix"></a> WsPrefix

Gets or sets the canonical prefix used by the generic behavior WebSocket binding surface.

```csharp
public string WsPrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_AspNetCore_Hosting_ApiRoutesOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds and normalizes API route settings from configuration.

```csharp
public static ApiRoutesOptions FromConfiguration(IConfiguration configuration, string sectionPath = "ApiRoutes")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path to bind.

#### Returns

 [ApiRoutesOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-apiroutesoptions/)

The normalized route settings.
