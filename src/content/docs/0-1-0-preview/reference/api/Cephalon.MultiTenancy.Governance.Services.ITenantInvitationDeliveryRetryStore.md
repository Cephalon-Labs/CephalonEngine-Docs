---
title: Interface ITenantInvitationDeliveryRetryStore
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationdeliveryretrystore
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stores tenant invitation delivery retry entries managed by the governance companion pack.

```csharp
public interface ITenantInvitationDeliveryRetryStore
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRetryStore_Count"></a> Count

Gets the number of retained retry entries.

```csharp
int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRetryStore_Entries"></a> Entries

Gets every retained retry entry.

```csharp
IReadOnlyList<TenantInvitationDeliveryRetryDescriptor> Entries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDeliveryRetryDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretrydescriptor/)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRetryStore_IsDurable"></a> IsDurable

Gets a value indicating whether retry entries survive process restarts.

```csharp
bool IsDurable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRetryStore_LatestEntry"></a> LatestEntry

Gets the latest retained retry entry when one exists.

```csharp
TenantInvitationDeliveryRetryDescriptor? LatestEntry { get; }
```

#### Property Value

 [TenantInvitationDeliveryRetryDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretrydescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRetryStore_Ownership"></a> Ownership

Gets the runtime ownership label for the retry queue.

```csharp
string Ownership { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRetryStore_StoreKind"></a> StoreKind

Gets the storage kind used by the retry queue.

```csharp
string StoreKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRetryStore_GetById_System_String_"></a> GetById\(string\)

Gets one retry entry by identifier.

```csharp
TenantInvitationDeliveryRetryDescriptor? GetById(string retryId)
```

#### Parameters

`retryId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The retry entry identifier.

#### Returns

 [TenantInvitationDeliveryRetryDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretrydescriptor/)?

The matching retry entry, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when none exists.

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRetryStore_GetPending_System_DateTimeOffset_System_Int32_System_Boolean_"></a> GetPending\(DateTimeOffset, int, bool\)

Gets retry entries that are pending and optionally due at or before the supplied timestamp.

```csharp
IReadOnlyList<TenantInvitationDeliveryRetryDescriptor> GetPending(DateTimeOffset atUtc, int limit, bool dueOnly = true)
```

#### Parameters

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The timestamp used to decide due entries.

`limit` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The maximum number of entries to return.

`dueOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether entries scheduled after <code class="paramref">atUtc</code> should be skipped.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDeliveryRetryDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretrydescriptor/)\>

The matching pending retry entries.

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRetryStore_Remove_System_String_"></a> Remove\(string\)

Removes a retry entry.

```csharp
bool Remove(string retryId)
```

#### Parameters

`retryId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The retry entry identifier.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when an entry was removed; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRetryStore_Upsert_Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryDescriptor_"></a> Upsert\(TenantInvitationDeliveryRetryDescriptor\)

Adds or replaces a retry entry.

```csharp
void Upsert(TenantInvitationDeliveryRetryDescriptor entry)
```

#### Parameters

`entry` [TenantInvitationDeliveryRetryDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretrydescriptor/)

The retry entry to store.
