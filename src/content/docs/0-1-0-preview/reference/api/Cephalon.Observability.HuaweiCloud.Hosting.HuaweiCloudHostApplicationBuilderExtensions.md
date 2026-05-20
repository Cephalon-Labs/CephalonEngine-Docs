---
title: Class HuaweiCloudHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-huaweicloud-hosting-huaweicloudhostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Observability.HuaweiCloud.Hosting](/0-1-0-preview/reference/api/cephalon-observability-huaweicloud-hosting/)  
Assembly: Cephalon.Observability.HuaweiCloud.dll  

Adds Huawei Cloud-hosted observability defaults and optional managed APM trace ingestion for Cephalon hosts.

```csharp
public static class HuaweiCloudHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HuaweiCloudHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-observability-huaweicloud-hosting-huaweicloudhostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_HuaweiCloud_Hosting_HuaweiCloudHostApplicationBuilderExtensions_AddCephalonHuaweiCloud__1___0_System_Action_Cephalon_Observability_HuaweiCloud_Configuration_HuaweiCloudTelemetryExportOptions__"></a> AddCephalonHuaweiCloud<TBuilder\>\(TBuilder, Action<HuaweiCloudTelemetryExportOptions\>?\)

Adds Huawei Cloud-aware OpenTelemetry registration for the Cephalon engine diagnostics surface.

```csharp
public static TBuilder AddCephalonHuaweiCloud<TBuilder>(this TBuilder builder, Action<HuaweiCloudTelemetryExportOptions>? configure = null) where TBuilder : IHostApplicationBuilder
```

#### Parameters

`builder` TBuilder

The target host-application builder.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[HuaweiCloudTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-huaweicloud-configuration-huaweicloudtelemetryexportoptions/)\>?

An optional callback that can extend or override the configuration-driven Huawei Cloud telemetry export options.

#### Returns

 TBuilder

The same builder instance for fluent host composition.

#### Type Parameters

`TBuilder` 

The host-application builder type to extend.

#### Remarks

<p>
This package keeps Huawei Cloud-specific resource defaults and managed APM trace-ingestion concerns
outside <code>Cephalon.Engine</code> and the baseline observability package. It still uses the shared
<code>Engine:Observability:Telemetry</code> contract so hosts can keep one explicit telemetry surface.
</p>
<p>
When <code>Endpoint</code> or <code>UseSelfHostedDefaults</code> is configured, the package keeps using the shared
collector-oriented OTLP path and layers Huawei Cloud resource defaults on top. When those shared
endpoint settings are absent and <code>UseApmManagedTraceIngestion</code> is enabled, the package targets the
configured Huawei Cloud APM OTLP/gRPC endpoint for traces only by sending the configured
<code>Authentication</code> header. Logs and metrics stay on the shared collector path or another
runtime-specific path instead of being redirected implicitly.
</p>
