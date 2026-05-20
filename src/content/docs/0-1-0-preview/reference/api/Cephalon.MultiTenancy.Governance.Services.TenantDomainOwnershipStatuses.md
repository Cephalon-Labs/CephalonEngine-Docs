---
title: Class TenantDomainOwnershipStatuses
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipstatuses
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable tenant-domain ownership statuses understood by the governance runtime.

```csharp
public static class TenantDomainOwnershipStatuses
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipStatuses](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipstatuses/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipStatuses_Expired"></a> Expired

The tenant domain ownership is no longer within its valid time window.

```csharp
public const string Expired = "expired"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipStatuses_Pending"></a> Pending

The tenant domain ownership is declared but not yet verified.

```csharp
public const string Pending = "pending"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipStatuses_Rejected"></a> Rejected

The tenant domain ownership proof was rejected.

```csharp
public const string Rejected = "rejected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipStatuses_Suspended"></a> Suspended

The tenant domain ownership has been suspended.

```csharp
public const string Suspended = "suspended"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipStatuses_Verified"></a> Verified

The tenant domain ownership has been verified and can be validated.

```csharp
public const string Verified = "verified"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
