---
title: Class TenantDomainOwnershipDnsTxtProofCollectionResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdnstxtproofcollectionresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of one tenant-domain ownership DNS TXT proof collection attempt.

```csharp
public sealed class TenantDomainOwnershipDnsTxtProofCollectionResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipDnsTxtProofCollectionResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdnstxtproofcollectionresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult__ctor_System_String_System_String_System_String_System_String_System_Boolean_System_Boolean_System_DateTimeOffset_System_Uri_System_String_System_Nullable_System_Int32__System_Nullable_System_Int64__System_Int32_System_String_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipDnsTxtProofCollectionResult\(string, string, string?, string, bool, bool, DateTimeOffset, Uri?, string?, int?, long?, int, string?, TenantDomainOwnershipProofPublicationPlanResult?, TenantDomainOwnershipProofEvaluationResult?, TenantDomainOwnershipDescriptor?, string, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership DNS TXT proof collection result.

```csharp
public TenantDomainOwnershipDnsTxtProofCollectionResult(string tenantId, string domainName, string? verificationMethod, string outcome, bool collected, bool evaluated, DateTimeOffset collectedAtUtc, Uri? resolverUri, string? dnsTxtRecordName, int? statusCode, long? contentLength, int observedTxtRecordCount, string? observedProofFingerprint, TenantDomainOwnershipProofPublicationPlanResult? publicationPlanResult, TenantDomainOwnershipProofEvaluationResult? evaluationResult, TenantDomainOwnershipDescriptor? domainOwnership, string reason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was evaluated.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canonical domain name that was evaluated.

`verificationMethod` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The verification method used for collection.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable DNS TXT proof collection outcome.

`collected` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether DNS TXT proof content was collected.

`evaluated` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether proof evaluation reached a terminal workflow outcome.

`collectedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when collection executed.

`resolverUri` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

The resolver URI used to collect the DNS TXT proof.

`dnsTxtRecordName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The DNS TXT record name queried during collection.

`statusCode` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The HTTP status code returned by the DNS TXT resolver.

`contentLength` [long](https://learn.microsoft.com/dotnet/api/system.int64)?

The collected DNS TXT resolver response body length.

`observedTxtRecordCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of TXT answers observed by collection.

`observedProofFingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The SHA-256 fingerprint of the matching collected TXT proof.

`publicationPlanResult` [TenantDomainOwnershipProofPublicationPlanResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpublicationplanresult/)?

The publication-plan result used by collection.

`evaluationResult` [TenantDomainOwnershipProofEvaluationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofevaluationresult/)?

The proof-evaluation result produced after collection.

`domainOwnership` [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

The matching or resulting domain ownership descriptor when one exists.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing DNS TXT proof collection reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_Collected"></a> Collected

Gets a value indicating whether DNS TXT proof content was collected.

```csharp
public bool Collected { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_CollectedAtUtc"></a> CollectedAtUtc

Gets the UTC timestamp when collection executed.

```csharp
public DateTimeOffset CollectedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_ContentLength"></a> ContentLength

Gets the collected DNS TXT resolver response body length.

```csharp
public long? ContentLength { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_DnsTxtRecordName"></a> DnsTxtRecordName

Gets the DNS TXT record name queried during collection.

```csharp
public string? DnsTxtRecordName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_DomainName"></a> DomainName

Gets the canonical domain name that was evaluated.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_DomainOwnership"></a> DomainOwnership

Gets the matching or resulting domain ownership descriptor when one exists.

```csharp
public TenantDomainOwnershipDescriptor? DomainOwnership { get; }
```

#### Property Value

 [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_Evaluated"></a> Evaluated

Gets a value indicating whether proof evaluation reached a terminal workflow outcome.

```csharp
public bool Evaluated { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_EvaluationResult"></a> EvaluationResult

Gets the proof-evaluation result produced after collection.

```csharp
public TenantDomainOwnershipProofEvaluationResult? EvaluationResult { get; }
```

#### Property Value

 [TenantDomainOwnershipProofEvaluationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofevaluationresult/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_ObservedProofFingerprint"></a> ObservedProofFingerprint

Gets the SHA-256 fingerprint of the matching collected TXT proof.

```csharp
public string? ObservedProofFingerprint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_ObservedTxtRecordCount"></a> ObservedTxtRecordCount

Gets the number of TXT answers observed by collection.

```csharp
public int ObservedTxtRecordCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_Outcome"></a> Outcome

Gets the stable DNS TXT proof collection outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_PublicationPlanResult"></a> PublicationPlanResult

Gets the publication-plan result used by collection.

```csharp
public TenantDomainOwnershipProofPublicationPlanResult? PublicationPlanResult { get; }
```

#### Property Value

 [TenantDomainOwnershipProofPublicationPlanResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpublicationplanresult/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_Reason"></a> Reason

Gets the operator-facing DNS TXT proof collection reason.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_ResolverUri"></a> ResolverUri

Gets the resolver URI used to collect the DNS TXT proof.

```csharp
public Uri? ResolverUri { get; }
```

#### Property Value

 [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_StatusCode"></a> StatusCode

Gets the HTTP status code returned by the DNS TXT resolver.

```csharp
public int? StatusCode { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_TenantId"></a> TenantId

Gets the tenant identifier that was evaluated.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_VerificationMethod"></a> VerificationMethod

Gets the verification method used for collection.

```csharp
public string? VerificationMethod { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
