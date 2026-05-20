---
title: Class TenantMembershipEvaluationResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipevaluationresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of one tenant-membership evaluation.

```csharp
public sealed class TenantMembershipEvaluationResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantMembershipEvaluationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipevaluationresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationResult__ctor_System_String_System_String_System_String_System_Boolean_System_DateTimeOffset_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_String_"></a> TenantMembershipEvaluationResult\(string, string, string, bool, DateTimeOffset, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<TenantMembershipDescriptor\>?, string?, IReadOnlyDictionary<string, string\>?, string?\)

Creates a tenant-membership evaluation result.

```csharp
public TenantMembershipEvaluationResult(string tenantId, string principalId, string outcome, bool allowed, DateTimeOffset evaluatedAtUtc, IReadOnlyList<string>? requiredRoles = null, IReadOnlyList<string>? matchedRoles = null, IReadOnlyList<string>? missingRoles = null, IReadOnlyList<TenantMembershipDescriptor>? matchedMemberships = null, string? reason = null, IReadOnlyDictionary<string, string>? metadata = null, string? principalKind = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was evaluated.

`principalId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The principal identifier that was evaluated.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable evaluation outcome.

`allowed` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether evaluation granted access.

`evaluatedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when evaluation executed.

`requiredRoles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The tenant-local roles required by the request.

`matchedRoles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The tenant-local roles found on active memberships.

`missingRoles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The required roles that were not found.

`matchedMemberships` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantMembershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor/)\>?

The matching memberships considered by evaluation.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing evaluation reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

`principalKind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The principal kind that was evaluated. The default is user.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationResult_Allowed"></a> Allowed

Gets a value indicating whether evaluation granted access.

```csharp
public bool Allowed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationResult_EvaluatedAtUtc"></a> EvaluatedAtUtc

Gets the UTC timestamp when evaluation executed.

```csharp
public DateTimeOffset EvaluatedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationResult_MatchedMemberships"></a> MatchedMemberships

Gets the matching memberships considered by evaluation.

```csharp
public IReadOnlyList<TenantMembershipDescriptor> MatchedMemberships { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantMembershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor/)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationResult_MatchedRoles"></a> MatchedRoles

Gets the tenant-local roles found on active memberships.

```csharp
public IReadOnlyList<string> MatchedRoles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationResult_MissingRoles"></a> MissingRoles

Gets the required roles that were not found.

```csharp
public IReadOnlyList<string> MissingRoles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationResult_Outcome"></a> Outcome

Gets the stable evaluation outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationResult_PrincipalId"></a> PrincipalId

Gets the principal identifier that was evaluated.

```csharp
public string PrincipalId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationResult_PrincipalKind"></a> PrincipalKind

Gets the principal kind that was evaluated.

```csharp
public string PrincipalKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationResult_Reason"></a> Reason

Gets the optional operator-facing evaluation reason.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationResult_RequiredRoles"></a> RequiredRoles

Gets the tenant-local roles required by the request.

```csharp
public IReadOnlyList<string> RequiredRoles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationResult_TenantId"></a> TenantId

Gets the tenant identifier that was evaluated.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
