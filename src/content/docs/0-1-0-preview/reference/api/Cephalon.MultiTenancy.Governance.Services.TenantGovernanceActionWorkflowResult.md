---
title: Class TenantGovernanceActionWorkflowResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactionworkflowresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of one tenant-governance action workflow transition.

```csharp
public sealed class TenantGovernanceActionWorkflowResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantGovernanceActionWorkflowResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactionworkflowresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowResult__ctor_System_String_System_String_System_String_System_String_System_Boolean_System_DateTimeOffset_System_String_System_String_Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantGovernanceActionWorkflowResult\(string, string, string, string, bool, DateTimeOffset, string?, string?, TenantGovernanceActionDescriptor?, string, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-governance action workflow transition result.

```csharp
public TenantGovernanceActionWorkflowResult(string tenantId, string actionId, string command, string outcome, bool applied, DateTimeOffset occurredAtUtc, string? previousStatus, string? currentStatus, TenantGovernanceActionDescriptor? action, string reason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was targeted.

`actionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The governance action identifier that was targeted.

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

The workflow command that was requested.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The workflow transition outcome.

`applied` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the workflow transition was applied.

`occurredAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the workflow transition was evaluated.

`previousStatus` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The action status before the workflow transition when one existed.

`currentStatus` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The action status after the workflow transition when one exists.

`action` [TenantGovernanceActionDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondescriptor/)?

The resulting action descriptor when one exists.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing transition reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowResult_Action"></a> Action

Gets the resulting action descriptor when one exists.

```csharp
public TenantGovernanceActionDescriptor? Action { get; }
```

#### Property Value

 [TenantGovernanceActionDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowResult_ActionId"></a> ActionId

Gets the governance action identifier that was targeted.

```csharp
public string ActionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowResult_Applied"></a> Applied

Gets a value indicating whether the workflow transition was applied.

```csharp
public bool Applied { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowResult_Command"></a> Command

Gets the workflow command that was requested.

```csharp
public string Command { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowResult_CurrentStatus"></a> CurrentStatus

Gets the action status after the workflow transition when one exists.

```csharp
public string? CurrentStatus { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowResult_OccurredAtUtc"></a> OccurredAtUtc

Gets the UTC timestamp when the workflow transition was evaluated.

```csharp
public DateTimeOffset OccurredAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowResult_Outcome"></a> Outcome

Gets the workflow transition outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowResult_PreviousStatus"></a> PreviousStatus

Gets the action status before the workflow transition when one existed.

```csharp
public string? PreviousStatus { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowResult_Reason"></a> Reason

Gets the operator-facing transition reason.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionWorkflowResult_TenantId"></a> TenantId

Gets the tenant identifier that was targeted.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
