---
title: Class TenantAdministrationWorkflowRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantadministrationworkflowrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes one host-driven tenant-administration workflow command.

```csharp
public sealed class TenantAdministrationWorkflowRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantAdministrationWorkflowRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantadministrationworkflowrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantAdministrationWorkflowRequest\(string, string, string?, string?, string?, string?, string?, string?, IReadOnlyList<string\>?, string?, string?, DateTimeOffset?, DateTimeOffset?, DateTimeOffset?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-administration workflow command request.

```csharp
public TenantAdministrationWorkflowRequest(string command, string tenantId, string? principalId = null, string? principalKind = null, string? invitationId = null, string? inviteeId = null, string? inviteeKind = null, string? displayName = null, IReadOnlyList<string>? roles = null, string? actor = null, string? reason = null, DateTimeOffset? atUtc = null, DateTimeOffset? effectiveFromUtc = null, DateTimeOffset? expiresAtUtc = null, string? correlationId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant-administration command to apply.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable tenant identifier.

`principalId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The principal identifier for membership commands.

`principalKind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The principal kind for membership commands, such as user, group, service, or organization.

`invitationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The invitation identifier for invitation commands.

`inviteeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The invitee identifier for invitation commands.

`inviteeKind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The invitee kind for invitation commands, such as user, group, service, or organization.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing membership or invitation name.

`roles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The tenant-local roles associated with the membership or invitation.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that requested the command when known.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing command reason.

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp used for the command. The runtime clock is used when omitted.

`effectiveFromUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The optional UTC timestamp when a granted membership becomes active.

`expiresAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The optional UTC timestamp when the membership or invitation expires.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for the command.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional command metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_Actor"></a> Actor

Gets the actor that requested the command when known.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_AtUtc"></a> AtUtc

Gets the UTC timestamp used for the command.

```csharp
public DateTimeOffset? AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_Command"></a> Command

Gets the tenant-administration command to apply.

```csharp
public string Command { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for the command.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_DisplayName"></a> DisplayName

Gets the optional operator-facing membership or invitation name.

```csharp
public string? DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_EffectiveFromUtc"></a> EffectiveFromUtc

Gets the optional UTC timestamp when a granted membership becomes active.

```csharp
public DateTimeOffset? EffectiveFromUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_ExpiresAtUtc"></a> ExpiresAtUtc

Gets the optional UTC timestamp when the membership or invitation expires.

```csharp
public DateTimeOffset? ExpiresAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_InvitationId"></a> InvitationId

Gets the invitation identifier for invitation commands.

```csharp
public string? InvitationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_InviteeId"></a> InviteeId

Gets the invitee identifier for invitation commands.

```csharp
public string? InviteeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_InviteeKind"></a> InviteeKind

Gets the invitee kind for invitation commands.

```csharp
public string? InviteeKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_Metadata"></a> Metadata

Gets optional command metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_PrincipalId"></a> PrincipalId

Gets the principal identifier for membership commands.

```csharp
public string? PrincipalId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_PrincipalKind"></a> PrincipalKind

Gets the principal kind for membership commands.

```csharp
public string? PrincipalKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_Reason"></a> Reason

Gets the optional operator-facing command reason.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_Roles"></a> Roles

Gets the tenant-local roles associated with the membership or invitation.

```csharp
public IReadOnlyList<string> Roles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowRequest_TenantId"></a> TenantId

Gets the stable tenant identifier.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
