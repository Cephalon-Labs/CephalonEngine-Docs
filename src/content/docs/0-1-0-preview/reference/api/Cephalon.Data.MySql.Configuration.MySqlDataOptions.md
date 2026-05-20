---
title: Class MySqlDataOptions
slug: 0-1-0-preview/reference/api/cephalon-data-mysql-configuration-mysqldataoptions
editUrl: false
---

Namespace: [Cephalon.Data.MySql.Configuration](/0-1-0-preview/reference/api/cephalon-data-mysql-configuration/)  
Assembly: Cephalon.Data.MySql.dll  

Configuration options for the MySQL data provider (<code>Engine:Data:MySql</code>).

```csharp
public sealed class MySqlDataOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MySqlDataOptions](/0-1-0-preview/reference/api/cephalon-data-mysql-configuration-mysqldataoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Data_MySql_Configuration_MySqlDataOptions_ProviderId"></a> ProviderId

Gets the canonical provider identifier emitted by the pack.

```csharp
public const string ProviderId = "mysql"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MySql_Configuration_MySqlDataOptions_SectionPath"></a> SectionPath

Gets the configuration section path used by default for MySQL data settings.

```csharp
public const string SectionPath = "Engine:Data:MySql"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Data_MySql_Configuration_MySqlDataOptions_CdcCaptures"></a> CdcCaptures

Gets the provider-native MySQL binlog captures that should be contributed to the active runtime.

```csharp
public IList<MySqlBinlogCaptureOptions> CdcCaptures { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[MySqlBinlogCaptureOptions](/0-1-0-preview/reference/api/cephalon-data-mysql-configuration-mysqlbinlogcaptureoptions/)\>

### <a id="Cephalon_Data_MySql_Configuration_MySqlDataOptions_CheckpointTableName"></a> CheckpointTableName

Gets or sets the Cephalon-managed checkpoint table name used for durable MySQL binlog progress.

```csharp
public string CheckpointTableName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MySql_Configuration_MySqlDataOptions_ConnectionString"></a> ConnectionString

Gets or sets the inline MySQL connection string.

```csharp
public string? ConnectionString { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.MySql.Configuration.MySqlDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.MySql.Configuration.MySqlDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_MySql_Configuration_MySqlDataOptions_ConnectionStringName"></a> ConnectionStringName

Gets or sets the root <code>ConnectionStrings</code> entry name to resolve for MySQL.

```csharp
public string? ConnectionStringName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.MySql.Configuration.MySqlDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.MySql.Configuration.MySqlDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_MySql_Configuration_MySqlDataOptions_DatabaseName"></a> DatabaseName

Gets or sets the operator-facing database name that owns the configured binlog captures.

```csharp
public string DatabaseName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
