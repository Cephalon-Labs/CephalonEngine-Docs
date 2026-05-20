---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningSources
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneprovisioningsources
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable source identifiers used by managed-connector provider-owned control-plane provisioning answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningSources
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningSources](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneprovisioningsources/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningSources_CommandEnvelope"></a> CommandEnvelope

The provider-owned control-plane provisioning answer was derived primarily from command-envelope truth.

```csharp
public const string CommandEnvelope = "command-envelope"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningSources_CommandExecution"></a> CommandExecution

The provider-owned control-plane provisioning answer was derived primarily from the latest command-execution outcome.

```csharp
public const string CommandExecution = "command-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningSources_CommandIssuance"></a> CommandIssuance

The provider-owned control-plane provisioning answer was derived primarily from command-issuance truth.

```csharp
public const string CommandIssuance = "command-issuance"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningSources_CommandJournal"></a> CommandJournal

The provider-owned control-plane provisioning answer was derived primarily from retained command-journal evidence.

```csharp
public const string CommandJournal = "command-journal"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningSources_CommandRetry"></a> CommandRetry

The provider-owned control-plane provisioning answer was derived primarily from command-retry truth.

```csharp
public const string CommandRetry = "command-retry"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningSources_ProviderExecutionOrchestration"></a> ProviderExecutionOrchestration

The provider-owned control-plane provisioning answer was derived primarily from provider execution-orchestration truth.

```csharp
public const string ProviderExecutionOrchestration = "provider-execution-orchestration"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningSources_ProviderOwnedControlPlaneMutationReconcile"></a> ProviderOwnedControlPlaneMutationReconcile

The provider-owned control-plane provisioning answer was derived primarily from provider-owned control-plane mutation and reconcile truth.

```csharp
public const string ProviderOwnedControlPlaneMutationReconcile = "provider-owned-control-plane-mutation-reconcile"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningSources_ProviderOwnedControlPlaneOwnership"></a> ProviderOwnedControlPlaneOwnership

The provider-owned control-plane provisioning answer was derived primarily from provider-owned control-plane ownership truth.

```csharp
public const string ProviderOwnedControlPlaneOwnership = "provider-owned-control-plane-ownership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningSources_ProviderOwnedWritePathExecution"></a> ProviderOwnedWritePathExecution

The provider-owned control-plane provisioning answer was derived primarily from provider-owned write-path execution truth.

```csharp
public const string ProviderOwnedWritePathExecution = "provider-owned-write-path-execution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningSources_RetryExecutionPolicy"></a> RetryExecutionPolicy

The provider-owned control-plane provisioning answer was derived primarily from retry-execution policy truth.

```csharp
public const string RetryExecutionPolicy = "retry-execution-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningSources_Unknown"></a> Unknown

The provider-owned control-plane provisioning answer does not currently resolve to one specific source.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
