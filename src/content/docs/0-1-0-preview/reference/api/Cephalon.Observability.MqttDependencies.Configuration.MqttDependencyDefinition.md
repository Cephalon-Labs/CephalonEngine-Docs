---
title: Class MqttDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-mqttdependencies-configuration-mqttdependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.MqttDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-mqttdependencies-configuration/)  
Assembly: Cephalon.Observability.MqttDependencies.dll  

Describes one MQTT dependency that should contribute to runtime health.

```csharp
public sealed class MqttDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/) ← 
[MqttDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-mqttdependencies-configuration-mqttdependencydefinition/)

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

### <a id="Cephalon_Observability_MqttDependencies_Configuration_MqttDependencyDefinition__ctor"></a> MqttDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.MqttDependencies.Configuration.MqttDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MqttDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_MqttDependencies_Configuration_MqttDependencyDefinition_ClientId"></a> ClientId

Gets or sets the MQTT client identifier sent in the <code>CONNECT</code> packet.

```csharp
public string? ClientId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_MqttDependencies_Configuration_MqttDependencyDefinition_Host"></a> Host

Gets or sets the MQTT host name or IP address to probe.

```csharp
public string Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_MqttDependencies_Configuration_MqttDependencyDefinition_KeepAliveSeconds"></a> KeepAliveSeconds

Gets or sets the MQTT keep-alive interval, in seconds, advertised through the <code>CONNECT</code> packet.

```csharp
public int KeepAliveSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Observability_MqttDependencies_Configuration_MqttDependencyDefinition_Password"></a> Password

Gets or sets the optional password used for MQTT username/password authentication.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_MqttDependencies_Configuration_MqttDependencyDefinition_Port"></a> Port

Gets or sets the MQTT broker port.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Observability_MqttDependencies_Configuration_MqttDependencyDefinition_TlsServerName"></a> TlsServerName

Gets or sets the TLS server name used for certificate validation when <xref href="Cephalon.Observability.MqttDependencies.Configuration.MqttDependencyDefinition.UseTls" data-throw-if-not-resolved="false"></xref> is enabled.

```csharp
public string? TlsServerName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_MqttDependencies_Configuration_MqttDependencyDefinition_UseTls"></a> UseTls

Gets or sets a value indicating whether the probe should use TLS immediately after opening the TCP connection.

```csharp
public bool UseTls { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Observability_MqttDependencies_Configuration_MqttDependencyDefinition_Username"></a> Username

Gets or sets the optional user name used for MQTT username/password authentication.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
