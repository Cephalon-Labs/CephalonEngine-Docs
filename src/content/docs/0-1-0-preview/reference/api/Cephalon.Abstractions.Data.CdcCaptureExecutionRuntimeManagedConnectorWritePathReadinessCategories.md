---
title: Class CdcCaptureExecutionRuntimeManagedConnectorWritePathReadinessCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorwritepathreadinesscategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable managed-connector write-path readiness category identifiers used by CDC execution runtimes.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorWritePathReadinessCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorWritePathReadinessCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorwritepathreadinesscategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorWritePathReadinessCategories_BlockingRemediation"></a> BlockingRemediation

The managed connector is blocked by failed or otherwise blocking runtime remediation work.

```csharp
public const string BlockingRemediation = "blocking-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorWritePathReadinessCategories_DriftDetected"></a> DriftDetected

The managed connector still reports desired-versus-observed drift.

```csharp
public const string DriftDetected = "drift-detected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorWritePathReadinessCategories_GovernanceOutOfPolicy"></a> GovernanceOutOfPolicy

The managed connector is currently out of policy for future write-path follow-through.

```csharp
public const string GovernanceOutOfPolicy = "governance-out-of-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorWritePathReadinessCategories_IncompleteReportingCoverage"></a> IncompleteReportingCoverage

The managed connector does not yet have full declared-versus-reported coverage on the shared runtime surface.

```csharp
public const string IncompleteReportingCoverage = "incomplete-reporting-coverage"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorWritePathReadinessCategories_ObserveOnlyMode"></a> ObserveOnlyMode

The managed connector currently stays in observe-only mode.

```csharp
public const string ObserveOnlyMode = "observe-only-mode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorWritePathReadinessCategories_RuntimeRemediation"></a> RuntimeRemediation

The managed connector still needs runtime remediation attention before future write-path work.

```csharp
public const string RuntimeRemediation = "runtime-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorWritePathReadinessCategories_RuntimeTruthIncomplete"></a> RuntimeTruthIncomplete

The managed connector does not yet report enough runtime truth to prove future write-path readiness.

```csharp
public const string RuntimeTruthIncomplete = "runtime-truth-incomplete"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorWritePathReadinessCategories_WritePathReady"></a> WritePathReady

The managed connector currently satisfies the shared baseline for future write-path follow-through.

```csharp
public const string WritePathReady = "write-path-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorWritePathReadinessCategories_WritePathRequested"></a> WritePathRequested

The managed connector has declared a future write-path management mode.

```csharp
public const string WritePathRequested = "write-path-requested"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
