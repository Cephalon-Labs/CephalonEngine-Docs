---
title: Class TenantDomainOwnershipHttpProofPublicationDescriptor
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofpublicationdescriptor
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes one tenant-domain ownership HTTP proof file published by Cephalon governance.

```csharp
public sealed class TenantDomainOwnershipHttpProofPublicationDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipHttpProofPublicationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofpublicationdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_DateTimeOffset_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipHttpProofPublicationDescriptor\(string, string, string, string, string, string, DateTimeOffset, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership HTTP proof publication descriptor.

```csharp
public TenantDomainOwnershipHttpProofPublicationDescriptor(string tenantId, string domainName, string httpFilePath, string httpFileContent, string httpContentType, string proofFingerprint, DateTimeOffset publishedAtUtc, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that owns the domain declaration.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canonical domain name that should serve the proof file.

`httpFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The HTTP path where the proof file is served.

`httpFileContent` [string](https://learn.microsoft.com/dotnet/api/system.string)

The public proof-file content.

`httpContentType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The content type used when serving the proof file.

`proofFingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)

The SHA-256 fingerprint of the proof-file content.

`publishedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when publication was recorded.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional publication metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationDescriptor_DomainName"></a> DomainName

Gets the canonical domain name that should serve the proof file.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationDescriptor_HttpContentType"></a> HttpContentType

Gets the content type used when serving the proof file.

```csharp
public string HttpContentType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationDescriptor_HttpFileContent"></a> HttpFileContent

Gets the public proof-file content.

```csharp
public string HttpFileContent { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationDescriptor_HttpFilePath"></a> HttpFilePath

Gets the HTTP path where the proof file is served.

```csharp
public string HttpFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationDescriptor_Metadata"></a> Metadata

Gets optional publication metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationDescriptor_ProofFingerprint"></a> ProofFingerprint

Gets the SHA-256 fingerprint of the proof-file content.

```csharp
public string ProofFingerprint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationDescriptor_PublishedAtUtc"></a> PublishedAtUtc

Gets the UTC timestamp when publication was recorded.

```csharp
public DateTimeOffset PublishedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationDescriptor_TenantId"></a> TenantId

Gets the tenant identifier that owns the domain declaration.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
