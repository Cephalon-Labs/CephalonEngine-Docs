---
title: Interface ITenantDomainOwnershipProofPublicationPlanner
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershipproofpublicationplanner
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Builds tenant-domain ownership proof publication instructions from an issued proof challenge.

```csharp
public interface ITenantDomainOwnershipProofPublicationPlanner
```

## Remarks

The planner owns deterministic instruction generation and optional runtime metadata recording. It does not
mutate DNS records, host HTTP proof files, or poll external endpoints; applications or provider packs publish
and observe the planned proof outside the engine.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipProofPublicationPlanner_PlanAsync_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanRequest_System_Threading_CancellationToken_"></a> PlanAsync\(TenantDomainOwnershipProofPublicationPlanRequest, CancellationToken\)

Builds publication instructions for a tenant-domain ownership proof challenge.

```csharp
ValueTask<TenantDomainOwnershipProofPublicationPlanResult> PlanAsync(TenantDomainOwnershipProofPublicationPlanRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantDomainOwnershipProofPublicationPlanRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpublicationplanrequest/)

The proof publication planning request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels planning before runtime state is stored.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantDomainOwnershipProofPublicationPlanResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpublicationplanresult/)\>

The publication instructions and runtime state outcome.
