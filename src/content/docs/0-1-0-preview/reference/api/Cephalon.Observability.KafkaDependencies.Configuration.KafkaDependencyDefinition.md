---
title: Class KafkaDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-kafkadependencies-configuration-kafkadependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.KafkaDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-kafkadependencies-configuration/)  
Assembly: Cephalon.Observability.KafkaDependencies.dll  

Describes one Kafka dependency that should contribute to runtime health.

```csharp
public sealed class KafkaDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/) ← 
[KafkaDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-kafkadependencies-configuration-kafkadependencydefinition/)

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

### <a id="Cephalon_Observability_KafkaDependencies_Configuration_KafkaDependencyDefinition__ctor"></a> KafkaDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.KafkaDependencies.Configuration.KafkaDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public KafkaDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_KafkaDependencies_Configuration_KafkaDependencyDefinition_BootstrapServers"></a> BootstrapServers

Gets or sets the Kafka bootstrap server list, such as <code>broker-1:9092,broker-2:9092</code>.

```csharp
public string BootstrapServers { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_KafkaDependencies_Configuration_KafkaDependencyDefinition_ClientId"></a> ClientId

Gets or sets the optional client identifier sent to the Kafka cluster.

```csharp
public string? ClientId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_KafkaDependencies_Configuration_KafkaDependencyDefinition_Password"></a> Password

Gets or sets the optional SASL password used when authenticated broker access is required.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_KafkaDependencies_Configuration_KafkaDependencyDefinition_SaslMechanism"></a> SaslMechanism

Gets or sets the optional SASL mechanism, such as <code>Plain</code>, <code>ScramSha256</code>, or <code>ScramSha512</code>.

```csharp
public string? SaslMechanism { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_KafkaDependencies_Configuration_KafkaDependencyDefinition_SecurityProtocol"></a> SecurityProtocol

Gets or sets the optional Kafka security protocol, such as <code>Plaintext</code>, <code>Ssl</code>, <code>SaslPlaintext</code>, or <code>SaslSsl</code>.

```csharp
public string? SecurityProtocol { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_KafkaDependencies_Configuration_KafkaDependencyDefinition_Topic"></a> Topic

Gets or sets the optional topic name that should be present in returned cluster metadata.

```csharp
public string? Topic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_KafkaDependencies_Configuration_KafkaDependencyDefinition_Username"></a> Username

Gets or sets the optional SASL user name used when authenticated broker access is required.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
