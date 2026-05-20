---
title: Interface ITenantGovernanceActionDecider
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantgovernanceactiondecider
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Decides whether a tenant-governance action can proceed against the active governance runtime.

```csharp
public interface ITenantGovernanceActionDecider
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionDecider_DecideAsync_Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionRequest_System_Threading_CancellationToken_"></a> DecideAsync\(TenantGovernanceActionDecisionRequest, CancellationToken\)

Decides one tenant-governance action request.

```csharp
ValueTask<TenantGovernanceActionDecisionResult> DecideAsync(TenantGovernanceActionDecisionRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantGovernanceActionDecisionRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondecisionrequest/)

The decision request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels decision evaluation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantGovernanceActionDecisionResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondecisionresult/)\>

The decision result.
