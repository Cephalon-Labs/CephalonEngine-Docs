---
title: Class MqttDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-mqttdependencies-configuration-mqttdependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.MqttDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-mqttdependencies-configuration/)  
Assembly: Cephalon.Observability.MqttDependencies.dll  

Configures MQTT dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class MqttDependencyHealthOptions : DependencyHealthOptionsBase<MqttDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<MqttDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[MqttDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-mqttdependencies-configuration-mqttdependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<MqttDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<MqttDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_MqttDependencies_Configuration_MqttDependencyHealthOptions__ctor"></a> MqttDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.MqttDependencies.Configuration.MqttDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MqttDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_MqttDependencies_Configuration_MqttDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds MQTT dependency-health options from configuration.

```csharp
public static MqttDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [MqttDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-mqttdependencies-configuration-mqttdependencyhealthoptions/)

The bound dependency-health options.
