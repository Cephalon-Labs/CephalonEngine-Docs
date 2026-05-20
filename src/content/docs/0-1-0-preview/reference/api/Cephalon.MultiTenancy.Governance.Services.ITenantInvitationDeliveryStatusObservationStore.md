---
title: Interface ITenantInvitationDeliveryStatusObservationStore
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationdeliverystatusobservationstore
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stores tenant invitation delivery status observations recorded by the governance reconciler.

```csharp
public interface ITenantInvitationDeliveryStatusObservationStore
```

## Remarks

The store is host-agnostic and records normalized reconciliation observations only. It does not translate
provider-specific callback payloads, verify provider-specific signatures, poll delivery providers, or provide
distributed exactly-once delivery semantics.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryStatusObservationStore_Count"></a> Count

Gets the number of recorded delivery status observations.

```csharp
int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryStatusObservationStore_IsDurable"></a> IsDurable

Gets a value indicating whether the observation store survives process restarts.

```csharp
bool IsDurable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryStatusObservationStore_Observations"></a> Observations

Gets the recorded delivery status observations.

```csharp
IReadOnlyList<TenantInvitationDeliveryStatusObservationDescriptor> Observations { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDeliveryStatusObservationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverystatusobservationdescriptor/)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryStatusObservationStore_Ownership"></a> Ownership

Gets the ownership mode for the observation store.

```csharp
string Ownership { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryStatusObservationStore_StoreKind"></a> StoreKind

Gets the store kind, such as <code>in-memory</code> or <code>file</code>.

```csharp
string StoreKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryStatusObservationStore_Upsert_Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_"></a> Upsert\(TenantInvitationDeliveryStatusObservationDescriptor\)

Records or replaces a delivery status observation.

```csharp
void Upsert(TenantInvitationDeliveryStatusObservationDescriptor observation)
```

#### Parameters

`observation` [TenantInvitationDeliveryStatusObservationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverystatusobservationdescriptor/)

The observation to record.
