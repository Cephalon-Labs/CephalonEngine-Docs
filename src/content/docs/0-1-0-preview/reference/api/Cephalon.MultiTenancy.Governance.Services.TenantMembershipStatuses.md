---
title: Class TenantMembershipStatuses
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipstatuses
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable tenant-membership status identifiers.

```csharp
public static class TenantMembershipStatuses
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantMembershipStatuses](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipstatuses/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipStatuses_Active"></a> Active

Gets the status used when the membership can participate in evaluation.

```csharp
public const string Active = "active"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipStatuses_Expired"></a> Expired

Gets the status used when the membership has intentionally expired.

```csharp
public const string Expired = "expired"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipStatuses_Suspended"></a> Suspended

Gets the status used when the membership exists but is blocked from evaluation.

```csharp
public const string Suspended = "suspended"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
