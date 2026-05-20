---
title: Class TenantGovernanceActionDecisionOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondecisionoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable outcomes returned by tenant-governance action decisions.

```csharp
public static class TenantGovernanceActionDecisionOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantGovernanceActionDecisionOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondecisionoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionOutcomes_ActionKindMismatch"></a> ActionKindMismatch

The action exists but has a different action kind.

```csharp
public const string ActionKindMismatch = "action-kind-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionOutcomes_Allowed"></a> Allowed

The governance action is approved or remediated and satisfies the decision request.

```csharp
public const string Allowed = "allowed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionOutcomes_Disabled"></a> Disabled

Governance action decisions are disabled by host configuration.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionOutcomes_Expired"></a> Expired

The action is expired or outside its valid time window.

```csharp
public const string Expired = "expired"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionOutcomes_NotFound"></a> NotFound

No governance action descriptor matched the supplied action.

```csharp
public const string NotFound = "not-found"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionOutcomes_PendingApproval"></a> PendingApproval

The action is still waiting for approval.

```csharp
public const string PendingApproval = "pending-approval"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionOutcomes_Rejected"></a> Rejected

The action was rejected.

```csharp
public const string Rejected = "rejected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionOutcomes_RemediationRequired"></a> RemediationRequired

The action requires remediation before it can proceed.

```csharp
public const string RemediationRequired = "remediation-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionOutcomes_SubjectMismatch"></a> SubjectMismatch

The action exists but targets a different subject.

```csharp
public const string SubjectMismatch = "subject-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionOutcomes_TenantMismatch"></a> TenantMismatch

The action exists but belongs to a different tenant.

```csharp
public const string TenantMismatch = "tenant-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
