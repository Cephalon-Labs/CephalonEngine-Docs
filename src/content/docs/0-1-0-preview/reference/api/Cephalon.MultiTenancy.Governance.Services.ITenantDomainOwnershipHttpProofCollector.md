---
title: Interface ITenantDomainOwnershipHttpProofCollector
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershiphttpproofcollector
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Collects tenant-domain ownership HTTP file proof evidence and evaluates the collected proof through the governance workflow.

```csharp
public interface ITenantDomainOwnershipHttpProofCollector
```

## Remarks

The collector owns the on-demand HTTP file proof collection path for declarations that use
<xref href="Cephalon.MultiTenancy.Governance.Services.TenantDomainVerificationMethods.HttpFile" data-throw-if-not-resolved="false"></xref>. It does not publish the proof file, mutate DNS records,
collect DNS TXT values, or run background polling.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipHttpProofCollector_CollectAsync_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionRequest_System_Threading_CancellationToken_"></a> CollectAsync\(TenantDomainOwnershipHttpProofCollectionRequest, CancellationToken\)

Collects and evaluates one tenant-domain ownership HTTP file proof.

```csharp
ValueTask<TenantDomainOwnershipHttpProofCollectionResult> CollectAsync(TenantDomainOwnershipHttpProofCollectionRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantDomainOwnershipHttpProofCollectionRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofcollectionrequest/)

The HTTP proof collection request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels collection before the proof evaluator is invoked.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantDomainOwnershipHttpProofCollectionResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofcollectionresult/)\>

The collection result and nested proof-evaluation outcome.
