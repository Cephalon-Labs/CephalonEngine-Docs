---
title: Class CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionintentcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable managed-connector execution-intent category identifiers used by CDC execution runtimes.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionintentcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories_ApprovalRequired"></a> ApprovalRequired

The next intended follow-through would still require an approval or safety gate before engine execution.

```csharp
public const string ApprovalRequired = "approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories_BlockingRemediation"></a> BlockingRemediation

The managed connector is blocked by failed or otherwise blocking runtime remediation work.

```csharp
public const string BlockingRemediation = "blocking-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories_ChangePlanned"></a> ChangePlanned

The current intended operation would still change managed-connector posture.

```csharp
public const string ChangePlanned = "change-planned"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories_EngineExecutionCandidate"></a> EngineExecutionCandidate

The next intended follow-through currently falls inside the future engine-execution lane.

```csharp
public const string EngineExecutionCandidate = "engine-execution-candidate"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories_FutureControlPlane"></a> FutureControlPlane

The managed connector currently declares a future control-plane mode that Cephalon does not yet own.

```csharp
public const string FutureControlPlane = "future-control-plane"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories_GovernanceOutOfPolicy"></a> GovernanceOutOfPolicy

The managed connector is currently out of policy for execution follow-through.

```csharp
public const string GovernanceOutOfPolicy = "governance-out-of-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories_IncompleteReportingCoverage"></a> IncompleteReportingCoverage

The managed connector does not yet have full declared-versus-reported coverage on the shared runtime surface.

```csharp
public const string IncompleteReportingCoverage = "incomplete-reporting-coverage"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories_LifecycleChange"></a> LifecycleChange

The current intended operation would still require a lifecycle change such as pause, resume, restart, or delete.

```csharp
public const string LifecycleChange = "lifecycle-change"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories_NoExecutionNeeded"></a> NoExecutionNeeded

The current intended operation would not require additional managed-connector changes.

```csharp
public const string NoExecutionNeeded = "no-execution-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories_ObserveOnlyMode"></a> ObserveOnlyMode

The managed connector currently stays in observe-only mode.

```csharp
public const string ObserveOnlyMode = "observe-only-mode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories_OperatorOnly"></a> OperatorOnly

The next intended follow-through currently remains operator-owned rather than engine-executable.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories_RuntimeRemediation"></a> RuntimeRemediation

The managed connector still needs runtime remediation attention before Cephalon can trust execution intent.

```csharp
public const string RuntimeRemediation = "runtime-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentCategories_RuntimeTruthIncomplete"></a> RuntimeTruthIncomplete

The managed connector does not yet report enough runtime truth for Cephalon to trust execution intent.

```csharp
public const string RuntimeTruthIncomplete = "runtime-truth-incomplete"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
