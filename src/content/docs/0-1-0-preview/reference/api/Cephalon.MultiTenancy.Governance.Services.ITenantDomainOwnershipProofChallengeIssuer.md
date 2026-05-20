---
title: Interface ITenantDomainOwnershipProofChallengeIssuer
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershipproofchallengeissuer
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Issues tenant-domain ownership proof challenges and records the expected proof value for later evaluation.

```csharp
public interface ITenantDomainOwnershipProofChallengeIssuer
```

## Remarks

The issuer owns challenge generation and runtime metadata mutation. It does not publish DNS records, host HTTP
proof files, or poll external endpoints; applications or provider packs publish and observe the issued challenge.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipProofChallengeIssuer_IssueAsync_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest_System_Threading_CancellationToken_"></a> IssueAsync\(TenantDomainOwnershipProofChallengeRequest, CancellationToken\)

Issues or refreshes a proof challenge for a tenant-domain ownership declaration.

```csharp
ValueTask<TenantDomainOwnershipProofChallengeResult> IssueAsync(TenantDomainOwnershipProofChallengeRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantDomainOwnershipProofChallengeRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofchallengerequest/)

The proof challenge request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels challenge issuance before runtime state is stored.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantDomainOwnershipProofChallengeResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofchallengeresult/)\>

The issued challenge details and runtime state outcome.
