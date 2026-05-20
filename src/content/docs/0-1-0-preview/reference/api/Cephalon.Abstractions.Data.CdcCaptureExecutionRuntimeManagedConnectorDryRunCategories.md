---
title: Class CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordryruncategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable managed-connector dry-run category identifiers used by CDC execution runtimes.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectordryruncategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories_BlockingRemediation"></a> BlockingRemediation

The managed connector is blocked by failed or otherwise blocking runtime remediation work.

```csharp
public const string BlockingRemediation = "blocking-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories_ChangePlanned"></a> ChangePlanned

The managed connector currently reports at least one potential shared write-path change for the intended management operation.

```csharp
public const string ChangePlanned = "change-planned"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories_ConnectClusterChange"></a> ConnectClusterChange

The managed connector would change the reported connector-cluster identifier to match the declared baseline.

```csharp
public const string ConnectClusterChange = "connect-cluster-change"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories_ConnectorClassChange"></a> ConnectorClassChange

The managed connector would change the reported connector class to match the declared baseline.

```csharp
public const string ConnectorClassChange = "connector-class-change"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories_GovernanceOutOfPolicy"></a> GovernanceOutOfPolicy

The managed connector is currently out of policy for future write-path follow-through.

```csharp
public const string GovernanceOutOfPolicy = "governance-out-of-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories_IncompleteReportingCoverage"></a> IncompleteReportingCoverage

The managed connector does not yet have full declared-versus-reported coverage on the shared runtime surface.

```csharp
public const string IncompleteReportingCoverage = "incomplete-reporting-coverage"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories_LifecycleChange"></a> LifecycleChange

The managed connector would require a lifecycle operation such as pause, resume, restart, or delete.

```csharp
public const string LifecycleChange = "lifecycle-change"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories_NoChangesRequired"></a> NoChangesRequired

The managed connector currently reports no shared write-path changes for the intended management operation.

```csharp
public const string NoChangesRequired = "no-changes-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories_ObserveOnlyMode"></a> ObserveOnlyMode

The managed connector currently stays in observe-only mode.

```csharp
public const string ObserveOnlyMode = "observe-only-mode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories_RuntimeRemediation"></a> RuntimeRemediation

The managed connector still needs runtime remediation attention before a dry-run answer can be trusted.

```csharp
public const string RuntimeRemediation = "runtime-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories_RuntimeTruthIncomplete"></a> RuntimeTruthIncomplete

The managed connector does not yet report enough runtime truth to trust a dry-run answer.

```csharp
public const string RuntimeTruthIncomplete = "runtime-truth-incomplete"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories_SourceProviderChange"></a> SourceProviderChange

The managed connector would change the reported source-provider identifier to match the declared baseline.

```csharp
public const string SourceProviderChange = "source-provider-change"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorDryRunCategories_TaskTopologyChange"></a> TaskTopologyChange

The managed connector would change the reported task topology to match the declared baseline.

```csharp
public const string TaskTopologyChange = "task-topology-change"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
