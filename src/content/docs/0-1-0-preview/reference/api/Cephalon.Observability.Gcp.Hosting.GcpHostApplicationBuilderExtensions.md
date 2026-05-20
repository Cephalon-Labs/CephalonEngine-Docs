---
title: Class GcpHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-gcp-hosting-gcphostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Observability.Gcp.Hosting](/0-1-0-preview/reference/api/cephalon-observability-gcp-hosting/)  
Assembly: Cephalon.Observability.Gcp.dll  

Adds GCP-hosted observability defaults and OTLP exporter wiring for Cephalon hosts.

```csharp
public static class GcpHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GcpHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-observability-gcp-hosting-gcphostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_Gcp_Hosting_GcpHostApplicationBuilderExtensions_AddCephalonGcp__1___0_System_Action_Cephalon_Observability_Gcp_Configuration_GcpTelemetryExportOptions__"></a> AddCephalonGcp<TBuilder\>\(TBuilder, Action<GcpTelemetryExportOptions\>?\)

Adds GCP-aware OpenTelemetry registration for the Cephalon engine diagnostics surface.

```csharp
public static TBuilder AddCephalonGcp<TBuilder>(this TBuilder builder, Action<GcpTelemetryExportOptions>? configure = null) where TBuilder : IHostApplicationBuilder
```

#### Parameters

`builder` TBuilder

The target host-application builder.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[GcpTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-gcp-configuration-gcptelemetryexportoptions/)\>?

An optional callback that can extend or override the configuration-driven GCP telemetry export options.

#### Returns

 TBuilder

The same builder instance for fluent host composition.

#### Type Parameters

`TBuilder` 

The host-application builder type to extend.

#### Remarks

<p>
This package keeps GCP-specific resource defaults and Google-managed ingestion concerns outside
<code>Cephalon.Engine</code> and the baseline observability package. It still uses the shared
<code>Engine:Observability:Telemetry</code> contract so hosts can keep one explicit telemetry surface.
</p>
<p>
When <code>Endpoint</code> or <code>UseSelfHostedDefaults</code> is configured, the package keeps using the shared
collector-oriented OTLP path and layers GCP resource defaults on top. When those shared endpoint settings
are absent and <code>UseGoogleManagedIngestion</code> is enabled, the package targets
<code>https://telemetry.googleapis.com</code> for traces and metrics over OTLP/HTTP by using Application
Default Credentials, while logs stay on the shared collector or platform logging path.
</p>
