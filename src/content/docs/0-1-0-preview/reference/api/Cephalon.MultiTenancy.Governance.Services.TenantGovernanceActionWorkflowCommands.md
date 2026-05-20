---
title: Class TenantGovernanceActionWorkflowCommands
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactionworkflowcommands
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines built-in tenant-governance action workflow commands.

```csharp
public static class TenantGovernanceActionWorkflowCommands
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantGovernanceActionWorkflowCommands](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactionworkflowcommands/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowCommands_Approve"></a> Approve

Approves a pending tenant-governance action.

```csharp
public const string Approve = "approve"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowCommands_Expire"></a> Expire

Expires a non-terminal tenant-governance action.

```csharp
public const string Expire = "expire"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowCommands_MarkRemediated"></a> MarkRemediated

Marks a remediation-required tenant-governance action as remediated.

```csharp
public const string MarkRemediated = "mark-remediated"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowCommands_Reject"></a> Reject

Rejects a pending or remediation-required tenant-governance action.

```csharp
public const string Reject = "reject"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowCommands_Request"></a> Request

Creates a pending tenant-governance action.

```csharp
public const string Request = "request"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowCommands_RequireRemediation"></a> RequireRemediation

Marks a pending or approved tenant-governance action as requiring remediation.

```csharp
public const string RequireRemediation = "require-remediation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
