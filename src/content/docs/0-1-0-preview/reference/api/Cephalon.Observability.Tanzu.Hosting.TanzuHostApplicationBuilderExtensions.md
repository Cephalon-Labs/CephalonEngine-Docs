---
title: Class TanzuHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-tanzu-hosting-tanzuhostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Observability.Tanzu.Hosting](/0-1-0-preview/reference/api/cephalon-observability-tanzu-hosting/)  
Assembly: Cephalon.Observability.Tanzu.dll  

Adds VMware Tanzu-hosted observability defaults and proxy handoff wiring for Cephalon hosts.

```csharp
public static class TanzuHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TanzuHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-observability-tanzu-hosting-tanzuhostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_Tanzu_Hosting_TanzuHostApplicationBuilderExtensions_AddCephalonTanzu__1___0_System_Action_Cephalon_Observability_Tanzu_Configuration_TanzuTelemetryExportOptions__"></a> AddCephalonTanzu<TBuilder\>\(TBuilder, Action<TanzuTelemetryExportOptions\>?\)

Adds Tanzu-aware OpenTelemetry registration for the Cephalon engine diagnostics surface.

```csharp
public static TBuilder AddCephalonTanzu<TBuilder>(this TBuilder builder, Action<TanzuTelemetryExportOptions>? configure = null) where TBuilder : IHostApplicationBuilder
```

#### Parameters

`builder` TBuilder

The target host-application builder.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[TanzuTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-tanzu-configuration-tanzutelemetryexportoptions/)\>?

An optional callback that can extend or override the configuration-driven Tanzu telemetry export options.

#### Returns

 TBuilder

The same builder instance for fluent host composition.

#### Type Parameters

`TBuilder` 

The host-application builder type to extend.

#### Remarks

<p>
This package keeps Tanzu-specific proxy inputs and hosted resource defaults outside
<code>Cephalon.Engine</code> and the baseline observability package. It still uses the shared
<code>Engine:Observability:Telemetry</code> contract so hosts can keep one explicit telemetry surface.
</p>
<p>
When <code>Endpoint</code> or <code>UseSelfHostedDefaults</code> is configured, the package keeps using the shared
collector-oriented OTLP path and layers Tanzu resource defaults on top. When those shared endpoint
settings are absent and <code>UseInClusterProxyService</code> is enabled, the package enables an explicit
trace-focused Tanzu proxy handoff path instead of pretending the current Tanzu documentation describes
one generic vendor-direct OTLP backend for every signal.
</p>
