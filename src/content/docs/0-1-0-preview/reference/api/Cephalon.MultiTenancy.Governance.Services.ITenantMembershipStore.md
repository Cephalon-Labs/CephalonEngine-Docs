---
title: Interface ITenantMembershipStore
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantmembershipstore
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stores runtime tenant memberships managed by the multi-tenancy governance companion pack.

```csharp
public interface ITenantMembershipStore
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantMembershipStore_Count"></a> Count

Gets the number of stored runtime tenant memberships.

```csharp
int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantMembershipStore_IsDurable"></a> IsDurable

Gets a value indicating whether membership state survives process restarts.

```csharp
bool IsDurable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantMembershipStore_Memberships"></a> Memberships

Gets the stored runtime tenant memberships.

```csharp
IReadOnlyList<TenantMembershipDescriptor> Memberships { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantMembershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor/)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantMembershipStore_Ownership"></a> Ownership

Gets the ownership mode for the store implementation.

```csharp
string Ownership { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantMembershipStore_StoreKind"></a> StoreKind

Gets the operator-facing store kind.

```csharp
string StoreKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantMembershipStore_Upsert_Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor_"></a> Upsert\(TenantMembershipDescriptor\)

Creates or replaces one stored runtime tenant membership.

```csharp
void Upsert(TenantMembershipDescriptor membership)
```

#### Parameters

`membership` [TenantMembershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor/)

The tenant membership to store.
