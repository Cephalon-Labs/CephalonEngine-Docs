---
title: Class TenantDomainOwnershipProofChallengeRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofchallengerequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes a tenant-domain ownership proof challenge issuance request.

```csharp
public sealed class TenantDomainOwnershipProofChallengeRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofChallengeRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofchallengerequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipProofChallengeRequest\(string, string, string?, string?, string?, string?, string?, DateTimeOffset?, DateTimeOffset?, string?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership proof challenge request.

```csharp
public TenantDomainOwnershipProofChallengeRequest(string tenantId, string domainName, string? verificationMethod = null, string? displayName = null, string? challengeValue = null, string? source = null, string? actor = null, DateTimeOffset? atUtc = null, DateTimeOffset? expiresAtUtc = null, string? correlationId = null, string? dnsTxtRecordName = null, string? httpFilePath = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that owns the domain declaration.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The domain name that should receive a proof challenge.

`verificationMethod` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional verification method boundary.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing domain display name.

`challengeValue` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional caller-supplied challenge value. A secure random value is generated when omitted.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source that requested challenge issuance.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that requested challenge issuance when known.

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp used for challenge issuance. The runtime clock is used when omitted.

`expiresAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The optional UTC timestamp when the challenge and ownership declaration expire.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for challenge issuance.

`dnsTxtRecordName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional DNS TXT record name where the challenge should be published.

`httpFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional HTTP path where the challenge should be published.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional proof challenge metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest_Actor"></a> Actor

Gets the actor that requested challenge issuance when known.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest_AtUtc"></a> AtUtc

Gets the UTC timestamp used for challenge issuance.

```csharp
public DateTimeOffset? AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest_ChallengeValue"></a> ChallengeValue

Gets an optional caller-supplied challenge value.

```csharp
public string? ChallengeValue { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for challenge issuance.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest_DisplayName"></a> DisplayName

Gets the optional operator-facing domain display name.

```csharp
public string? DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest_DnsTxtRecordName"></a> DnsTxtRecordName

Gets the optional DNS TXT record name where the challenge should be published.

```csharp
public string? DnsTxtRecordName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest_DomainName"></a> DomainName

Gets the canonical domain name that should receive a proof challenge.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest_ExpiresAtUtc"></a> ExpiresAtUtc

Gets the optional UTC timestamp when the challenge and ownership declaration expire.

```csharp
public DateTimeOffset? ExpiresAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest_HttpFilePath"></a> HttpFilePath

Gets the optional HTTP path where the challenge should be published.

```csharp
public string? HttpFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest_Metadata"></a> Metadata

Gets optional proof challenge metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest_Source"></a> Source

Gets the source that requested challenge issuance.

```csharp
public string? Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest_TenantId"></a> TenantId

Gets the tenant identifier that owns the domain declaration.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeRequest_VerificationMethod"></a> VerificationMethod

Gets the optional verification method boundary.

```csharp
public string? VerificationMethod { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
