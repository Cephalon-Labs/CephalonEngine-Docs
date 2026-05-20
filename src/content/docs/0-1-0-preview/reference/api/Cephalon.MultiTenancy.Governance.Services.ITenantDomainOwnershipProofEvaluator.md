---
title: Interface ITenantDomainOwnershipProofEvaluator
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershipproofevaluator
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Evaluates reported tenant-domain ownership proof evidence and applies the resulting verification workflow transition.

```csharp
public interface ITenantDomainOwnershipProofEvaluator
```

## Remarks

The evaluator owns proof comparison and workflow mutation. It does not collect DNS records, HTTP files, or external
polling evidence itself; applications or provider packs report the observed proof value into this contract.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipProofEvaluator_EvaluateAsync_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationRequest_System_Threading_CancellationToken_"></a> EvaluateAsync\(TenantDomainOwnershipProofEvaluationRequest, CancellationToken\)

Evaluates reported proof evidence for a tenant-domain ownership declaration.

```csharp
ValueTask<TenantDomainOwnershipProofEvaluationResult> EvaluateAsync(TenantDomainOwnershipProofEvaluationRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantDomainOwnershipProofEvaluationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofevaluationrequest/)

The proof evaluation request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels proof evaluation before workflow mutation starts.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantDomainOwnershipProofEvaluationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofevaluationresult/)\>

The proof evaluation result and workflow transition outcome.
