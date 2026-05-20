---
title: Class CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionintentstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable managed-connector execution-intent state identifiers used by CDC execution runtimes.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionintentstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStates_Blocked"></a> Blocked

The managed connector cannot currently progress to a trustworthy execution intent because prerequisite runtime truth is incomplete or blocked.

```csharp
public const string Blocked = "blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStates_Deferred"></a> Deferred

The managed connector currently stays in observe-only mode, so Cephalon does not intend to execute connector-management follow-through.

```csharp
public const string Deferred = "deferred"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStates_NotApplicable"></a> NotApplicable

The execution runtime does not currently represent a managed connector.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStates_OperatorAction"></a> OperatorAction

The managed connector currently requires operator-owned follow-through because the declared control plane is not yet engine-owned.

```csharp
public const string OperatorAction = "operator-action"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStates_ReadyToExecute"></a> ReadyToExecute

The managed connector currently has a future engine-execution candidate that would not require additional shared write-path changes.

```csharp
public const string ReadyToExecute = "ready-to-execute"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionIntentStates_RequiresApproval"></a> RequiresApproval

The managed connector currently has a future engine-execution candidate, but the next step would still require an approval gate.

```csharp
public const string RequiresApproval = "requires-approval"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
