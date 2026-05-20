---
title: Class OracleCloudHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-oraclecloud-hosting-oraclecloudhostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Observability.OracleCloud.Hosting](/0-1-0-preview/reference/api/cephalon-observability-oraclecloud-hosting/)  
Assembly: Cephalon.Observability.OracleCloud.dll  

Adds Oracle Cloud-hosted observability defaults and optional Oracle Cloud APM managed ingestion for Cephalon hosts.

```csharp
public static class OracleCloudHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OracleCloudHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-observability-oraclecloud-hosting-oraclecloudhostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_OracleCloud_Hosting_OracleCloudHostApplicationBuilderExtensions_AddCephalonOracleCloud__1___0_System_Action_Cephalon_Observability_OracleCloud_Configuration_OracleCloudTelemetryExportOptions__"></a> AddCephalonOracleCloud<TBuilder\>\(TBuilder, Action<OracleCloudTelemetryExportOptions\>?\)

Adds Oracle Cloud-aware OpenTelemetry registration for the Cephalon engine diagnostics surface.

```csharp
public static TBuilder AddCephalonOracleCloud<TBuilder>(this TBuilder builder, Action<OracleCloudTelemetryExportOptions>? configure = null) where TBuilder : IHostApplicationBuilder
```

#### Parameters

`builder` TBuilder

The target host-application builder.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[OracleCloudTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-oraclecloud-configuration-oraclecloudtelemetryexportoptions/)\>?

An optional callback that can extend or override the configuration-driven Oracle Cloud telemetry export options.

#### Returns

 TBuilder

The same builder instance for fluent host composition.

#### Type Parameters

`TBuilder` 

The host-application builder type to extend.

#### Remarks

<p>
This package keeps Oracle Cloud-specific resource defaults and managed APM ingestion concerns
outside <code>Cephalon.Engine</code> and the baseline observability package. It still uses the shared
<code>Engine:Observability:Telemetry</code> contract so hosts can keep one explicit telemetry surface.
</p>
<p>
When <code>Endpoint</code> or <code>UseSelfHostedDefaults</code> is configured, the package keeps using the shared
collector-oriented OTLP path and layers Oracle Cloud resource defaults on top. When those shared
endpoint settings are absent and <code>UseManagedOpenTelemetryIngestion</code> is enabled, the package targets
Oracle Cloud APM OTLP/HTTP ingestion for traces and metrics only. Logs stay on the shared collector path,
Oracle Log Analytics, or another runtime-specific route instead of being redirected implicitly.
</p>
