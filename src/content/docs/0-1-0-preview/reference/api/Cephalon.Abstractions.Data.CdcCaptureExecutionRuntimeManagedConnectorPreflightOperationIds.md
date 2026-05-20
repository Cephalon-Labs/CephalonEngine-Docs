---
title: Class CdcCaptureExecutionRuntimeManagedConnectorPreflightOperationIds
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorpreflightoperationids
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable managed-connector management-operation identifiers used by connector-management preflight answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorPreflightOperationIds
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorPreflightOperationIds](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorpreflightoperationids/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightOperationIds_Delete"></a> Delete

Cephalon would preflight delete follow-through for the managed connector.

```csharp
public const string Delete = "delete"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightOperationIds_None"></a> None

No management operation is currently intended for the execution runtime.

```csharp
public const string None = "none"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightOperationIds_Pause"></a> Pause

Cephalon would preflight pause follow-through for the managed connector.

```csharp
public const string Pause = "pause"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightOperationIds_Reconcile"></a> Reconcile

Cephalon would preflight reconcile-style apply-and-reconcile follow-through for the managed connector.

```csharp
public const string Reconcile = "reconcile"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightOperationIds_Restart"></a> Restart

Cephalon would preflight restart follow-through for the managed connector.

```csharp
public const string Restart = "restart"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightOperationIds_Resume"></a> Resume

Cephalon would preflight resume follow-through for the managed connector.

```csharp
public const string Resume = "resume"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
