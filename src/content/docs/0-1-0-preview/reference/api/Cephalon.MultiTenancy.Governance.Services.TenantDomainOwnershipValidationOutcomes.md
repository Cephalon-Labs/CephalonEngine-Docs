---
title: Class TenantDomainOwnershipValidationOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipvalidationoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable outcomes returned by tenant-domain ownership validation.

```csharp
public static class TenantDomainOwnershipValidationOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipValidationOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipvalidationoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationOutcomes_Disabled"></a> Disabled

Domain ownership validation is disabled by host configuration.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationOutcomes_Expired"></a> Expired

The domain ownership descriptor is expired or outside its valid time window.

```csharp
public const string Expired = "expired"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationOutcomes_NotFound"></a> NotFound

No domain ownership descriptor matched the supplied domain.

```csharp
public const string NotFound = "not-found"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationOutcomes_Pending"></a> Pending

The domain ownership descriptor is still pending verification.

```csharp
public const string Pending = "pending"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationOutcomes_Rejected"></a> Rejected

The domain ownership descriptor was rejected.

```csharp
public const string Rejected = "rejected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationOutcomes_Suspended"></a> Suspended

The domain ownership descriptor is suspended.

```csharp
public const string Suspended = "suspended"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationOutcomes_TenantMismatch"></a> TenantMismatch

The domain exists but belongs to a different tenant.

```csharp
public const string TenantMismatch = "tenant-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationOutcomes_Valid"></a> Valid

The domain ownership descriptor is verified and satisfies the validation request.

```csharp
public const string Valid = "valid"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
