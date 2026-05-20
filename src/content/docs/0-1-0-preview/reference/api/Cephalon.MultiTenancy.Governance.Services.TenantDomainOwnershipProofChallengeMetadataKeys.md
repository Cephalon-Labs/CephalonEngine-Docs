---
title: Class TenantDomainOwnershipProofChallengeMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofchallengemetadatakeys
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stable metadata keys written by tenant-domain ownership proof challenge issuance.

```csharp
public static class TenantDomainOwnershipProofChallengeMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofChallengeMetadataKeys](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofchallengemetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeMetadataKeys_DnsTxtRecordName"></a> DnsTxtRecordName

Metadata key for the DNS TXT record name where the challenge should be published.

```csharp
public const string DnsTxtRecordName = "proofChallengeDnsTxtRecordName"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeMetadataKeys_HttpFilePath"></a> HttpFilePath

Metadata key for the HTTP path where the challenge should be published.

```csharp
public const string HttpFilePath = "proofChallengeHttpFilePath"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeMetadataKeys_LastProofChallengeActor"></a> LastProofChallengeActor

Metadata key for the actor that requested proof challenge issuance.

```csharp
public const string LastProofChallengeActor = "lastProofChallengeActor"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeMetadataKeys_LastProofChallengeCorrelationId"></a> LastProofChallengeCorrelationId

Metadata key for the challenge issuance correlation identifier.

```csharp
public const string LastProofChallengeCorrelationId = "lastProofChallengeCorrelationId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeMetadataKeys_LastProofChallengeExpiresAtUtc"></a> LastProofChallengeExpiresAtUtc

Metadata key for the UTC timestamp when the challenge expires.

```csharp
public const string LastProofChallengeExpiresAtUtc = "lastProofChallengeExpiresAtUtc"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeMetadataKeys_LastProofChallengeFingerprint"></a> LastProofChallengeFingerprint

Metadata key for the SHA-256 fingerprint of the issued challenge value.

```csharp
public const string LastProofChallengeFingerprint = "lastProofChallengeFingerprint"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeMetadataKeys_LastProofChallengeIssuedAtUtc"></a> LastProofChallengeIssuedAtUtc

Metadata key for the UTC timestamp when the challenge was issued.

```csharp
public const string LastProofChallengeIssuedAtUtc = "lastProofChallengeIssuedAtUtc"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeMetadataKeys_LastProofChallengeOutcome"></a> LastProofChallengeOutcome

Metadata key for the last proof challenge issuance outcome.

```csharp
public const string LastProofChallengeOutcome = "lastProofChallengeOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeMetadataKeys_LastProofChallengeSource"></a> LastProofChallengeSource

Metadata key for the source that requested proof challenge issuance.

```csharp
public const string LastProofChallengeSource = "lastProofChallengeSource"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofChallengeMetadataKeys_ProofChallengeOwnership"></a> ProofChallengeOwnership

Metadata key that identifies Cephalon as the challenge issuance owner.

```csharp
public const string ProofChallengeOwnership = "proofChallengeOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
