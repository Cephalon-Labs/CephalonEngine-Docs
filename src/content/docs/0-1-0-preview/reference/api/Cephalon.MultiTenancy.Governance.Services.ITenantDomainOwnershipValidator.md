---
title: Interface ITenantDomainOwnershipValidator
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershipvalidator
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Validates declared tenant-domain ownership against the active governance runtime.

```csharp
public interface ITenantDomainOwnershipValidator
```

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipValidator_ValidateAsync_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationRequest_System_Threading_CancellationToken_"></a> ValidateAsync\(TenantDomainOwnershipValidationRequest, CancellationToken\)

Validates a tenant-domain ownership request.

```csharp
ValueTask<TenantDomainOwnershipValidationResult> ValidateAsync(TenantDomainOwnershipValidationRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantDomainOwnershipValidationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipvalidationrequest/)

The validation request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels validation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantDomainOwnershipValidationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipvalidationresult/)\>

The validation result.
