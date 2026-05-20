---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandretrystates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector command-retry answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandretrystates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStates_Cooldown"></a> Cooldown

The current shared runtime truth matches a recently-recorded command and should wait for a short cooldown window before retrying.

```csharp
public const string Cooldown = "cooldown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStates_Duplicate"></a> Duplicate

The current shared runtime truth matches an already-recorded command and replaying it would be duplicative.

```csharp
public const string Duplicate = "duplicate"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStates_NotApplicable"></a> NotApplicable

The command-retry posture does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStates_NotNeeded"></a> NotNeeded

The current shared runtime truth indicates that a retry is not currently needed.

```csharp
public const string NotNeeded = "not-needed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStates_OperatorOnly"></a> OperatorOnly

The current shared runtime truth still leaves the command operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStates_RetryBlocked"></a> RetryBlocked

The current shared runtime truth still blocks a safe retry.

```csharp
public const string RetryBlocked = "retry-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandRetryStates_RetryEligible"></a> RetryEligible

The current shared runtime truth allows a safe retry of a matching prior command.

```csharp
public const string RetryEligible = "retry-eligible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
