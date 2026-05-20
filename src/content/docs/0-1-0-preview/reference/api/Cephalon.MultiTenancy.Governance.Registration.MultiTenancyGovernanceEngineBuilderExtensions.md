---
title: Class MultiTenancyGovernanceEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-registration-multitenancygovernanceenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Registration](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-registration/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Registers the Cephalon tenant-governance companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class MultiTenancyGovernanceEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MultiTenancyGovernanceEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-registration-multitenancygovernanceenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Registration_MultiTenancyGovernanceEngineBuilderExtensions_AddMultiTenancyGovernance_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions__"></a> AddMultiTenancyGovernance\(EngineBuilder, Action<MultiTenancyGovernanceOptions\>?\)

Adds the tenant-governance companion pack to the engine.

```csharp
public static EngineBuilder AddMultiTenancyGovernance(this EngineBuilder builder, Action<MultiTenancyGovernanceOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[MultiTenancyGovernanceOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-configuration-multitenancygovernanceoptions/)\>?

An optional callback that configures membership governance options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
