---
title: Class AuditEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-audit-registration-auditenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Audit.Registration](/0-1-0-preview/reference/api/cephalon-audit-registration/)  
Assembly: Cephalon.Audit.dll  

Registers the host-agnostic Cephalon audit companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class AuditEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-audit-registration-auditenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Audit_Registration_AuditEngineBuilderExtensions_AddAudit_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Audit_Configuration_AuditRuntimeOptions__"></a> AddAudit\(EngineBuilder, Action<AuditRuntimeOptions\>?\)

Adds the Cephalon audit companion pack to the engine.

```csharp
public static EngineBuilder AddAudit(this EngineBuilder builder, Action<AuditRuntimeOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[AuditRuntimeOptions](/0-1-0-preview/reference/api/cephalon-audit-configuration-auditruntimeoptions/)\>?

An optional callback that configures host-owned audit runtime options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.
