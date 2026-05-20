---
title: Class TenantDomainOwnershipHttpProofCollectionResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofcollectionresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of one tenant-domain ownership HTTP proof collection attempt.

```csharp
public sealed class TenantDomainOwnershipHttpProofCollectionResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipHttpProofCollectionResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofcollectionresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult__ctor_System_String_System_String_System_String_System_String_System_Boolean_System_Boolean_System_DateTimeOffset_System_Uri_System_Nullable_System_Int32__System_Nullable_System_Int64__System_String_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipHttpProofCollectionResult\(string, string, string?, string, bool, bool, DateTimeOffset, Uri?, int?, long?, string?, TenantDomainOwnershipProofPublicationPlanResult?, TenantDomainOwnershipProofEvaluationResult?, TenantDomainOwnershipDescriptor?, string, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership HTTP proof collection result.

```csharp
public TenantDomainOwnershipHttpProofCollectionResult(string tenantId, string domainName, string? verificationMethod, string outcome, bool collected, bool evaluated, DateTimeOffset collectedAtUtc, Uri? collectionUri, int? statusCode, long? contentLength, string? observedProofFingerprint, TenantDomainOwnershipProofPublicationPlanResult? publicationPlanResult, TenantDomainOwnershipProofEvaluationResult? evaluationResult, TenantDomainOwnershipDescriptor? domainOwnership, string reason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was evaluated.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canonical domain name that was evaluated.

`verificationMethod` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The verification method used for collection.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable HTTP proof collection outcome.

`collected` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether HTTP proof content was collected.

`evaluated` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether proof evaluation reached a terminal workflow outcome.

`collectedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when collection executed.

`collectionUri` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

The URI used to collect the HTTP proof.

`statusCode` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The HTTP status code returned by the proof endpoint.

`contentLength` [long](https://learn.microsoft.com/dotnet/api/system.int64)?

The collected HTTP proof response body length.

`observedProofFingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The SHA-256 fingerprint of the collected proof body.

`publicationPlanResult` [TenantDomainOwnershipProofPublicationPlanResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpublicationplanresult/)?

The publication-plan result used by collection.

`evaluationResult` [TenantDomainOwnershipProofEvaluationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofevaluationresult/)?

The proof-evaluation result produced after collection.

`domainOwnership` [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

The matching or resulting domain ownership descriptor when one exists.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing HTTP proof collection reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_Collected"></a> Collected

Gets a value indicating whether HTTP proof content was collected.

```csharp
public bool Collected { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_CollectedAtUtc"></a> CollectedAtUtc

Gets the UTC timestamp when collection executed.

```csharp
public DateTimeOffset CollectedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_CollectionUri"></a> CollectionUri

Gets the URI used to collect the HTTP proof.

```csharp
public Uri? CollectionUri { get; }
```

#### Property Value

 [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_ContentLength"></a> ContentLength

Gets the collected HTTP proof response body length.

```csharp
public long? ContentLength { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_DomainName"></a> DomainName

Gets the canonical domain name that was evaluated.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_DomainOwnership"></a> DomainOwnership

Gets the matching or resulting domain ownership descriptor when one exists.

```csharp
public TenantDomainOwnershipDescriptor? DomainOwnership { get; }
```

#### Property Value

 [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_Evaluated"></a> Evaluated

Gets a value indicating whether proof evaluation reached a terminal workflow outcome.

```csharp
public bool Evaluated { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_EvaluationResult"></a> EvaluationResult

Gets the proof-evaluation result produced after collection.

```csharp
public TenantDomainOwnershipProofEvaluationResult? EvaluationResult { get; }
```

#### Property Value

 [TenantDomainOwnershipProofEvaluationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofevaluationresult/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_ObservedProofFingerprint"></a> ObservedProofFingerprint

Gets the SHA-256 fingerprint of the collected proof body.

```csharp
public string? ObservedProofFingerprint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_Outcome"></a> Outcome

Gets the stable HTTP proof collection outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_PublicationPlanResult"></a> PublicationPlanResult

Gets the publication-plan result used by collection.

```csharp
public TenantDomainOwnershipProofPublicationPlanResult? PublicationPlanResult { get; }
```

#### Property Value

 [TenantDomainOwnershipProofPublicationPlanResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpublicationplanresult/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_Reason"></a> Reason

Gets the operator-facing HTTP proof collection reason.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_StatusCode"></a> StatusCode

Gets the HTTP status code returned by the proof endpoint.

```csharp
public int? StatusCode { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_TenantId"></a> TenantId

Gets the tenant identifier that was evaluated.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_VerificationMethod"></a> VerificationMethod

Gets the verification method used for collection.

```csharp
public string? VerificationMethod { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
