---
title: Class TenantGovernanceActionKinds
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactionkinds
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable tenant-governance action kinds understood by the governance runtime.

```csharp
public static class TenantGovernanceActionKinds
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantGovernanceActionKinds](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactionkinds/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionKinds_DomainOwnership"></a> DomainOwnership

A governance action that changes declared tenant-domain ownership posture.

```csharp
public const string DomainOwnership = "domain-ownership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionKinds_InvitationLifecycle"></a> InvitationLifecycle

A governance action that changes an invitation lifecycle.

```csharp
public const string InvitationLifecycle = "invitation-lifecycle"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionKinds_MembershipChange"></a> MembershipChange

A governance action that changes tenant membership.

```csharp
public const string MembershipChange = "membership-change"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionKinds_Remediation"></a> Remediation

A governance action that represents an operator remediation.

```csharp
public const string Remediation = "remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionKinds_TenantAdministration"></a> TenantAdministration

A governance action that represents tenant administration.

```csharp
public const string TenantAdministration = "tenant-administration"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
