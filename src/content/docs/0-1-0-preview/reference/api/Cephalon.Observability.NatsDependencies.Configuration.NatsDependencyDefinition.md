---
title: Class NatsDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-natsdependencies-configuration-natsdependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.NatsDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-natsdependencies-configuration/)  
Assembly: Cephalon.Observability.NatsDependencies.dll  

Describes one NATS dependency that should contribute to runtime health.

```csharp
public sealed class NatsDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/) ← 
[NatsDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-natsdependencies-configuration-natsdependencydefinition/)

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

### <a id="Cephalon_Observability_NatsDependencies_Configuration_NatsDependencyDefinition__ctor"></a> NatsDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.NatsDependencies.Configuration.NatsDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NatsDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_NatsDependencies_Configuration_NatsDependencyDefinition_ClientName"></a> ClientName

Gets or sets the optional client name sent in the NATS <code>CONNECT</code> payload.

```csharp
public string? ClientName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_NatsDependencies_Configuration_NatsDependencyDefinition_Host"></a> Host

Gets or sets the NATS host name or IP address to probe.

```csharp
public string Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_NatsDependencies_Configuration_NatsDependencyDefinition_Password"></a> Password

Gets or sets the optional password used for NATS user/password authentication.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_NatsDependencies_Configuration_NatsDependencyDefinition_Port"></a> Port

Gets or sets the NATS client port.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Observability_NatsDependencies_Configuration_NatsDependencyDefinition_TlsServerName"></a> TlsServerName

Gets or sets the TLS server name used for certificate validation when <xref href="Cephalon.Observability.NatsDependencies.Configuration.NatsDependencyDefinition.UseTls" data-throw-if-not-resolved="false"></xref> is enabled.

```csharp
public string? TlsServerName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_NatsDependencies_Configuration_NatsDependencyDefinition_Token"></a> Token

Gets or sets the optional auth token used for token-based NATS authentication.

```csharp
public string? Token { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_NatsDependencies_Configuration_NatsDependencyDefinition_UseTls"></a> UseTls

Gets or sets a value indicating whether the probe should upgrade the connection to TLS after reading the initial server info line.

```csharp
public bool UseTls { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Observability_NatsDependencies_Configuration_NatsDependencyDefinition_Username"></a> Username

Gets or sets the optional user name used for NATS user/password authentication.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
