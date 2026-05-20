---
title: Class TenantGovernanceActionWorkflowOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactionworkflowoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines built-in tenant-governance action workflow transition outcomes.

```csharp
public static class TenantGovernanceActionWorkflowOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantGovernanceActionWorkflowOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactionworkflowoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowOutcomes_ActionKindMismatch"></a> ActionKindMismatch

The matching tenant-governance action has a different action kind.

```csharp
public const string ActionKindMismatch = "action-kind-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowOutcomes_Applied"></a> Applied

The workflow transition updated an existing tenant-governance action.

```csharp
public const string Applied = "applied"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowOutcomes_Created"></a> Created

The workflow transition created a new tenant-governance action.

```csharp
public const string Created = "created"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowOutcomes_Disabled"></a> Disabled

Tenant-governance action workflow execution is disabled.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowOutcomes_InvalidTransition"></a> InvalidTransition

The requested workflow transition is not valid from the current action status.

```csharp
public const string InvalidTransition = "invalid-transition"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowOutcomes_NotFound"></a> NotFound

No tenant-governance action matched the supplied identifiers.

```csharp
public const string NotFound = "not-found"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowOutcomes_StoreFailed"></a> StoreFailed

The requested workflow transition could not be persisted.

```csharp
public const string StoreFailed = "store-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowOutcomes_SubjectMismatch"></a> SubjectMismatch

The matching tenant-governance action has a different subject boundary.

```csharp
public const string SubjectMismatch = "subject-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowOutcomes_TenantMismatch"></a> TenantMismatch

The matching tenant-governance action belongs to a different tenant.

```csharp
public const string TenantMismatch = "tenant-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
