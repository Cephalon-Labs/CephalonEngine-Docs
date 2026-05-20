---
title: Interface ITenantInvitationValidator
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantinvitationvalidator
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Validates tenant invitations against the active governance runtime.

```csharp
public interface ITenantInvitationValidator
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantInvitationValidator_ValidateAsync_Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationRequest_System_Threading_CancellationToken_"></a> ValidateAsync\(TenantInvitationValidationRequest, CancellationToken\)

Validates a tenant invitation request.

```csharp
ValueTask<TenantInvitationValidationResult> ValidateAsync(TenantInvitationValidationRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantInvitationValidationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationvalidationrequest/)

The validation request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels validation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantInvitationValidationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationvalidationresult/)\>

The validation result.
