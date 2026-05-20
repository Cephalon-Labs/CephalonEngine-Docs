---
title: Class TenantDomainOwnershipProofVerificationMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofverificationmetadatakeys
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stable metadata keys returned by tenant-domain ownership proof verification runs.

```csharp
public static class TenantDomainOwnershipProofVerificationMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofVerificationMetadataKeys](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofverificationmetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_BackgroundProofPollingOwnership"></a> BackgroundProofPollingOwnership

Metadata key for automatic background proof polling ownership.

```csharp
public const string BackgroundProofPollingOwnership = "backgroundProofPollingOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_DnsTxtProofCollectionOwnership"></a> DnsTxtProofCollectionOwnership

Metadata key for DNS TXT proof collection ownership.

```csharp
public const string DnsTxtProofCollectionOwnership = "dnsTxtProofCollectionOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_ExternalProofPollingOwnership"></a> ExternalProofPollingOwnership

Metadata key for on-demand external proof polling ownership.

```csharp
public const string ExternalProofPollingOwnership = "externalProofPollingOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_HttpProofCollectionOwnership"></a> HttpProofCollectionOwnership

Metadata key for HTTP proof collection ownership.

```csharp
public const string HttpProofCollectionOwnership = "httpProofCollectionOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_LastProofVerificationActor"></a> LastProofVerificationActor

Metadata key for the actor that requested the latest proof verification run.

```csharp
public const string LastProofVerificationActor = "lastProofVerificationActor"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_LastProofVerificationChallengeOutcome"></a> LastProofVerificationChallengeOutcome

Metadata key for the challenge issuance outcome observed by the latest proof verification run.

```csharp
public const string LastProofVerificationChallengeOutcome = "lastProofVerificationChallengeOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_LastProofVerificationCorrelationId"></a> LastProofVerificationCorrelationId

Metadata key for the correlation identifier attached to the latest proof verification run.

```csharp
public const string LastProofVerificationCorrelationId = "lastProofVerificationCorrelationId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_LastProofVerificationDnsTxtCollectionOutcome"></a> LastProofVerificationDnsTxtCollectionOutcome

Metadata key for the DNS TXT proof collection outcome observed by the latest proof verification run.

```csharp
public const string LastProofVerificationDnsTxtCollectionOutcome = "lastProofVerificationDnsTxtCollectionOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_LastProofVerificationEvaluationOutcome"></a> LastProofVerificationEvaluationOutcome

Metadata key for the proof evaluation outcome observed by the latest proof verification run.

```csharp
public const string LastProofVerificationEvaluationOutcome = "lastProofVerificationEvaluationOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_LastProofVerificationHttpCollectionOutcome"></a> LastProofVerificationHttpCollectionOutcome

Metadata key for the HTTP proof collection outcome observed by the latest proof verification run.

```csharp
public const string LastProofVerificationHttpCollectionOutcome = "lastProofVerificationHttpCollectionOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_LastProofVerificationOutcome"></a> LastProofVerificationOutcome

Metadata key for the latest proof verification runner outcome.

```csharp
public const string LastProofVerificationOutcome = "lastProofVerificationOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_LastProofVerificationPublicationPlanOutcome"></a> LastProofVerificationPublicationPlanOutcome

Metadata key for the publication planning outcome observed by the latest proof verification run.

```csharp
public const string LastProofVerificationPublicationPlanOutcome = "lastProofVerificationPublicationPlanOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_LastProofVerificationRanAtUtc"></a> LastProofVerificationRanAtUtc

Metadata key for the UTC timestamp when the latest proof verification run executed.

```csharp
public const string LastProofVerificationRanAtUtc = "lastProofVerificationRanAtUtc"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_LastProofVerificationSource"></a> LastProofVerificationSource

Metadata key for the source that requested the latest proof verification run.

```csharp
public const string LastProofVerificationSource = "lastProofVerificationSource"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_ProofPollingRunnerOwnership"></a> ProofPollingRunnerOwnership

Metadata key for proof polling runner ownership.

```csharp
public const string ProofPollingRunnerOwnership = "proofPollingRunnerOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationMetadataKeys_ProofVerificationRunnerOwnership"></a> ProofVerificationRunnerOwnership

Metadata key for proof verification runner ownership.

```csharp
public const string ProofVerificationRunnerOwnership = "proofVerificationRunnerOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
