---
title: Class DatabaseRuntimeSelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databaseruntimeselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the active database runtime tuning inputs resolved for a Cephalon app.

```csharp
public sealed class DatabaseRuntimeSelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseRuntimeSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databaseruntimeselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection__ctor_System_Nullable_System_Boolean__System_Nullable_System_Boolean__System_Nullable_System_Boolean__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__"></a> DatabaseRuntimeSelection\(bool?, bool?, bool?, int?, int?, int?, int?, int?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.DatabaseRuntimeSelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public DatabaseRuntimeSelection(bool? enableDetailedErrors = null, bool? enableSensitiveDataLogging = null, bool? enableRetryOnFailure = null, int? maxRetryCount = null, int? maxRetryDelaySeconds = null, int? commandTimeoutSeconds = null, int? maxBatchSize = null, int? roleProbeFreshnessSeconds = null)
```

#### Parameters

`enableDetailedErrors` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

`enableSensitiveDataLogging` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

`enableRetryOnFailure` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

`maxRetryCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`maxRetryDelaySeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`commandTimeoutSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`maxBatchSize` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`roleProbeFreshnessSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

## Properties

### <a id="Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection_CommandTimeoutSeconds"></a> CommandTimeoutSeconds

Gets the command timeout in seconds when one was configured.

```csharp
public int? CommandTimeoutSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection_Empty"></a> Empty

Gets an empty database-runtime selection instance.

```csharp
public static DatabaseRuntimeSelection Empty { get; }
```

#### Property Value

 [DatabaseRuntimeSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databaseruntimeselection/)

### <a id="Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection_EnableDetailedErrors"></a> EnableDetailedErrors

Gets a value indicating whether detailed provider errors were explicitly selected.

```csharp
public bool? EnableDetailedErrors { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection_EnableRetryOnFailure"></a> EnableRetryOnFailure

Gets a value indicating whether transient-failure retries were explicitly selected.

```csharp
public bool? EnableRetryOnFailure { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection_EnableSensitiveDataLogging"></a> EnableSensitiveDataLogging

Gets a value indicating whether sensitive-data logging was explicitly selected.

```csharp
public bool? EnableSensitiveDataLogging { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection_HasValues"></a> HasValues

Gets a value indicating whether any database-runtime selection inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection_MaxBatchSize"></a> MaxBatchSize

Gets the maximum provider batch size when one was configured.

```csharp
public int? MaxBatchSize { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection_MaxRetryCount"></a> MaxRetryCount

Gets the maximum retry count when transient-failure retries were configured.

```csharp
public int? MaxRetryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection_MaxRetryDelaySeconds"></a> MaxRetryDelaySeconds

Gets the maximum retry delay in seconds when transient-failure retries were configured.

```csharp
public int? MaxRetryDelaySeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_AppModel_DatabaseRuntimeSelection_RoleProbeFreshnessSeconds"></a> RoleProbeFreshnessSeconds

Gets the freshness window in seconds for cached database-role probes when one was selected.
A value of <code>0</code> disables probe-result caching.

```csharp
public int? RoleProbeFreshnessSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
