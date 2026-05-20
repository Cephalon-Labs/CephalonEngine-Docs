---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedwritepathexecutioncategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector provider-owned write-path execution answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedwritepathexecutioncategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_AdapterReady"></a> AdapterReady

The current execution adapter is ready to translate provider-facing commands.

```csharp
public const string AdapterReady = "adapter-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_AdapterUnavailable"></a> AdapterUnavailable

No matching provider execution adapter is currently available.

```csharp
public const string AdapterUnavailable = "adapter-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_ApprovalRequired"></a> ApprovalRequired

The current write-path still requires explicit approval.

```csharp
public const string ApprovalRequired = "approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_CooldownWindow"></a> CooldownWindow

The shared retry policy currently remains inside one cooldown window.

```csharp
public const string CooldownWindow = "cooldown-window"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_CurrentNodeBlocked"></a> CurrentNodeBlocked

The current node cannot yet execute provider-owned write-path work safely.

```csharp
public const string CurrentNodeBlocked = "current-node-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_CurrentNodeExecutable"></a> CurrentNodeExecutable

The current node can execute provider-owned write-path work safely.

```csharp
public const string CurrentNodeExecutable = "current-node-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_DestructiveOperation"></a> DestructiveOperation

The current write-path still targets a destructive provider operation.

```csharp
public const string DestructiveOperation = "destructive-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_OperatorOnly"></a> OperatorOnly

Provider-owned write-path execution still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_ProviderBlocked"></a> ProviderBlocked

Provider-owned write-path execution remains blocked.

```csharp
public const string ProviderBlocked = "provider-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_ProviderCommandAdapted"></a> ProviderCommandAdapted

The latest provider-owned command translated into a provider-facing command shape.

```csharp
public const string ProviderCommandAdapted = "latest-execution-adapted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_ProviderCommandBlocked"></a> ProviderCommandBlocked

The latest provider-owned command remained blocked by shared runtime truth.

```csharp
public const string ProviderCommandBlocked = "latest-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_ProviderCommandFailed"></a> ProviderCommandFailed

The latest provider-owned command failed while Cephalon translated it.

```csharp
public const string ProviderCommandFailed = "latest-execution-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_ProviderCommandNoOp"></a> ProviderCommandNoOp

The latest provider-owned command determined that no provider command is required.

```csharp
public const string ProviderCommandNoOp = "latest-execution-no-op"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_ProviderCommandOperatorOnly"></a> ProviderCommandOperatorOnly

The latest provider-owned command remained operator-owned.

```csharp
public const string ProviderCommandOperatorOnly = "provider-command-operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_ProviderCommandUnavailable"></a> ProviderCommandUnavailable

The latest provider-owned command could not resolve a provider execution adapter.

```csharp
public const string ProviderCommandUnavailable = "latest-execution-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_ProviderExecutable"></a> ProviderExecutable

Provider-owned write-path execution is currently ready on the shared lane.

```csharp
public const string ProviderExecutable = "provider-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_ProviderOwnedCompleted"></a> ProviderOwnedCompleted

Provider-owned write-path execution no longer needs an additional provider command.

```csharp
public const string ProviderOwnedCompleted = "provider-owned-completed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_ProviderOwnedExecuting"></a> ProviderOwnedExecuting

Provider-owned write-path execution already translated one provider-facing command shape.

```csharp
public const string ProviderOwnedExecuting = "provider-owned-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_ProviderOwnedRisk"></a> ProviderOwnedRisk

Provider-owned write-path execution currently remains risky.

```csharp
public const string ProviderOwnedRisk = "provider-owned-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_ProviderOwnedWritePathExecution"></a> ProviderOwnedWritePathExecution

The runtime participates in the provider-owned write-path execution lane.

```csharp
public const string ProviderOwnedWritePathExecution = "provider-owned-write-path-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedWritePathExecutionCategories_RetryReady"></a> RetryReady

The shared retry policy currently exposes a retry-ready provider lane.

```csharp
public const string RetryReady = "retry-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
