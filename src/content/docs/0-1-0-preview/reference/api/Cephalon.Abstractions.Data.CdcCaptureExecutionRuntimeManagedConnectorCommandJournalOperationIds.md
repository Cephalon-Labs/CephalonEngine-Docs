---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandJournalOperationIds
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournaloperationids
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable management-operation identifiers used by managed-connector command-journal answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorCommandJournalOperationIds
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandJournalOperationIds](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournaloperationids/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalOperationIds_Delete"></a> Delete

The command journal currently targets a connector delete operation.

```csharp
public const string Delete = "delete"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalOperationIds_None"></a> None

No managed-connector operation is currently associated with the command journal.

```csharp
public const string None = "none"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalOperationIds_Pause"></a> Pause

The command journal currently targets a connector pause operation.

```csharp
public const string Pause = "pause"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalOperationIds_Reconcile"></a> Reconcile

The command journal currently targets a future connector reconcile operation.

```csharp
public const string Reconcile = "reconcile"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalOperationIds_Restart"></a> Restart

The command journal currently targets a connector restart operation.

```csharp
public const string Restart = "restart"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalOperationIds_Resume"></a> Resume

The command journal currently targets a connector resume operation.

```csharp
public const string Resume = "resume"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
