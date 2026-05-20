---
title: Class TenantInvitationDescriptor
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes one invitation to join or access a tenant.

```csharp
public sealed class TenantInvitationDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantInvitationDescriptor\(string, string, string, string?, string?, IReadOnlyList<string\>?, string, DateTimeOffset?, DateTimeOffset?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a new tenant-invitation descriptor.

```csharp
public TenantInvitationDescriptor(string invitationId, string tenantId, string inviteeId, string? inviteeKind = null, string? displayName = null, IReadOnlyList<string>? roles = null, string status = "pending", DateTimeOffset? createdAtUtc = null, DateTimeOffset? expiresAtUtc = null, string? sourceModuleId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`invitationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable invitation identifier within the tenant.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable tenant identifier.

`inviteeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable invitee identifier.

`inviteeKind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The invitee kind, such as user, group, service, or organization.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing invitation name.

`roles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The tenant-local roles proposed by the invitation.

`status` [string](https://learn.microsoft.com/dotnet/api/system.string)

The invitation status.

`createdAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the invitation was created.

`expiresAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the invitation expires.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The module that contributed the invitation when one is known.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata attached to the invitation.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_CreatedAtUtc"></a> CreatedAtUtc

Gets the UTC timestamp when the invitation was created.

```csharp
public DateTimeOffset? CreatedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_DisplayName"></a> DisplayName

Gets the optional operator-facing invitation name.

```csharp
public string? DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_ExpiresAtUtc"></a> ExpiresAtUtc

Gets the UTC timestamp when the invitation expires.

```csharp
public DateTimeOffset? ExpiresAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_InvitationId"></a> InvitationId

Gets the stable invitation identifier within the tenant.

```csharp
public string InvitationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_InviteeId"></a> InviteeId

Gets the stable invitee identifier.

```csharp
public string InviteeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_InviteeKind"></a> InviteeKind

Gets the invitee kind, such as user, group, service, or organization.

```csharp
public string InviteeKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_Metadata"></a> Metadata

Gets optional operator-facing metadata attached to the invitation.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_Roles"></a> Roles

Gets the tenant-local roles proposed by the invitation.

```csharp
public IReadOnlyList<string> Roles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_SourceModuleId"></a> SourceModuleId

Gets the module that contributed the invitation when one is known.

```csharp
public string? SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_Status"></a> Status

Gets the invitation status.

```csharp
public string Status { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_TenantId"></a> TenantId

Gets the stable tenant identifier.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
