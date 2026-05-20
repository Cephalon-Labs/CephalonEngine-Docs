---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandenvelopestates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector command-envelope answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandenvelopestates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStates_ApprovalGated"></a> ApprovalGated

Cephalon can describe the command envelope, but the write-path still requires approval before future engine execution.

```csharp
public const string ApprovalGated = "approval-gated"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStates_Blocked"></a> Blocked

The managed connector still has one or more blockers before Cephalon can trust a runnable command envelope.

```csharp
public const string Blocked = "blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStates_EngineReady"></a> EngineReady

Cephalon can describe the command envelope and the shared execution lane is ready for later engine execution work.

```csharp
public const string EngineReady = "engine-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStates_NotApplicable"></a> NotApplicable

The execution runtime does not currently produce a managed-connector command envelope.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeStates_OperatorOnly"></a> OperatorOnly

Cephalon can describe the command envelope, but the write-path remains operator-owned.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
