---
title: Class TenantDomainOwnershipProofVerificationOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofverificationoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stable tenant-domain ownership proof verification runner outcome labels.

```csharp
public static class TenantDomainOwnershipProofVerificationOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofVerificationOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofverificationoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_AlreadyVerified"></a> AlreadyVerified

The domain ownership declaration was already verified and no new proof run was needed.

```csharp
public const string AlreadyVerified = "already-verified"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_ChallengeFailed"></a> ChallengeFailed

Challenge issuance failed before proof verification could proceed.

```csharp
public const string ChallengeFailed = "challenge-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_ChallengeIssued"></a> ChallengeIssued

A new or refreshed proof challenge was issued and publication instructions were produced.

```csharp
public const string ChallengeIssued = "challenge-issued"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_Disabled"></a> Disabled

Proof verification runner execution is disabled by governance options.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_DnsTxtCollectionFailed"></a> DnsTxtCollectionFailed

DNS TXT proof collection failed before a proof could be evaluated.

```csharp
public const string DnsTxtCollectionFailed = "dns-txt-collection-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_DnsTxtCollectionUnavailable"></a> DnsTxtCollectionUnavailable

DNS TXT proof collection is required but the built-in collector is not registered.

```csharp
public const string DnsTxtCollectionUnavailable = "dns-txt-collection-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_EvaluationFailed"></a> EvaluationFailed

Proof evaluation failed before a terminal workflow outcome could be applied.

```csharp
public const string EvaluationFailed = "evaluation-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_HttpCollectionFailed"></a> HttpCollectionFailed

HTTP proof collection failed before a proof could be evaluated.

```csharp
public const string HttpCollectionFailed = "http-collection-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_HttpCollectionUnavailable"></a> HttpCollectionUnavailable

HTTP proof collection is required but the built-in collector is not registered.

```csharp
public const string HttpCollectionUnavailable = "http-collection-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_MissingExpectedProof"></a> MissingExpectedProof

Expected proof metadata is missing and challenge issuance was not available or not requested.

```csharp
public const string MissingExpectedProof = "missing-expected-proof"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_MissingObservedProof"></a> MissingObservedProof

No observed proof was supplied and no built-in collector can collect the requested method.

```csharp
public const string MissingObservedProof = "missing-observed-proof"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_NotFound"></a> NotFound

No tenant-domain ownership declaration matched the supplied tenant and domain.

```csharp
public const string NotFound = "not-found"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_PublicationPlanFailed"></a> PublicationPlanFailed

Publication planning failed before proof verification could proceed.

```csharp
public const string PublicationPlanFailed = "publication-plan-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_PublicationPlanned"></a> PublicationPlanned

Publication instructions were produced, but no observed proof was available to evaluate.

```csharp
public const string PublicationPlanned = "publication-planned"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_Rejected"></a> Rejected

The observed proof mismatched and the domain ownership declaration was rejected.

```csharp
public const string Rejected = "rejected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_StoreFailed"></a> StoreFailed

Runtime state could not be persisted.

```csharp
public const string StoreFailed = "store-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_TenantMismatch"></a> TenantMismatch

A declaration for the supplied domain belongs to a different tenant.

```csharp
public const string TenantMismatch = "tenant-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_UnsupportedVerificationMethod"></a> UnsupportedVerificationMethod

The requested verification method is not supported by the runner.

```csharp
public const string UnsupportedVerificationMethod = "unsupported-verification-method"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_VerificationMethodMismatch"></a> VerificationMethodMismatch

The matching domain ownership declaration uses a different verification method.

```csharp
public const string VerificationMethodMismatch = "verification-method-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationOutcomes_Verified"></a> Verified

The observed proof matched and the domain ownership declaration was verified.

```csharp
public const string Verified = "verified"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
