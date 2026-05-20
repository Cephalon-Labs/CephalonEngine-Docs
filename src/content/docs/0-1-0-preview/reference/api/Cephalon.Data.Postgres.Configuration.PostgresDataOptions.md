---
title: Class PostgresDataOptions
slug: 0-1-0-preview/reference/api/cephalon-data-postgres-configuration-postgresdataoptions
editUrl: false
---

Namespace: [Cephalon.Data.Postgres.Configuration](/0-1-0-preview/reference/api/cephalon-data-postgres-configuration/)  
Assembly: Cephalon.Data.Postgres.dll  

Configuration options for the PostgreSQL data provider (<code>Engine:Data:Postgres</code>).

```csharp
public sealed class PostgresDataOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PostgresDataOptions](/0-1-0-preview/reference/api/cephalon-data-postgres-configuration-postgresdataoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Data_Postgres_Configuration_PostgresDataOptions_ProviderId"></a> ProviderId

Gets the canonical provider identifier emitted by the pack.

```csharp
public const string ProviderId = "postgresql"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresDataOptions_SectionPath"></a> SectionPath

Gets the configuration section path used by default for PostgreSQL data settings.

```csharp
public const string SectionPath = "Engine:Data:Postgres"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Data_Postgres_Configuration_PostgresDataOptions_CdcCaptures"></a> CdcCaptures

Gets the provider-native PostgreSQL logical-replication captures that should be contributed to the active runtime.

```csharp
public IList<PostgresLogicalReplicationCaptureOptions> CdcCaptures { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[PostgresLogicalReplicationCaptureOptions](/0-1-0-preview/reference/api/cephalon-data-postgres-configuration-postgreslogicalreplicationcaptureoptions/)\>

### <a id="Cephalon_Data_Postgres_Configuration_PostgresDataOptions_ConnectionString"></a> ConnectionString

Gets or sets the inline PostgreSQL connection string.

```csharp
public string? ConnectionString { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.Postgres.Configuration.PostgresDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.Postgres.Configuration.PostgresDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_Postgres_Configuration_PostgresDataOptions_ConnectionStringName"></a> ConnectionStringName

Gets or sets the root <code>ConnectionStrings</code> entry name to resolve for PostgreSQL.

```csharp
public string? ConnectionStringName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.Postgres.Configuration.PostgresDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.Postgres.Configuration.PostgresDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_Postgres_Configuration_PostgresDataOptions_DatabaseName"></a> DatabaseName

Gets or sets the operator-facing database name that owns the configured logical-replication captures.

```csharp
public string DatabaseName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
