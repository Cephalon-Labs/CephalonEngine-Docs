---
title: Class TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdnstxtproofcollectionmetadatakeys
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stable metadata keys written by tenant-domain ownership DNS TXT proof collection.

```csharp
public static class TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdnstxtproofcollectionmetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_BackgroundProofPollingOwnership"></a> BackgroundProofPollingOwnership

Metadata key that keeps automatic background proof polling ownership explicit.

```csharp
public const string BackgroundProofPollingOwnership = "backgroundProofPollingOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_DnsTxtProofCollectionOwnership"></a> DnsTxtProofCollectionOwnership

Metadata key that identifies Cephalon as the DNS TXT proof collection owner when a resolver endpoint is configured.

```csharp
public const string DnsTxtProofCollectionOwnership = "dnsTxtProofCollectionOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_ExternalProofPollingOwnership"></a> ExternalProofPollingOwnership

Metadata key that keeps on-demand external proof polling ownership explicit.

```csharp
public const string ExternalProofPollingOwnership = "externalProofPollingOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_HttpProofCollectionOwnership"></a> HttpProofCollectionOwnership

Metadata key for HTTP proof collection ownership.

```csharp
public const string HttpProofCollectionOwnership = "httpProofCollectionOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_LastDnsTxtProofCollectedAtUtc"></a> LastDnsTxtProofCollectedAtUtc

Metadata key for the UTC timestamp when DNS TXT proof collection executed.

```csharp
public const string LastDnsTxtProofCollectedAtUtc = "lastDnsTxtProofCollectedAtUtc"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_LastDnsTxtProofCollectionActor"></a> LastDnsTxtProofCollectionActor

Metadata key for the actor that requested DNS TXT proof collection when known.

```csharp
public const string LastDnsTxtProofCollectionActor = "lastDnsTxtProofCollectionActor"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_LastDnsTxtProofCollectionContentLength"></a> LastDnsTxtProofCollectionContentLength

Metadata key for the DNS TXT resolver response body length.

```csharp
public const string LastDnsTxtProofCollectionContentLength = "lastDnsTxtProofCollectionContentLength"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_LastDnsTxtProofCollectionCorrelationId"></a> LastDnsTxtProofCollectionCorrelationId

Metadata key for the DNS TXT proof collection correlation identifier.

```csharp
public const string LastDnsTxtProofCollectionCorrelationId = "lastDnsTxtProofCollectionCorrelationId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_LastDnsTxtProofCollectionObservedFingerprint"></a> LastDnsTxtProofCollectionObservedFingerprint

Metadata key for the SHA-256 fingerprint of the matching collected DNS TXT proof.

```csharp
public const string LastDnsTxtProofCollectionObservedFingerprint = "lastDnsTxtProofCollectionObservedFingerprint"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_LastDnsTxtProofCollectionObservedTxtRecordCount"></a> LastDnsTxtProofCollectionObservedTxtRecordCount

Metadata key for the number of TXT answers observed by collection.

```csharp
public const string LastDnsTxtProofCollectionObservedTxtRecordCount = "lastDnsTxtProofCollectionObservedTxtRecordCount"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_LastDnsTxtProofCollectionOutcome"></a> LastDnsTxtProofCollectionOutcome

Metadata key for the last DNS TXT proof collection outcome.

```csharp
public const string LastDnsTxtProofCollectionOutcome = "lastDnsTxtProofCollectionOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_LastDnsTxtProofCollectionPublicationPlanOutcome"></a> LastDnsTxtProofCollectionPublicationPlanOutcome

Metadata key for the nested publication-plan outcome used by collection.

```csharp
public const string LastDnsTxtProofCollectionPublicationPlanOutcome = "lastDnsTxtProofCollectionPublicationPlanOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_LastDnsTxtProofCollectionRecordName"></a> LastDnsTxtProofCollectionRecordName

Metadata key for the DNS TXT record name queried during collection.

```csharp
public const string LastDnsTxtProofCollectionRecordName = "lastDnsTxtProofCollectionRecordName"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_LastDnsTxtProofCollectionResolverUri"></a> LastDnsTxtProofCollectionResolverUri

Metadata key for the resolver URI used to collect the DNS TXT proof.

```csharp
public const string LastDnsTxtProofCollectionResolverUri = "lastDnsTxtProofCollectionResolverUri"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_LastDnsTxtProofCollectionSource"></a> LastDnsTxtProofCollectionSource

Metadata key for the source that requested DNS TXT proof collection.

```csharp
public const string LastDnsTxtProofCollectionSource = "lastDnsTxtProofCollectionSource"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDnsTxtProofCollectionMetadataKeys_LastDnsTxtProofCollectionStatusCode"></a> LastDnsTxtProofCollectionStatusCode

Metadata key for the HTTP status code returned by the DNS TXT resolver.

```csharp
public const string LastDnsTxtProofCollectionStatusCode = "lastDnsTxtProofCollectionStatusCode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
