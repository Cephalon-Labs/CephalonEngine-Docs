---
title: Class TenantDomainOwnershipHttpProofPublicationOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofpublicationoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stable tenant-domain ownership HTTP proof publication outcomes.

```csharp
public static class TenantDomainOwnershipHttpProofPublicationOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipHttpProofPublicationOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofpublicationoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationOutcomes_Disabled"></a> Disabled

HTTP proof publication was disabled.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationOutcomes_MissingHttpFilePublicationPlan"></a> MissingHttpFilePublicationPlan

The publication plan did not include HTTP proof-file instructions.

```csharp
public const string MissingHttpFilePublicationPlan = "missing-http-file-publication-plan"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationOutcomes_PublicationPlanUnavailable"></a> PublicationPlanUnavailable

The proof publication planner did not produce a usable plan.

```csharp
public const string PublicationPlanUnavailable = "publication-plan-unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationOutcomes_Published"></a> Published

The HTTP proof file was materialized and recorded.

```csharp
public const string Published = "published"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipHttpProofPublicationOutcomes_StoreFailed"></a> StoreFailed

Publication state could not be stored.

```csharp
public const string StoreFailed = "store-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
