---
title: Class TenantDomainOwnershipHttpProofCollectionOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofcollectionoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stable tenant-domain ownership HTTP proof collection outcome labels.

```csharp
public static class TenantDomainOwnershipHttpProofCollectionOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipHttpProofCollectionOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofcollectionoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_Collected"></a> Collected

HTTP proof content was collected and proof evaluation reached a terminal workflow outcome.

```csharp
public const string Collected = "collected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_Disabled"></a> Disabled

HTTP proof collection is disabled by governance options.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_EmptyResponse"></a> EmptyResponse

The HTTP proof endpoint returned an empty response body.

```csharp
public const string EmptyResponse = "empty-response"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_EvaluationFailed"></a> EvaluationFailed

HTTP content was collected, but proof evaluation did not apply a terminal workflow outcome.

```csharp
public const string EvaluationFailed = "evaluation-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_InvalidUri"></a> InvalidUri

The resolved HTTP proof collection URI is invalid or unsafe for the requested domain.

```csharp
public const string InvalidUri = "invalid-uri"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_MissingExpectedProof"></a> MissingExpectedProof

Expected proof metadata is missing from the tenant-domain ownership declaration.

```csharp
public const string MissingExpectedProof = "missing-expected-proof"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_MissingPublicationPlan"></a> MissingPublicationPlan

Publication planning did not provide an HTTP file path and expected proof content.

```csharp
public const string MissingPublicationPlan = "missing-publication-plan"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_NotFound"></a> NotFound

No tenant-domain ownership declaration matched the supplied tenant and domain.

```csharp
public const string NotFound = "not-found"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_RequestFailed"></a> RequestFailed

The HTTP proof endpoint could not be reached or timed out.

```csharp
public const string RequestFailed = "request-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_ResponseTooLarge"></a> ResponseTooLarge

The HTTP proof endpoint response body exceeded the configured collection size limit.

```csharp
public const string ResponseTooLarge = "response-too-large"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_StoreFailed"></a> StoreFailed

Publication-plan metadata could not be recorded before collection.

```csharp
public const string StoreFailed = "store-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_TenantMismatch"></a> TenantMismatch

A declaration for the supplied domain belongs to a different tenant.

```csharp
public const string TenantMismatch = "tenant-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_UnexpectedStatusCode"></a> UnexpectedStatusCode

The HTTP proof endpoint returned a non-success status code.

```csharp
public const string UnexpectedStatusCode = "unexpected-status-code"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_UnsupportedVerificationMethod"></a> UnsupportedVerificationMethod

The verification method cannot be collected by the built-in HTTP proof collector.

```csharp
public const string UnsupportedVerificationMethod = "unsupported-verification-method"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionOutcomes_VerificationMethodMismatch"></a> VerificationMethodMismatch

The matching domain ownership declaration uses a different verification method.

```csharp
public const string VerificationMethodMismatch = "verification-method-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
