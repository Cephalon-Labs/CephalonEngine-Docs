---
title: Class TenantGovernanceActionDecisionRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondecisionrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes one request to decide whether a tenant-governance action can proceed.

```csharp
public sealed class TenantGovernanceActionDecisionRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantGovernanceActionDecisionRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondecisionrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionRequest__ctor_System_String_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantGovernanceActionDecisionRequest\(string, string, string?, string?, string?, DateTimeOffset?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-governance action decision request.

```csharp
public TenantGovernanceActionDecisionRequest(string tenantId, string actionId, string? actionKind = null, string? subjectKind = null, string? subjectId = null, DateTimeOffset? atUtc = null, string? correlationId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier to validate.

`actionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The governance action identifier to validate.

`actionKind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional expected governance action kind.

`subjectKind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional expected subject kind.

`subjectId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional expected subject identifier.

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp used for expiration evaluation. The runtime clock is used when omitted.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for the decision.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional request metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionRequest_ActionId"></a> ActionId

Gets the governance action identifier to validate.

```csharp
public string ActionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionRequest_ActionKind"></a> ActionKind

Gets the optional expected governance action kind.

```csharp
public string? ActionKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionRequest_AtUtc"></a> AtUtc

Gets the UTC timestamp used for expiration evaluation.

```csharp
public DateTimeOffset? AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for the decision.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionRequest_Metadata"></a> Metadata

Gets optional request metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionRequest_SubjectId"></a> SubjectId

Gets the optional expected subject identifier.

```csharp
public string? SubjectId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionRequest_SubjectKind"></a> SubjectKind

Gets the optional expected subject kind.

```csharp
public string? SubjectKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionRequest_TenantId"></a> TenantId

Gets the tenant identifier to validate.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
