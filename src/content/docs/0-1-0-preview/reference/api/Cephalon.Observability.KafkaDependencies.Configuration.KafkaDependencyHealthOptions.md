---
title: Class KafkaDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-kafkadependencies-configuration-kafkadependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.KafkaDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-kafkadependencies-configuration/)  
Assembly: Cephalon.Observability.KafkaDependencies.dll  

Configures Kafka dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class KafkaDependencyHealthOptions : DependencyHealthOptionsBase<KafkaDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<KafkaDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[KafkaDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-kafkadependencies-configuration-kafkadependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<KafkaDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<KafkaDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_KafkaDependencies_Configuration_KafkaDependencyHealthOptions__ctor"></a> KafkaDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.KafkaDependencies.Configuration.KafkaDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public KafkaDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_KafkaDependencies_Configuration_KafkaDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Kafka dependency-health options from configuration.

```csharp
public static KafkaDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [KafkaDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-kafkadependencies-configuration-kafkadependencyhealthoptions/)

The bound dependency-health options.
