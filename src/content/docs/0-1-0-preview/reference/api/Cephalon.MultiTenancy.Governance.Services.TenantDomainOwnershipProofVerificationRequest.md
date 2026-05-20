---
title: Class TenantDomainOwnershipProofVerificationRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofverificationrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes a tenant-domain ownership proof verification runner request.

```csharp
public sealed class TenantDomainOwnershipProofVerificationRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofVerificationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofverificationrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest__ctor_System_String_System_String_System_String_System_String_System_Uri_System_Uri_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Nullable_System_TimeSpan__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipProofVerificationRequest\(string, string, string?, string?, Uri?, Uri?, string?, string?, DateTimeOffset?, DateTimeOffset?, string?, bool, bool, bool, bool, TimeSpan?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership proof verification runner request.

```csharp
public TenantDomainOwnershipProofVerificationRequest(string tenantId, string domainName, string? verificationMethod = null, string? observedProof = null, Uri? collectionBaseUri = null, Uri? dnsTxtResolverEndpoint = null, string? source = null, string? actor = null, DateTimeOffset? atUtc = null, DateTimeOffset? expiresAtUtc = null, string? correlationId = null, bool issueChallengeWhenMissingExpectedProof = true, bool collectHttpProof = true, bool collectDnsTxtProof = true, bool recordPublicationPlan = true, TimeSpan? timeout = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that owns the domain declaration.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The domain name being verified.

`verificationMethod` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional verification method boundary. When omitted, the existing declaration method or HTTP file is used.

`observedProof` [string](https://learn.microsoft.com/dotnet/api/system.string)?

Optional observed proof supplied by an application or provider pack.

`collectionBaseUri` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

The optional base URI used by HTTP file proof collection.

`dnsTxtResolverEndpoint` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

The optional DNS-over-HTTPS resolver endpoint used by DNS TXT proof collection.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source that requested the verification run.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that requested the verification run when known.

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp used by the run. The runtime clock is used when omitted.

`expiresAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The optional UTC timestamp applied if proof evaluation verifies the declaration.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for the run.

`issueChallengeWhenMissingExpectedProof` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the runner should issue a challenge when expected proof metadata is missing.

`collectHttpProof` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the runner should use the built-in HTTP proof collector for HTTP file declarations.

`collectDnsTxtProof` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the runner should use the built-in DNS TXT proof collector for DNS TXT declarations.

`recordPublicationPlan` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether publication planning metadata should be recorded.

`timeout` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?

The optional per-request proof collection timeout.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional proof verification runner metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_Actor"></a> Actor

Gets the actor that requested the verification run when known.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_AtUtc"></a> AtUtc

Gets the UTC timestamp used by the run.

```csharp
public DateTimeOffset? AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_CollectDnsTxtProof"></a> CollectDnsTxtProof

Gets a value indicating whether the runner should use the built-in DNS TXT proof collector for DNS TXT declarations.

```csharp
public bool CollectDnsTxtProof { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_CollectHttpProof"></a> CollectHttpProof

Gets a value indicating whether the runner should use the built-in HTTP proof collector for HTTP file declarations.

```csharp
public bool CollectHttpProof { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_CollectionBaseUri"></a> CollectionBaseUri

Gets the optional base URI used by HTTP file proof collection.

```csharp
public Uri? CollectionBaseUri { get; }
```

#### Property Value

 [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for the run.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_DnsTxtResolverEndpoint"></a> DnsTxtResolverEndpoint

Gets the optional DNS-over-HTTPS resolver endpoint used by DNS TXT proof collection.

```csharp
public Uri? DnsTxtResolverEndpoint { get; }
```

#### Property Value

 [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_DomainName"></a> DomainName

Gets the canonical domain name being verified.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_ExpiresAtUtc"></a> ExpiresAtUtc

Gets the optional UTC timestamp applied if proof evaluation verifies the declaration.

```csharp
public DateTimeOffset? ExpiresAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_IssueChallengeWhenMissingExpectedProof"></a> IssueChallengeWhenMissingExpectedProof

Gets a value indicating whether the runner should issue a challenge when expected proof metadata is missing.

```csharp
public bool IssueChallengeWhenMissingExpectedProof { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_Metadata"></a> Metadata

Gets optional proof verification runner metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_ObservedProof"></a> ObservedProof

Gets optional observed proof supplied by an application or provider pack.

```csharp
public string? ObservedProof { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_RecordPublicationPlan"></a> RecordPublicationPlan

Gets a value indicating whether publication planning metadata should be recorded.

```csharp
public bool RecordPublicationPlan { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_Source"></a> Source

Gets the source that requested the verification run.

```csharp
public string? Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_TenantId"></a> TenantId

Gets the tenant identifier that owns the domain declaration.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_Timeout"></a> Timeout

Gets the optional per-request HTTP collection timeout.

```csharp
public TimeSpan? Timeout { get; }
```

#### Property Value

 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationRequest_VerificationMethod"></a> VerificationMethod

Gets the optional verification method boundary.

```csharp
public string? VerificationMethod { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
