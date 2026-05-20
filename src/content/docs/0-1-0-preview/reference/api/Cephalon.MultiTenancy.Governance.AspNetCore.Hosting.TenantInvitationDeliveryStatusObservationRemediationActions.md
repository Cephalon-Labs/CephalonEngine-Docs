---
title: Class TenantInvitationDeliveryStatusObservationRemediationActions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatusobservationremediationactions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AspNetCore.dll  

Defines stable operator remediation actions for tenant-invitation delivery status observation reads.

```csharp
public static class TenantInvitationDeliveryStatusObservationRemediationActions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryStatusObservationRemediationActions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatusobservationremediationactions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

Remediation actions are deterministic guidance derived from normalized observation history. They do not execute
provider calls, mutate callback inboxes, run polling loops, or claim distributed remediation ownership.

## Fields

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationActions_MonitorDeferredDelivery"></a> MonitorDeferredDelivery

Monitor a deferred delivery status or retry through an owned delivery-dispatch path when appropriate.

```csharp
public const string MonitorDeferredDelivery = "monitor-deferred-delivery"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationActions_ReviewObservationRecording"></a> ReviewObservationRecording

Review observation-store configuration or metadata recording failure before relying on the audit trail.

```csharp
public const string ReviewObservationRecording = "review-observation-recording"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationActions_ReviewRecipientOrSender"></a> ReviewRecipientOrSender

Review the recipient, sender configuration, or provider status before retrying or replacing the invitation.

```csharp
public const string ReviewRecipientOrSender = "review-recipient-or-sender"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationActions_ReviewReconciliationInput"></a> ReviewReconciliationInput

Review reconciliation inputs such as tenant id, invitation id, provider message id, or status ownership.

```csharp
public const string ReviewReconciliationInput = "review-reconciliation-input"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationActions_ReviewStatusTranslation"></a> ReviewStatusTranslation

Review provider callback translation or payload mapping because the normalized status was unknown.

```csharp
public const string ReviewStatusTranslation = "review-status-translation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationActions_ReviewSuppressionPolicy"></a> ReviewSuppressionPolicy

Review suppression or unsubscribe policy before sending more invitations to the recipient.

```csharp
public const string ReviewSuppressionPolicy = "review-suppression-policy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
