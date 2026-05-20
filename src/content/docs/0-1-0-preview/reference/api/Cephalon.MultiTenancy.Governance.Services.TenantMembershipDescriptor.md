---
title: Class TenantMembershipDescriptor
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes one principal membership inside a tenant.

```csharp
public sealed class TenantMembershipDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantMembershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor__ctor_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantMembershipDescriptor\(string, string, string?, string?, IReadOnlyList<string\>?, string, DateTimeOffset?, DateTimeOffset?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a new tenant-membership descriptor.

```csharp
public TenantMembershipDescriptor(string tenantId, string principalId, string? principalKind = null, string? displayName = null, IReadOnlyList<string>? roles = null, string status = "active", DateTimeOffset? effectiveFromUtc = null, DateTimeOffset? expiresAtUtc = null, string? sourceModuleId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable tenant identifier.

`principalId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable principal identifier.

`principalKind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The principal kind, such as user, group, service, or organization.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing membership name.

`roles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The tenant-local roles associated with the principal.

`status` [string](https://learn.microsoft.com/dotnet/api/system.string)

The membership status.

`effectiveFromUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the membership becomes active.

`expiresAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the membership expires.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The module that contributed the membership when one is known.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata attached to the membership.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor_DisplayName"></a> DisplayName

Gets the optional operator-facing membership name.

```csharp
public string? DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor_EffectiveFromUtc"></a> EffectiveFromUtc

Gets the UTC timestamp when the membership becomes active.

```csharp
public DateTimeOffset? EffectiveFromUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor_ExpiresAtUtc"></a> ExpiresAtUtc

Gets the UTC timestamp when the membership expires.

```csharp
public DateTimeOffset? ExpiresAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor_Metadata"></a> Metadata

Gets optional operator-facing metadata attached to the membership.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor_PrincipalId"></a> PrincipalId

Gets the stable principal identifier.

```csharp
public string PrincipalId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor_PrincipalKind"></a> PrincipalKind

Gets the principal kind, such as user, group, service, or organization.

```csharp
public string PrincipalKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor_Roles"></a> Roles

Gets the tenant-local roles associated with the principal.

```csharp
public IReadOnlyList<string> Roles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor_SourceModuleId"></a> SourceModuleId

Gets the module that contributed the membership when one is known.

```csharp
public string? SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor_Status"></a> Status

Gets the membership status.

```csharp
public string Status { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor_TenantId"></a> TenantId

Gets the stable tenant identifier.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
