---
title: Class NatsDependencyHealthServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-natsdependencies-hosting-natsdependencyhealthservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.Observability.NatsDependencies.Hosting](/0-1-0-preview/reference/api/cephalon-observability-natsdependencies-hosting/)  
Assembly: Cephalon.Observability.NatsDependencies.dll  

Adds NATS dependency-health services to a Cephalon host.

```csharp
public static class NatsDependencyHealthServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NatsDependencyHealthServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-observability-natsdependencies-hosting-natsdependencyhealthservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_NatsDependencies_Hosting_NatsDependencyHealthServiceCollectionExtensions_AddCephalonNatsDependencyHealth_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_Observability_NatsDependencies_Configuration_NatsDependencyHealthOptions__"></a> AddCephalonNatsDependencyHealth\(IServiceCollection, IConfiguration, Action<NatsDependencyHealthOptions\>?\)

Adds NATS dependency-health services using configuration as the primary source of probe settings.

```csharp
public static IServiceCollection AddCephalonNatsDependencyHealth(this IServiceCollection services, IConfiguration configuration, Action<NatsDependencyHealthOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[NatsDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-natsdependencies-configuration-natsdependencyhealthoptions/)\>?

An optional callback that can extend or override the configuration-driven dependency-health setup.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

### <a id="Cephalon_Observability_NatsDependencies_Hosting_NatsDependencyHealthServiceCollectionExtensions_AddCephalonNatsDependencyHealth_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_Cephalon_Observability_NatsDependencies_Configuration_NatsDependencyHealthOptions__"></a> AddCephalonNatsDependencyHealth\(IServiceCollection, Action<NatsDependencyHealthOptions\>?\)

Adds NATS dependency-health services using code-first configuration.

```csharp
public static IServiceCollection AddCephalonNatsDependencyHealth(this IServiceCollection services, Action<NatsDependencyHealthOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[NatsDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-natsdependencies-configuration-natsdependencyhealthoptions/)\>?

An optional callback that configures dependency-health options.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.
