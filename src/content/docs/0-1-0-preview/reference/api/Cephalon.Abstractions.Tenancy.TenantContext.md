---
title: Class TenantContext
slug: 0-1-0-preview/reference/api/cephalon-abstractions-tenancy-tenantcontext
editUrl: false
---

Namespace: [Cephalon.Abstractions.Tenancy](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy/)  
Assembly: Cephalon.Abstractions.dll  

Describes the tenant currently associated with an operation or ambient runtime scope.

```csharp
public sealed class TenantContext
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantContext](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy-tenantcontext/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Tenancy_TenantContext__ctor_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantContext\(string, string?, string?, string?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new tenant context.

```csharp
public TenantContext(string tenantId, string? tenantKey = null, string? displayName = null, string? parentTenantId = null, IReadOnlyList<string>? domains = null, IReadOnlyDictionary<string, string>? attributes = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable tenant identifier.

`tenantKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tenant key, slug, or subdomain-friendly identifier when one is known.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The human-readable tenant name when one is known.

`parentTenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The parent tenant identifier when one is known.

`domains` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional domains associated with the tenant.

`attributes` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional tenant attributes.

## Properties

### <a id="Cephalon_Abstractions_Tenancy_TenantContext_Attributes"></a> Attributes

Gets the tenant attributes.

```csharp
public IReadOnlyDictionary<string, string> Attributes { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Tenancy_TenantContext_DisplayName"></a> DisplayName

Gets the human-readable tenant name when one is known.

```csharp
public string? DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Tenancy_TenantContext_Domains"></a> Domains

Gets the domains associated with the tenant.

```csharp
public IReadOnlyList<string> Domains { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Tenancy_TenantContext_ParentTenantId"></a> ParentTenantId

Gets the parent tenant identifier when one is known.

```csharp
public string? ParentTenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Tenancy_TenantContext_TenantId"></a> TenantId

Gets the stable tenant identifier.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Tenancy_TenantContext_TenantKey"></a> TenantKey

Gets the tenant key, slug, or subdomain-friendly identifier when one is known.

```csharp
public string? TenantKey { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
