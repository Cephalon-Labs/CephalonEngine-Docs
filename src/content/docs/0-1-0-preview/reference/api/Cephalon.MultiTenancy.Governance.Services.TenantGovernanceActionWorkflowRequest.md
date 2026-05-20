---
title: Class TenantGovernanceActionWorkflowRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactionworkflowrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes one tenant-governance action workflow transition request.

```csharp
public sealed class TenantGovernanceActionWorkflowRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantGovernanceActionWorkflowRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactionworkflowrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantGovernanceActionWorkflowRequest\(string, string, string, string?, string?, string?, string?, string?, string?, DateTimeOffset?, DateTimeOffset?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-governance action workflow transition request.

```csharp
public TenantGovernanceActionWorkflowRequest(string command, string tenantId, string actionId, string? actionKind = null, string? subjectKind = null, string? subjectId = null, string? displayName = null, string? actor = null, string? reason = null, DateTimeOffset? atUtc = null, DateTimeOffset? expiresAtUtc = null, string? correlationId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

The workflow command to apply.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier to transition.

`actionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The governance action identifier to transition.

`actionKind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional governance action kind.

`subjectKind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional subject kind affected by the action.

`subjectId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional subject identifier affected by the action.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing action name.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that requested the workflow transition when known.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing transition reason.

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp used for the transition. The runtime clock is used when omitted.

`expiresAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The optional UTC timestamp when the action expires.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for the workflow transition.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional transition metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest_ActionId"></a> ActionId

Gets the governance action identifier to transition.

```csharp
public string ActionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest_ActionKind"></a> ActionKind

Gets the optional governance action kind.

```csharp
public string? ActionKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest_Actor"></a> Actor

Gets the actor that requested the workflow transition when known.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest_AtUtc"></a> AtUtc

Gets the UTC timestamp used for the transition.

```csharp
public DateTimeOffset? AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest_Command"></a> Command

Gets the workflow command to apply.

```csharp
public string Command { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for the workflow transition.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest_DisplayName"></a> DisplayName

Gets the optional operator-facing action name.

```csharp
public string? DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest_ExpiresAtUtc"></a> ExpiresAtUtc

Gets the optional UTC timestamp when the action expires.

```csharp
public DateTimeOffset? ExpiresAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest_Metadata"></a> Metadata

Gets optional transition metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest_Reason"></a> Reason

Gets the optional operator-facing transition reason.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest_SubjectId"></a> SubjectId

Gets the optional subject identifier affected by the action.

```csharp
public string? SubjectId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest_SubjectKind"></a> SubjectKind

Gets the optional subject kind affected by the action.

```csharp
public string? SubjectKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowRequest_TenantId"></a> TenantId

Gets the tenant identifier to transition.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
