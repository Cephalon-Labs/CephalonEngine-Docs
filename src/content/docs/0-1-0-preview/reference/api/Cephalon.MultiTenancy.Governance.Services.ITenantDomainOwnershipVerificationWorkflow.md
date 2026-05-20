---
title: Interface ITenantDomainOwnershipVerificationWorkflow
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershipverificationworkflow
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Applies in-process tenant-domain ownership verification workflow transitions.

```csharp
public interface ITenantDomainOwnershipVerificationWorkflow
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipVerificationWorkflow_ApplyAsync_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowRequest_System_Threading_CancellationToken_"></a> ApplyAsync\(TenantDomainOwnershipVerificationWorkflowRequest, CancellationToken\)

Applies one tenant-domain ownership verification workflow command.

```csharp
ValueTask<TenantDomainOwnershipVerificationWorkflowResult> ApplyAsync(TenantDomainOwnershipVerificationWorkflowRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantDomainOwnershipVerificationWorkflowRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipverificationworkflowrequest/)

The workflow transition request to evaluate.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A cancellation token for the workflow operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantDomainOwnershipVerificationWorkflowResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipverificationworkflowresult/)\>

The evaluated workflow transition result.
