---
title: Class TenantInvitationDeliveryStatusObservationAttentionCategories
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatusobservationattentioncategories
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AspNetCore.dll  

Defines stable attention categories for tenant-invitation delivery status observation reads.

```csharp
public static class TenantInvitationDeliveryStatusObservationAttentionCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryStatusObservationAttentionCategories](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatusobservationattentioncategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

Attention categories are derived from normalized observations already stored by the governance core. They are
operator drill-down labels only; they do not represent provider polling, callback inbox ownership, distributed
replay, or exactly-once delivery semantics.

## Fields

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationAttentionCategories_DeliveryDeferred"></a> DeliveryDeferred

The observation reports a deferred delivery status.

```csharp
public const string DeliveryDeferred = "delivery-deferred"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationAttentionCategories_DeliveryFailed"></a> DeliveryFailed

The observation reports a failed or bounced delivery status.

```csharp
public const string DeliveryFailed = "delivery-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationAttentionCategories_DeliverySuppressed"></a> DeliverySuppressed

The observation reports a suppressed delivery status.

```csharp
public const string DeliverySuppressed = "delivery-suppressed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationAttentionCategories_DeliveryUnknown"></a> DeliveryUnknown

The observation reports an unknown delivery status.

```csharp
public const string DeliveryUnknown = "delivery-unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationAttentionCategories_ReconciliationGap"></a> ReconciliationGap

The observation did not reconcile into invitation state.

```csharp
public const string ReconciliationGap = "reconciliation-gap"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationAttentionCategories_RecordingGap"></a> RecordingGap

The observation did not record invitation delivery status metadata.

```csharp
public const string RecordingGap = "recording-gap"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
