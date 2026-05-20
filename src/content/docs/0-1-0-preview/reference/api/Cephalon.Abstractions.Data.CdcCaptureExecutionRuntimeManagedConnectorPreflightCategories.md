---
title: Class CdcCaptureExecutionRuntimeManagedConnectorPreflightCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorpreflightcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable managed-connector preflight category identifiers used by CDC execution runtimes.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorPreflightCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorPreflightCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorpreflightcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightCategories_BlockingRemediation"></a> BlockingRemediation

The managed connector is blocked by failed or otherwise blocking runtime remediation work.

```csharp
public const string BlockingRemediation = "blocking-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightCategories_DriftDetected"></a> DriftDetected

The managed connector still reports desired-versus-observed drift.

```csharp
public const string DriftDetected = "drift-detected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightCategories_GovernanceOutOfPolicy"></a> GovernanceOutOfPolicy

The managed connector is currently out of policy for future management follow-through.

```csharp
public const string GovernanceOutOfPolicy = "governance-out-of-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightCategories_IncompleteReportingCoverage"></a> IncompleteReportingCoverage

The managed connector does not yet have full declared-versus-reported coverage on the shared runtime surface.

```csharp
public const string IncompleteReportingCoverage = "incomplete-reporting-coverage"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightCategories_ObserveOnlyMode"></a> ObserveOnlyMode

The managed connector currently stays in observe-only mode.

```csharp
public const string ObserveOnlyMode = "observe-only-mode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightCategories_PreflightReady"></a> PreflightReady

The managed connector currently satisfies the shared baseline Cephalon would use to preflight the intended management operation.

```csharp
public const string PreflightReady = "preflight-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightCategories_ReconcileIntent"></a> ReconcileIntent

The managed connector currently expresses reconcile-style management intent.

```csharp
public const string ReconcileIntent = "reconcile-intent"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightCategories_RuntimeRemediation"></a> RuntimeRemediation

The managed connector still needs runtime remediation attention before Cephalon can preflight management operations.

```csharp
public const string RuntimeRemediation = "runtime-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightCategories_RuntimeTruthIncomplete"></a> RuntimeTruthIncomplete

The managed connector does not yet report enough runtime truth to preflight the intended management operation.

```csharp
public const string RuntimeTruthIncomplete = "runtime-truth-incomplete"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
