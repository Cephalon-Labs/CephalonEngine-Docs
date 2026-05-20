---
title: Interface ITenantInvitationStore
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationstore
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stores runtime tenant invitations managed by the multi-tenancy governance companion pack.

```csharp
public interface ITenantInvitationStore
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationStore_Count"></a> Count

Gets the number of stored runtime tenant invitations.

```csharp
int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationStore_Invitations"></a> Invitations

Gets the stored runtime tenant invitations.

```csharp
IReadOnlyList<TenantInvitationDescriptor> Invitations { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationStore_IsDurable"></a> IsDurable

Gets a value indicating whether invitation state survives process restarts.

```csharp
bool IsDurable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationStore_Ownership"></a> Ownership

Gets the ownership mode for the store implementation.

```csharp
string Ownership { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationStore_StoreKind"></a> StoreKind

Gets the operator-facing store kind.

```csharp
string StoreKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationStore_Upsert_Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_"></a> Upsert\(TenantInvitationDescriptor\)

Creates or replaces one stored runtime tenant invitation.

```csharp
void Upsert(TenantInvitationDescriptor invitation)
```

#### Parameters

`invitation` [TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)

The tenant invitation to store.
