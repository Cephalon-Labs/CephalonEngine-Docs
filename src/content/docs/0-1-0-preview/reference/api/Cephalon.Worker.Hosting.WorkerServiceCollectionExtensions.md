---
title: Class WorkerServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-worker-hosting-workerservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.Worker.Hosting](/0-1-0-preview/reference/api/cephalon-worker-hosting/)  
Assembly: Cephalon.Worker.dll  

Adds the Cephalon worker adapter and runtime services to an <xref href="Microsoft.Extensions.DependencyInjection.IServiceCollection" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class WorkerServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WorkerServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-worker-hosting-workerservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Worker_Hosting_WorkerServiceCollectionExtensions_AddCephalonWorker_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_Engine_Composition_EngineBuilder__System_String_"></a> AddCephalonWorker\(IServiceCollection, IConfiguration, Action<EngineBuilder\>?, string\)

Adds Cephalon worker hosting using configuration as the primary source of engine settings.

```csharp
public static IServiceCollection AddCephalonWorker(this IServiceCollection services, IConfiguration configuration, Action<EngineBuilder>? configure = null, string sectionPath = "Engine")
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)\>?

An optional callback that can extend or override the configuration-driven engine setup.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

### <a id="Cephalon_Worker_Hosting_WorkerServiceCollectionExtensions_AddCephalonWorker_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_Cephalon_Engine_Composition_EngineBuilder__"></a> AddCephalonWorker\(IServiceCollection, Action<EngineBuilder\>\)

Adds Cephalon worker hosting using code-first engine configuration.

```csharp
public static IServiceCollection AddCephalonWorker(this IServiceCollection services, Action<EngineBuilder> configure)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)\>

The callback that configures the engine builder.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.
