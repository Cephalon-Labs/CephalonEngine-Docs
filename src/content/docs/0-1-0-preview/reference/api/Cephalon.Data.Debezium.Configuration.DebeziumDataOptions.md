---
title: Class DebeziumDataOptions
slug: 0-1-0-preview/reference/api/cephalon-data-debezium-configuration-debeziumdataoptions
editUrl: false
---

Namespace: [Cephalon.Data.Debezium.Configuration](/0-1-0-preview/reference/api/cephalon-data-debezium-configuration/)  
Assembly: Cephalon.Data.Debezium.dll  

Configuration options for the Debezium-managed external CDC pack (<code>Engine:Data:Debezium</code>).

```csharp
public sealed class DebeziumDataOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DebeziumDataOptions](/0-1-0-preview/reference/api/cephalon-data-debezium-configuration-debeziumdataoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumDataOptions_ProviderId"></a> ProviderId

Gets the canonical provider identifier emitted by the pack.

```csharp
public const string ProviderId = "debezium"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumDataOptions_SectionPath"></a> SectionPath

Gets the default configuration section path for Debezium data settings.

```csharp
public const string SectionPath = "Engine:Data:Debezium"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumDataOptions_Connectors"></a> Connectors

Gets the Debezium-managed connector runtimes that should contribute captures and external execution ownership to the active runtime.

```csharp
public IList<DebeziumConnectorOptions> Connectors { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[DebeziumConnectorOptions](/0-1-0-preview/reference/api/cephalon-data-debezium-configuration-debeziumconnectoroptions/)\>
