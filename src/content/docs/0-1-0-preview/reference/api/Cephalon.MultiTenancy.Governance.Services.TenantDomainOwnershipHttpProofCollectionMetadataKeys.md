---
title: Class TenantDomainOwnershipHttpProofCollectionMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofcollectionmetadatakeys
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stable metadata keys written by tenant-domain ownership HTTP proof collection.

```csharp
public static class TenantDomainOwnershipHttpProofCollectionMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipHttpProofCollectionMetadataKeys](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofcollectionmetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionMetadataKeys_BackgroundProofPollingOwnership"></a> BackgroundProofPollingOwnership

Metadata key that keeps automatic background proof polling ownership explicit.

```csharp
public const string BackgroundProofPollingOwnership = "backgroundProofPollingOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionMetadataKeys_DnsTxtProofCollectionOwnership"></a> DnsTxtProofCollectionOwnership

Metadata key that keeps DNS TXT proof collection ownership explicit.

```csharp
public const string DnsTxtProofCollectionOwnership = "dnsTxtProofCollectionOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionMetadataKeys_ExternalProofPollingOwnership"></a> ExternalProofPollingOwnership

Metadata key that keeps on-demand external proof polling ownership explicit.

```csharp
public const string ExternalProofPollingOwnership = "externalProofPollingOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionMetadataKeys_HttpProofCollectionOwnership"></a> HttpProofCollectionOwnership

Metadata key that identifies Cephalon as the HTTP proof collection owner.

```csharp
public const string HttpProofCollectionOwnership = "httpProofCollectionOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionMetadataKeys_LastHttpProofCollectedAtUtc"></a> LastHttpProofCollectedAtUtc

Metadata key for the UTC timestamp when HTTP proof collection executed.

```csharp
public const string LastHttpProofCollectedAtUtc = "lastHttpProofCollectedAtUtc"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionMetadataKeys_LastHttpProofCollectionActor"></a> LastHttpProofCollectionActor

Metadata key for the actor that requested HTTP proof collection when known.

```csharp
public const string LastHttpProofCollectionActor = "lastHttpProofCollectionActor"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionMetadataKeys_LastHttpProofCollectionContentLength"></a> LastHttpProofCollectionContentLength

Metadata key for the collected HTTP proof response body length.

```csharp
public const string LastHttpProofCollectionContentLength = "lastHttpProofCollectionContentLength"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionMetadataKeys_LastHttpProofCollectionCorrelationId"></a> LastHttpProofCollectionCorrelationId

Metadata key for the HTTP proof collection correlation identifier.

```csharp
public const string LastHttpProofCollectionCorrelationId = "lastHttpProofCollectionCorrelationId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionMetadataKeys_LastHttpProofCollectionObservedFingerprint"></a> LastHttpProofCollectionObservedFingerprint

Metadata key for the SHA-256 fingerprint of the collected HTTP proof body.

```csharp
public const string LastHttpProofCollectionObservedFingerprint = "lastHttpProofCollectionObservedFingerprint"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionMetadataKeys_LastHttpProofCollectionOutcome"></a> LastHttpProofCollectionOutcome

Metadata key for the last HTTP proof collection outcome.

```csharp
public const string LastHttpProofCollectionOutcome = "lastHttpProofCollectionOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionMetadataKeys_LastHttpProofCollectionPublicationPlanOutcome"></a> LastHttpProofCollectionPublicationPlanOutcome

Metadata key for the nested publication-plan outcome used by collection.

```csharp
public const string LastHttpProofCollectionPublicationPlanOutcome = "lastHttpProofCollectionPublicationPlanOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionMetadataKeys_LastHttpProofCollectionSource"></a> LastHttpProofCollectionSource

Metadata key for the source that requested HTTP proof collection.

```csharp
public const string LastHttpProofCollectionSource = "lastHttpProofCollectionSource"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionMetadataKeys_LastHttpProofCollectionStatusCode"></a> LastHttpProofCollectionStatusCode

Metadata key for the HTTP status code returned by the proof endpoint.

```csharp
public const string LastHttpProofCollectionStatusCode = "lastHttpProofCollectionStatusCode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofCollectionMetadataKeys_LastHttpProofCollectionUri"></a> LastHttpProofCollectionUri

Metadata key for the URI used to collect the HTTP proof.

```csharp
public const string LastHttpProofCollectionUri = "lastHttpProofCollectionUri"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
