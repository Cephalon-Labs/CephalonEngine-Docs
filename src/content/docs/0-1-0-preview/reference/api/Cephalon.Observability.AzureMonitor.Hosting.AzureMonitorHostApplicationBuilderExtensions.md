---
title: Class AzureMonitorHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-azuremonitor-hosting-azuremonitorhostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Observability.AzureMonitor.Hosting](/0-1-0-preview/reference/api/cephalon-observability-azuremonitor-hosting/)  
Assembly: Cephalon.Observability.AzureMonitor.dll  

Adds Azure Monitor exporter wiring for Cephalon hosts.

```csharp
public static class AzureMonitorHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AzureMonitorHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-observability-azuremonitor-hosting-azuremonitorhostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_AzureMonitor_Hosting_AzureMonitorHostApplicationBuilderExtensions_AddCephalonAzureMonitor__1___0_System_Action_Cephalon_Observability_AzureMonitor_Configuration_AzureMonitorExportOptions__"></a> AddCephalonAzureMonitor<TBuilder\>\(TBuilder, Action<AzureMonitorExportOptions\>?\)

Adds Azure Monitor exporter registration for the Cephalon engine diagnostics surface.

```csharp
public static TBuilder AddCephalonAzureMonitor<TBuilder>(this TBuilder builder, Action<AzureMonitorExportOptions>? configure = null) where TBuilder : IHostApplicationBuilder
```

#### Parameters

`builder` TBuilder

The target host-application builder.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[AzureMonitorExportOptions](/0-1-0-preview/reference/api/cephalon-observability-azuremonitor-configuration-azuremonitorexportoptions/)\>?

An optional callback that can extend or override the configuration-driven Azure Monitor export options.

#### Returns

 TBuilder

The same builder instance for fluent host composition.

#### Type Parameters

`TBuilder` 

The host-application builder type to extend.

#### Remarks

<p>
This package keeps Azure-specific exporter wiring outside <code>Cephalon.Engine</code> and
<code>Cephalon.Observability</code>. Hosts opt in explicitly when they want Azure Monitor /
Application Insights export over the same shared <code>ILogger</code> and OpenTelemetry baseline.
</p>
<p>
Registration is skipped when every signal is disabled or when no Azure Monitor connection string
is configured. When <code>HostedPlatform</code> is supplied, the package adds Azure-specific
<code>cloud.provider</code>, <code>cloud.platform</code>, and <code>deployment.environment.name</code> resource
attributes on top of the existing service-name and service-version defaults.
</p>
