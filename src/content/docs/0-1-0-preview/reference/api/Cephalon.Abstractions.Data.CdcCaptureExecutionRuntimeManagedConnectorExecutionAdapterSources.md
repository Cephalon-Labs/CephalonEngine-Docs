---
title: Class CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionadaptersources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector execution-adapter answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorexecutionadaptersources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterSources_CommandEnvelope"></a> CommandEnvelope

The execution adapter is primarily grounded in shared command-envelope truth.

```csharp
public const string CommandEnvelope = "command-envelope"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterSources_CommandIssuance"></a> CommandIssuance

The execution adapter is primarily grounded in shared command-issuance truth.

```csharp
public const string CommandIssuance = "command-issuance"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterSources_ExecutionApproval"></a> ExecutionApproval

The execution adapter is primarily grounded in shared execution-approval truth.

```csharp
public const string ExecutionApproval = "execution-approval"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterSources_ExecutionIntent"></a> ExecutionIntent

The execution adapter is primarily grounded in shared execution-intent truth.

```csharp
public const string ExecutionIntent = "execution-intent"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorExecutionAdapterSources_Unknown"></a> Unknown

The execution adapter does not currently have a more specific primary source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
