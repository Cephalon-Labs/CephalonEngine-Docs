---
title: Class TenantDomainOwnershipDescriptor
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes one declared domain ownership relationship for a tenant.

```csharp
public sealed class TenantDomainOwnershipDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipDescriptor\(string, string, string?, string, string?, DateTimeOffset?, DateTimeOffset?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership descriptor.

```csharp
public TenantDomainOwnershipDescriptor(string tenantId, string domainName, string? displayName = null, string status = "pending", string? verificationMethod = null, DateTimeOffset? verifiedAtUtc = null, DateTimeOffset? expiresAtUtc = null, string? sourceModuleId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable tenant identifier.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The domain name claimed by the tenant.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing domain name.

`status` [string](https://learn.microsoft.com/dotnet/api/system.string)

The domain ownership status.

`verificationMethod` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The verification method associated with the descriptor.

`verifiedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when ownership was verified.

`expiresAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when ownership expires.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The module that contributed the domain ownership descriptor when one is known.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata attached to the descriptor.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_DisplayName"></a> DisplayName

Gets the optional operator-facing domain name.

```csharp
public string? DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_DomainName"></a> DomainName

Gets the canonical domain name claimed by the tenant.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_ExpiresAtUtc"></a> ExpiresAtUtc

Gets the UTC timestamp when ownership expires.

```csharp
public DateTimeOffset? ExpiresAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_Metadata"></a> Metadata

Gets optional operator-facing metadata attached to the descriptor.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_SourceModuleId"></a> SourceModuleId

Gets the module that contributed the domain ownership descriptor when one is known.

```csharp
public string? SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_Status"></a> Status

Gets the domain ownership status.

```csharp
public string Status { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_TenantId"></a> TenantId

Gets the stable tenant identifier.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_VerificationMethod"></a> VerificationMethod

Gets the verification method associated with the descriptor.

```csharp
public string VerificationMethod { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_VerifiedAtUtc"></a> VerifiedAtUtc

Gets the UTC timestamp when ownership was verified.

```csharp
public DateTimeOffset? VerifiedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?
