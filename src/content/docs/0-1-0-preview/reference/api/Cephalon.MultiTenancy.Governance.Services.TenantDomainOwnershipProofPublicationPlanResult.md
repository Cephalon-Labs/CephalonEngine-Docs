---
title: Class TenantDomainOwnershipProofPublicationPlanResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpublicationplanresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes generated tenant-domain ownership proof publication instructions.

```csharp
public sealed class TenantDomainOwnershipProofPublicationPlanResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofPublicationPlanResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpublicationplanresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult__ctor_System_String_System_String_System_String_System_String_System_Boolean_System_Boolean_System_DateTimeOffset_System_String_System_String_System_String_System_String_System_String_System_String_System_String_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipProofPublicationPlanResult\(string, string, string?, string, bool, bool, DateTimeOffset, string?, string?, string?, string?, string?, string?, string?, TenantDomainOwnershipDescriptor?, string, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership proof publication planning result.

```csharp
public TenantDomainOwnershipProofPublicationPlanResult(string tenantId, string domainName, string? verificationMethod, string outcome, bool planned, bool recorded, DateTimeOffset plannedAtUtc, string? proofValue, string? proofFingerprint, string? dnsTxtRecordName, string? dnsTxtRecordValue, string? httpFilePath, string? httpFileContent, string? httpContentType, TenantDomainOwnershipDescriptor? domainOwnership, string reason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was evaluated.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canonical domain name that was evaluated.

`verificationMethod` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The verification method used for publication planning.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable publication planning outcome.

`planned` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether publication instructions were generated.

`recorded` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether publication plan metadata was recorded.

`plannedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when publication planning executed.

`proofValue` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The public proof value to publish.

`proofFingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The SHA-256 fingerprint of the public proof value.

`dnsTxtRecordName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The DNS TXT record name where the proof value should be published.

`dnsTxtRecordValue` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The DNS TXT record value to publish.

`httpFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The HTTP path where the proof file should be published.

`httpFileContent` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The HTTP file content to publish.

`httpContentType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The HTTP content type to use when the proof is published as a file.

`domainOwnership` [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

The matching or resulting domain ownership descriptor when one exists.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing publication planning reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_DnsTxtRecordName"></a> DnsTxtRecordName

Gets the DNS TXT record name where the proof value should be published.

```csharp
public string? DnsTxtRecordName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_DnsTxtRecordValue"></a> DnsTxtRecordValue

Gets the DNS TXT record value to publish.

```csharp
public string? DnsTxtRecordValue { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_DomainName"></a> DomainName

Gets the canonical domain name that was evaluated.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_DomainOwnership"></a> DomainOwnership

Gets the matching or resulting domain ownership descriptor when one exists.

```csharp
public TenantDomainOwnershipDescriptor? DomainOwnership { get; }
```

#### Property Value

 [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_HttpContentType"></a> HttpContentType

Gets the HTTP content type to use when the proof is published as a file.

```csharp
public string? HttpContentType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_HttpFileContent"></a> HttpFileContent

Gets the HTTP file content to publish.

```csharp
public string? HttpFileContent { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_HttpFilePath"></a> HttpFilePath

Gets the HTTP path where the proof file should be published.

```csharp
public string? HttpFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_Outcome"></a> Outcome

Gets the stable publication planning outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_Planned"></a> Planned

Gets a value indicating whether publication instructions were generated.

```csharp
public bool Planned { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_PlannedAtUtc"></a> PlannedAtUtc

Gets the UTC timestamp when publication planning executed.

```csharp
public DateTimeOffset PlannedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_ProofFingerprint"></a> ProofFingerprint

Gets the SHA-256 fingerprint of the public proof value.

```csharp
public string? ProofFingerprint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_ProofValue"></a> ProofValue

Gets the public proof value to publish.

```csharp
public string? ProofValue { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_Reason"></a> Reason

Gets the operator-facing publication planning reason.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_Recorded"></a> Recorded

Gets a value indicating whether publication plan metadata was recorded.

```csharp
public bool Recorded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_TenantId"></a> TenantId

Gets the tenant identifier that was evaluated.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanResult_VerificationMethod"></a> VerificationMethod

Gets the verification method used for publication planning.

```csharp
public string? VerificationMethod { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
