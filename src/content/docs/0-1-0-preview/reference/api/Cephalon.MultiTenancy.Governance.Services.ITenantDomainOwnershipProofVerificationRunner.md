---
title: Interface ITenantDomainOwnershipProofVerificationRunner
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershipproofverificationrunner
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Runs the built-in tenant-domain ownership proof verification flow.

```csharp
public interface ITenantDomainOwnershipProofVerificationRunner
```

## Remarks

The runner reduces application glue code by composing challenge issuance,
publication planning, reported-proof evaluation, and optional HTTP file
proof collection and configured DNS TXT proof collection without claiming
DNS mutation, HTTP file hosting, provider control-plane mutation, or
automatic background polling ownership.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipProofVerificationRunner_VerifyAsync_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_System_Threading_CancellationToken_"></a> VerifyAsync\(TenantDomainOwnershipProofVerificationRequest, CancellationToken\)

Runs one tenant-domain ownership proof verification attempt.

```csharp
ValueTask<TenantDomainOwnershipProofVerificationResult> VerifyAsync(TenantDomainOwnershipProofVerificationRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantDomainOwnershipProofVerificationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofverificationrequest/)

The proof verification request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the attempt.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantDomainOwnershipProofVerificationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofverificationresult/)\>

The proof verification outcome and nested runtime results.
