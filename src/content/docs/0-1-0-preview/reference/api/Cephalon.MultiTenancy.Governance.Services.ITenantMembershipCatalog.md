---
title: Interface ITenantMembershipCatalog
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantmembershipcatalog
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Exposes the merged tenant-membership set available to the active governance runtime.

```csharp
public interface ITenantMembershipCatalog
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantMembershipCatalog_Memberships"></a> Memberships

Gets the effective membership set after runtime storage, host options, and module contributors have all been applied.

```csharp
IReadOnlyList<TenantMembershipDescriptor> Memberships { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantMembershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor/)\>

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantMembershipCatalog_GetByPrincipalId_System_String_"></a> GetByPrincipalId\(string\)

Gets memberships for one principal across all tenants.

```csharp
IReadOnlyList<TenantMembershipDescriptor> GetByPrincipalId(string principalId)
```

#### Parameters

`principalId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The principal identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantMembershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor/)\>

The matching memberships.

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantMembershipCatalog_GetByTenantAndPrincipal_System_String_System_String_"></a> GetByTenantAndPrincipal\(string, string\)

Gets memberships for one principal in one tenant.

```csharp
IReadOnlyList<TenantMembershipDescriptor> GetByTenantAndPrincipal(string tenantId, string principalId)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier to resolve.

`principalId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The principal identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantMembershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor/)\>

The matching memberships.

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantMembershipCatalog_GetByTenantId_System_String_"></a> GetByTenantId\(string\)

Gets memberships for one tenant.

```csharp
IReadOnlyList<TenantMembershipDescriptor> GetByTenantId(string tenantId)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantMembershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor/)\>

The matching memberships.

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantMembershipCatalog_GetByTenantPrincipalAndKind_System_String_System_String_System_String_"></a> GetByTenantPrincipalAndKind\(string, string, string\)

Gets memberships for one principal kind and principal identifier in one tenant.

```csharp
IReadOnlyList<TenantMembershipDescriptor> GetByTenantPrincipalAndKind(string tenantId, string principalKind, string principalId)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier to resolve.

`principalKind` [string](https://learn.microsoft.com/dotnet/api/system.string)

The principal kind to resolve.

`principalId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The principal identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantMembershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor/)\>

The matching memberships.
