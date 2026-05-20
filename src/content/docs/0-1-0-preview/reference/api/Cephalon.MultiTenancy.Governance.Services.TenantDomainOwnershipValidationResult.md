---
title: Class TenantDomainOwnershipValidationResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipvalidationresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of one tenant-domain ownership validation.

```csharp
public sealed class TenantDomainOwnershipValidationResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipValidationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipvalidationresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationResult__ctor_System_String_System_String_System_String_System_Boolean_System_DateTimeOffset_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipValidationResult\(string, string, string, bool, DateTimeOffset, TenantDomainOwnershipDescriptor?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership validation result.

```csharp
public TenantDomainOwnershipValidationResult(string tenantId, string domainName, string outcome, bool valid, DateTimeOffset validatedAtUtc, TenantDomainOwnershipDescriptor? matchedDomainOwnership = null, string? reason = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was validated.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canonical domain name that was validated.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable validation outcome.

`valid` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether validation granted domain ownership use.

`validatedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when validation executed.

`matchedDomainOwnership` [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

The matching domain ownership descriptor considered by validation.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing validation reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationResult_DomainName"></a> DomainName

Gets the canonical domain name that was validated.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationResult_MatchedDomainOwnership"></a> MatchedDomainOwnership

Gets the matching domain ownership descriptor considered by validation.

```csharp
public TenantDomainOwnershipDescriptor? MatchedDomainOwnership { get; }
```

#### Property Value

 [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationResult_Outcome"></a> Outcome

Gets the stable validation outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationResult_Reason"></a> Reason

Gets the optional operator-facing validation reason.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationResult_TenantId"></a> TenantId

Gets the tenant identifier that was validated.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationResult_Valid"></a> Valid

Gets a value indicating whether validation granted domain ownership use.

```csharp
public bool Valid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipValidationResult_ValidatedAtUtc"></a> ValidatedAtUtc

Gets the UTC timestamp when validation executed.

```csharp
public DateTimeOffset ValidatedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)
