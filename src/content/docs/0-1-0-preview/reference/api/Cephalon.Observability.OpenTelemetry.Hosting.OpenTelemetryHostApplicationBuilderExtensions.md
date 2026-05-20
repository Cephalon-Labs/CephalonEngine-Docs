---
title: Class OpenTelemetryHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-opentelemetry-hosting-opentelemetryhostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Observability.OpenTelemetry.Hosting](/0-1-0-preview/reference/api/cephalon-observability-opentelemetry-hosting/)  
Assembly: Cephalon.Observability.OpenTelemetry.dll  

Adds OpenTelemetry OTLP exporter wiring for Cephalon hosts.

```csharp
public static class OpenTelemetryHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTelemetryHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-observability-opentelemetry-hosting-opentelemetryhostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_OpenTelemetry_Hosting_OpenTelemetryHostApplicationBuilderExtensions_AddCephalonOpenTelemetry__1___0_System_Action_Cephalon_Observability_Configuration_TelemetryExportOptions__"></a> AddCephalonOpenTelemetry<TBuilder\>\(TBuilder, Action<TelemetryExportOptions\>?\)

Adds OpenTelemetry exporter registration for the Cephalon engine diagnostics surface.

```csharp
public static TBuilder AddCephalonOpenTelemetry<TBuilder>(this TBuilder builder, Action<TelemetryExportOptions>? configure = null) where TBuilder : IHostApplicationBuilder
```

#### Parameters

`builder` TBuilder

The target host-application builder.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<TelemetryExportOptions\>?

An optional callback that can extend or override the configuration-driven telemetry export options.

#### Returns

 TBuilder

The same builder instance for fluent host composition.

#### Type Parameters

`TBuilder` 

The host-application builder type to extend.

#### Remarks

<p>
This package keeps exporter wiring outside <code>Cephalon.Engine</code> and <code>Cephalon.Observability</code>.
Hosts opt in explicitly when they want a supported OpenTelemetry path instead of guidance-only settings.
</p>
<p>
Registration is skipped when every signal is disabled or when no export endpoint is configured
and explicit self-hosted defaults are not enabled. When <code>UseSelfHostedDefaults</code> is enabled,
the package falls back to the standard local OTLP collector ports and adds a
<code>deployment.environment.name</code> resource attribute from the current host environment.
The endpoint is interpreted as a base collector endpoint for HTTP/protobuf and the signal-specific
OTLP paths are appended automatically.
</p>
