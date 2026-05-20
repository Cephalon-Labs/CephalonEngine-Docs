---
title: Class TenantInvitationValidationResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationvalidationresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of one tenant-invitation validation.

```csharp
public sealed class TenantInvitationValidationResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationValidationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationvalidationresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationResult__ctor_System_String_System_String_System_String_System_Boolean_System_DateTimeOffset_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_String_System_String_"></a> TenantInvitationValidationResult\(string, string, string, bool, DateTimeOffset, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, TenantInvitationDescriptor?, string?, IReadOnlyDictionary<string, string\>?, string?, string?\)

Creates a tenant-invitation validation result.

```csharp
public TenantInvitationValidationResult(string tenantId, string invitationId, string outcome, bool valid, DateTimeOffset validatedAtUtc, IReadOnlyList<string>? requiredRoles = null, IReadOnlyList<string>? matchedRoles = null, IReadOnlyList<string>? missingRoles = null, TenantInvitationDescriptor? matchedInvitation = null, string? reason = null, IReadOnlyDictionary<string, string>? metadata = null, string? inviteeId = null, string? inviteeKind = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was validated.

`invitationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The invitation identifier that was validated.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable validation outcome.

`valid` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether validation granted invitation use.

`validatedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when validation executed.

`requiredRoles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The tenant-local roles required by the request.

`matchedRoles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The tenant-local roles found on the invitation.

`missingRoles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The required roles that were not found.

`matchedInvitation` [TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)?

The matching invitation considered by validation.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing validation reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

`inviteeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional invitee identifier expected by the request.

`inviteeKind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The invitee kind expected by the request.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationResult_InvitationId"></a> InvitationId

Gets the invitation identifier that was validated.

```csharp
public string InvitationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationResult_InviteeId"></a> InviteeId

Gets the optional invitee identifier expected by the request.

```csharp
public string? InviteeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationResult_InviteeKind"></a> InviteeKind

Gets the invitee kind expected by the request.

```csharp
public string InviteeKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationResult_MatchedInvitation"></a> MatchedInvitation

Gets the matching invitation considered by validation.

```csharp
public TenantInvitationDescriptor? MatchedInvitation { get; }
```

#### Property Value

 [TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationResult_MatchedRoles"></a> MatchedRoles

Gets the tenant-local roles found on the invitation.

```csharp
public IReadOnlyList<string> MatchedRoles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationResult_MissingRoles"></a> MissingRoles

Gets the required roles that were not found.

```csharp
public IReadOnlyList<string> MissingRoles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationResult_Outcome"></a> Outcome

Gets the stable validation outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationResult_Reason"></a> Reason

Gets the optional operator-facing validation reason.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationResult_RequiredRoles"></a> RequiredRoles

Gets the tenant-local roles required by the request.

```csharp
public IReadOnlyList<string> RequiredRoles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationResult_TenantId"></a> TenantId

Gets the tenant identifier that was validated.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationResult_Valid"></a> Valid

Gets a value indicating whether validation granted invitation use.

```csharp
public bool Valid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationValidationResult_ValidatedAtUtc"></a> ValidatedAtUtc

Gets the UTC timestamp when validation executed.

```csharp
public DateTimeOffset ValidatedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)
