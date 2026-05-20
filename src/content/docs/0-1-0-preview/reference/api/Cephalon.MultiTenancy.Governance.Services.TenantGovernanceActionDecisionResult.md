---
title: Class TenantGovernanceActionDecisionResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondecisionresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of one tenant-governance action decision.

```csharp
public sealed class TenantGovernanceActionDecisionResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantGovernanceActionDecisionResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondecisionresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionResult__ctor_System_String_System_String_System_String_System_Boolean_System_DateTimeOffset_Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantGovernanceActionDecisionResult\(string, string, string, bool, DateTimeOffset, TenantGovernanceActionDescriptor?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-governance action decision result.

```csharp
public TenantGovernanceActionDecisionResult(string tenantId, string actionId, string outcome, bool allowed, DateTimeOffset decidedAtUtc, TenantGovernanceActionDescriptor? matchedAction = null, string? reason = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was evaluated.

`actionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The governance action identifier that was evaluated.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable decision outcome.

`allowed` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the governance action can proceed.

`decidedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when decision evaluation executed.

`matchedAction` [TenantGovernanceActionDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondescriptor/)?

The matching governance action descriptor considered by decision evaluation.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing decision reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionResult_ActionId"></a> ActionId

Gets the governance action identifier that was evaluated.

```csharp
public string ActionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionResult_Allowed"></a> Allowed

Gets a value indicating whether the governance action can proceed.

```csharp
public bool Allowed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionResult_DecidedAtUtc"></a> DecidedAtUtc

Gets the UTC timestamp when decision evaluation executed.

```csharp
public DateTimeOffset DecidedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionResult_MatchedAction"></a> MatchedAction

Gets the matching governance action descriptor considered by decision evaluation.

```csharp
public TenantGovernanceActionDescriptor? MatchedAction { get; }
```

#### Property Value

 [TenantGovernanceActionDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionResult_Outcome"></a> Outcome

Gets the stable decision outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionResult_Reason"></a> Reason

Gets the optional operator-facing decision reason.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDecisionResult_TenantId"></a> TenantId

Gets the tenant identifier that was evaluated.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
