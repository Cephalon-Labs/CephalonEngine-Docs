---
title: Class GrafanaCloudHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-grafanacloud-hosting-grafanacloudhostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Observability.GrafanaCloud.Hosting](/0-1-0-preview/reference/api/cephalon-observability-grafanacloud-hosting/)  
Assembly: Cephalon.Observability.GrafanaCloud.dll  

Adds Grafana Cloud OTLP endpoint wiring and access-policy authentication guidance for Cephalon hosts.

```csharp
public static class GrafanaCloudHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GrafanaCloudHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-observability-grafanacloud-hosting-grafanacloudhostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_GrafanaCloud_Hosting_GrafanaCloudHostApplicationBuilderExtensions_AddCephalonGrafanaCloud__1___0_System_Action_Cephalon_Observability_GrafanaCloud_Configuration_GrafanaCloudTelemetryExportOptions__"></a> AddCephalonGrafanaCloud<TBuilder\>\(TBuilder, Action<GrafanaCloudTelemetryExportOptions\>?\)

Adds Grafana Cloud-aware OpenTelemetry registration for the Cephalon engine diagnostics surface.

```csharp
public static TBuilder AddCephalonGrafanaCloud<TBuilder>(this TBuilder builder, Action<GrafanaCloudTelemetryExportOptions>? configure = null) where TBuilder : IHostApplicationBuilder
```

#### Parameters

`builder` TBuilder

The target host-application builder.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[GrafanaCloudTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-grafanacloud-configuration-grafanacloudtelemetryexportoptions/)\>?

An optional callback that can extend or override the configuration-driven Grafana Cloud telemetry export options.

#### Returns

 TBuilder

The same builder instance for fluent host composition.

#### Type Parameters

`TBuilder` 

The host-application builder type to extend.

#### Remarks

<p>
This package keeps Grafana Cloud-specific OTLP endpoint and authentication concerns outside
<code>Cephalon.Engine</code> and the baseline observability package. It still uses the shared
<code>Engine:Observability:Telemetry</code> contract so hosts can keep one explicit telemetry surface.
</p>
<p>
When <code>Endpoint</code> or <code>UseSelfHostedDefaults</code> is configured on the shared telemetry contract,
the package keeps using that collector-oriented OTLP path and only layers Grafana-friendly resource
attributes on top. When those shared endpoint settings are absent and the Grafana Cloud options opt into
direct endpoint usage, the package targets the configured Grafana Cloud OTLP endpoint and applies either
the raw OTLP headers string or a Basic Authorization header built from the Grafana Cloud instance id and
access-policy token.
</p>
