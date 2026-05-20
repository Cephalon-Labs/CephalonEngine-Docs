---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorautomaticretrycoordinationstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector automatic background retry coordination answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorautomaticretrycoordinationstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStates_Conflicted"></a> Conflicted

Automatic background retry cannot run because reporter coordination is currently conflicted.

```csharp
public const string Conflicted = "conflicted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStates_LeaseHeld"></a> LeaseHeld

The current node holds the active reporter lease for automatic background retry.

```csharp
public const string LeaseHeld = "lease-held"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStates_LeaseMissing"></a> LeaseMissing

Automatic background retry cannot run because no active reporter lease is currently visible.

```csharp
public const string LeaseMissing = "lease-missing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStates_NotApplicable"></a> NotApplicable

Automatic background retry coordination does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStates_OperatorOnly"></a> OperatorOnly

Automatic background retry still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStates_SingleNode"></a> SingleNode

Automatic background retry can run on the current node without reporter-lease coordination.

```csharp
public const string SingleNode = "single-node"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationStates_Uncoordinated"></a> Uncoordinated

Automatic background retry remains uncoordinated on the current node.

```csharp
public const string Uncoordinated = "uncoordinated"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
