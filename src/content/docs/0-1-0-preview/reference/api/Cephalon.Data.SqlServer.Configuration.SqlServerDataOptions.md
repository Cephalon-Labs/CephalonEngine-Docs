---
title: Class SqlServerDataOptions
slug: 0-1-0-preview/reference/api/cephalon-data-sqlserver-configuration-sqlserverdataoptions
editUrl: false
---

Namespace: [Cephalon.Data.SqlServer.Configuration](/0-1-0-preview/reference/api/cephalon-data-sqlserver-configuration/)  
Assembly: Cephalon.Data.SqlServer.dll  

Configuration options for the SQL Server data provider (<code>Engine:Data:SqlServer</code>).

```csharp
public sealed class SqlServerDataOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SqlServerDataOptions](/0-1-0-preview/reference/api/cephalon-data-sqlserver-configuration-sqlserverdataoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerDataOptions_ProviderId"></a> ProviderId

Gets the canonical provider identifier emitted by the pack.

```csharp
public const string ProviderId = "sqlserver"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerDataOptions_SectionPath"></a> SectionPath

Gets the configuration section path used by default for SQL Server data settings.

```csharp
public const string SectionPath = "Engine:Data:SqlServer"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerDataOptions_CdcCaptures"></a> CdcCaptures

Gets the provider-native SQL Server CDC captures that should be contributed to the active runtime.

```csharp
public IList<SqlServerCdcCaptureOptions> CdcCaptures { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[SqlServerCdcCaptureOptions](/0-1-0-preview/reference/api/cephalon-data-sqlserver-configuration-sqlservercdccaptureoptions/)\>

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerDataOptions_CheckpointTableName"></a> CheckpointTableName

Gets or sets the table name that stores Cephalon-managed SQL Server CDC checkpoints.

```csharp
public string CheckpointTableName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerDataOptions_CheckpointTableSchema"></a> CheckpointTableSchema

Gets or sets the schema that stores Cephalon-managed SQL Server CDC checkpoints.

```csharp
public string CheckpointTableSchema { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerDataOptions_ConnectionString"></a> ConnectionString

Gets or sets the inline SQL Server connection string.

```csharp
public string? ConnectionString { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.SqlServer.Configuration.SqlServerDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.SqlServer.Configuration.SqlServerDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerDataOptions_ConnectionStringName"></a> ConnectionStringName

Gets or sets the root <code>ConnectionStrings</code> entry name to resolve for SQL Server.

```csharp
public string? ConnectionStringName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.SqlServer.Configuration.SqlServerDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.SqlServer.Configuration.SqlServerDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerDataOptions_DatabaseName"></a> DatabaseName

Gets or sets the operator-facing database name that owns the configured CDC captures.

```csharp
public string DatabaseName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
