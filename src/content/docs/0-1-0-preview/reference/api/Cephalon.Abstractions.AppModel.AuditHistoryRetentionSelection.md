---
title: Class AuditHistoryRetentionSelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryretentionselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the durable audit-history retention inputs resolved for a Cephalon app.

```csharp
public sealed class AuditHistoryRetentionSelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditHistoryRetentionSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryretentionselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_AuditHistoryRetentionSelection__ctor_System_Nullable_System_Boolean__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Boolean__System_Nullable_System_Int32__"></a> AuditHistoryRetentionSelection\(bool?, int?, int?, bool?, int?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.AuditHistoryRetentionSelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public AuditHistoryRetentionSelection(bool? enabled = null, int? maxAgeDays = null, int? deleteBatchSize = null, bool? applyOnStartup = null, int? runIntervalMinutes = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether retention was explicitly enabled.

`maxAgeDays` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The maximum age, in days, to retain durable audit rows.

`deleteBatchSize` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The maximum number of rows deleted per retention batch.

`applyOnStartup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether one retention pass should run during host startup.

`runIntervalMinutes` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The optional recurring retention interval in minutes.

## Properties

### <a id="Cephalon_Abstractions_AppModel_AuditHistoryRetentionSelection_ApplyOnStartup"></a> ApplyOnStartup

Gets a value indicating whether one retention pass should run during host startup.

```csharp
public bool? ApplyOnStartup { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_AuditHistoryRetentionSelection_DeleteBatchSize"></a> DeleteBatchSize

Gets the maximum number of rows deleted per retention batch.

```csharp
public int? DeleteBatchSize { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_AppModel_AuditHistoryRetentionSelection_Empty"></a> Empty

Gets an empty audit-history retention selection instance.

```csharp
public static AuditHistoryRetentionSelection Empty { get; }
```

#### Property Value

 [AuditHistoryRetentionSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-audithistoryretentionselection/)

### <a id="Cephalon_Abstractions_AppModel_AuditHistoryRetentionSelection_Enabled"></a> Enabled

Gets a value indicating whether retention was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_AuditHistoryRetentionSelection_HasValues"></a> HasValues

Gets a value indicating whether any durable audit-history retention inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_AuditHistoryRetentionSelection_MaxAgeDays"></a> MaxAgeDays

Gets the maximum age, in days, to retain durable audit rows.

```csharp
public int? MaxAgeDays { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_AppModel_AuditHistoryRetentionSelection_RunIntervalMinutes"></a> RunIntervalMinutes

Gets the optional recurring retention interval in minutes.

```csharp
public int? RunIntervalMinutes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
