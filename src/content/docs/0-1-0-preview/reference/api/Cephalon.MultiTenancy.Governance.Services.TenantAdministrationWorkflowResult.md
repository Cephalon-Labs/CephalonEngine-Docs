---
title: Class TenantAdministrationWorkflowResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantadministrationworkflowresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of one tenant-administration workflow command.

```csharp
public sealed class TenantAdministrationWorkflowResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantAdministrationWorkflowResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantadministrationworkflowresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowResult__ctor_System_String_System_String_System_String_System_String_System_String_System_Boolean_System_DateTimeOffset_System_String_System_String_Cephalon_MultiTenancy_Governance_Services_TenantMembershipDescriptor_Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantAdministrationWorkflowResult\(string, string, string, string?, string, bool, DateTimeOffset, string?, string?, TenantMembershipDescriptor?, TenantInvitationDescriptor?, string, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-administration workflow command result.

```csharp
public TenantAdministrationWorkflowResult(string tenantId, string command, string targetKind, string? targetId, string outcome, bool applied, DateTimeOffset occurredAtUtc, string? previousStatus, string? currentStatus, TenantMembershipDescriptor? membership, TenantInvitationDescriptor? invitation, string reason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable tenant identifier targeted by the command.

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant-administration command that was requested.

`targetKind` [string](https://learn.microsoft.com/dotnet/api/system.string)

The kind of target affected by the command.

`targetId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable target identifier affected by the command.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant-administration command outcome.

`applied` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the command was fully applied.

`occurredAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the command was evaluated.

`previousStatus` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The target status before the command when a target existed.

`currentStatus` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The target status after the command when a target exists.

`membership` [TenantMembershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor/)?

The resulting membership descriptor when a membership command produced one.

`invitation` [TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)?

The resulting invitation descriptor when an invitation command produced one.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing command result reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowResult_Applied"></a> Applied

Gets a value indicating whether the command was fully applied.

```csharp
public bool Applied { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowResult_Command"></a> Command

Gets the tenant-administration command that was requested.

```csharp
public string Command { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowResult_CurrentStatus"></a> CurrentStatus

Gets the target status after the command when a target exists.

```csharp
public string? CurrentStatus { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowResult_Invitation"></a> Invitation

Gets the resulting invitation descriptor when an invitation command produced one.

```csharp
public TenantInvitationDescriptor? Invitation { get; }
```

#### Property Value

 [TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowResult_Membership"></a> Membership

Gets the resulting membership descriptor when a membership command produced one.

```csharp
public TenantMembershipDescriptor? Membership { get; }
```

#### Property Value

 [TenantMembershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowResult_OccurredAtUtc"></a> OccurredAtUtc

Gets the UTC timestamp when the command was evaluated.

```csharp
public DateTimeOffset OccurredAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowResult_Outcome"></a> Outcome

Gets the tenant-administration command outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowResult_PreviousStatus"></a> PreviousStatus

Gets the target status before the command when a target existed.

```csharp
public string? PreviousStatus { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowResult_Reason"></a> Reason

Gets the operator-facing command result reason.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowResult_TargetId"></a> TargetId

Gets the stable target identifier affected by the command.

```csharp
public string? TargetId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowResult_TargetKind"></a> TargetKind

Gets the kind of target affected by the command.

```csharp
public string TargetKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowResult_TenantId"></a> TenantId

Gets the stable tenant identifier targeted by the command.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
