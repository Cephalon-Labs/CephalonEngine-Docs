---
title: Class AlibabaCloudHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-alibabacloud-hosting-alibabacloudhostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Observability.AlibabaCloud.Hosting](/0-1-0-preview/reference/api/cephalon-observability-alibabacloud-hosting/)  
Assembly: Cephalon.Observability.AlibabaCloud.dll  

Adds Alibaba Cloud-hosted observability defaults and optional managed OpenTelemetry ingestion for Cephalon hosts.

```csharp
public static class AlibabaCloudHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AlibabaCloudHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-observability-alibabacloud-hosting-alibabacloudhostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_AlibabaCloud_Hosting_AlibabaCloudHostApplicationBuilderExtensions_AddCephalonAlibabaCloud__1___0_System_Action_Cephalon_Observability_AlibabaCloud_Configuration_AlibabaCloudTelemetryExportOptions__"></a> AddCephalonAlibabaCloud<TBuilder\>\(TBuilder, Action<AlibabaCloudTelemetryExportOptions\>?\)

Adds Alibaba Cloud-aware OpenTelemetry registration for the Cephalon engine diagnostics surface.

```csharp
public static TBuilder AddCephalonAlibabaCloud<TBuilder>(this TBuilder builder, Action<AlibabaCloudTelemetryExportOptions>? configure = null) where TBuilder : IHostApplicationBuilder
```

#### Parameters

`builder` TBuilder

The target host-application builder.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[AlibabaCloudTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-alibabacloud-configuration-alibabacloudtelemetryexportoptions/)\>?

An optional callback that can extend or override the configuration-driven Alibaba Cloud telemetry export options.

#### Returns

 TBuilder

The same builder instance for fluent host composition.

#### Type Parameters

`TBuilder` 

The host-application builder type to extend.

#### Remarks

<p>
This package keeps Alibaba Cloud-specific resource defaults and managed OpenTelemetry-ingestion concerns
outside <code>Cephalon.Engine</code> and the baseline observability package. It still uses the shared
<code>Engine:Observability:Telemetry</code> contract so hosts can keep one explicit telemetry surface.
</p>
<p>
When <code>Endpoint</code> or <code>UseSelfHostedDefaults</code> is configured, the package keeps using the shared
collector-oriented OTLP path and layers Alibaba Cloud resource defaults on top. When those shared
endpoint settings are absent and <code>UseManagedOpenTelemetryIngestion</code> is enabled, the package targets
the configured Alibaba Cloud Managed Service for OpenTelemetry path for traces and metrics only. Logs
stay on the shared collector path, SLS, or another runtime-specific route instead of being redirected
implicitly.
</p>
