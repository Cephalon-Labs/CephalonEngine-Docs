---
title: Class WorkerHostApplicationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-worker-hosting-workerhostapplicationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Worker.Hosting](/0-1-0-preview/reference/api/cephalon-worker-hosting/)  
Assembly: Cephalon.Worker.dll  

Registers the Cephalon worker host adapter on a <xref href="Microsoft.Extensions.Hosting.HostApplicationBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class WorkerHostApplicationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WorkerHostApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-worker-hosting-workerhostapplicationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Worker_Hosting_WorkerHostApplicationBuilderExtensions_AddCephalon_Microsoft_Extensions_Hosting_HostApplicationBuilder_"></a> AddCephalon\(HostApplicationBuilder\)

Adds Cephalon worker hosting using configuration-only engine setup.

```csharp
public static HostApplicationBuilder AddCephalon(this HostApplicationBuilder builder)
```

#### Parameters

`builder` [HostApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.extensions.hosting.hostapplicationbuilder)

The generic host application builder to extend.

#### Returns

 [HostApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.extensions.hosting.hostapplicationbuilder)

The same builder instance for fluent composition.

### <a id="Cephalon_Worker_Hosting_WorkerHostApplicationBuilderExtensions_AddCephalon_Microsoft_Extensions_Hosting_HostApplicationBuilder_System_Action_Cephalon_Engine_Composition_EngineBuilder__"></a> AddCephalon\(HostApplicationBuilder, Action<EngineBuilder\>\)

Adds Cephalon worker hosting and allows additional code-based engine configuration.

```csharp
public static HostApplicationBuilder AddCephalon(this HostApplicationBuilder builder, Action<EngineBuilder> configure)
```

#### Parameters

`builder` [HostApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.extensions.hosting.hostapplicationbuilder)

The generic host application builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)\>

The callback that configures the underlying engine builder.

#### Returns

 [HostApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.extensions.hosting.hostapplicationbuilder)

The same builder instance for fluent composition.

### <a id="Cephalon_Worker_Hosting_WorkerHostApplicationBuilderExtensions_AddCephalonProjectConfigurations_Microsoft_Extensions_Hosting_HostApplicationBuilder_"></a> AddCephalonProjectConfigurations\(HostApplicationBuilder\)

Adds Cephalon's project-configuration conventions to the generic host builder.

```csharp
public static HostApplicationBuilder AddCephalonProjectConfigurations(this HostApplicationBuilder builder)
```

#### Parameters

`builder` [HostApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.extensions.hosting.hostapplicationbuilder)

The generic host application builder to extend.

#### Returns

 [HostApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.extensions.hosting.hostapplicationbuilder)

The same builder instance for fluent composition.

#### Remarks

This loads split configuration files from the project's <code>Configurations</code> folder so
engine and host-specific settings can be grouped by concern while preserving the standard
<code>appsettings.json</code> and <code>appsettings.{Environment}.json</code> override path.
