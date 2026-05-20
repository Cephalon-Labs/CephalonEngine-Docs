---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeOperationIds
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandenvelopeoperationids
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable managed-connector operation identifiers used by command-envelope answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeOperationIds
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeOperationIds](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandenvelopeoperationids/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeOperationIds_Delete"></a> Delete

The command envelope currently targets connector deletion.

```csharp
public const string Delete = "delete"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeOperationIds_None"></a> None

No management operation is currently associated with the command envelope.

```csharp
public const string None = "none"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeOperationIds_Pause"></a> Pause

The command envelope currently targets connector pause.

```csharp
public const string Pause = "pause"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeOperationIds_Reconcile"></a> Reconcile

The command envelope currently targets connector reconciliation.

```csharp
public const string Reconcile = "reconcile"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeOperationIds_Restart"></a> Restart

The command envelope currently targets connector restart.

```csharp
public const string Restart = "restart"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandEnvelopeOperationIds_Resume"></a> Resume

The command envelope currently targets connector resume.

```csharp
public const string Resume = "resume"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
