---
title: Interface ITenantDomainOwnershipHttpProofPublisher
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershiphttpproofpublisher
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Publishes tenant-domain ownership HTTP proof-file state inside the governance companion pack.

```csharp
public interface ITenantDomainOwnershipHttpProofPublisher
```

## Remarks

The publisher records the proof file path, content type, and fingerprint so host adapters can serve the proof
through their own transport-specific endpoints. It does not mutate DNS records or external provider control planes.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipHttpProofPublisher_PublishAsync_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationRequest_System_Threading_CancellationToken_"></a> PublishAsync\(TenantDomainOwnershipHttpProofPublicationRequest, CancellationToken\)

Materializes an HTTP proof-file publication from an issued tenant-domain ownership proof challenge.

```csharp
ValueTask<TenantDomainOwnershipHttpProofPublicationResult> PublishAsync(TenantDomainOwnershipHttpProofPublicationRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantDomainOwnershipHttpProofPublicationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofpublicationrequest/)

The HTTP proof publication request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels publication before runtime state is stored.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantDomainOwnershipHttpProofPublicationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofpublicationresult/)\>

The HTTP proof publication outcome.
