---
title: Class CdcCaptureExecutionRuntimeManagedConnectorDriftCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordriftcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable desired-versus-observed drift categories used by managed-connector CDC execution runtimes.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorDriftCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorDriftCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordriftcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftCategories_ConnectClusterMismatch"></a> ConnectClusterMismatch

The latest reported connector-cluster identifier differs from the declared managed-connector baseline.

```csharp
public const string ConnectClusterMismatch = "connect-cluster-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftCategories_ConnectorClassMismatch"></a> ConnectorClassMismatch

The latest reported connector class differs from the declared managed-connector baseline.

```csharp
public const string ConnectorClassMismatch = "connector-class-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftCategories_MissingDeclaredTaskReports"></a> MissingDeclaredTaskReports

One or more declared task ids are missing from the latest reported task ids.

```csharp
public const string MissingDeclaredTaskReports = "missing-declared-task-reports"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftCategories_MissingTaskBaseline"></a> MissingTaskBaseline

The managed connector does not currently declare task ids or an expected task count.

```csharp
public const string MissingTaskBaseline = "missing-task-baseline"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftCategories_ReportedTaskIdentityUnavailable"></a> ReportedTaskIdentityUnavailable

The managed connector reports task counts, but not the task identities needed to compare declared task ids.

```csharp
public const string ReportedTaskIdentityUnavailable = "reported-task-identity-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftCategories_ReportedTaskTopologyUnavailable"></a> ReportedTaskTopologyUnavailable

The managed connector has not yet reported task ids or a reported task count.

```csharp
public const string ReportedTaskTopologyUnavailable = "reported-task-topology-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftCategories_SourceProviderMismatch"></a> SourceProviderMismatch

The latest reported source-provider identifier differs from the declared managed-connector baseline.

```csharp
public const string SourceProviderMismatch = "source-provider-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftCategories_TaskCountMismatch"></a> TaskCountMismatch

The managed connector reports a different task count than the declared task baseline.

```csharp
public const string TaskCountMismatch = "task-count-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDriftCategories_UnexpectedReportedTasks"></a> UnexpectedReportedTasks

One or more reported task ids were not part of the declared task baseline.

```csharp
public const string UnexpectedReportedTasks = "unexpected-reported-tasks"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
