---
title: Class DigitalOceanHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-digitalocean-hosting-digitaloceanhostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Observability.DigitalOcean.Hosting](/0-1-0-preview/reference/api/cephalon-observability-digitalocean-hosting/)  
Assembly: Cephalon.Observability.DigitalOcean.dll  

Adds DigitalOcean-hosted observability defaults and collector wiring for Cephalon hosts.

```csharp
public static class DigitalOceanHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DigitalOceanHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-observability-digitalocean-hosting-digitaloceanhostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_DigitalOcean_Hosting_DigitalOceanHostApplicationBuilderExtensions_AddCephalonDigitalOcean__1___0_System_Action_Cephalon_Observability_DigitalOcean_Configuration_DigitalOceanTelemetryExportOptions__"></a> AddCephalonDigitalOcean<TBuilder\>\(TBuilder, Action<DigitalOceanTelemetryExportOptions\>?\)

Adds DigitalOcean-aware OpenTelemetry registration for the Cephalon engine diagnostics surface.

```csharp
public static TBuilder AddCephalonDigitalOcean<TBuilder>(this TBuilder builder, Action<DigitalOceanTelemetryExportOptions>? configure = null) where TBuilder : IHostApplicationBuilder
```

#### Parameters

`builder` TBuilder

The target host-application builder.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[DigitalOceanTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-digitalocean-configuration-digitaloceantelemetryexportoptions/)\>?

An optional callback that can extend or override the configuration-driven DigitalOcean telemetry export options.

#### Returns

 TBuilder

The same builder instance for fluent host composition.

#### Type Parameters

`TBuilder` 

The host-application builder type to extend.

#### Remarks

<p>
This package keeps DigitalOcean-specific collector selection, best-effort Droplet metadata defaults,
and hosted resource defaults outside <code>Cephalon.Engine</code> and the baseline observability package.
It still uses the shared <code>Engine:Observability:Telemetry</code> contract so hosts can keep one explicit
telemetry surface.
</p>
<p>
When <code>Endpoint</code> or <code>UseSelfHostedDefaults</code> is configured, the package keeps using the shared
collector-oriented OTLP path and layers DigitalOcean resource defaults on top. When those shared endpoint
settings are absent and <code>UseInClusterCollectorService</code> is enabled, the package resolves an explicit
in-cluster service endpoint for DOKS deployments so collector-first DigitalOcean setups stay explicit
without over-claiming a managed DigitalOcean OTLP exporter path.
</p>
