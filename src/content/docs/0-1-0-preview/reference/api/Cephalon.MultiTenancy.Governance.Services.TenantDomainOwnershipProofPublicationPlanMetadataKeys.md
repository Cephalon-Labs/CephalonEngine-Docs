---
title: Class TenantDomainOwnershipProofPublicationPlanMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpublicationplanmetadatakeys
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stable metadata keys written by tenant-domain ownership proof publication planning.

```csharp
public static class TenantDomainOwnershipProofPublicationPlanMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofPublicationPlanMetadataKeys](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpublicationplanmetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanMetadataKeys_DnsTxtRecordName"></a> DnsTxtRecordName

Metadata key for the DNS TXT record name where the proof should be published.

```csharp
public const string DnsTxtRecordName = "proofPublicationDnsTxtRecordName"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanMetadataKeys_DnsTxtRecordValueFingerprint"></a> DnsTxtRecordValueFingerprint

Metadata key for the DNS TXT record value fingerprint.

```csharp
public const string DnsTxtRecordValueFingerprint = "proofPublicationDnsTxtRecordValueFingerprint"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanMetadataKeys_ExternalPublicationOwnership"></a> ExternalPublicationOwnership

Metadata key that keeps external publication ownership explicit.

```csharp
public const string ExternalPublicationOwnership = "proofExternalPublicationOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanMetadataKeys_HttpContentType"></a> HttpContentType

Metadata key for the HTTP content type used by the publication plan.

```csharp
public const string HttpContentType = "proofPublicationHttpContentType"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanMetadataKeys_HttpFileContentFingerprint"></a> HttpFileContentFingerprint

Metadata key for the HTTP file content fingerprint.

```csharp
public const string HttpFileContentFingerprint = "proofPublicationHttpFileContentFingerprint"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanMetadataKeys_HttpFilePath"></a> HttpFilePath

Metadata key for the HTTP path where the proof file should be published.

```csharp
public const string HttpFilePath = "proofPublicationHttpFilePath"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanMetadataKeys_LastProofPublicationPlanActor"></a> LastProofPublicationPlanActor

Metadata key for the actor that requested publication planning.

```csharp
public const string LastProofPublicationPlanActor = "lastProofPublicationPlanActor"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanMetadataKeys_LastProofPublicationPlanCorrelationId"></a> LastProofPublicationPlanCorrelationId

Metadata key for the publication planning correlation identifier.

```csharp
public const string LastProofPublicationPlanCorrelationId = "lastProofPublicationPlanCorrelationId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanMetadataKeys_LastProofPublicationPlanFingerprint"></a> LastProofPublicationPlanFingerprint

Metadata key for the SHA-256 fingerprint of the planned proof value.

```csharp
public const string LastProofPublicationPlanFingerprint = "lastProofPublicationPlanFingerprint"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanMetadataKeys_LastProofPublicationPlanOutcome"></a> LastProofPublicationPlanOutcome

Metadata key for the last publication planning outcome.

```csharp
public const string LastProofPublicationPlanOutcome = "lastProofPublicationPlanOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanMetadataKeys_LastProofPublicationPlanSource"></a> LastProofPublicationPlanSource

Metadata key for the source that requested publication planning.

```csharp
public const string LastProofPublicationPlanSource = "lastProofPublicationPlanSource"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanMetadataKeys_LastProofPublicationPlannedAtUtc"></a> LastProofPublicationPlannedAtUtc

Metadata key for the UTC timestamp when publication planning executed.

```csharp
public const string LastProofPublicationPlannedAtUtc = "lastProofPublicationPlannedAtUtc"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPublicationPlanMetadataKeys_ProofPublicationPlanningOwnership"></a> ProofPublicationPlanningOwnership

Metadata key that identifies Cephalon as the publication planning owner.

```csharp
public const string ProofPublicationPlanningOwnership = "proofPublicationPlanningOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
