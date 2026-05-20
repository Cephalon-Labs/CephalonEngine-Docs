---
title: Class DatabaseRoleProbeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroleprobedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the stable probe-freshness runtime state published for one database role.

```csharp
public sealed class DatabaseRoleProbeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseRoleProbeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-databaseroleprobedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseRoleProbeDescriptor__ctor_System_Boolean_System_Int32_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_Int32__"></a> DatabaseRoleProbeDescriptor\(bool, int, string?, string?, DateTimeOffset?, int?\)

Creates a new database-role probe descriptor.

```csharp
public DatabaseRoleProbeDescriptor(bool cacheEnabled, int freshnessSeconds, string? freshnessOrigin = null, string? source = null, DateTimeOffset? freshUntilUtc = null, int? ageSeconds = null)
```

#### Parameters

`cacheEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether cached probe answers are enabled for the role.

`freshnessSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The configured or default freshness window in seconds.

`freshnessOrigin` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source of the effective freshness window, such as <code>configured</code> or <code>default</code>.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source of the current answer, such as <code>live</code> or <code>cache</code>.

`freshUntilUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp until which the current answer remains fresh, when known.

`ageSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The age in seconds of the current answer, when known.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseRoleProbeDescriptor_AgeSeconds"></a> AgeSeconds

Gets the age in seconds of the current answer, when known.

```csharp
public int? AgeSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleProbeDescriptor_CacheEnabled"></a> CacheEnabled

Gets a value indicating whether cached probe answers are enabled for the role.

```csharp
public bool CacheEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_DatabaseRoleProbeDescriptor_FreshUntilUtc"></a> FreshUntilUtc

Gets the UTC timestamp until which the current answer remains fresh, when known.

```csharp
public DateTimeOffset? FreshUntilUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleProbeDescriptor_FreshnessOrigin"></a> FreshnessOrigin

Gets the source of the effective freshness window, when known.

```csharp
public string? FreshnessOrigin { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_DatabaseRoleProbeDescriptor_FreshnessSeconds"></a> FreshnessSeconds

Gets the configured or default freshness window in seconds.

```csharp
public int FreshnessSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseRoleProbeDescriptor_Source"></a> Source

Gets the source of the current answer, such as <code>live</code> or <code>cache</code>, when known.

```csharp
public string? Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
