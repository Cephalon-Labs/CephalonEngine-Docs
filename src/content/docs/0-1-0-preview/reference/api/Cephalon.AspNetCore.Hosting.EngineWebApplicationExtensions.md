---
title: Class EngineWebApplicationExtensions
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-enginewebapplicationextensions
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting/)  
Assembly: Cephalon.AspNetCore.dll  

Maps the operator-facing HTTP surface exposed by a Cephalon ASP.NET Core host.

```csharp
public static class EngineWebApplicationExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EngineWebApplicationExtensions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-enginewebapplicationextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_AspNetCore_Hosting_EngineWebApplicationExtensions_MapCephalon_Microsoft_AspNetCore_Builder_WebApplication_"></a> MapCephalon\(WebApplication\)

Maps Cephalon runtime, diagnostics, transport, and documentation endpoints onto the application.

```csharp
public static WebApplication MapCephalon(this WebApplication app)
```

#### Parameters

`app` [WebApplication](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplication)

The ASP.NET Core application to extend.

#### Returns

 [WebApplication](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplication)

The same application instance for fluent host composition.

#### Remarks

<p>
This method maps the engine introspection surface under <code>/engine</code>, health and diagnostics
endpoints, and the routes contributed by the transports selected in the runtime manifest.
</p>
<p>
When the REST transport is active, it also enables OpenAPI and Scalar documentation while keeping
non-REST protocol routes out of the generated API description.
</p>
