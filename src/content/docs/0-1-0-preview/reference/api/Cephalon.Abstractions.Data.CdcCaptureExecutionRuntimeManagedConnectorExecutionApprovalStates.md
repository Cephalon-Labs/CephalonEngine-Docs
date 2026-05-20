---
title: Class CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionapprovalstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable managed-connector execution-approval state identifiers used by CDC execution runtimes.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionapprovalstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalStates_ApprovalReady"></a> ApprovalReady

The managed connector is currently ready to enter a future approval workflow before engine execution.

```csharp
public const string ApprovalReady = "approval-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalStates_ApprovalRequired"></a> ApprovalRequired

The managed connector would still require an elevated explicit approval gate because the intended follow-through remains safety-sensitive.

```csharp
public const string ApprovalRequired = "approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalStates_AutoBlocked"></a> AutoBlocked

The managed connector is currently blocked by incomplete runtime truth or runtime remediation posture before approval can be considered.

```csharp
public const string AutoBlocked = "auto-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalStates_AutoEligible"></a> AutoEligible

The managed connector currently fits a future auto-execution lane without requiring an additional approval workflow.

```csharp
public const string AutoEligible = "auto-eligible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalStates_NotApplicable"></a> NotApplicable

The execution runtime does not currently require managed-connector execution approval on the shared surface.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalStates_PolicyBlocked"></a> PolicyBlocked

The managed connector is currently blocked by governance or control-plane policy rather than runtime readiness alone.

```csharp
public const string PolicyBlocked = "policy-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
