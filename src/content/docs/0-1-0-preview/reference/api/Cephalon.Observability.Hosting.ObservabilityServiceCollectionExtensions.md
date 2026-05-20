---
title: Class ObservabilityServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-hosting-observabilityservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.Observability.Hosting](/0-1-0-preview/reference/api/cephalon-observability-hosting/)  
Assembly: Cephalon.Observability.dll  

Adds the Cephalon observability package to an <xref href="Microsoft.Extensions.DependencyInjection.IServiceCollection" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class ObservabilityServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObservabilityServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-observability-hosting-observabilityservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_Hosting_ObservabilityServiceCollectionExtensions_AddCephalonObservability_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_Observability_Configuration_ObservabilityOptions__"></a> AddCephalonObservability\(IServiceCollection, IConfiguration, Action<ObservabilityOptions\>?\)

Adds observability services using configuration as the primary source of observability options.

```csharp
public static IServiceCollection AddCephalonObservability(this IServiceCollection services, IConfiguration configuration, Action<ObservabilityOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[ObservabilityOptions](/0-1-0-preview/reference/api/cephalon-observability-configuration-observabilityoptions/)\>?

An optional callback that can extend or override the configuration-driven observability setup.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

### <a id="Cephalon_Observability_Hosting_ObservabilityServiceCollectionExtensions_AddCephalonObservability_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_Cephalon_Observability_Configuration_ObservabilityOptions__"></a> AddCephalonObservability\(IServiceCollection, Action<ObservabilityOptions\>?\)

Adds observability services using code-first configuration.

```csharp
public static IServiceCollection AddCephalonObservability(this IServiceCollection services, Action<ObservabilityOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[ObservabilityOptions](/0-1-0-preview/reference/api/cephalon-observability-configuration-observabilityoptions/)\>?

An optional callback that configures observability options.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.
