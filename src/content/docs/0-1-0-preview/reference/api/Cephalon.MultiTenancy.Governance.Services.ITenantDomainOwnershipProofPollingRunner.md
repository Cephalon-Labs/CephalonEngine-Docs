---
title: Interface ITenantDomainOwnershipProofPollingRunner
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershipproofpollingrunner
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Runs bounded tenant-domain ownership proof polling over the governance domain-ownership catalog.

```csharp
public interface ITenantDomainOwnershipProofPollingRunner
```

## Remarks

The polling runner reduces application glue code by selecting pending or rejected
domain-ownership declarations and delegating each proof attempt to
<xref href="Cephalon.MultiTenancy.Governance.Services.ITenantDomainOwnershipProofVerificationRunner" data-throw-if-not-resolved="false"></xref>. It owns the
on-demand polling loop, not DNS mutation, HTTP file hosting, provider control-plane
mutation, or automatic background scheduling.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipProofPollingRunner_PollAsync_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_System_Threading_CancellationToken_"></a> PollAsync\(TenantDomainOwnershipProofPollingRequest, CancellationToken\)

Runs one bounded polling pass over matching tenant-domain ownership declarations.

```csharp
ValueTask<TenantDomainOwnershipProofPollingResult> PollAsync(TenantDomainOwnershipProofPollingRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantDomainOwnershipProofPollingRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpollingrequest/)

The proof polling request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the polling pass.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantDomainOwnershipProofPollingResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpollingresult/)\>

The aggregate polling result plus the nested verification attempts.
