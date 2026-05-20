---
title: Class TenantDomainOwnershipHttpProofPublicationResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofpublicationresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of tenant-domain ownership HTTP proof publication.

```csharp
public sealed class TenantDomainOwnershipHttpProofPublicationResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipHttpProofPublicationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofpublicationresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationResult__ctor_System_String_System_String_System_String_System_Boolean_System_Boolean_System_DateTimeOffset_System_String_System_String_System_String_System_String_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipHttpProofPublicationResult\(string, string, string, bool, bool, DateTimeOffset, string?, string?, string?, string?, TenantDomainOwnershipDescriptor?, string, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership HTTP proof publication result.

```csharp
public TenantDomainOwnershipHttpProofPublicationResult(string tenantId, string domainName, string outcome, bool published, bool recorded, DateTimeOffset publishedAtUtc, string? httpFilePath, string? httpFileContent, string? httpContentType, string? proofFingerprint, TenantDomainOwnershipDescriptor? domainOwnership, string reason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was evaluated.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canonical domain name that was evaluated.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable HTTP proof publication outcome.

`published` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the HTTP proof file was materialized.

`recorded` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether publication metadata was recorded.

`publishedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp used for publication.

`httpFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The HTTP path where the proof file is served.

`httpFileContent` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The public proof-file content.

`httpContentType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The content type used when serving the proof file.

`proofFingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The SHA-256 fingerprint of the proof-file content.

`domainOwnership` [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

The resulting domain ownership descriptor when one exists.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing HTTP proof publication reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationResult_DomainName"></a> DomainName

Gets the canonical domain name that was evaluated.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationResult_DomainOwnership"></a> DomainOwnership

Gets the resulting domain ownership descriptor when one exists.

```csharp
public TenantDomainOwnershipDescriptor? DomainOwnership { get; }
```

#### Property Value

 [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationResult_HttpContentType"></a> HttpContentType

Gets the content type used when serving the proof file.

```csharp
public string? HttpContentType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationResult_HttpFileContent"></a> HttpFileContent

Gets the public proof-file content.

```csharp
public string? HttpFileContent { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationResult_HttpFilePath"></a> HttpFilePath

Gets the HTTP path where the proof file is served.

```csharp
public string? HttpFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationResult_Outcome"></a> Outcome

Gets the stable HTTP proof publication outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationResult_ProofFingerprint"></a> ProofFingerprint

Gets the SHA-256 fingerprint of the proof-file content.

```csharp
public string? ProofFingerprint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationResult_Published"></a> Published

Gets a value indicating whether the HTTP proof file was materialized.

```csharp
public bool Published { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationResult_PublishedAtUtc"></a> PublishedAtUtc

Gets the UTC timestamp used for publication.

```csharp
public DateTimeOffset PublishedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationResult_Reason"></a> Reason

Gets the operator-facing HTTP proof publication reason.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationResult_Recorded"></a> Recorded

Gets a value indicating whether publication metadata was recorded.

```csharp
public bool Recorded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationResult_TenantId"></a> TenantId

Gets the tenant identifier that was evaluated.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
