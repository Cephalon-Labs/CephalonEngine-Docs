---
title: Class KubernetesGatewayEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-registration-kubernetesgatewayenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Edge.KubernetesGateway.Registration](/0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-registration/)  
Assembly: Cephalon.Edge.KubernetesGateway.dll  

Registers the Kubernetes Gateway API traffic materializer companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class KubernetesGatewayEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KubernetesGatewayEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-registration-kubernetesgatewayenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Edge_KubernetesGateway_Registration_KubernetesGatewayEngineBuilderExtensions_AddKubernetesGatewayTrafficMaterializer_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Edge_KubernetesGateway_Configuration_KubernetesGatewayTrafficMaterializerOptions__"></a> AddKubernetesGatewayTrafficMaterializer\(EngineBuilder, Action<KubernetesGatewayTrafficMaterializerOptions\>?\)

Adds the Kubernetes Gateway API traffic materializer companion pack to the engine.

```csharp
public static EngineBuilder AddKubernetesGatewayTrafficMaterializer(this EngineBuilder builder, Action<KubernetesGatewayTrafficMaterializerOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[KubernetesGatewayTrafficMaterializerOptions](/0-1-0-preview/reference/api/cephalon-edge-kubernetesgateway-configuration-kubernetesgatewaytrafficmaterializeroptions/)\>?

An optional callback that configures how provider-managed cell traffic automation should project into
Kubernetes Gateway API intent and, when enabled, reconcile owned HTTPRoute resources.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

This pack keeps Kubernetes Gateway API control-plane projection outside <code>Cephalon.Engine</code> while still
reporting provider materialization truth back through the shared
<code>/engine/cell-traffic-automations*</code>, <code>/engine/technology-surfaces</code>, and <code>snapshot</code> surfaces.
