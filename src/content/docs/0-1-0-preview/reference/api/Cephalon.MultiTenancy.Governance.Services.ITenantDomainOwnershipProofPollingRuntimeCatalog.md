---
title: Interface ITenantDomainOwnershipProofPollingRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershipproofpollingruntimecatalog
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Exposes runtime state for tenant-domain ownership proof polling.

```csharp
public interface ITenantDomainOwnershipProofPollingRuntimeCatalog
```

## Remarks

The catalog reports the background polling hosted-service posture. It does not
represent DNS or HTTP proof publication ownership.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipProofPollingRuntimeCatalog_Current"></a> Current

Gets the latest tenant-domain ownership proof polling runtime snapshot.

```csharp
TenantDomainOwnershipProofPollingRuntimeSnapshot Current { get; }
```

#### Property Value

 [TenantDomainOwnershipProofPollingRuntimeSnapshot](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpollingruntimesnapshot/)
