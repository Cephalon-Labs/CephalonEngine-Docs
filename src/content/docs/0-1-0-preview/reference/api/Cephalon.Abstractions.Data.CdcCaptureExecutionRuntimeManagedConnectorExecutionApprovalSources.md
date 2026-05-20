---
title: Class CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionapprovalsources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector execution-approval answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionapprovalsources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalSources_DryRun"></a> DryRun

The execution-approval answer is primarily grounded in shared managed-connector dry-run truth.

```csharp
public const string DryRun = "dry-run"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalSources_ExecutionIntent"></a> ExecutionIntent

The execution-approval answer is primarily grounded in shared managed-connector execution intent.

```csharp
public const string ExecutionIntent = "execution-intent"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalSources_Governance"></a> Governance

The execution-approval answer is primarily grounded in managed-connector governance posture.

```csharp
public const string Governance = "governance"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalSources_Remediation"></a> Remediation

The execution-approval answer is primarily grounded in runtime remediation posture.

```csharp
public const string Remediation = "remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionApprovalSources_Unknown"></a> Unknown

The execution-approval answer does not currently have a more specific primary source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
