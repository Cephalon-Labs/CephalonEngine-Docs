---
title: Interface ITenantAdministrationWorkflow
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantadministrationworkflow
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Applies host-agnostic tenant administration commands over Cephalon-managed governance stores.

```csharp
public interface ITenantAdministrationWorkflow
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantAdministrationWorkflow_ApplyAsync_Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_System_Threading_CancellationToken_"></a> ApplyAsync\(TenantAdministrationWorkflowRequest, CancellationToken\)

Applies one tenant administration command.

```csharp
ValueTask<TenantAdministrationWorkflowResult> ApplyAsync(TenantAdministrationWorkflowRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantAdministrationWorkflowRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantadministrationworkflowrequest/)

The tenant administration command request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the command.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantAdministrationWorkflowResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantadministrationworkflowresult/)\>

The evaluated tenant administration command result.
