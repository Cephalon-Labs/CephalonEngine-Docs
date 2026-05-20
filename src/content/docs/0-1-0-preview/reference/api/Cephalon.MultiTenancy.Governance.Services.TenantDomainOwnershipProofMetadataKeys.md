---
title: Class TenantDomainOwnershipProofMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofmetadatakeys
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable metadata keys used by tenant-domain ownership proof evaluation.

```csharp
public static class TenantDomainOwnershipProofMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofMetadataKeys](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofmetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofMetadataKeys_ExpectedDnsTxtProof"></a> ExpectedDnsTxtProof

Expected DNS TXT proof value for DNS-based domain ownership verification.

```csharp
public const string ExpectedDnsTxtProof = "expectedDnsTxtProof"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofMetadataKeys_ExpectedHttpFileProof"></a> ExpectedHttpFileProof

Expected HTTP file or well-known endpoint proof value for HTTP-based domain ownership verification.

```csharp
public const string ExpectedHttpFileProof = "expectedHttpFileProof"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofMetadataKeys_ExpectedProof"></a> ExpectedProof

Generic expected proof value used when a method-specific expected value is not present.

```csharp
public const string ExpectedProof = "expectedProof"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofMetadataKeys_LastProofEvaluationActor"></a> LastProofEvaluationActor

Actor that requested or reported the proof evaluation when known.

```csharp
public const string LastProofEvaluationActor = "lastProofEvaluationActor"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofMetadataKeys_LastProofEvaluationCorrelationId"></a> LastProofEvaluationCorrelationId

Correlation identifier for the last proof evaluation when known.

```csharp
public const string LastProofEvaluationCorrelationId = "lastProofEvaluationCorrelationId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofMetadataKeys_LastProofEvaluationExpectedFingerprint"></a> LastProofEvaluationExpectedFingerprint

SHA-256 fingerprint of the expected proof value considered by the evaluator.

```csharp
public const string LastProofEvaluationExpectedFingerprint = "lastProofEvaluationExpectedFingerprint"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofMetadataKeys_LastProofEvaluationObservedFingerprint"></a> LastProofEvaluationObservedFingerprint

SHA-256 fingerprint of the observed proof value considered by the evaluator.

```csharp
public const string LastProofEvaluationObservedFingerprint = "lastProofEvaluationObservedFingerprint"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofMetadataKeys_LastProofEvaluationOutcome"></a> LastProofEvaluationOutcome

Last proof evaluation outcome recorded on the domain ownership descriptor.

```csharp
public const string LastProofEvaluationOutcome = "lastProofEvaluationOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofMetadataKeys_LastProofEvaluationSource"></a> LastProofEvaluationSource

Source that reported the observed proof evidence.

```csharp
public const string LastProofEvaluationSource = "lastProofEvaluationSource"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofMetadataKeys_ProofEvaluationOwnership"></a> ProofEvaluationOwnership

Ownership marker for proof evaluation performed by the governance companion.

```csharp
public const string ProofEvaluationOwnership = "proofEvaluationOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
