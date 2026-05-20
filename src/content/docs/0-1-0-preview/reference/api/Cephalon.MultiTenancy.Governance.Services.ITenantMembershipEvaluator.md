---
title: Interface ITenantMembershipEvaluator
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantmembershipevaluator
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Evaluates whether a principal has active membership in a tenant.

```csharp
public interface ITenantMembershipEvaluator
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantMembershipEvaluator_EvaluateAsync_Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationRequest_System_Threading_CancellationToken_"></a> EvaluateAsync\(TenantMembershipEvaluationRequest, CancellationToken\)

Evaluates tenant membership for the supplied request.

```csharp
ValueTask<TenantMembershipEvaluationResult> EvaluateAsync(TenantMembershipEvaluationRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantMembershipEvaluationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipevaluationrequest/)

The membership evaluation request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels evaluation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantMembershipEvaluationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipevaluationresult/)\>

The membership evaluation result.
