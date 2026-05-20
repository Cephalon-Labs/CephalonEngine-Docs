---
title: Class TenantMembershipEvaluationRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipevaluationrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes one request to evaluate tenant membership.

```csharp
public sealed class TenantMembershipEvaluationRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantMembershipEvaluationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipevaluationrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationRequest__ctor_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Nullable_System_DateTimeOffset__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_String_"></a> TenantMembershipEvaluationRequest\(string, string, IReadOnlyList<string\>?, DateTimeOffset?, string?, IReadOnlyDictionary<string, string\>?, string?\)

Creates a tenant-membership evaluation request.

```csharp
public TenantMembershipEvaluationRequest(string tenantId, string principalId, IReadOnlyList<string>? requiredRoles = null, DateTimeOffset? atUtc = null, string? correlationId = null, IReadOnlyDictionary<string, string>? metadata = null, string? principalKind = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier to evaluate.

`principalId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The principal identifier to evaluate.

`requiredRoles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The optional tenant-local roles required for access.

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp used for time-window evaluation. The runtime clock is used when omitted.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for the evaluation.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional request metadata.

`principalKind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The principal kind to evaluate. The default is user.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationRequest_AtUtc"></a> AtUtc

Gets the UTC timestamp used for time-window evaluation.

```csharp
public DateTimeOffset? AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for the evaluation.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationRequest_Metadata"></a> Metadata

Gets optional request metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationRequest_PrincipalId"></a> PrincipalId

Gets the principal identifier to evaluate.

```csharp
public string PrincipalId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationRequest_PrincipalKind"></a> PrincipalKind

Gets the principal kind to evaluate.

```csharp
public string PrincipalKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationRequest_RequiredRoles"></a> RequiredRoles

Gets the tenant-local roles required for access.

```csharp
public IReadOnlyList<string> RequiredRoles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantMembershipEvaluationRequest_TenantId"></a> TenantId

Gets the tenant identifier to evaluate.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
