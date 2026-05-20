---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorautomaticretrycoordinationsources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector automatic background retry coordination answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorautomaticretrycoordinationsources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationSources_AutomaticRetryExecution"></a> AutomaticRetryExecution

The automatic background retry coordination answer was derived primarily from automatic retry posture.

```csharp
public const string AutomaticRetryExecution = "automatic-retry-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationSources_CoordinationOwner"></a> CoordinationOwner

The automatic background retry coordination answer was derived primarily from the host-owned coordination owner id.

```csharp
public const string CoordinationOwner = "coordination-owner"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationSources_ExecutionOwnership"></a> ExecutionOwnership

The automatic background retry coordination answer was derived primarily from execution-ownership semantics.

```csharp
public const string ExecutionOwnership = "execution-ownership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationSources_ReporterCoordination"></a> ReporterCoordination

The automatic background retry coordination answer was derived primarily from reporter-coordination truth.

```csharp
public const string ReporterCoordination = "reporter-coordination"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorAutomaticRetryCoordinationSources_Unknown"></a> Unknown

The automatic background retry coordination answer does not currently resolve to one specific source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
