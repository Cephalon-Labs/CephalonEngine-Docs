---
title: Class NewRelicHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-newrelic-hosting-newrelichostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Observability.NewRelic.Hosting](/0-1-0-preview/reference/api/cephalon-observability-newrelic-hosting/)  
Assembly: Cephalon.Observability.NewRelic.dll  

Adds New Relic native OTLP endpoint wiring and <code>api-key</code> authentication guidance for Cephalon hosts.

```csharp
public static class NewRelicHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NewRelicHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-observability-newrelic-hosting-newrelichostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_NewRelic_Hosting_NewRelicHostApplicationBuilderExtensions_AddCephalonNewRelic__1___0_System_Action_Cephalon_Observability_NewRelic_Configuration_NewRelicTelemetryExportOptions__"></a> AddCephalonNewRelic<TBuilder\>\(TBuilder, Action<NewRelicTelemetryExportOptions\>?\)

Adds New Relic-aware OpenTelemetry registration for the Cephalon engine diagnostics surface.

```csharp
public static TBuilder AddCephalonNewRelic<TBuilder>(this TBuilder builder, Action<NewRelicTelemetryExportOptions>? configure = null) where TBuilder : IHostApplicationBuilder
```

#### Parameters

`builder` TBuilder

The target host-application builder.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[NewRelicTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-newrelic-configuration-newrelictelemetryexportoptions/)\>?

An optional callback that can extend or override the configuration-driven New Relic telemetry export options.

#### Returns

 TBuilder

The same builder instance for fluent host composition.

#### Type Parameters

`TBuilder` 

The host-application builder type to extend.

#### Remarks

<p>
This package keeps New Relic-specific OTLP endpoint and <code>api-key</code> authentication concerns outside
<code>Cephalon.Engine</code> and the baseline observability package. It still uses the shared
<code>Engine:Observability:Telemetry</code> contract so hosts can keep one explicit telemetry surface.
</p>
<p>
When <code>Endpoint</code> or <code>UseSelfHostedDefaults</code> is configured on the shared telemetry contract,
the package keeps using that collector-oriented OTLP path and only layers New Relic-friendly resource
attributes on top. When those shared endpoint settings are absent and the New Relic options opt into
direct endpoint usage, the package targets either the configured New Relic OTLP endpoint or the documented
regional default and applies either the raw OTLP headers string or the required <code>api-key</code> header built
from the configured license key.
</p>
