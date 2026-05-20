---
title: Class SfidEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-ids-sfid-registration-sfidenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Ids.Sfid.Registration](/0-1-0-preview/reference/api/cephalon-ids-sfid-registration/)  
Assembly: Cephalon.Ids.Sfid.dll  

Registers the official <code>Sfid.Net</code>-backed identifier strategy pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class SfidEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SfidEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-ids-sfid-registration-sfidenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Ids_Sfid_Registration_SfidEngineBuilderExtensions_AddSfidIds_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Ids_Sfid_Configuration_SfidIdOptions__"></a> AddSfidIds\(EngineBuilder, Action<SfidIdOptions\>?\)

Adds the Sfid id-strategy pack to the engine.

```csharp
public static EngineBuilder AddSfidIds(this EngineBuilder builder, Action<SfidIdOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[SfidIdOptions](/0-1-0-preview/reference/api/cephalon-ids-sfid-configuration-sfididoptions/)\>?

An optional callback that configures the host-owned Sfid generator options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
