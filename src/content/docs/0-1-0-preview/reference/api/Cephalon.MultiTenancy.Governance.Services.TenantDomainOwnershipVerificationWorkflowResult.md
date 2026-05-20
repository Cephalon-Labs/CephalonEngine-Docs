---
title: Class TenantDomainOwnershipVerificationWorkflowResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipverificationworkflowresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of one tenant-domain ownership verification workflow transition.

```csharp
public sealed class TenantDomainOwnershipVerificationWorkflowResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipVerificationWorkflowResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipverificationworkflowresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowResult__ctor_System_String_System_String_System_String_System_String_System_Boolean_System_DateTimeOffset_System_String_System_String_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipVerificationWorkflowResult\(string, string, string, string, bool, DateTimeOffset, string?, string?, TenantDomainOwnershipDescriptor?, string, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership verification workflow transition result.

```csharp
public TenantDomainOwnershipVerificationWorkflowResult(string tenantId, string domainName, string command, string outcome, bool applied, DateTimeOffset occurredAtUtc, string? previousStatus, string? currentStatus, TenantDomainOwnershipDescriptor? domainOwnership, string reason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was targeted.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The domain name that was targeted.

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

The workflow command that was requested.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The workflow transition outcome.

`applied` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the workflow transition was applied.

`occurredAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the workflow transition was evaluated.

`previousStatus` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The domain ownership status before the workflow transition when one existed.

`currentStatus` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The domain ownership status after the workflow transition when one exists.

`domainOwnership` [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

The resulting domain ownership descriptor when one exists.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing transition reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowResult_Applied"></a> Applied

Gets a value indicating whether the workflow transition was applied.

```csharp
public bool Applied { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowResult_Command"></a> Command

Gets the workflow command that was requested.

```csharp
public string Command { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowResult_CurrentStatus"></a> CurrentStatus

Gets the domain ownership status after the workflow transition when one exists.

```csharp
public string? CurrentStatus { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowResult_DomainName"></a> DomainName

Gets the canonical domain name that was targeted.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowResult_DomainOwnership"></a> DomainOwnership

Gets the resulting domain ownership descriptor when one exists.

```csharp
public TenantDomainOwnershipDescriptor? DomainOwnership { get; }
```

#### Property Value

 [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowResult_OccurredAtUtc"></a> OccurredAtUtc

Gets the UTC timestamp when the workflow transition was evaluated.

```csharp
public DateTimeOffset OccurredAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowResult_Outcome"></a> Outcome

Gets the workflow transition outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowResult_PreviousStatus"></a> PreviousStatus

Gets the domain ownership status before the workflow transition when one existed.

```csharp
public string? PreviousStatus { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowResult_Reason"></a> Reason

Gets the operator-facing transition reason.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowResult_TenantId"></a> TenantId

Gets the tenant identifier that was targeted.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
