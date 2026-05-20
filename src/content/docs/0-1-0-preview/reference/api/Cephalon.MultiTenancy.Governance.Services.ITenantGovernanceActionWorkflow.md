---
title: Interface ITenantGovernanceActionWorkflow
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantgovernanceactionworkflow
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Applies host-agnostic tenant-governance action workflow transitions.

```csharp
public interface ITenantGovernanceActionWorkflow
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantGovernanceActionWorkflow_ApplyAsync_Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest_System_Threading_CancellationToken_"></a> ApplyAsync\(TenantGovernanceActionWorkflowRequest, CancellationToken\)

Applies one tenant-governance action workflow transition.

```csharp
ValueTask<TenantGovernanceActionWorkflowResult> ApplyAsync(TenantGovernanceActionWorkflowRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantGovernanceActionWorkflowRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactionworkflowrequest/)

The workflow transition request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the transition.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantGovernanceActionWorkflowResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactionworkflowresult/)\>

The workflow transition result.
