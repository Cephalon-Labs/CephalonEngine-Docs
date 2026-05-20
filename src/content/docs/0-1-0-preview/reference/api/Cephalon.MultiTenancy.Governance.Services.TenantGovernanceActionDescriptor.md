---
title: Class TenantGovernanceActionDescriptor
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondescriptor
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes one tenant-governance approval or remediation action.

```csharp
public sealed class TenantGovernanceActionDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantGovernanceActionDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantGovernanceActionDescriptor\(string, string, string, string?, string?, string?, string, string?, string?, DateTimeOffset?, DateTimeOffset?, DateTimeOffset?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-governance action descriptor.

```csharp
public TenantGovernanceActionDescriptor(string actionId, string tenantId, string actionKind, string? subjectKind = null, string? subjectId = null, string? displayName = null, string status = "pending-approval", string? requestedBy = null, string? approvedBy = null, DateTimeOffset? createdAtUtc = null, DateTimeOffset? decidedAtUtc = null, DateTimeOffset? expiresAtUtc = null, string? sourceModuleId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`actionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable action identifier.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable tenant identifier.

`actionKind` [string](https://learn.microsoft.com/dotnet/api/system.string)

The governance action kind.

`subjectKind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The kind of subject affected by the action.

`subjectId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable subject identifier affected by the action.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing action name.

`status` [string](https://learn.microsoft.com/dotnet/api/system.string)

The governance action status.

`requestedBy` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that requested the action when known.

`approvedBy` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that approved or remediated the action when known.

`createdAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the action was created.

`decidedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the action was approved, rejected, or remediated.

`expiresAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the action expires.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The module that contributed the action when one is known.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata attached to the action.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_ActionId"></a> ActionId

Gets the stable action identifier.

```csharp
public string ActionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_ActionKind"></a> ActionKind

Gets the governance action kind.

```csharp
public string ActionKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_ApprovedBy"></a> ApprovedBy

Gets the actor that approved or remediated the action when known.

```csharp
public string? ApprovedBy { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_CreatedAtUtc"></a> CreatedAtUtc

Gets the UTC timestamp when the action was created.

```csharp
public DateTimeOffset? CreatedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_DecidedAtUtc"></a> DecidedAtUtc

Gets the UTC timestamp when the action was approved, rejected, or remediated.

```csharp
public DateTimeOffset? DecidedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_DisplayName"></a> DisplayName

Gets the optional operator-facing action name.

```csharp
public string? DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_ExpiresAtUtc"></a> ExpiresAtUtc

Gets the UTC timestamp when the action expires.

```csharp
public DateTimeOffset? ExpiresAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_Metadata"></a> Metadata

Gets optional operator-facing metadata attached to the action.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_RequestedBy"></a> RequestedBy

Gets the actor that requested the action when known.

```csharp
public string? RequestedBy { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_SourceModuleId"></a> SourceModuleId

Gets the module that contributed the action when one is known.

```csharp
public string? SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_Status"></a> Status

Gets the governance action status.

```csharp
public string Status { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_SubjectId"></a> SubjectId

Gets the stable subject identifier affected by the action.

```csharp
public string SubjectId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_SubjectKind"></a> SubjectKind

Gets the kind of subject affected by the action.

```csharp
public string SubjectKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantGovernanceActionDescriptor_TenantId"></a> TenantId

Gets the stable tenant identifier.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
