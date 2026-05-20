---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandexecutionrequest
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes optional operator intent supplied when Cephalon evaluates one managed-connector command-execution request.

```csharp
public sealed class CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandexecutionrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest__ctor"></a> CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest\(\)

Creates a new managed-connector command-execution request.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest()
```

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest_AllowDestructive"></a> AllowDestructive

Gets or sets a value indicating whether the caller explicitly allows destructive operations such as connector deletion.

```csharp
public bool AllowDestructive { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest_Approve"></a> Approve

Gets or sets a value indicating whether the caller is intentionally approving an approval-gated provider command.

```csharp
public bool Approve { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
