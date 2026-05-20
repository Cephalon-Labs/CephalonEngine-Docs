---
title: Class TenantDomainOwnershipDnsTxtProofCollectionOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdnstxtproofcollectionoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stable tenant-domain ownership DNS TXT proof collection outcome labels.

```csharp
public static class TenantDomainOwnershipDnsTxtProofCollectionOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipDnsTxtProofCollectionOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdnstxtproofcollectionoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_Collected"></a> Collected

DNS TXT proof content was collected and proof evaluation reached a terminal workflow outcome.

```csharp
public const string Collected = "collected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_Disabled"></a> Disabled

DNS TXT proof collection is disabled by governance options.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_EmptyResponse"></a> EmptyResponse

The DNS TXT proof resolver returned an empty response body.

```csharp
public const string EmptyResponse = "empty-response"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_EvaluationFailed"></a> EvaluationFailed

DNS TXT content was collected, but proof evaluation did not apply a terminal workflow outcome.

```csharp
public const string EvaluationFailed = "evaluation-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_InvalidResolverUri"></a> InvalidResolverUri

The resolved DNS TXT proof resolver URI is invalid or unsafe.

```csharp
public const string InvalidResolverUri = "invalid-resolver-uri"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_InvalidResponse"></a> InvalidResponse

The DNS TXT proof resolver response could not be parsed as a DNS JSON response.

```csharp
public const string InvalidResponse = "invalid-response"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_MissingExpectedProof"></a> MissingExpectedProof

Expected proof metadata is missing from the tenant-domain ownership declaration.

```csharp
public const string MissingExpectedProof = "missing-expected-proof"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_MissingPublicationPlan"></a> MissingPublicationPlan

Publication planning did not provide a DNS TXT record name and expected proof value.

```csharp
public const string MissingPublicationPlan = "missing-publication-plan"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_NoMatchingTxtRecord"></a> NoMatchingTxtRecord

DNS TXT answers were returned, but none matched the expected proof value.

```csharp
public const string NoMatchingTxtRecord = "no-matching-txt-record"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_NoTxtRecords"></a> NoTxtRecords

No DNS TXT answer was returned for the planned proof record.

```csharp
public const string NoTxtRecords = "no-txt-records"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_NotFound"></a> NotFound

No tenant-domain ownership declaration matched the supplied tenant and domain.

```csharp
public const string NotFound = "not-found"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_RequestFailed"></a> RequestFailed

The DNS TXT proof resolver could not be reached or timed out.

```csharp
public const string RequestFailed = "request-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_ResolverNotConfigured"></a> ResolverNotConfigured

DNS TXT proof collection has no configured resolver endpoint.

```csharp
public const string ResolverNotConfigured = "resolver-not-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_ResponseTooLarge"></a> ResponseTooLarge

The DNS TXT proof resolver response body exceeded the configured collection size limit.

```csharp
public const string ResponseTooLarge = "response-too-large"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_StoreFailed"></a> StoreFailed

Publication-plan metadata could not be recorded before collection.

```csharp
public const string StoreFailed = "store-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_TenantMismatch"></a> TenantMismatch

A declaration for the supplied domain belongs to a different tenant.

```csharp
public const string TenantMismatch = "tenant-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_UnexpectedStatusCode"></a> UnexpectedStatusCode

The DNS TXT proof resolver returned a non-success status code.

```csharp
public const string UnexpectedStatusCode = "unexpected-status-code"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_UnsupportedVerificationMethod"></a> UnsupportedVerificationMethod

The verification method cannot be collected by the built-in DNS TXT proof collector.

```csharp
public const string UnsupportedVerificationMethod = "unsupported-verification-method"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionOutcomes_VerificationMethodMismatch"></a> VerificationMethodMismatch

The matching domain ownership declaration uses a different verification method.

```csharp
public const string VerificationMethodMismatch = "verification-method-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
