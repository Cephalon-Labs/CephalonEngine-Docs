---
title: Class OpenShiftHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-openshift-hosting-openshifthostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Observability.OpenShift.Hosting](/0-1-0-preview/reference/api/cephalon-observability-openshift-hosting/)  
Assembly: Cephalon.Observability.OpenShift.dll  

Adds Red Hat OpenShift-hosted observability defaults and in-cluster collector wiring for Cephalon hosts.

```csharp
public static class OpenShiftHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenShiftHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-observability-openshift-hosting-openshifthostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_OpenShift_Hosting_OpenShiftHostApplicationBuilderExtensions_AddCephalonOpenShift__1___0_System_Action_Cephalon_Observability_OpenShift_Configuration_OpenShiftTelemetryExportOptions__"></a> AddCephalonOpenShift<TBuilder\>\(TBuilder, Action<OpenShiftTelemetryExportOptions\>?\)

Adds OpenShift-aware OpenTelemetry registration for the Cephalon engine diagnostics surface.

```csharp
public static TBuilder AddCephalonOpenShift<TBuilder>(this TBuilder builder, Action<OpenShiftTelemetryExportOptions>? configure = null) where TBuilder : IHostApplicationBuilder
```

#### Parameters

`builder` TBuilder

The target host-application builder.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[OpenShiftTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-openshift-configuration-openshifttelemetryexportoptions/)\>?

An optional callback that can extend or override the configuration-driven OpenShift telemetry export options.

#### Returns

 TBuilder

The same builder instance for fluent host composition.

#### Type Parameters

`TBuilder` 

The host-application builder type to extend.

#### Remarks

<p>
This package keeps OpenShift-specific collector selection, trust material, and hosted resource defaults
outside <code>Cephalon.Engine</code> and the baseline observability package. It still uses the shared
<code>Engine:Observability:Telemetry</code> contract so hosts can keep one explicit telemetry surface.
</p>
<p>
When <code>Endpoint</code> or <code>UseSelfHostedDefaults</code> is configured, the package keeps using the shared
collector-oriented OTLP path and layers OpenShift resource defaults on top. When those shared endpoint
settings are absent and <code>UseInClusterCollectorService</code> is enabled, the package resolves an explicit
in-cluster service endpoint so OpenShift operator-managed collectors stay discoverable without moving
provider logic back into the engine core.
</p>
