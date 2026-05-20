---
title: Class TenantAdministrationWorkflowOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantadministrationworkflowoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable tenant-administration workflow outcomes.

```csharp
public static class TenantAdministrationWorkflowOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantAdministrationWorkflowOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantadministrationworkflowoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowOutcomes_Applied"></a> Applied

The requested tenant-administration command was applied.

```csharp
public const string Applied = "applied"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowOutcomes_Disabled"></a> Disabled

Tenant-administration workflow execution is disabled.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowOutcomes_InvalidInvitationState"></a> InvalidInvitationState

An invitation command targeted an invitation whose state cannot transition through the requested command.

```csharp
public const string InvalidInvitationState = "invalid-invitation-state"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowOutcomes_InvitationNotFound"></a> InvitationNotFound

An invitation command targeted an invitation that does not exist.

```csharp
public const string InvitationNotFound = "invitation-not-found"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowOutcomes_InvitationTargetRequired"></a> InvitationTargetRequired

An invitation command was missing its required invitation target.

```csharp
public const string InvitationTargetRequired = "invitation-target-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowOutcomes_MembershipNotFound"></a> MembershipNotFound

A membership command targeted a membership that does not exist.

```csharp
public const string MembershipNotFound = "membership-not-found"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowOutcomes_MembershipTargetRequired"></a> MembershipTargetRequired

A membership command was missing its required principal target.

```csharp
public const string MembershipTargetRequired = "membership-target-required"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowOutcomes_StoreFailed"></a> StoreFailed

A governance store failed before the requested command could be reported as applied.

```csharp
public const string StoreFailed = "store-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
