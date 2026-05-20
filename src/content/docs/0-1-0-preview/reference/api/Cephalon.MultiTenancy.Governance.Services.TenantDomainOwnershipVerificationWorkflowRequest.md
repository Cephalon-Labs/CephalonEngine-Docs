---
title: Class TenantDomainOwnershipVerificationWorkflowRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipverificationworkflowrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes one tenant-domain ownership verification workflow transition request.

```csharp
public sealed class TenantDomainOwnershipVerificationWorkflowRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipVerificationWorkflowRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipverificationworkflowrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowRequest__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipVerificationWorkflowRequest\(string, string, string, string?, string?, string?, string?, string?, DateTimeOffset?, DateTimeOffset?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership verification workflow transition request.

```csharp
public TenantDomainOwnershipVerificationWorkflowRequest(string command, string tenantId, string domainName, string? displayName = null, string? verificationMethod = null, string? actor = null, string? reason = null, string? evidence = null, DateTimeOffset? atUtc = null, DateTimeOffset? expiresAtUtc = null, string? correlationId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

The workflow command to apply.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier to transition.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The domain name to transition.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing domain name.

`verificationMethod` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional verification method boundary.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that requested the workflow transition when known.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing transition reason.

`evidence` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional evidence summary observed by the application or provider.

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp used for the transition. The runtime clock is used when omitted.

`expiresAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The optional UTC timestamp when the ownership declaration expires.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for the workflow transition.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional transition metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowRequest_Actor"></a> Actor

Gets the actor that requested the workflow transition when known.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowRequest_AtUtc"></a> AtUtc

Gets the UTC timestamp used for the transition.

```csharp
public DateTimeOffset? AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowRequest_Command"></a> Command

Gets the workflow command to apply.

```csharp
public string Command { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for the workflow transition.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowRequest_DisplayName"></a> DisplayName

Gets the optional operator-facing domain name.

```csharp
public string? DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowRequest_DomainName"></a> DomainName

Gets the canonical domain name to transition.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowRequest_Evidence"></a> Evidence

Gets the optional evidence summary observed by the application or provider.

```csharp
public string? Evidence { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowRequest_ExpiresAtUtc"></a> ExpiresAtUtc

Gets the optional UTC timestamp when the ownership declaration expires.

```csharp
public DateTimeOffset? ExpiresAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowRequest_Metadata"></a> Metadata

Gets optional transition metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowRequest_Reason"></a> Reason

Gets the optional operator-facing transition reason.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowRequest_TenantId"></a> TenantId

Gets the tenant identifier to transition.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowRequest_VerificationMethod"></a> VerificationMethod

Gets the optional verification method boundary.

```csharp
public string? VerificationMethod { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
