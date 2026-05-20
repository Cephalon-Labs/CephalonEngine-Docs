---
title: Class TenantDomainOwnershipProofEvaluationOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofevaluationoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable tenant-domain ownership proof evaluation outcome labels.

```csharp
public static class TenantDomainOwnershipProofEvaluationOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofEvaluationOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofevaluationoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationOutcomes_Disabled"></a> Disabled

The built-in proof evaluator is disabled.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationOutcomes_MissingExpectedProof"></a> MissingExpectedProof

The request and descriptor did not contain an expected proof value to compare against.

```csharp
public const string MissingExpectedProof = "missing-expected-proof"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationOutcomes_MissingObservedProof"></a> MissingObservedProof

The request did not contain an observed proof value to evaluate.

```csharp
public const string MissingObservedProof = "missing-observed-proof"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationOutcomes_NotFound"></a> NotFound

No tenant-domain ownership declaration matched the supplied tenant and domain.

```csharp
public const string NotFound = "not-found"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationOutcomes_Rejected"></a> Rejected

The observed proof did not match the expected proof and the domain ownership was rejected.

```csharp
public const string Rejected = "rejected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationOutcomes_TenantMismatch"></a> TenantMismatch

A declaration for the supplied domain belongs to a different tenant.

```csharp
public const string TenantMismatch = "tenant-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationOutcomes_VerificationMethodMismatch"></a> VerificationMethodMismatch

The matching domain ownership declaration uses a different verification method.

```csharp
public const string VerificationMethodMismatch = "verification-method-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationOutcomes_Verified"></a> Verified

The observed proof matched the expected proof and the domain ownership was verified.

```csharp
public const string Verified = "verified"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationOutcomes_WorkflowDenied"></a> WorkflowDenied

Proof evaluation matched or mismatched, but the verification workflow refused or failed the transition.

```csharp
public const string WorkflowDenied = "workflow-denied"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
