---
title: Class KubernetesHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-kubernetes-hosting-kuberneteshostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Observability.Kubernetes.Hosting](/0-1-0-preview/reference/api/cephalon-observability-kubernetes-hosting/)  
Assembly: Cephalon.Observability.Kubernetes.dll  

Adds Kubernetes-hosted observability defaults and in-cluster collector wiring for Cephalon hosts.

```csharp
public static class KubernetesHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KubernetesHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-observability-kubernetes-hosting-kuberneteshostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_Kubernetes_Hosting_KubernetesHostApplicationBuilderExtensions_AddCephalonKubernetes__1___0_System_Action_Cephalon_Observability_Kubernetes_Configuration_KubernetesTelemetryExportOptions__"></a> AddCephalonKubernetes<TBuilder\>\(TBuilder, Action<KubernetesTelemetryExportOptions\>?\)

Adds Kubernetes-aware OpenTelemetry registration for the Cephalon engine diagnostics surface.

```csharp
public static TBuilder AddCephalonKubernetes<TBuilder>(this TBuilder builder, Action<KubernetesTelemetryExportOptions>? configure = null) where TBuilder : IHostApplicationBuilder
```

#### Parameters

`builder` TBuilder

The target host-application builder.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[KubernetesTelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-kubernetes-configuration-kubernetestelemetryexportoptions/)\>?

An optional callback that can extend or override the configuration-driven Kubernetes telemetry export options.

#### Returns

 TBuilder

The same builder instance for fluent host composition.

#### Type Parameters

`TBuilder` 

The host-application builder type to extend.

#### Remarks

<p>
This package keeps Kubernetes-specific collector selection, cluster-local trust material, and resource defaults
outside <code>Cephalon.Engine</code> and the baseline observability package. It still uses the shared
<code>Engine:Observability:Telemetry</code> contract so hosts can keep one explicit telemetry surface.
</p>
<p>
When <code>Endpoint</code> or <code>UseSelfHostedDefaults</code> is configured, the package keeps using the shared
collector-oriented OTLP path and layers Kubernetes resource defaults on top. When those shared endpoint
settings are absent and <code>UseInClusterCollectorService</code> is enabled, the package resolves an explicit
in-cluster service endpoint so generic Kubernetes deployments can stay collector-first without forcing teams
onto a vendor-specific companion package.
</p>
