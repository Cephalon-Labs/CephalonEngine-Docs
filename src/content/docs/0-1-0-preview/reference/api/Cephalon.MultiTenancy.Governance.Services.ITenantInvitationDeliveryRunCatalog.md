---
title: Interface ITenantInvitationDeliveryRunCatalog
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationdeliveryruncatalog
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Exposes runtime tenant invitation delivery dispatch attempts observed by the governance companion pack.

```csharp
public interface ITenantInvitationDeliveryRunCatalog
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRunCatalog_Count"></a> Count

Gets the number of recorded tenant invitation delivery dispatch attempts.

```csharp
int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRunCatalog_LatestRun"></a> LatestRun

Gets the latest recorded tenant invitation delivery dispatch attempt when one exists.

```csharp
TenantInvitationDeliveryRunDescriptor? LatestRun { get; }
```

#### Property Value

 [TenantInvitationDeliveryRunDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryrundescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRunCatalog_Runs"></a> Runs

Gets the recorded tenant invitation delivery dispatch attempts.

```csharp
IReadOnlyList<TenantInvitationDeliveryRunDescriptor> Runs { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDeliveryRunDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryrundescriptor/)\>

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRunCatalog_GetByInvitationId_System_String_"></a> GetByInvitationId\(string\)

Gets recorded tenant invitation delivery dispatch attempts for one invitation identifier.

```csharp
IReadOnlyList<TenantInvitationDeliveryRunDescriptor> GetByInvitationId(string invitationId)
```

#### Parameters

`invitationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The invitation identifier.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDeliveryRunDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryrundescriptor/)\>

The matching dispatch attempts.

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationDeliveryRunCatalog_GetByTenantId_System_String_"></a> GetByTenantId\(string\)

Gets recorded tenant invitation delivery dispatch attempts for one tenant.

```csharp
IReadOnlyList<TenantInvitationDeliveryRunDescriptor> GetByTenantId(string tenantId)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDeliveryRunDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryrundescriptor/)\>

The matching dispatch attempts.
