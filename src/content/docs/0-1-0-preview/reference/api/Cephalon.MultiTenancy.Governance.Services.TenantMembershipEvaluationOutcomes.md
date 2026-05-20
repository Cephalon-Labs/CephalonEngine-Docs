---
title: Class TenantMembershipEvaluationOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipevaluationoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable outcomes returned by tenant-membership evaluation.

```csharp
public static class TenantMembershipEvaluationOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantMembershipEvaluationOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipevaluationoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationOutcomes_Allowed"></a> Allowed

Gets the outcome used when membership evaluation grants access.

```csharp
public const string Allowed = "allowed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationOutcomes_Disabled"></a> Disabled

Gets the outcome used when membership evaluation is disabled.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationOutcomes_Expired"></a> Expired

Gets the outcome used when matching memberships are expired or outside their validity window.

```csharp
public const string Expired = "expired"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationOutcomes_MissingRole"></a> MissingRole

Gets the outcome used when matching memberships do not satisfy required roles.

```csharp
public const string MissingRole = "missing-role"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationOutcomes_NoMembership"></a> NoMembership

Gets the outcome used when no matching membership exists.

```csharp
public const string NoMembership = "no-membership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationOutcomes_Suspended"></a> Suspended

Gets the outcome used when matching memberships are suspended.

```csharp
public const string Suspended = "suspended"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
