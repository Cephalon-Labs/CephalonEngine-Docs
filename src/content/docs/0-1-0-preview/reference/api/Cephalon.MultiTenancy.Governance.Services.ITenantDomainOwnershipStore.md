---
title: Interface ITenantDomainOwnershipStore
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershipstore
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stores runtime tenant-domain ownership declarations managed by the multi-tenancy governance companion pack.

```csharp
public interface ITenantDomainOwnershipStore
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipStore_Count"></a> Count

Gets the number of stored runtime tenant-domain ownership declarations.

```csharp
int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipStore_DomainOwnerships"></a> DomainOwnerships

Gets the stored runtime tenant-domain ownership declarations.

```csharp
IReadOnlyList<TenantDomainOwnershipDescriptor> DomainOwnerships { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipStore_IsDurable"></a> IsDurable

Gets a value indicating whether tenant-domain ownership state survives process restarts.

```csharp
bool IsDurable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipStore_Ownership"></a> Ownership

Gets the ownership mode for the store implementation.

```csharp
string Ownership { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipStore_StoreKind"></a> StoreKind

Gets the operator-facing store kind.

```csharp
string StoreKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipStore_Upsert_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_"></a> Upsert\(TenantDomainOwnershipDescriptor\)

Creates or replaces one stored runtime tenant-domain ownership declaration.

```csharp
void Upsert(TenantDomainOwnershipDescriptor domainOwnership)
```

#### Parameters

`domainOwnership` [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)

The tenant-domain ownership declaration to store.
