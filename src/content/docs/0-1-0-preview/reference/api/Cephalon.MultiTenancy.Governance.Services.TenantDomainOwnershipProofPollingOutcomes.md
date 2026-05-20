---
title: Class TenantDomainOwnershipProofPollingOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpollingoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Stable tenant-domain ownership proof polling outcome labels.

```csharp
public static class TenantDomainOwnershipProofPollingOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofPollingOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpollingoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingOutcomes_Completed"></a> Completed

At least one matching domain ownership declaration was polled and all attempts reached a terminal or non-failing outcome.

```csharp
public const string Completed = "completed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingOutcomes_Disabled"></a> Disabled

Proof polling is disabled by governance options.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingOutcomes_NoCandidates"></a> NoCandidates

No matching domain ownership declarations needed a polling attempt.

```csharp
public const string NoCandidates = "no-candidates"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingOutcomes_PartialFailure"></a> PartialFailure

At least one matching domain ownership declaration was polled, but one or more attempts could not complete.

```csharp
public const string PartialFailure = "partial-failure"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
