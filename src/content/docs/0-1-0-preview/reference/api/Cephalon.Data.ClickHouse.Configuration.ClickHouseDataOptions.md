---
title: Class ClickHouseDataOptions
slug: 0-1-0-preview/reference/api/cephalon-data-clickhouse-configuration-clickhousedataoptions
editUrl: false
---

Namespace: [Cephalon.Data.ClickHouse.Configuration](/0-1-0-preview/reference/api/cephalon-data-clickhouse-configuration/)  
Assembly: Cephalon.Data.ClickHouse.dll  

Options controlling how <code>Cephalon.Data.ClickHouse</code> connects to ClickHouse and registers data services.

```csharp
public sealed class ClickHouseDataOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ClickHouseDataOptions](/0-1-0-preview/reference/api/cephalon-data-clickhouse-configuration-clickhousedataoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Data_ClickHouse_Configuration_ClickHouseDataOptions_ProviderId"></a> ProviderId

The provider identifier used in capability and descriptor metadata.

```csharp
public const string ProviderId = "clickhouse"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Data_ClickHouse_Configuration_ClickHouseDataOptions_Database"></a> Database

The ClickHouse database. Defaults to <code>"default"</code>.

```csharp
public string Database { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_ClickHouse_Configuration_ClickHouseDataOptions_Host"></a> Host

The ClickHouse host (e.g. <code>"localhost"</code>).

```csharp
public string Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_ClickHouse_Configuration_ClickHouseDataOptions_Password"></a> Password

ClickHouse password. Defaults to empty.

```csharp
public string Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_ClickHouse_Configuration_ClickHouseDataOptions_Port"></a> Port

The ClickHouse HTTP port. Defaults to <code>8123</code>.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_ClickHouse_Configuration_ClickHouseDataOptions_RegisterInbox"></a> RegisterInbox

When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>, registers <xref href="Cephalon.Abstractions.Data.IInbox" data-throw-if-not-resolved="false"></xref> backed by a ClickHouse ReplacingMergeTree table.

```csharp
public bool RegisterInbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_ClickHouse_Configuration_ClickHouseDataOptions_RegisterOutbox"></a> RegisterOutbox

When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>, registers <xref href="Cephalon.Abstractions.Data.IOutbox" data-throw-if-not-resolved="false"></xref> backed by a ClickHouse ReplacingMergeTree table.

```csharp
public bool RegisterOutbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_ClickHouse_Configuration_ClickHouseDataOptions_TablePrefix"></a> TablePrefix

Optional prefix applied to all managed table names.

```csharp
public string TablePrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_ClickHouse_Configuration_ClickHouseDataOptions_Username"></a> Username

ClickHouse username. Defaults to <code>"default"</code>.

```csharp
public string Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Data_ClickHouse_Configuration_ClickHouseDataOptions_BuildConnectionString"></a> BuildConnectionString\(\)

Builds a ClickHouse ADO.NET connection string from the configured options.

```csharp
public string BuildConnectionString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)
