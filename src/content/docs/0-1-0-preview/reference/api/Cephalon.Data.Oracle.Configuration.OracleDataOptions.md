---
title: Class OracleDataOptions
slug: 0-1-0-preview/reference/api/cephalon-data-oracle-configuration-oracledataoptions
editUrl: false
---

Namespace: [Cephalon.Data.Oracle.Configuration](/0-1-0-preview/reference/api/cephalon-data-oracle-configuration/)  
Assembly: Cephalon.Data.Oracle.dll  

Configuration options for the Oracle data provider (<code>Engine:Data:Oracle</code>).

```csharp
public sealed class OracleDataOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OracleDataOptions](/0-1-0-preview/reference/api/cephalon-data-oracle-configuration-oracledataoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Data_Oracle_Configuration_OracleDataOptions_ProviderId"></a> ProviderId

Gets the canonical provider identifier emitted by the pack.

```csharp
public const string ProviderId = "oracle"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Oracle_Configuration_OracleDataOptions_SectionPath"></a> SectionPath

Gets the configuration section path used by default for Oracle data settings.

```csharp
public const string SectionPath = "Engine:Data:Oracle"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Data_Oracle_Configuration_OracleDataOptions_CdcCaptures"></a> CdcCaptures

Gets the provider-native Oracle LogMiner captures that should be contributed to the active runtime.

```csharp
public IList<OracleLogMinerCaptureOptions> CdcCaptures { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[OracleLogMinerCaptureOptions](/0-1-0-preview/reference/api/cephalon-data-oracle-configuration-oraclelogminercaptureoptions/)\>

### <a id="Cephalon_Data_Oracle_Configuration_OracleDataOptions_CheckpointTableName"></a> CheckpointTableName

Gets or sets the Cephalon-managed checkpoint table name used for durable Oracle LogMiner progress.

```csharp
public string CheckpointTableName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Oracle_Configuration_OracleDataOptions_ConnectionString"></a> ConnectionString

Gets or sets the inline Oracle connection string.

```csharp
public string? ConnectionString { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.Oracle.Configuration.OracleDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.Oracle.Configuration.OracleDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_Oracle_Configuration_OracleDataOptions_ConnectionStringName"></a> ConnectionStringName

Gets or sets the root <code>ConnectionStrings</code> entry name to resolve for Oracle.

```csharp
public string? ConnectionStringName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.Oracle.Configuration.OracleDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.Oracle.Configuration.OracleDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_Oracle_Configuration_OracleDataOptions_DatabaseName"></a> DatabaseName

Gets or sets the operator-facing database name that owns the configured LogMiner captures.

```csharp
public string DatabaseName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
