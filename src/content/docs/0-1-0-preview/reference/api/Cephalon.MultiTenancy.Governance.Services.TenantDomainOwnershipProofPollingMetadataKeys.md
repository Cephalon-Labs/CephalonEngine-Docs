---
title: Class TenantDomainOwnershipProofPollingMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpollingmetadatakeys
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stable metadata keys emitted by tenant-domain ownership proof polling.

```csharp
public static class TenantDomainOwnershipProofPollingMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofPollingMetadataKeys](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpollingmetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_BackgroundProofPollingOwnership"></a> BackgroundProofPollingOwnership

Metadata key containing the automatic background proof polling ownership mode.

```csharp
public const string BackgroundProofPollingOwnership = "backgroundProofPollingOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_BatchLimit"></a> BatchLimit

Metadata key containing the effective batch limit used by the polling pass.

```csharp
public const string BatchLimit = "batchLimit"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_CandidateCount"></a> CandidateCount

Metadata key containing the number of declarations that matched the request filters before batch limiting.

```csharp
public const string CandidateCount = "candidateCount"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_ExternalProofPollingOwnership"></a> ExternalProofPollingOwnership

Metadata key containing the on-demand external proof polling ownership mode.

```csharp
public const string ExternalProofPollingOwnership = "externalProofPollingOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_FailedCount"></a> FailedCount

Metadata key containing the number of polling attempts that did not reach an accepted terminal outcome.

```csharp
public const string FailedCount = "failedCount"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_LastProofPollingActor"></a> LastProofPollingActor

Metadata key containing the latest proof polling actor.

```csharp
public const string LastProofPollingActor = "lastProofPollingActor"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_LastProofPollingCorrelationId"></a> LastProofPollingCorrelationId

Metadata key containing the latest proof polling correlation identifier.

```csharp
public const string LastProofPollingCorrelationId = "lastProofPollingCorrelationId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_LastProofPollingOutcome"></a> LastProofPollingOutcome

Metadata key containing the latest proof polling outcome.

```csharp
public const string LastProofPollingOutcome = "lastProofPollingOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_LastProofPollingRanAtUtc"></a> LastProofPollingRanAtUtc

Metadata key containing the latest proof polling timestamp.

```csharp
public const string LastProofPollingRanAtUtc = "lastProofPollingRanAtUtc"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_LastProofPollingSource"></a> LastProofPollingSource

Metadata key containing the latest proof polling source.

```csharp
public const string LastProofPollingSource = "lastProofPollingSource"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_ProofPollingRunnerOwnership"></a> ProofPollingRunnerOwnership

Metadata key containing the proof polling runner ownership mode.

```csharp
public const string ProofPollingRunnerOwnership = "proofPollingRunnerOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_RejectedCount"></a> RejectedCount

Metadata key containing the number of declarations rejected during the polling pass.

```csharp
public const string RejectedCount = "rejectedCount"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_SkippedCount"></a> SkippedCount

Metadata key containing the number of declarations skipped by filters, missing expected proof policy, or batch limits.

```csharp
public const string SkippedCount = "skippedCount"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_VerificationCount"></a> VerificationCount

Metadata key containing the number of proof verification attempts run during the polling pass.

```csharp
public const string VerificationCount = "verificationCount"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingMetadataKeys_VerifiedCount"></a> VerifiedCount

Metadata key containing the number of declarations verified during the polling pass.

```csharp
public const string VerifiedCount = "verifiedCount"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
