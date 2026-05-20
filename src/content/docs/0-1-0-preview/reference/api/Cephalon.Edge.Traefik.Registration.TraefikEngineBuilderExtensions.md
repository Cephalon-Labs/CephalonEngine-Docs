---
title: Class TraefikEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-edge-traefik-registration-traefikenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Edge.Traefik.Registration](/0-1-0-preview/reference/api/cephalon-edge-traefik-registration/)  
Assembly: Cephalon.Edge.Traefik.dll  

Registers the Traefik traffic materializer companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class TraefikEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TraefikEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-edge-traefik-registration-traefikenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Edge_Traefik_Registration_TraefikEngineBuilderExtensions_AddTraefikTrafficMaterializer_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Edge_Traefik_Configuration_TraefikTrafficMaterializerOptions__"></a> AddTraefikTrafficMaterializer\(EngineBuilder, Action<TraefikTrafficMaterializerOptions\>?\)

Adds the Traefik IngressRoute traffic materializer companion pack to the engine.

```csharp
public static EngineBuilder AddTraefikTrafficMaterializer(this EngineBuilder builder, Action<TraefikTrafficMaterializerOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[TraefikTrafficMaterializerOptions](/0-1-0-preview/reference/api/cephalon-edge-traefik-configuration-traefiktrafficmaterializeroptions/)\>?

An optional callback that configures how provider-managed cell traffic automation should project into
Traefik IngressRoute intent.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

This pack keeps Traefik-specific control-plane projection outside <code>Cephalon.Engine</code> while still reporting
provider materialization truth back through the shared
<code>/engine/cell-traffic-automations*</code>, <code>/engine/technology-surfaces</code>, and <code>snapshot</code> surfaces.
