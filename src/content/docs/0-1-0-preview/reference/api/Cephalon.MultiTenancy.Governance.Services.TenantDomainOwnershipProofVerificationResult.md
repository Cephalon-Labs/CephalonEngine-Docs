---
title: Class TenantDomainOwnershipProofVerificationResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofverificationresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of one tenant-domain ownership proof verification runner attempt.

```csharp
public sealed class TenantDomainOwnershipProofVerificationResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofVerificationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofverificationresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult__ctor_System_String_System_String_System_String_System_String_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_DateTimeOffset_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionResult_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionResult_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipProofVerificationResult\(string, string, string?, string, bool, bool, bool, bool, bool, bool, DateTimeOffset, TenantDomainOwnershipProofChallengeResult?, TenantDomainOwnershipProofPublicationPlanResult?, TenantDomainOwnershipHttpProofCollectionResult?, TenantDomainOwnershipDnsTxtProofCollectionResult?, TenantDomainOwnershipProofEvaluationResult?, TenantDomainOwnershipDescriptor?, string, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership proof verification runner result.

```csharp
public TenantDomainOwnershipProofVerificationResult(string tenantId, string domainName, string? verificationMethod, string outcome, bool verified, bool rejected, bool challengeIssued, bool publicationPlanned, bool proofCollected, bool proofEvaluated, DateTimeOffset ranAtUtc, TenantDomainOwnershipProofChallengeResult? challengeResult, TenantDomainOwnershipProofPublicationPlanResult? publicationPlanResult, TenantDomainOwnershipHttpProofCollectionResult? httpProofCollectionResult, TenantDomainOwnershipDnsTxtProofCollectionResult? dnsTxtProofCollectionResult, TenantDomainOwnershipProofEvaluationResult? evaluationResult, TenantDomainOwnershipDescriptor? domainOwnership, string reason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was evaluated.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canonical domain name that was evaluated.

`verificationMethod` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The verification method used by the runner.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable proof verification runner outcome.

`verified` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the run verified the declaration.

`rejected` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the run rejected the declaration.

`challengeIssued` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the run issued a proof challenge.

`publicationPlanned` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the run generated publication instructions.

`proofCollected` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the run collected proof content.

`proofEvaluated` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the run evaluated observed proof.

`ranAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the runner executed.

`challengeResult` [TenantDomainOwnershipProofChallengeResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofchallengeresult/)?

The nested proof challenge result when one ran.

`publicationPlanResult` [TenantDomainOwnershipProofPublicationPlanResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpublicationplanresult/)?

The nested publication plan result when one ran.

`httpProofCollectionResult` [TenantDomainOwnershipHttpProofCollectionResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofcollectionresult/)?

The nested HTTP proof collection result when one ran.

`dnsTxtProofCollectionResult` [TenantDomainOwnershipDnsTxtProofCollectionResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdnstxtproofcollectionresult/)?

The nested DNS TXT proof collection result when one ran.

`evaluationResult` [TenantDomainOwnershipProofEvaluationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofevaluationresult/)?

The nested proof evaluation result when one ran.

`domainOwnership` [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

The matching or resulting domain ownership descriptor when one exists.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing proof verification reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_ChallengeIssued"></a> ChallengeIssued

Gets a value indicating whether the run issued a proof challenge.

```csharp
public bool ChallengeIssued { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_ChallengeResult"></a> ChallengeResult

Gets the nested proof challenge result when one ran.

```csharp
public TenantDomainOwnershipProofChallengeResult? ChallengeResult { get; }
```

#### Property Value

 [TenantDomainOwnershipProofChallengeResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofchallengeresult/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_DnsTxtProofCollectionResult"></a> DnsTxtProofCollectionResult

Gets the nested DNS TXT proof collection result when one ran.

```csharp
public TenantDomainOwnershipDnsTxtProofCollectionResult? DnsTxtProofCollectionResult { get; }
```

#### Property Value

 [TenantDomainOwnershipDnsTxtProofCollectionResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdnstxtproofcollectionresult/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_DomainName"></a> DomainName

Gets the canonical domain name that was evaluated.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_DomainOwnership"></a> DomainOwnership

Gets the matching or resulting domain ownership descriptor when one exists.

```csharp
public TenantDomainOwnershipDescriptor? DomainOwnership { get; }
```

#### Property Value

 [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_EvaluationResult"></a> EvaluationResult

Gets the nested proof evaluation result when one ran.

```csharp
public TenantDomainOwnershipProofEvaluationResult? EvaluationResult { get; }
```

#### Property Value

 [TenantDomainOwnershipProofEvaluationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofevaluationresult/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_HttpProofCollectionResult"></a> HttpProofCollectionResult

Gets the nested HTTP proof collection result when one ran.

```csharp
public TenantDomainOwnershipHttpProofCollectionResult? HttpProofCollectionResult { get; }
```

#### Property Value

 [TenantDomainOwnershipHttpProofCollectionResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofcollectionresult/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_Outcome"></a> Outcome

Gets the stable proof verification runner outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_ProofCollected"></a> ProofCollected

Gets a value indicating whether the run collected proof content.

```csharp
public bool ProofCollected { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_ProofEvaluated"></a> ProofEvaluated

Gets a value indicating whether the run evaluated observed proof.

```csharp
public bool ProofEvaluated { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_PublicationPlanResult"></a> PublicationPlanResult

Gets the nested publication plan result when one ran.

```csharp
public TenantDomainOwnershipProofPublicationPlanResult? PublicationPlanResult { get; }
```

#### Property Value

 [TenantDomainOwnershipProofPublicationPlanResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpublicationplanresult/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_PublicationPlanned"></a> PublicationPlanned

Gets a value indicating whether the run generated publication instructions.

```csharp
public bool PublicationPlanned { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_RanAtUtc"></a> RanAtUtc

Gets the UTC timestamp when the runner executed.

```csharp
public DateTimeOffset RanAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_Reason"></a> Reason

Gets the operator-facing proof verification reason.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_Rejected"></a> Rejected

Gets a value indicating whether the run rejected the declaration.

```csharp
public bool Rejected { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_TenantId"></a> TenantId

Gets the tenant identifier that was evaluated.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_VerificationMethod"></a> VerificationMethod

Gets the verification method used by the runner.

```csharp
public string? VerificationMethod { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult_Verified"></a> Verified

Gets a value indicating whether the run verified the declaration.

```csharp
public bool Verified { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
