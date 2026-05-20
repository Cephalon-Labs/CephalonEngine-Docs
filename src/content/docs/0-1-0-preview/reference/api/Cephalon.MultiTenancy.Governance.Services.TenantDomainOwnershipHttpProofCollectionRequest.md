---
title: Class TenantDomainOwnershipHttpProofCollectionRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofcollectionrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes a tenant-domain ownership HTTP proof collection request.

```csharp
public sealed class TenantDomainOwnershipHttpProofCollectionRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipHttpProofCollectionRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofcollectionrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionRequest__ctor_System_String_System_String_System_String_System_Uri_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Boolean_System_Nullable_System_TimeSpan__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipHttpProofCollectionRequest\(string, string, string?, Uri?, string?, string?, DateTimeOffset?, DateTimeOffset?, string?, bool, TimeSpan?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership HTTP proof collection request.

```csharp
public TenantDomainOwnershipHttpProofCollectionRequest(string tenantId, string domainName, string? verificationMethod = null, Uri? collectionBaseUri = null, string? source = null, string? actor = null, DateTimeOffset? atUtc = null, DateTimeOffset? expiresAtUtc = null, string? correlationId = null, bool recordPublicationPlan = true, TimeSpan? timeout = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that owns the domain declaration.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The domain name whose HTTP proof should be collected.

`verificationMethod` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional verification method boundary. Only HTTP file verification can be collected.

`collectionBaseUri` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

The optional base URI used for collection. When omitted, HTTPS on the requested domain is used.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source that requested HTTP proof collection.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that requested HTTP proof collection when known.

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp used for collection. The runtime clock is used when omitted.

`expiresAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The optional UTC timestamp applied if proof evaluation verifies the declaration.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for collection and evaluation.

`recordPublicationPlan` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the publication plan should be recorded before collection.

`timeout` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?

The optional per-request HTTP collection timeout.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional HTTP proof collection metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionRequest_Actor"></a> Actor

Gets the actor that requested HTTP proof collection when known.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionRequest_AtUtc"></a> AtUtc

Gets the UTC timestamp used for collection.

```csharp
public DateTimeOffset? AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionRequest_CollectionBaseUri"></a> CollectionBaseUri

Gets the optional base URI used for collection.

```csharp
public Uri? CollectionBaseUri { get; }
```

#### Property Value

 [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for collection and evaluation.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionRequest_DomainName"></a> DomainName

Gets the canonical domain name whose HTTP proof should be collected.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionRequest_ExpiresAtUtc"></a> ExpiresAtUtc

Gets the optional UTC timestamp applied if proof evaluation verifies the declaration.

```csharp
public DateTimeOffset? ExpiresAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionRequest_Metadata"></a> Metadata

Gets optional HTTP proof collection metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionRequest_RecordPublicationPlan"></a> RecordPublicationPlan

Gets a value indicating whether the publication plan should be recorded before collection.

```csharp
public bool RecordPublicationPlan { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionRequest_Source"></a> Source

Gets the source that requested HTTP proof collection.

```csharp
public string? Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionRequest_TenantId"></a> TenantId

Gets the tenant identifier that owns the domain declaration.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionRequest_Timeout"></a> Timeout

Gets the optional per-request HTTP collection timeout.

```csharp
public TimeSpan? Timeout { get; }
```

#### Property Value

 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionRequest_VerificationMethod"></a> VerificationMethod

Gets the verification method boundary.

```csharp
public string VerificationMethod { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
