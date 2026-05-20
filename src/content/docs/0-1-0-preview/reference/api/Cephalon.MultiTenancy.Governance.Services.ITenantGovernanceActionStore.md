---
title: Interface ITenantGovernanceActionStore
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantgovernanceactionstore
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stores runtime tenant-governance actions created or transitioned by the governance action workflow.

```csharp
public interface ITenantGovernanceActionStore
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionStore_Actions"></a> Actions

Gets the stored runtime tenant-governance actions.

```csharp
IReadOnlyList<TenantGovernanceActionDescriptor> Actions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantGovernanceActionDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondescriptor/)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionStore_Count"></a> Count

Gets the number of stored runtime tenant-governance actions.

```csharp
int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionStore_IsDurable"></a> IsDurable

Gets a value indicating whether action state survives process restarts.

```csharp
bool IsDurable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionStore_Ownership"></a> Ownership

Gets the ownership mode for the store implementation.

```csharp
string Ownership { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionStore_StoreKind"></a> StoreKind

Gets the operator-facing store kind.

```csharp
string StoreKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionStore_Upsert_Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_"></a> Upsert\(TenantGovernanceActionDescriptor\)

Creates or replaces one stored runtime tenant-governance action.

```csharp
void Upsert(TenantGovernanceActionDescriptor action)
```

#### Parameters

`action` [TenantGovernanceActionDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondescriptor/)

The tenant-governance action to store.
