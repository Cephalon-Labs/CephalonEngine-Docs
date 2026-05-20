---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorautomaticretrycoordinationcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector automatic background retry coordination answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorautomaticretrycoordinationcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationCategories_ActiveLeaseHeld"></a> ActiveLeaseHeld

The current host coordination owner holds the active reporter lease.

```csharp
public const string ActiveLeaseHeld = "active-lease-held"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationCategories_ActiveReporterVisible"></a> ActiveReporterVisible

The runtime currently exposes one active reporter owner.

```csharp
public const string ActiveReporterVisible = "active-reporter-visible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationCategories_CoordinationOwnerConfigured"></a> CoordinationOwnerConfigured

The current host declared a local coordination owner identifier for automatic retry.

```csharp
public const string CoordinationOwnerConfigured = "coordination-owner-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationCategories_CoordinationOwnerMissing"></a> CoordinationOwnerMissing

The current host did not declare a local coordination owner identifier for automatic retry.

```csharp
public const string CoordinationOwnerMissing = "coordination-owner-missing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationCategories_LeaseCoordinatedRuntime"></a> LeaseCoordinatedRuntime

The runtime depends on reporter-lease coordination before automatic retry should execute.

```csharp
public const string LeaseCoordinatedRuntime = "lease-coordinated-runtime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationCategories_LeaseMissing"></a> LeaseMissing

No active reporter lease is currently visible for automatic retry.

```csharp
public const string LeaseMissing = "lease-missing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationCategories_OperatorOnly"></a> OperatorOnly

Automatic retry still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationCategories_OwnerMatch"></a> OwnerMatch

The current host coordination owner matches the active reporter lease.

```csharp
public const string OwnerMatch = "owner-match"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationCategories_OwnerMismatch"></a> OwnerMismatch

The current host coordination owner does not match the active reporter lease.

```csharp
public const string OwnerMismatch = "owner-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationCategories_ReporterConflict"></a> ReporterConflict

Reporter coordination currently remains conflicted.

```csharp
public const string ReporterConflict = "reporter-conflict"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationCategories_SingleNodeRuntime"></a> SingleNodeRuntime

The runtime can evaluate automatic retry on a single node without reporter-lease coordination.

```csharp
public const string SingleNodeRuntime = "single-node-runtime"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
