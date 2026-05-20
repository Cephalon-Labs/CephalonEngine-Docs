---
title: Interface ITenantInvitationCatalog
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationcatalog
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Exposes the merged tenant-invitation set available to the active governance runtime.

```csharp
public interface ITenantInvitationCatalog
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationCatalog_Invitations"></a> Invitations

Gets the effective invitation set after runtime storage, host options, and module contributors have all been applied.

```csharp
IReadOnlyList<TenantInvitationDescriptor> Invitations { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)\>

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationCatalog_GetByInvitationId_System_String_"></a> GetByInvitationId\(string\)

Gets invitations by invitation identifier across all tenants.

```csharp
IReadOnlyList<TenantInvitationDescriptor> GetByInvitationId(string invitationId)
```

#### Parameters

`invitationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The invitation identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)\>

The matching invitations.

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationCatalog_GetByInviteeId_System_String_"></a> GetByInviteeId\(string\)

Gets invitations for one invitee across all tenants.

```csharp
IReadOnlyList<TenantInvitationDescriptor> GetByInviteeId(string inviteeId)
```

#### Parameters

`inviteeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The invitee identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)\>

The matching invitations.

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationCatalog_GetByTenantAndInvitation_System_String_System_String_"></a> GetByTenantAndInvitation\(string, string\)

Gets invitations by tenant and invitation identifier.

```csharp
IReadOnlyList<TenantInvitationDescriptor> GetByTenantAndInvitation(string tenantId, string invitationId)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier to resolve.

`invitationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The invitation identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)\>

The matching invitations.

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationCatalog_GetByTenantId_System_String_"></a> GetByTenantId\(string\)

Gets invitations for one tenant.

```csharp
IReadOnlyList<TenantInvitationDescriptor> GetByTenantId(string tenantId)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)\>

The matching invitations.
