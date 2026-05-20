---
title: Class IdentityEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-identity-registration-identityenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Identity.Registration](/0-1-0-preview/reference/api/cephalon-identity-registration/)  
Assembly: Cephalon.Identity.dll  

Registers the host-agnostic Cephalon identity companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class IdentityEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdentityEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-identity-registration-identityenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Identity_Registration_IdentityEngineBuilderExtensions_AddIdentityAccess_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Identity_Configuration_IdentityRuntimeOptions__"></a> AddIdentityAccess\(EngineBuilder, Action<IdentityRuntimeOptions\>?\)

Adds the Cephalon identity companion pack to the engine.

```csharp
public static EngineBuilder AddIdentityAccess(this EngineBuilder builder, Action<IdentityRuntimeOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[IdentityRuntimeOptions](/0-1-0-preview/reference/api/cephalon-identity-configuration-identityruntimeoptions/)\>?

An optional callback that configures host-owned identity runtime options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
