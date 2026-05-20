---
title: Class TenantDomainOwnershipHttpProofPublicationMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofpublicationmetadatakeys
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stable metadata keys written by tenant-domain ownership HTTP proof publication.

```csharp
public static class TenantDomainOwnershipHttpProofPublicationMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipHttpProofPublicationMetadataKeys](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofpublicationmetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationMetadataKeys_HttpProofPublicationContentFingerprint"></a> HttpProofPublicationContentFingerprint

Metadata key for the SHA-256 fingerprint of the published proof-file content.

```csharp
public const string HttpProofPublicationContentFingerprint = "httpProofPublicationContentFingerprint"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationMetadataKeys_HttpProofPublicationContentType"></a> HttpProofPublicationContentType

Metadata key for the HTTP content type used by the published proof file.

```csharp
public const string HttpProofPublicationContentType = "httpProofPublicationContentType"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationMetadataKeys_HttpProofPublicationOwnership"></a> HttpProofPublicationOwnership

Metadata key that identifies Cephalon as the HTTP proof publication owner.

```csharp
public const string HttpProofPublicationOwnership = "httpProofPublicationOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationMetadataKeys_HttpProofPublicationPath"></a> HttpProofPublicationPath

Metadata key for the HTTP path where the proof file is published.

```csharp
public const string HttpProofPublicationPath = "httpProofPublicationPath"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationMetadataKeys_HttpProofPublicationServedBy"></a> HttpProofPublicationServedBy

Metadata key that identifies the component responsible for serving the proof file.

```csharp
public const string HttpProofPublicationServedBy = "httpProofPublicationServedBy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationMetadataKeys_LastHttpProofPublicationActor"></a> LastHttpProofPublicationActor

Metadata key for the actor that requested HTTP proof publication.

```csharp
public const string LastHttpProofPublicationActor = "lastHttpProofPublicationActor"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationMetadataKeys_LastHttpProofPublicationCorrelationId"></a> LastHttpProofPublicationCorrelationId

Metadata key for the HTTP proof publication correlation identifier.

```csharp
public const string LastHttpProofPublicationCorrelationId = "lastHttpProofPublicationCorrelationId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationMetadataKeys_LastHttpProofPublicationOutcome"></a> LastHttpProofPublicationOutcome

Metadata key for the last HTTP proof publication outcome.

```csharp
public const string LastHttpProofPublicationOutcome = "lastHttpProofPublicationOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationMetadataKeys_LastHttpProofPublicationSource"></a> LastHttpProofPublicationSource

Metadata key for the source that requested HTTP proof publication.

```csharp
public const string LastHttpProofPublicationSource = "lastHttpProofPublicationSource"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationMetadataKeys_LastHttpProofPublishedAtUtc"></a> LastHttpProofPublishedAtUtc

Metadata key for the UTC timestamp when HTTP proof publication was recorded.

```csharp
public const string LastHttpProofPublishedAtUtc = "lastHttpProofPublishedAtUtc"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
