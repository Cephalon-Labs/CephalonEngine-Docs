---
title: Class TenantDomainOwnershipProofEvaluationRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofevaluationrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes reported proof evidence for a tenant-domain ownership declaration.

```csharp
public sealed class TenantDomainOwnershipProofEvaluationRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofEvaluationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofevaluationrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationRequest__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipProofEvaluationRequest\(string, string, string?, string?, string?, string?, string?, DateTimeOffset?, DateTimeOffset?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership proof evaluation request.

```csharp
public TenantDomainOwnershipProofEvaluationRequest(string tenantId, string domainName, string? observedProof = null, string? verificationMethod = null, string? expectedProof = null, string? source = null, string? actor = null, DateTimeOffset? atUtc = null, DateTimeOffset? expiresAtUtc = null, string? correlationId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that owns the domain declaration.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The domain name whose proof should be evaluated.

`observedProof` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The proof value observed by the application or provider pack.

`verificationMethod` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional verification method boundary.

`expectedProof` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional expected proof value. Descriptor metadata is used when this is omitted.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source that reported the observed proof evidence.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that requested proof evaluation when known.

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp used for proof evaluation. The runtime clock is used when omitted.

`expiresAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The optional UTC timestamp when the ownership declaration expires.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for proof evaluation.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional proof evaluation metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationRequest_Actor"></a> Actor

Gets the actor that requested proof evaluation when known.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationRequest_AtUtc"></a> AtUtc

Gets the UTC timestamp used for proof evaluation.

```csharp
public DateTimeOffset? AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for proof evaluation.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationRequest_DomainName"></a> DomainName

Gets the canonical domain name whose proof should be evaluated.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationRequest_ExpectedProof"></a> ExpectedProof

Gets the optional expected proof value. Descriptor metadata is used when this is omitted.

```csharp
public string? ExpectedProof { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationRequest_ExpiresAtUtc"></a> ExpiresAtUtc

Gets the optional UTC timestamp when the ownership declaration expires.

```csharp
public DateTimeOffset? ExpiresAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationRequest_Metadata"></a> Metadata

Gets optional proof evaluation metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationRequest_ObservedProof"></a> ObservedProof

Gets the proof value observed by the application or provider pack.

```csharp
public string? ObservedProof { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationRequest_Source"></a> Source

Gets the source that reported the observed proof evidence.

```csharp
public string? Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationRequest_TenantId"></a> TenantId

Gets the tenant identifier that owns the domain declaration.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationRequest_VerificationMethod"></a> VerificationMethod

Gets the optional verification method boundary.

```csharp
public string? VerificationMethod { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
