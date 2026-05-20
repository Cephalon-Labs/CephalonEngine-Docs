---
title: Class TenantAdministrationWorkflowCommands
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantadministrationworkflowcommands
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable tenant-administration workflow command identifiers.

```csharp
public static class TenantAdministrationWorkflowCommands
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantAdministrationWorkflowCommands](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantadministrationworkflowcommands/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowCommands_AcceptInvitation"></a> AcceptInvitation

Accepts an existing pending tenant invitation.

```csharp
public const string AcceptInvitation = "accept-invitation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowCommands_ExpireInvitation"></a> ExpireInvitation

Expires an existing tenant invitation.

```csharp
public const string ExpireInvitation = "expire-invitation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowCommands_ExpireMembership"></a> ExpireMembership

Expires an existing tenant membership.

```csharp
public const string ExpireMembership = "expire-membership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowCommands_GrantMembership"></a> GrantMembership

Creates or replaces an active tenant membership.

```csharp
public const string GrantMembership = "grant-membership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowCommands_IssueInvitation"></a> IssueInvitation

Creates or replaces a pending tenant invitation.

```csharp
public const string IssueInvitation = "issue-invitation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowCommands_RevokeInvitation"></a> RevokeInvitation

Revokes an existing pending tenant invitation.

```csharp
public const string RevokeInvitation = "revoke-invitation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowCommands_SuspendMembership"></a> SuspendMembership

Suspends an existing tenant membership.

```csharp
public const string SuspendMembership = "suspend-membership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
