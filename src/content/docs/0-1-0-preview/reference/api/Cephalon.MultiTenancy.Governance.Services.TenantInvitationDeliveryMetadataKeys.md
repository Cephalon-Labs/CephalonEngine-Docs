---
title: Class TenantInvitationDeliveryMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverymetadatakeys
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable metadata keys written by tenant invitation delivery dispatch and status reconciliation.

```csharp
public static class TenantInvitationDeliveryMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryMetadataKeys](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverymetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryDispatchOwnership"></a> DeliveryDispatchOwnership

Metadata key describing Cephalon ownership of the host-agnostic dispatch pipeline.

```csharp
public const string DeliveryDispatchOwnership = "deliveryDispatchOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryBackgroundOwnership"></a> DeliveryRetryBackgroundOwnership

Metadata key describing Cephalon ownership of automatic background retry scheduling.

```csharp
public const string DeliveryRetryBackgroundOwnership = "deliveryRetryBackgroundOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryBackgroundScheduling"></a> DeliveryRetryBackgroundScheduling

Metadata key that marks a dispatch request created by automatic background retry scheduling.

```csharp
public const string DeliveryRetryBackgroundScheduling = "deliveryRetryBackgroundScheduling"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryExecution"></a> DeliveryRetryExecution

Metadata key that marks a dispatch request created by the retry runner.

```csharp
public const string DeliveryRetryExecution = "deliveryRetryExecution"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryExecutionCoordination"></a> DeliveryRetryExecutionCoordination

Metadata key describing whether retry execution coordination was enabled for the retry runner.

```csharp
public const string DeliveryRetryExecutionCoordination = "deliveryRetryExecutionCoordination"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryExecutionCoordinationAcceptedCount"></a> DeliveryRetryExecutionCoordinationAcceptedCount

Metadata key containing the number of retry execution coordination attempts accepted for execution.

```csharp
public const string DeliveryRetryExecutionCoordinationAcceptedCount = "deliveryRetryExecutionCoordinationAcceptedCount"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryExecutionCoordinationAttemptCount"></a> DeliveryRetryExecutionCoordinationAttemptCount

Metadata key containing the number of attempts to enter retry execution coordination.

```csharp
public const string DeliveryRetryExecutionCoordinationAttemptCount = "deliveryRetryExecutionCoordinationAttemptCount"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryExecutionCoordinationCompletedCount"></a> DeliveryRetryExecutionCoordinationCompletedCount

Metadata key containing the number of coordinated retry passes completed with a retry result.

```csharp
public const string DeliveryRetryExecutionCoordinationCompletedCount = "deliveryRetryExecutionCoordinationCompletedCount"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryExecutionCoordinationFailedCount"></a> DeliveryRetryExecutionCoordinationFailedCount

Metadata key containing the number of coordinated retry passes that ended with an unhandled failure.

```csharp
public const string DeliveryRetryExecutionCoordinationFailedCount = "deliveryRetryExecutionCoordinationFailedCount"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryExecutionCoordinationInProgress"></a> DeliveryRetryExecutionCoordinationInProgress

Metadata key describing whether a coordinated retry execution is currently running.

```csharp
public const string DeliveryRetryExecutionCoordinationInProgress = "deliveryRetryExecutionCoordinationInProgress"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryExecutionCoordinationLastOutcome"></a> DeliveryRetryExecutionCoordinationLastOutcome

Metadata key containing the latest retry execution coordination outcome.

```csharp
public const string DeliveryRetryExecutionCoordinationLastOutcome = "deliveryRetryExecutionCoordinationLastOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryExecutionCoordinationMode"></a> DeliveryRetryExecutionCoordinationMode

Metadata key describing the retry execution coordination mode.

```csharp
public const string DeliveryRetryExecutionCoordinationMode = "deliveryRetryExecutionCoordinationMode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryExecutionCoordinationOwnership"></a> DeliveryRetryExecutionCoordinationOwnership

Metadata key describing Cephalon ownership of retry execution coordination.

```csharp
public const string DeliveryRetryExecutionCoordinationOwnership = "deliveryRetryExecutionCoordinationOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryExecutionCoordinationScope"></a> DeliveryRetryExecutionCoordinationScope

Metadata key describing the retry execution coordination scope.

```csharp
public const string DeliveryRetryExecutionCoordinationScope = "deliveryRetryExecutionCoordinationScope"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryExecutionCoordinationSkippedCount"></a> DeliveryRetryExecutionCoordinationSkippedCount

Metadata key containing the number of retry execution coordination attempts skipped because another pass was already running.

```csharp
public const string DeliveryRetryExecutionCoordinationSkippedCount = "deliveryRetryExecutionCoordinationSkippedCount"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryQueueAttempt"></a> DeliveryRetryQueueAttempt

Metadata key containing the retry queue attempt number.

```csharp
public const string DeliveryRetryQueueAttempt = "deliveryRetryQueueAttempt"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryQueueDelaySeconds"></a> DeliveryRetryQueueDelaySeconds

Metadata key containing the retry delay in seconds.

```csharp
public const string DeliveryRetryQueueDelaySeconds = "deliveryRetryQueueDelaySeconds"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryQueueEntryCount"></a> DeliveryRetryQueueEntryCount

Metadata key containing the total number of retained invitation delivery retry entries.

```csharp
public const string DeliveryRetryQueueEntryCount = "deliveryRetryQueueEntryCount"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryQueueEntryId"></a> DeliveryRetryQueueEntryId

Metadata key containing the invitation delivery retry queue entry identifier.

```csharp
public const string DeliveryRetryQueueEntryId = "deliveryRetryQueueEntryId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryQueueLastAttemptAtUtc"></a> DeliveryRetryQueueLastAttemptAtUtc

Metadata key containing the UTC timestamp of the latest retry attempt.

```csharp
public const string DeliveryRetryQueueLastAttemptAtUtc = "deliveryRetryQueueLastAttemptAtUtc"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryQueueLastOutcome"></a> DeliveryRetryQueueLastOutcome

Metadata key containing the latest retry dispatch outcome.

```csharp
public const string DeliveryRetryQueueLastOutcome = "deliveryRetryQueueLastOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryQueueLastReason"></a> DeliveryRetryQueueLastReason

Metadata key containing the latest retry dispatch reason.

```csharp
public const string DeliveryRetryQueueLastReason = "deliveryRetryQueueLastReason"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryQueueMaxAttempts"></a> DeliveryRetryQueueMaxAttempts

Metadata key containing the maximum attempts configured for retry queue entries.

```csharp
public const string DeliveryRetryQueueMaxAttempts = "deliveryRetryQueueMaxAttempts"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryQueueNextAttemptAtUtc"></a> DeliveryRetryQueueNextAttemptAtUtc

Metadata key containing the UTC timestamp when the next retry attempt is due.

```csharp
public const string DeliveryRetryQueueNextAttemptAtUtc = "deliveryRetryQueueNextAttemptAtUtc"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryQueueOutcome"></a> DeliveryRetryQueueOutcome

Metadata key describing whether a sender failure was queued for retry.

```csharp
public const string DeliveryRetryQueueOutcome = "deliveryRetryQueueOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryQueueOwnership"></a> DeliveryRetryQueueOwnership

Metadata key describing Cephalon ownership of the invitation delivery retry queue.

```csharp
public const string DeliveryRetryQueueOwnership = "deliveryRetryQueueOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryQueuePendingCount"></a> DeliveryRetryQueuePendingCount

Metadata key containing the number of pending invitation delivery retry entries.

```csharp
public const string DeliveryRetryQueuePendingCount = "deliveryRetryQueuePendingCount"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryQueueStoreDurable"></a> DeliveryRetryQueueStoreDurable

Metadata key describing whether the invitation delivery retry queue is durable.

```csharp
public const string DeliveryRetryQueueStoreDurable = "deliveryRetryQueueStoreDurable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryRetryQueueStoreKind"></a> DeliveryRetryQueueStoreKind

Metadata key describing the invitation delivery retry queue storage kind.

```csharp
public const string DeliveryRetryQueueStoreKind = "deliveryRetryQueueStoreKind"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryStatusObservationId"></a> DeliveryStatusObservationId

Metadata key containing the delivery status observation identifier recorded by the observation store.

```csharp
public const string DeliveryStatusObservationId = "deliveryStatusObservationId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryStatusObservationStoreDurable"></a> DeliveryStatusObservationStoreDurable

Metadata key describing whether the delivery status observation store is durable.

```csharp
public const string DeliveryStatusObservationStoreDurable = "deliveryStatusObservationStoreDurable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryStatusObservationStoreExceptionType"></a> DeliveryStatusObservationStoreExceptionType

Metadata key containing the exception type observed when delivery status observation storage fails.

```csharp
public const string DeliveryStatusObservationStoreExceptionType = "deliveryStatusObservationStoreExceptionType"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryStatusObservationStoreHistoryLimit"></a> DeliveryStatusObservationStoreHistoryLimit

Metadata key describing the retention limit used by the delivery status observation store.

```csharp
public const string DeliveryStatusObservationStoreHistoryLimit = "deliveryStatusObservationStoreHistoryLimit"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryStatusObservationStoreKind"></a> DeliveryStatusObservationStoreKind

Metadata key describing the delivery status observation store kind.

```csharp
public const string DeliveryStatusObservationStoreKind = "deliveryStatusObservationStoreKind"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryStatusObservationStoreOutcome"></a> DeliveryStatusObservationStoreOutcome

Metadata key describing whether the delivery status observation store recorded the observation.

```csharp
public const string DeliveryStatusObservationStoreOutcome = "deliveryStatusObservationStoreOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryStatusObservationStoreOwnership"></a> DeliveryStatusObservationStoreOwnership

Metadata key describing Cephalon ownership of delivery status observation storage.

```csharp
public const string DeliveryStatusObservationStoreOwnership = "deliveryStatusObservationStoreOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_DeliveryStatusReconciliationOwnership"></a> DeliveryStatusReconciliationOwnership

Metadata key describing Cephalon ownership of host-agnostic status reconciliation.

```csharp
public const string DeliveryStatusReconciliationOwnership = "deliveryStatusReconciliationOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_ExternalDeliveryOwnership"></a> ExternalDeliveryOwnership

Metadata key describing who owns provider-specific external delivery.

```csharp
public const string ExternalDeliveryOwnership = "externalDeliveryOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_ExternalDeliveryStatusOwnership"></a> ExternalDeliveryStatusOwnership

Metadata key describing who owns provider-specific external delivery status truth.

```csharp
public const string ExternalDeliveryStatusOwnership = "externalDeliveryStatusOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryActor"></a> LastDeliveryActor

Metadata key containing the actor that requested the last delivery dispatch.

```csharp
public const string LastDeliveryActor = "lastDeliveryActor"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryChannel"></a> LastDeliveryChannel

Metadata key containing the delivery channel used by the last dispatch attempt.

```csharp
public const string LastDeliveryChannel = "lastDeliveryChannel"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryCorrelationId"></a> LastDeliveryCorrelationId

Metadata key containing the correlation identifier for the last delivery dispatch.

```csharp
public const string LastDeliveryCorrelationId = "lastDeliveryCorrelationId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryDispatchedAtUtc"></a> LastDeliveryDispatchedAtUtc

Metadata key containing the UTC timestamp when delivery dispatch was evaluated.

```csharp
public const string LastDeliveryDispatchedAtUtc = "lastDeliveryDispatchedAtUtc"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryOutcome"></a> LastDeliveryOutcome

Metadata key containing the last tenant invitation delivery outcome.

```csharp
public const string LastDeliveryOutcome = "lastDeliveryOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryProviderMessageId"></a> LastDeliveryProviderMessageId

Metadata key containing the provider message identifier returned by the sender.

```csharp
public const string LastDeliveryProviderMessageId = "lastDeliveryProviderMessageId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliverySenderId"></a> LastDeliverySenderId

Metadata key containing the sender identifier used by the last dispatch attempt.

```csharp
public const string LastDeliverySenderId = "lastDeliverySenderId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliverySource"></a> LastDeliverySource

Metadata key containing the source that requested the last delivery dispatch.

```csharp
public const string LastDeliverySource = "lastDeliverySource"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryStatus"></a> LastDeliveryStatus

Metadata key containing the last reconciled delivery status.

```csharp
public const string LastDeliveryStatus = "lastDeliveryStatus"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryStatusActor"></a> LastDeliveryStatusActor

Metadata key containing the actor that reported the last delivery status observation.

```csharp
public const string LastDeliveryStatusActor = "lastDeliveryStatusActor"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryStatusChannel"></a> LastDeliveryStatusChannel

Metadata key containing the delivery channel associated with the last delivery status observation.

```csharp
public const string LastDeliveryStatusChannel = "lastDeliveryStatusChannel"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryStatusCorrelationId"></a> LastDeliveryStatusCorrelationId

Metadata key containing the correlation identifier for the last delivery status observation.

```csharp
public const string LastDeliveryStatusCorrelationId = "lastDeliveryStatusCorrelationId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryStatusObservedAtUtc"></a> LastDeliveryStatusObservedAtUtc

Metadata key containing the UTC timestamp when delivery status was observed.

```csharp
public const string LastDeliveryStatusObservedAtUtc = "lastDeliveryStatusObservedAtUtc"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryStatusProviderMessageId"></a> LastDeliveryStatusProviderMessageId

Metadata key containing the provider message identifier associated with the last delivery status observation.

```csharp
public const string LastDeliveryStatusProviderMessageId = "lastDeliveryStatusProviderMessageId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryStatusReason"></a> LastDeliveryStatusReason

Metadata key containing the provider or receiver reason for the last delivery status observation.

```csharp
public const string LastDeliveryStatusReason = "lastDeliveryStatusReason"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryStatusReconciliationOutcome"></a> LastDeliveryStatusReconciliationOutcome

Metadata key containing the last delivery status reconciliation outcome.

```csharp
public const string LastDeliveryStatusReconciliationOutcome = "lastDeliveryStatusReconciliationOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryStatusSenderId"></a> LastDeliveryStatusSenderId

Metadata key containing the sender identifier associated with the last delivery status observation.

```csharp
public const string LastDeliveryStatusSenderId = "lastDeliveryStatusSenderId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryMetadataKeys_LastDeliveryStatusSource"></a> LastDeliveryStatusSource

Metadata key containing the source that reported the last delivery status observation.

```csharp
public const string LastDeliveryStatusSource = "lastDeliveryStatusSource"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
