---
title: Class SerilogHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-serilog-hosting-seriloghostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Observability.Serilog.Hosting](/0-1-0-preview/reference/api/cephalon-observability-serilog-hosting/)  
Assembly: Cephalon.Observability.Serilog.dll  

Adds Serilog provider wiring for Cephalon hosts without changing the shared <xref href="Microsoft.Extensions.Logging.ILogger" data-throw-if-not-resolved="false"></xref> contract.

```csharp
public static class SerilogHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SerilogHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-observability-serilog-hosting-seriloghostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_Serilog_Hosting_SerilogHostApplicationBuilderExtensions_AddCephalonSerilog__1___0_System_Action_System_IServiceProvider_Serilog_LoggerConfiguration__"></a> AddCephalonSerilog<TBuilder\>\(TBuilder, Action<IServiceProvider, LoggerConfiguration\>?\)

Adds Serilog as an <xref href="Microsoft.Extensions.Logging.ILogger" data-throw-if-not-resolved="false"></xref> provider for the target host builder.

```csharp
public static TBuilder AddCephalonSerilog<TBuilder>(this TBuilder builder, Action<IServiceProvider, LoggerConfiguration>? configure = null) where TBuilder : IHostApplicationBuilder
```

#### Parameters

`builder` TBuilder

The target host-application builder.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider), LoggerConfiguration\>?

An optional callback that can extend or override the configuration-driven Serilog pipeline.

#### Returns

 TBuilder

The same builder instance for fluent host composition.

#### Type Parameters

`TBuilder` 

The host-application builder type to extend.

#### Remarks

<p>
This package keeps provider-specific logging integration outside <code>Cephalon.Engine</code> and
<code>Cephalon.Observability</code>. Hosts opt in explicitly when they want Serilog sinks, enrichers,
or formatting while still logging through injected <code>ILogger&lt;T&gt;</code> services.
</p>
<p>
The standard top-level <code>Serilog</code> configuration section is read automatically when present.
If no <code>Serilog</code> section exists and no code-based configuration callback is supplied, registration
is skipped so hosts do not accidentally replace their existing logging setup with an empty pipeline.
</p>
