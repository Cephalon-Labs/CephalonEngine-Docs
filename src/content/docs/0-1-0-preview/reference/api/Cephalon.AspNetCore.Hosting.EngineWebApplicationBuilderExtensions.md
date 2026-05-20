---
title: Class EngineWebApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-enginewebapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting/)  
Assembly: Cephalon.AspNetCore.dll  

Registers the Cephalon ASP.NET Core host services on a <xref href="Microsoft.AspNetCore.Builder.WebApplicationBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class EngineWebApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EngineWebApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-enginewebapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_AspNetCore_Hosting_EngineWebApplicationBuilderExtensions_AddCephalon_Microsoft_AspNetCore_Builder_WebApplicationBuilder_"></a> AddCephalon\(WebApplicationBuilder\)

Adds Cephalon to the builder using configuration-only engine setup.

```csharp
public static WebApplicationBuilder AddCephalon(this WebApplicationBuilder builder)
```

#### Parameters

`builder` [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The ASP.NET Core application builder to extend.

#### Returns

 [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The same builder instance for fluent composition.

### <a id="Cephalon_AspNetCore_Hosting_EngineWebApplicationBuilderExtensions_AddCephalon_Microsoft_AspNetCore_Builder_WebApplicationBuilder_System_Action_Cephalon_Engine_Composition_EngineBuilder__"></a> AddCephalon\(WebApplicationBuilder, Action<EngineBuilder\>\)

Adds Cephalon to the builder and allows additional code-based engine configuration.

```csharp
public static WebApplicationBuilder AddCephalon(this WebApplicationBuilder builder, Action<EngineBuilder> configure)
```

#### Parameters

`builder` [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The ASP.NET Core application builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<EngineBuilder\>

The callback that configures the underlying engine builder.

#### Returns

 [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The same builder instance for fluent composition.

#### Remarks

This method wires OpenAPI, Scalar-ready document transformers, health checks, hosted runtime
startup, and the built-in ASP.NET Core transport mappers before registering the engine itself.

### <a id="Cephalon_AspNetCore_Hosting_EngineWebApplicationBuilderExtensions_AddCephalonHttpLogging_Microsoft_AspNetCore_Builder_WebApplicationBuilder_System_Action_Cephalon_AspNetCore_Hosting_HttpRequestResponseLoggingOptions__"></a> AddCephalonHttpLogging\(WebApplicationBuilder, Action<HttpRequestResponseLoggingOptions\>?\)

Adds Cephalon's HTTP request and response logging options to the ASP.NET Core host.

```csharp
public static WebApplicationBuilder AddCephalonHttpLogging(this WebApplicationBuilder builder, Action<HttpRequestResponseLoggingOptions>? configure = null)
```

#### Parameters

`builder` [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The ASP.NET Core application builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[HttpRequestResponseLoggingOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-httprequestresponseloggingoptions/)\>?

An optional callback that can extend or override the configuration-driven request-logging setup.

#### Returns

 [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The same builder instance for fluent host composition.

#### Remarks

The logging contract is read from <code>Engine:Observability:HttpLogging</code> so teams can opt into
request/response summaries and bounded body capture without introducing a separate host-specific section.

### <a id="Cephalon_AspNetCore_Hosting_EngineWebApplicationBuilderExtensions_AddCephalonProjectConfigurations_Microsoft_AspNetCore_Builder_WebApplicationBuilder_"></a> AddCephalonProjectConfigurations\(WebApplicationBuilder\)

Adds Cephalon's project-configuration conventions to the ASP.NET Core builder.

```csharp
public static WebApplicationBuilder AddCephalonProjectConfigurations(this WebApplicationBuilder builder)
```

#### Parameters

`builder` [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The ASP.NET Core application builder to extend.

#### Returns

 [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The same builder instance for fluent composition.

#### Remarks

This loads split configuration files from the project's <code>Configurations</code> folder so
settings such as engine, OpenAPI, CORS, or hosted-doc options can be grouped by concern
without taking away the standard <code>appsettings.json</code> and <code>appsettings.{Environment}.json</code>
override flow.

### <a id="Cephalon_AspNetCore_Hosting_EngineWebApplicationBuilderExtensions_AddReferenceDocsHosting_Microsoft_AspNetCore_Builder_WebApplicationBuilder_System_Action_Cephalon_AspNetCore_Documentation_ReferenceDocsHostingOptions__"></a> AddReferenceDocsHosting\(WebApplicationBuilder, Action<ReferenceDocsHostingOptions\>?\)

Adds hosted reference-doc configuration to the ASP.NET Core host.

```csharp
public static WebApplicationBuilder AddReferenceDocsHosting(this WebApplicationBuilder builder, Action<ReferenceDocsHostingOptions>? configure = null)
```

#### Parameters

`builder` [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The ASP.NET Core application builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[ReferenceDocsHostingOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-documentation-referencedocshostingoptions/)\>?

An optional callback that can extend or override the configuration-driven hosting setup.

#### Returns

 [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The same builder instance for fluent composition.

#### Remarks

Reference-doc hosting stays in the host layer because it serves already-generated static
artifacts such as <code>browse.html</code>, <code>members.md</code>, and <code>reference-manifest.json</code>.
