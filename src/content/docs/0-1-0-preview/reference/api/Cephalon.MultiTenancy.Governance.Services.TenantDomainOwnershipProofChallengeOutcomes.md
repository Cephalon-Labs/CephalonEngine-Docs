---
title: Class TenantDomainOwnershipProofChallengeOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofchallengeoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stable tenant-domain ownership proof challenge issuance outcomes.

```csharp
public static class TenantDomainOwnershipProofChallengeOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofChallengeOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofchallengeoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeOutcomes_AlreadyVerified"></a> AlreadyVerified

The domain is already verified and does not need a new challenge.

```csharp
public const string AlreadyVerified = "already-verified"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeOutcomes_Disabled"></a> Disabled

Challenge issuance is disabled by governance options.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeOutcomes_InvalidStatus"></a> InvalidStatus

The current declaration status cannot receive a new proof challenge.

```csharp
public const string InvalidStatus = "invalid-status"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeOutcomes_Issued"></a> Issued

Challenge issuance created or refreshed the pending proof challenge.

```csharp
public const string Issued = "issued"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeOutcomes_StoreFailed"></a> StoreFailed

Runtime state could not be persisted.

```csharp
public const string StoreFailed = "store-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeOutcomes_TenantMismatch"></a> TenantMismatch

The domain is already declared for a different tenant.

```csharp
public const string TenantMismatch = "tenant-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeOutcomes_VerificationMethodMismatch"></a> VerificationMethodMismatch

The requested verification method does not match the existing declaration.

```csharp
public const string VerificationMethodMismatch = "verification-method-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
