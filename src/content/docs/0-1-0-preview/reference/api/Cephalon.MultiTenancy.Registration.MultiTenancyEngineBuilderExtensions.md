---
title: Class MultiTenancyEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-registration-multitenancyenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Registration](/0-1-0-preview/reference/api/cephalon-multitenancy-registration/)  
Assembly: Cephalon.MultiTenancy.dll  

Registers the host-agnostic Cephalon multi-tenancy companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class MultiTenancyEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MultiTenancyEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-registration-multitenancyenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Registration_MultiTenancyEngineBuilderExtensions_AddMultiTenancy_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_MultiTenancy_Configuration_MultiTenancyRuntimeOptions__"></a> AddMultiTenancy\(EngineBuilder, Action<MultiTenancyRuntimeOptions\>?\)

Adds the Cephalon multi-tenancy companion pack to the engine.

```csharp
public static EngineBuilder AddMultiTenancy(this EngineBuilder builder, Action<MultiTenancyRuntimeOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MultiTenancyRuntimeOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-configuration-multitenancyruntimeoptions/)\>?

An optional callback that configures host-owned multi-tenancy runtime options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
