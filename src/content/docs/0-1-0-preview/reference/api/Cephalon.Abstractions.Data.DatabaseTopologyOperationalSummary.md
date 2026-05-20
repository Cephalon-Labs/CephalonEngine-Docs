---
title: Class DatabaseTopologyOperationalSummary
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalsummary
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the aggregate operator-facing posture for the current database topology.

```csharp
public sealed class DatabaseTopologyOperationalSummary
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseTopologyOperationalSummary](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalsummary/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary__ctor_System_String_System_String_System_String_System_String_System_String_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_"></a> DatabaseTopologyOperationalSummary\(string, string, string, string, string, int, int, int, int, int, int, int, int, int\)

Creates a new database-topology operational summary.

```csharp
public DatabaseTopologyOperationalSummary(string status, string headline, string detail, string actionLabel, string actionPath, int roleCount, int healthyRoleCount, int degradedRoleCount, int unhealthyRoleCount, int migrationTargetCount, int succeededMigrationTargetCount, int failedMigrationTargetCount, int pendingMigrationTargetCount, int productionReadyMigrationTargetCount)
```

#### Parameters

`status` [string](https://learn.microsoft.com/dotnet/api/system.string)

The aggregate topology status such as <code>Ready</code>, <code>Attention</code>, or <code>Blocked</code>.

`headline` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing summary headline.

`detail` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing summary detail.

`actionLabel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suggested operator action label.

`actionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suggested operator action path.

`roleCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The total number of configured logical database roles.

`healthyRoleCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of roles currently reporting healthy runtime state.

`degradedRoleCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of roles currently reporting degraded runtime state.

`unhealthyRoleCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of roles currently reporting unhealthy runtime state.

`migrationTargetCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The total number of visible logical migration targets.

`succeededMigrationTargetCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of migration targets currently reporting <code>Succeeded</code>.

`failedMigrationTargetCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of migration targets currently reporting <code>Failed</code>.

`pendingMigrationTargetCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of migration targets that are not yet <code>Succeeded</code>.

`productionReadyMigrationTargetCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of migration targets that publish production-recommended guidance.

## Properties

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_ActionLabel"></a> ActionLabel

Gets the suggested operator action label.

```csharp
public string ActionLabel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_ActionPath"></a> ActionPath

Gets the suggested operator action path.

```csharp
public string ActionPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_DegradedRoleCount"></a> DegradedRoleCount

Gets the number of roles currently reporting degraded runtime state.

```csharp
public int DegradedRoleCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_Detail"></a> Detail

Gets the operator-facing summary detail.

```csharp
public string Detail { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_FailedMigrationTargetCount"></a> FailedMigrationTargetCount

Gets the number of migration targets currently reporting <code>Failed</code>.

```csharp
public int FailedMigrationTargetCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_Headline"></a> Headline

Gets the operator-facing summary headline.

```csharp
public string Headline { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_HealthyRoleCount"></a> HealthyRoleCount

Gets the number of roles currently reporting healthy runtime state.

```csharp
public int HealthyRoleCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_MigrationTargetCount"></a> MigrationTargetCount

Gets the total number of visible logical migration targets.

```csharp
public int MigrationTargetCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_PendingMigrationTargetCount"></a> PendingMigrationTargetCount

Gets the number of migration targets that are not yet <code>Succeeded</code>.

```csharp
public int PendingMigrationTargetCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_ProductionReadyMigrationTargetCount"></a> ProductionReadyMigrationTargetCount

Gets the number of migration targets that publish production-recommended guidance.

```csharp
public int ProductionReadyMigrationTargetCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_RoleCount"></a> RoleCount

Gets the total number of configured logical database roles.

```csharp
public int RoleCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_Status"></a> Status

Gets the aggregate topology status.

```csharp
public string Status { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_SucceededMigrationTargetCount"></a> SucceededMigrationTargetCount

Gets the number of migration targets currently reporting <code>Succeeded</code>.

```csharp
public int SucceededMigrationTargetCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_DatabaseTopologyOperationalSummary_UnhealthyRoleCount"></a> UnhealthyRoleCount

Gets the number of roles currently reporting unhealthy runtime state.

```csharp
public int UnhealthyRoleCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
