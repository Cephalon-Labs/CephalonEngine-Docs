---
title: Class CdcCaptureExecutionRuntimeManagedConnectorPreflightStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorpreflightstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable managed-connector preflight state identifiers used by CDC execution runtimes.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorPreflightStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorPreflightStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorpreflightstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightStates_Blocked"></a> Blocked

The managed connector is currently blocked by runtime remediation before connector-management preflight can proceed.

```csharp
public const string Blocked = "blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightStates_Deferred"></a> Deferred

The managed connector currently stays in observe-only mode, so connector-management preflight is deferred.

```csharp
public const string Deferred = "deferred"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightStates_NotApplicable"></a> NotApplicable

The execution runtime does not currently represent a managed connector.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightStates_NotReady"></a> NotReady

The managed connector is not yet ready for Cephalon to preflight the currently intended management operation.

```csharp
public const string NotReady = "not-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorPreflightStates_Ready"></a> Ready

The managed connector currently satisfies the shared baseline Cephalon would use to preflight the intended management operation.

```csharp
public const string Ready = "ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
