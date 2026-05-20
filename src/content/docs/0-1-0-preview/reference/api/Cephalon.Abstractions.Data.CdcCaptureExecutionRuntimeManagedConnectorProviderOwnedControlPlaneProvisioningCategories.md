---
title: Class
  CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneprovisioningcategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by managed-connector provider-owned control-plane provisioning answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorproviderownedcontrolplaneprovisioningcategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ApprovalRequired"></a> ApprovalRequired

The current provider control-plane provisioning lane still requires explicit approval.

```csharp
public const string ApprovalRequired = "approval-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_CommandEnvelopeBlocked"></a> CommandEnvelopeBlocked

The current command envelope remains blocked.

```csharp
public const string CommandEnvelopeBlocked = "command-envelope-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_CommandEnvelopeReady"></a> CommandEnvelopeReady

The current command envelope is engine-ready for provider-owned provisioning.

```csharp
public const string CommandEnvelopeReady = "command-envelope-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_CommandIssuanceAccepted"></a> CommandIssuanceAccepted

The current shared command issuance lane accepted one provider-owned provisioning command.

```csharp
public const string CommandIssuanceAccepted = "command-issuance-accepted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_CommandIssuanceIssued"></a> CommandIssuanceIssued

The current shared command issuance lane already issued one provider-owned provisioning command.

```csharp
public const string CommandIssuanceIssued = "command-issuance-issued"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_CommandJournalEvidence"></a> CommandJournalEvidence

The command journal currently exposes retained evidence for provider-owned provisioning.

```csharp
public const string CommandJournalEvidence = "command-journal-evidence"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_CurrentNodeBlocked"></a> CurrentNodeBlocked

The current node cannot yet exercise bounded provider-owned control-plane provisioning safely.

```csharp
public const string CurrentNodeBlocked = "current-node-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_CurrentNodeExecutable"></a> CurrentNodeExecutable

The current node can exercise bounded provider-owned control-plane provisioning safely.

```csharp
public const string CurrentNodeExecutable = "current-node-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_DestructiveOperation"></a> DestructiveOperation

The current provider control-plane provisioning lane still targets a destructive operation.

```csharp
public const string DestructiveOperation = "destructive-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_DurableJournalConfigured"></a> DurableJournalConfigured

A durable command-journal store is configured for the runtime.

```csharp
public const string DurableJournalConfigured = "durable-journal-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_InMemoryJournalOnly"></a> InMemoryJournalOnly

Provider-owned control-plane provisioning currently depends on in-memory history only.

```csharp
public const string InMemoryJournalOnly = "in-memory-journal-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_MutationBlocked"></a> MutationBlocked

Broader provider-owned control-plane mutation remains blocked.

```csharp
public const string MutationBlocked = "mutation-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_MutationExecuting"></a> MutationExecuting

Broader provider-owned control-plane mutation or reconcile is currently executing.

```csharp
public const string MutationExecuting = "mutation-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_MutationOperation"></a> MutationOperation

The current target operation is one provider-owned mutation.

```csharp
public const string MutationOperation = "mutation-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_MutationReady"></a> MutationReady

Broader provider-owned control-plane mutation is currently ready.

```csharp
public const string MutationReady = "mutation-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_MutationRisk"></a> MutationRisk

Broader provider-owned control-plane mutation or reconcile currently remains risky.

```csharp
public const string MutationRisk = "mutation-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_NoChangesRequired"></a> NoChangesRequired

The current provider control-plane provisioning lane would not apply another shared write-path change.

```csharp
public const string NoChangesRequired = "no-changes-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_NoRecordedCommand"></a> NoRecordedCommand

No command-journal evidence has been recorded yet.

```csharp
public const string NoRecordedCommand = "no-recorded-command"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_NoTargetOperation"></a> NoTargetOperation

No provider-owned mutation or reconcile operation is currently targeted.

```csharp
public const string NoTargetOperation = "no-target-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_OperatorOnly"></a> OperatorOnly

Provider-owned control-plane provisioning still remains operator-owned outside Cephalon.

```csharp
public const string OperatorOnly = "operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_OwnershipActive"></a> OwnershipActive

Broader provider-owned control-plane ownership is currently active.

```csharp
public const string OwnershipActive = "ownership-active"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_OwnershipBlocked"></a> OwnershipBlocked

Broader provider-owned control-plane ownership remains blocked.

```csharp
public const string OwnershipBlocked = "ownership-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_OwnershipPartial"></a> OwnershipPartial

Broader provider-owned control-plane ownership currently remains partial.

```csharp
public const string OwnershipPartial = "ownership-partial"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_OwnershipReady"></a> OwnershipReady

Broader provider-owned control-plane ownership is currently ready.

```csharp
public const string OwnershipReady = "ownership-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_OwnershipRisk"></a> OwnershipRisk

Broader provider-owned control-plane ownership currently remains risky.

```csharp
public const string OwnershipRisk = "ownership-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_PersistedHistory"></a> PersistedHistory

The durable command journal currently exposes persisted recorded history.

```csharp
public const string PersistedHistory = "persisted-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderBlocked"></a> ProviderBlocked

Provider-owned write-path execution remains blocked.

```csharp
public const string ProviderBlocked = "provider-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderCommandAdapted"></a> ProviderCommandAdapted

The latest provider execution translated into a provider-facing command shape.

```csharp
public const string ProviderCommandAdapted = "latest-execution-adapted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderCommandBlocked"></a> ProviderCommandBlocked

The latest provider execution remained blocked.

```csharp
public const string ProviderCommandBlocked = "latest-execution-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderCommandFailed"></a> ProviderCommandFailed

The latest provider execution failed while Cephalon translated provider command shape.

```csharp
public const string ProviderCommandFailed = "latest-execution-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderCommandNoOp"></a> ProviderCommandNoOp

The latest provider execution determined that no provider command is required.

```csharp
public const string ProviderCommandNoOp = "latest-execution-no-op"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderCommandOperatorOnly"></a> ProviderCommandOperatorOnly

The latest provider execution remained operator-owned.

```csharp
public const string ProviderCommandOperatorOnly = "provider-command-operator-only"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderCommandUnavailable"></a> ProviderCommandUnavailable

The latest provider execution could not resolve a provider adapter.

```csharp
public const string ProviderCommandUnavailable = "latest-execution-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderExecutable"></a> ProviderExecutable

Provider-owned write-path execution is currently ready.

```csharp
public const string ProviderExecutable = "provider-executable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderExecutionBlocked"></a> ProviderExecutionBlocked

Broader provider execution orchestration remains blocked.

```csharp
public const string ProviderExecutionBlocked = "orchestration-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderExecutionCompleted"></a> ProviderExecutionCompleted

Broader provider execution orchestration no longer needs another shared step.

```csharp
public const string ProviderExecutionCompleted = "orchestration-completed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderExecutionExecuting"></a> ProviderExecutionExecuting

Broader provider execution orchestration is currently executing.

```csharp
public const string ProviderExecutionExecuting = "orchestration-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderExecutionReady"></a> ProviderExecutionReady

Broader provider execution orchestration is currently ready.

```csharp
public const string ProviderExecutionReady = "orchestration-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderExecutionRisk"></a> ProviderExecutionRisk

Broader provider execution orchestration currently remains risky.

```csharp
public const string ProviderExecutionRisk = "orchestration-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderOwnedCompleted"></a> ProviderOwnedCompleted

Provider-owned write-path execution no longer needs another provider command.

```csharp
public const string ProviderOwnedCompleted = "provider-owned-completed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderOwnedControlPlaneProvisioning"></a> ProviderOwnedControlPlaneProvisioning

The runtime participates in the provider-owned control-plane provisioning lane.

```csharp
public const string ProviderOwnedControlPlaneProvisioning = "provider-owned-control-plane-provisioning"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderOwnedExecuting"></a> ProviderOwnedExecuting

Provider-owned write-path execution is currently active.

```csharp
public const string ProviderOwnedExecuting = "provider-owned-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProviderOwnedRisk"></a> ProviderOwnedRisk

Provider-owned write-path execution currently remains risky.

```csharp
public const string ProviderOwnedRisk = "provider-owned-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProvisioningBlocked"></a> ProvisioningBlocked

Provider-owned control-plane provisioning remains blocked.

```csharp
public const string ProvisioningBlocked = "provisioning-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProvisioningExecuting"></a> ProvisioningExecuting

Provider-owned control-plane provisioning is currently executing.

```csharp
public const string ProvisioningExecuting = "provisioning-executing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProvisioningPartial"></a> ProvisioningPartial

Provider-owned control-plane provisioning is currently partial on the shared lane.

```csharp
public const string ProvisioningPartial = "provisioning-partial"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProvisioningReady"></a> ProvisioningReady

Provider-owned control-plane provisioning is currently ready.

```csharp
public const string ProvisioningReady = "provisioning-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ProvisioningRisk"></a> ProvisioningRisk

Provider-owned control-plane provisioning currently remains risky.

```csharp
public const string ProvisioningRisk = "provisioning-risk"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ReconcileBlocked"></a> ReconcileBlocked

Broader provider-owned control-plane reconcile remains blocked.

```csharp
public const string ReconcileBlocked = "reconcile-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ReconcileOperation"></a> ReconcileOperation

The current target operation is one provider-owned reconcile.

```csharp
public const string ReconcileOperation = "reconcile-operation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_ReconcileReady"></a> ReconcileReady

Broader provider-owned control-plane reconcile is currently ready.

```csharp
public const string ReconcileReady = "reconcile-ready"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_RecoveredHistory"></a> RecoveredHistory

The durable command journal currently exposes recovered recorded history.

```csharp
public const string RecoveredHistory = "recovered-history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_RetryBlocked"></a> RetryBlocked

The current retry posture remains blocked.

```csharp
public const string RetryBlocked = "retry-blocked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_RetryEligible"></a> RetryEligible

The current retry posture still allows one eligible provider-owned provisioning retry.

```csharp
public const string RetryEligible = "retry-eligible"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorProviderOwnedControlPlaneProvisioningCategories_WouldApplyChanges"></a> WouldApplyChanges

The current provider control-plane provisioning lane would still apply one or more shared write-path changes.

```csharp
public const string WouldApplyChanges = "would-apply-changes"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
