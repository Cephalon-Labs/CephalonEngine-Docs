---
title: Class TenantDomainOwnershipProofPublicationPlanOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpublicationplanoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stable tenant-domain ownership proof publication planning outcomes.

```csharp
public static class TenantDomainOwnershipProofPublicationPlanOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofPublicationPlanOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpublicationplanoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanOutcomes_Disabled"></a> Disabled

Publication planning is disabled by governance options.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanOutcomes_MissingExpectedProof"></a> MissingExpectedProof

Expected proof metadata is missing from the tenant-domain ownership declaration.

```csharp
public const string MissingExpectedProof = "missing-expected-proof"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanOutcomes_NotFound"></a> NotFound

No tenant-domain ownership declaration matched the supplied tenant and domain.

```csharp
public const string NotFound = "not-found"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanOutcomes_Planned"></a> Planned

Publication instructions were generated.

```csharp
public const string Planned = "planned"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanOutcomes_StoreFailed"></a> StoreFailed

Runtime state could not be persisted.

```csharp
public const string StoreFailed = "store-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanOutcomes_TenantMismatch"></a> TenantMismatch

The domain is already declared for a different tenant.

```csharp
public const string TenantMismatch = "tenant-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanOutcomes_UnsupportedVerificationMethod"></a> UnsupportedVerificationMethod

The verification method does not have built-in publication instructions.

```csharp
public const string UnsupportedVerificationMethod = "unsupported-verification-method"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanOutcomes_VerificationMethodMismatch"></a> VerificationMethodMismatch

The requested verification method does not match the existing declaration.

```csharp
public const string VerificationMethodMismatch = "verification-method-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
