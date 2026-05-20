---
title: Class TenantDomainOwnershipHttpProofPublicationRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofpublicationrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes a tenant-domain ownership HTTP proof publication request.

```csharp
public sealed class TenantDomainOwnershipHttpProofPublicationRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipHttpProofPublicationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofpublicationrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationRequest__ctor_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_String_System_Boolean_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipHttpProofPublicationRequest\(string, string, string?, string?, DateTimeOffset?, string?, bool, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership HTTP proof publication request.

```csharp
public TenantDomainOwnershipHttpProofPublicationRequest(string tenantId, string domainName, string? source = null, string? actor = null, DateTimeOffset? atUtc = null, string? correlationId = null, bool recordPublication = true, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that owns the domain declaration.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The domain name that should publish the HTTP proof file.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source that requested HTTP proof publication.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that requested HTTP proof publication when known.

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp used for publication. The runtime clock is used when omitted.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for HTTP proof publication.

`recordPublication` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether publication metadata should be recorded.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional HTTP proof publication metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationRequest_Actor"></a> Actor

Gets the actor that requested HTTP proof publication when known.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationRequest_AtUtc"></a> AtUtc

Gets the UTC timestamp used for publication.

```csharp
public DateTimeOffset? AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for HTTP proof publication.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationRequest_DomainName"></a> DomainName

Gets the canonical domain name that should publish the HTTP proof file.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationRequest_Metadata"></a> Metadata

Gets optional HTTP proof publication metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationRequest_RecordPublication"></a> RecordPublication

Gets a value indicating whether publication metadata should be recorded.

```csharp
public bool RecordPublication { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationRequest_Source"></a> Source

Gets the source that requested HTTP proof publication.

```csharp
public string? Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationRequest_TenantId"></a> TenantId

Gets the tenant identifier that owns the domain declaration.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
