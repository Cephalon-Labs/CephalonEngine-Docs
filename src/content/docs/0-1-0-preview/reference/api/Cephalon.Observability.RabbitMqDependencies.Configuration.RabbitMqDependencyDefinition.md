---
title: Class RabbitMqDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-rabbitmqdependencies-configuration-rabbitmqdependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.RabbitMqDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-rabbitmqdependencies-configuration/)  
Assembly: Cephalon.Observability.RabbitMqDependencies.dll  

Describes one RabbitMQ dependency that should contribute to runtime health.

```csharp
public sealed class RabbitMqDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/) ← 
[RabbitMqDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-rabbitmqdependencies-configuration-rabbitmqdependencydefinition/)

#### Inherited Members

[DependencyDefinitionBase.Id](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyDefinitionBase.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyDefinitionBase\_Id), 
[DependencyDefinitionBase.DisplayName](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyDefinitionBase.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyDefinitionBase\_DisplayName), 
[DependencyDefinitionBase.Required](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyDefinitionBase.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyDefinitionBase\_Required), 
[DependencyDefinitionBase.TimeoutSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyDefinitionBase.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyDefinitionBase\_TimeoutSeconds), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_RabbitMqDependencies_Configuration_RabbitMqDependencyDefinition__ctor"></a> RabbitMqDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.RabbitMqDependencies.Configuration.RabbitMqDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RabbitMqDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_RabbitMqDependencies_Configuration_RabbitMqDependencyDefinition_ConnectionString"></a> ConnectionString

Gets or sets the optional AMQP connection string used for the probe.

```csharp
public string? ConnectionString { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_RabbitMqDependencies_Configuration_RabbitMqDependencyDefinition_Host"></a> Host

Gets or sets the RabbitMQ host name or IP address to probe when no full connection string is supplied.

```csharp
public string Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_RabbitMqDependencies_Configuration_RabbitMqDependencyDefinition_Password"></a> Password

Gets or sets the optional password used for authentication when no full connection string is supplied.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_RabbitMqDependencies_Configuration_RabbitMqDependencyDefinition_Port"></a> Port

Gets or sets the RabbitMQ TCP port.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Observability_RabbitMqDependencies_Configuration_RabbitMqDependencyDefinition_UseTls"></a> UseTls

Gets or sets a value indicating whether TLS should be enabled for the broker probe.

```csharp
public bool UseTls { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Observability_RabbitMqDependencies_Configuration_RabbitMqDependencyDefinition_Username"></a> Username

Gets or sets the optional user name used for authentication when no full connection string is supplied.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_RabbitMqDependencies_Configuration_RabbitMqDependencyDefinition_VirtualHost"></a> VirtualHost

Gets or sets the RabbitMQ virtual host used for the probe connection.

```csharp
public string VirtualHost { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
