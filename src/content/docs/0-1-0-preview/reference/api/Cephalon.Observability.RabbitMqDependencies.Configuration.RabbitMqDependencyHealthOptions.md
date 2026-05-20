---
title: Class RabbitMqDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-rabbitmqdependencies-configuration-rabbitmqdependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.RabbitMqDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-rabbitmqdependencies-configuration/)  
Assembly: Cephalon.Observability.RabbitMqDependencies.dll  

Configures RabbitMQ dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class RabbitMqDependencyHealthOptions : DependencyHealthOptionsBase<RabbitMqDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<RabbitMqDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[RabbitMqDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-rabbitmqdependencies-configuration-rabbitmqdependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<RabbitMqDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<RabbitMqDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_RabbitMqDependencies_Configuration_RabbitMqDependencyHealthOptions__ctor"></a> RabbitMqDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.RabbitMqDependencies.Configuration.RabbitMqDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RabbitMqDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_RabbitMqDependencies_Configuration_RabbitMqDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds RabbitMQ dependency-health options from configuration.

```csharp
public static RabbitMqDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [RabbitMqDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-rabbitmqdependencies-configuration-rabbitmqdependencyhealthoptions/)

The bound dependency-health options.
