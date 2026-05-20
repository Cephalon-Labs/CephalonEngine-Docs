---
title: Class RedisDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-redisdependencies-configuration-redisdependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.RedisDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-redisdependencies-configuration/)  
Assembly: Cephalon.Observability.RedisDependencies.dll  

Describes one Redis dependency that should contribute to runtime health.

```csharp
public sealed class RedisDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/) ← 
[RedisDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-redisdependencies-configuration-redisdependencydefinition/)

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

### <a id="Cephalon_Observability_RedisDependencies_Configuration_RedisDependencyDefinition__ctor"></a> RedisDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.RedisDependencies.Configuration.RedisDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RedisDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_RedisDependencies_Configuration_RedisDependencyDefinition_Database"></a> Database

Gets or sets the optional Redis logical database index to select before pinging.

```csharp
public int? Database { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Observability_RedisDependencies_Configuration_RedisDependencyDefinition_Host"></a> Host

Gets or sets the Redis host name or IP address to probe.

```csharp
public string Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_RedisDependencies_Configuration_RedisDependencyDefinition_Password"></a> Password

Gets or sets the optional Redis password used for authentication.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_RedisDependencies_Configuration_RedisDependencyDefinition_Port"></a> Port

Gets or sets the Redis TCP port.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Observability_RedisDependencies_Configuration_RedisDependencyDefinition_Username"></a> Username

Gets or sets the optional Redis ACL user name used for authentication.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
