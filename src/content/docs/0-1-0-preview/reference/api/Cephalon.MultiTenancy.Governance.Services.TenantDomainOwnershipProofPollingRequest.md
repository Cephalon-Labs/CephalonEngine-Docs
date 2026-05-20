---
title: Class TenantDomainOwnershipProofPollingRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpollingrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes a bounded tenant-domain ownership proof polling request.

```csharp
public sealed class TenantDomainOwnershipProofPollingRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofPollingRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpollingrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest__ctor_System_Collections_Generic_IReadOnlyCollection_System_String__System_Collections_Generic_IReadOnlyCollection_System_String__System_Collections_Generic_IReadOnlyCollection_System_String__System_Uri_System_Uri_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Nullable_System_Int32__System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Nullable_System_TimeSpan__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipProofPollingRequest\(IReadOnlyCollection<string\>?, IReadOnlyCollection<string\>?, IReadOnlyCollection<string\>?, Uri?, Uri?, string?, string?, DateTimeOffset?, DateTimeOffset?, string?, int?, bool, bool, bool, bool, bool, TimeSpan?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership proof polling request.

```csharp
public TenantDomainOwnershipProofPollingRequest(IReadOnlyCollection<string>? tenantIds = null, IReadOnlyCollection<string>? domainNames = null, IReadOnlyCollection<string>? verificationMethods = null, Uri? collectionBaseUri = null, Uri? dnsTxtResolverEndpoint = null, string? source = null, string? actor = null, DateTimeOffset? atUtc = null, DateTimeOffset? expiresAtUtc = null, string? correlationId = null, int? maxItems = null, bool includeHttpFile = true, bool includeDnsTxt = true, bool includeRejected = true, bool includeMissingExpectedProof = false, bool recordPublicationPlan = false, TimeSpan? timeout = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantIds` [IReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional tenant identifiers to include. When omitted, all tenants are eligible.

`domainNames` [IReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional domain names to include. When omitted, all domains are eligible.

`verificationMethods` [IReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional verification methods to include. When omitted, HTTP file and DNS TXT declarations are eligible.

`collectionBaseUri` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

The optional base URI used by HTTP file proof collection.

`dnsTxtResolverEndpoint` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

The optional DNS-over-HTTPS resolver endpoint used by DNS TXT proof collection.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source that requested the polling pass.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that requested the polling pass when known.

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp used by the polling pass. The runtime clock is used when omitted.

`expiresAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The optional UTC timestamp applied if proof evaluation verifies a declaration.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for the polling pass.

`maxItems` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The optional maximum number of declarations to poll in this pass.

`includeHttpFile` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether HTTP file declarations are eligible.

`includeDnsTxt` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether DNS TXT declarations are eligible.

`includeRejected` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether rejected declarations can be retried.

`includeMissingExpectedProof` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether declarations without expected proof metadata should still be passed to the verifier.

`recordPublicationPlan` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether nested verification should record publication-plan metadata.

`timeout` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?

The optional per-request proof collection timeout.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional proof polling metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_Actor"></a> Actor

Gets the actor that requested the polling pass when known.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_AtUtc"></a> AtUtc

Gets the UTC timestamp used by the polling pass.

```csharp
public DateTimeOffset? AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_CollectionBaseUri"></a> CollectionBaseUri

Gets the optional base URI used by HTTP file proof collection.

```csharp
public Uri? CollectionBaseUri { get; }
```

#### Property Value

 [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for the polling pass.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_DnsTxtResolverEndpoint"></a> DnsTxtResolverEndpoint

Gets the optional DNS-over-HTTPS resolver endpoint used by DNS TXT proof collection.

```csharp
public Uri? DnsTxtResolverEndpoint { get; }
```

#### Property Value

 [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_DomainNames"></a> DomainNames

Gets optional canonical domain names to include.

```csharp
public IReadOnlyList<string> DomainNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_ExpiresAtUtc"></a> ExpiresAtUtc

Gets the optional UTC timestamp applied if proof evaluation verifies a declaration.

```csharp
public DateTimeOffset? ExpiresAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_IncludeDnsTxt"></a> IncludeDnsTxt

Gets a value indicating whether DNS TXT declarations are eligible.

```csharp
public bool IncludeDnsTxt { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_IncludeHttpFile"></a> IncludeHttpFile

Gets a value indicating whether HTTP file declarations are eligible.

```csharp
public bool IncludeHttpFile { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_IncludeMissingExpectedProof"></a> IncludeMissingExpectedProof

Gets a value indicating whether declarations without expected proof metadata should still be passed to the verifier.

```csharp
public bool IncludeMissingExpectedProof { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_IncludeRejected"></a> IncludeRejected

Gets a value indicating whether rejected declarations can be retried.

```csharp
public bool IncludeRejected { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_MaxItems"></a> MaxItems

Gets the optional maximum number of declarations to poll in this pass.

```csharp
public int? MaxItems { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_Metadata"></a> Metadata

Gets optional proof polling metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_RecordPublicationPlan"></a> RecordPublicationPlan

Gets a value indicating whether nested verification should record publication-plan metadata.

```csharp
public bool RecordPublicationPlan { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_Source"></a> Source

Gets the source that requested the polling pass.

```csharp
public string? Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_TenantIds"></a> TenantIds

Gets optional tenant identifiers to include.

```csharp
public IReadOnlyList<string> TenantIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_Timeout"></a> Timeout

Gets the optional per-request proof collection timeout.

```csharp
public TimeSpan? Timeout { get; }
```

#### Property Value

 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingRequest_VerificationMethods"></a> VerificationMethods

Gets optional verification methods to include.

```csharp
public IReadOnlyList<string> VerificationMethods { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
