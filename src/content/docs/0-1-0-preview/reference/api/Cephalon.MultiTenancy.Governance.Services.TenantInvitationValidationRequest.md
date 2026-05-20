---
title: Class TenantInvitationValidationRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationvalidationrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes one request to validate a tenant invitation.

```csharp
public sealed class TenantInvitationValidationRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationValidationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationvalidationrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationRequest__ctor_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Nullable_System_DateTimeOffset__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantInvitationValidationRequest\(string, string, string?, string?, IReadOnlyList<string\>?, DateTimeOffset?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-invitation validation request.

```csharp
public TenantInvitationValidationRequest(string tenantId, string invitationId, string? inviteeId = null, string? inviteeKind = null, IReadOnlyList<string>? requiredRoles = null, DateTimeOffset? atUtc = null, string? correlationId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier to validate.

`invitationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The invitation identifier to validate.

`inviteeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional invitee identifier expected by the caller.

`inviteeKind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional invitee kind expected by the caller.

`requiredRoles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The optional tenant-local roles required for validation.

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp used for expiration evaluation. The runtime clock is used when omitted.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for the validation.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional request metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationRequest_AtUtc"></a> AtUtc

Gets the UTC timestamp used for expiration evaluation.

```csharp
public DateTimeOffset? AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for the validation.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationRequest_InvitationId"></a> InvitationId

Gets the invitation identifier to validate.

```csharp
public string InvitationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationRequest_InviteeId"></a> InviteeId

Gets the optional invitee identifier expected by the caller.

```csharp
public string? InviteeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationRequest_InviteeKind"></a> InviteeKind

Gets the invitee kind expected by the caller.

```csharp
public string InviteeKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationRequest_Metadata"></a> Metadata

Gets optional request metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationRequest_RequiredRoles"></a> RequiredRoles

Gets the tenant-local roles required for validation.

```csharp
public IReadOnlyList<string> RequiredRoles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationRequest_TenantId"></a> TenantId

Gets the tenant identifier to validate.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
