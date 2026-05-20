---
title: Class TenantInvitationValidationOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationvalidationoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable outcomes returned by tenant-invitation validation.

```csharp
public static class TenantInvitationValidationOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationValidationOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationvalidationoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationOutcomes_Accepted"></a> Accepted

The invitation has already been accepted.

```csharp
public const string Accepted = "accepted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationOutcomes_Disabled"></a> Disabled

Invitation validation is disabled by host configuration.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationOutcomes_Expired"></a> Expired

The invitation is expired or outside its valid time window.

```csharp
public const string Expired = "expired"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationOutcomes_InviteeMismatch"></a> InviteeMismatch

The invitation exists but does not match the requested invitee boundary.

```csharp
public const string InviteeMismatch = "invitee-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationOutcomes_MissingRole"></a> MissingRole

The invitation does not include every required tenant-local role.

```csharp
public const string MissingRole = "missing-role"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationOutcomes_NotFound"></a> NotFound

No invitation matched the supplied tenant and invitation identifiers.

```csharp
public const string NotFound = "not-found"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationOutcomes_Revoked"></a> Revoked

The invitation has been revoked.

```csharp
public const string Revoked = "revoked"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationOutcomes_Valid"></a> Valid

The invitation is pending and satisfies the validation request.

```csharp
public const string Valid = "valid"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
