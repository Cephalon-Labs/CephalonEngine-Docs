---
title: Interface ITenantGovernanceActionCatalog
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantgovernanceactioncatalog
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Exposes the merged tenant-governance action set available to the active governance runtime.

```csharp
public interface ITenantGovernanceActionCatalog
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionCatalog_Actions"></a> Actions

Gets the effective governance action set after host options and module contributors have both been applied.

```csharp
IReadOnlyList<TenantGovernanceActionDescriptor> Actions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantGovernanceActionDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondescriptor/)\>

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionCatalog_GetByActionId_System_String_"></a> GetByActionId\(string\)

Gets governance action descriptors by action identifier across all tenants.

```csharp
IReadOnlyList<TenantGovernanceActionDescriptor> GetByActionId(string actionId)
```

#### Parameters

`actionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The action identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantGovernanceActionDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondescriptor/)\>

The matching governance action descriptors.

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionCatalog_GetByTenantAndAction_System_String_System_String_"></a> GetByTenantAndAction\(string, string\)

Gets governance action descriptors by tenant and action identifier.

```csharp
IReadOnlyList<TenantGovernanceActionDescriptor> GetByTenantAndAction(string tenantId, string actionId)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier to resolve.

`actionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The action identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantGovernanceActionDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondescriptor/)\>

The matching governance action descriptors.

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionCatalog_GetByTenantId_System_String_"></a> GetByTenantId\(string\)

Gets governance action descriptors for one tenant.

```csharp
IReadOnlyList<TenantGovernanceActionDescriptor> GetByTenantId(string tenantId)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantGovernanceActionDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondescriptor/)\>

The matching governance action descriptors.
