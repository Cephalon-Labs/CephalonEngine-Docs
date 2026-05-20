---
title: Interface ITenantDomainOwnershipDnsTxtProofCollector
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershipdnstxtproofcollector
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Collects tenant-domain ownership DNS TXT proof evidence and evaluates the collected proof through the governance workflow.

```csharp
public interface ITenantDomainOwnershipDnsTxtProofCollector
```

## Remarks

The collector owns the on-demand DNS TXT proof lookup path for declarations that use
<xref href="Cephalon.MultiTenancy.Governance.Services.TenantDomainVerificationMethods.DnsTxt" data-throw-if-not-resolved="false"></xref>. It does not mutate DNS provider records,
publish proof values, or run background polling.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipDnsTxtProofCollector_CollectAsync_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionRequest_System_Threading_CancellationToken_"></a> CollectAsync\(TenantDomainOwnershipDnsTxtProofCollectionRequest, CancellationToken\)

Collects and evaluates one tenant-domain ownership DNS TXT proof.

```csharp
ValueTask<TenantDomainOwnershipDnsTxtProofCollectionResult> CollectAsync(TenantDomainOwnershipDnsTxtProofCollectionRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantDomainOwnershipDnsTxtProofCollectionRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdnstxtproofcollectionrequest/)

The DNS TXT proof collection request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels collection before the proof evaluator is invoked.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantDomainOwnershipDnsTxtProofCollectionResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdnstxtproofcollectionresult/)\>

The collection result and nested proof-evaluation outcome.
