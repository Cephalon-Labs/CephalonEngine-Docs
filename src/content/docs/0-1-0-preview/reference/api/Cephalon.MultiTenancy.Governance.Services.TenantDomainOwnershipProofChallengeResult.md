---
title: Class TenantDomainOwnershipProofChallengeResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofchallengeresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of tenant-domain ownership proof challenge issuance.

```csharp
public sealed class TenantDomainOwnershipProofChallengeResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofChallengeResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofchallengeresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult__ctor_System_String_System_String_System_String_System_String_System_Boolean_System_DateTimeOffset_System_String_System_String_System_String_System_String_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipProofChallengeResult\(string, string, string?, string, bool, DateTimeOffset, string?, string?, string?, string?, TenantDomainOwnershipDescriptor?, string, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership proof challenge result.

```csharp
public TenantDomainOwnershipProofChallengeResult(string tenantId, string domainName, string? verificationMethod, string outcome, bool issued, DateTimeOffset issuedAtUtc, string? challengeValue, string? challengeFingerprint, string? dnsTxtRecordName, string? httpFilePath, TenantDomainOwnershipDescriptor? domainOwnership, string reason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was evaluated.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canonical domain name that was evaluated.

`verificationMethod` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The verification method used for challenge issuance.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable challenge issuance outcome.

`issued` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether a challenge was issued and stored.

`issuedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when challenge issuance executed.

`challengeValue` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The public proof challenge value to publish.

`challengeFingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The SHA-256 fingerprint of the challenge value.

`dnsTxtRecordName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The DNS TXT record name where the challenge should be published.

`httpFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The HTTP path where the challenge should be published.

`domainOwnership` [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

The matching or resulting domain ownership descriptor when one exists.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing challenge issuance reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult_ChallengeFingerprint"></a> ChallengeFingerprint

Gets the SHA-256 fingerprint of the challenge value.

```csharp
public string? ChallengeFingerprint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult_ChallengeValue"></a> ChallengeValue

Gets the public proof challenge value to publish.

```csharp
public string? ChallengeValue { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult_DnsTxtRecordName"></a> DnsTxtRecordName

Gets the DNS TXT record name where the challenge should be published.

```csharp
public string? DnsTxtRecordName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult_DomainName"></a> DomainName

Gets the canonical domain name that was evaluated.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult_DomainOwnership"></a> DomainOwnership

Gets the matching or resulting domain ownership descriptor when one exists.

```csharp
public TenantDomainOwnershipDescriptor? DomainOwnership { get; }
```

#### Property Value

 [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult_HttpFilePath"></a> HttpFilePath

Gets the HTTP path where the challenge should be published.

```csharp
public string? HttpFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult_Issued"></a> Issued

Gets a value indicating whether a challenge was issued and stored.

```csharp
public bool Issued { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult_IssuedAtUtc"></a> IssuedAtUtc

Gets the UTC timestamp when challenge issuance executed.

```csharp
public DateTimeOffset IssuedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult_Outcome"></a> Outcome

Gets the stable challenge issuance outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult_Reason"></a> Reason

Gets the operator-facing challenge issuance reason.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult_TenantId"></a> TenantId

Gets the tenant identifier that was evaluated.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeResult_VerificationMethod"></a> VerificationMethod

Gets the verification method used for challenge issuance.

```csharp
public string? VerificationMethod { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
