---
title: Class AuthorizationResource
slug: 0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationresource
editUrl: false
---

Namespace: [Cephalon.Abstractions.Authorization](/0-1-0-preview/reference/api/cephalon-abstractions-authorization/)  
Assembly: Cephalon.Abstractions.dll  

Describes the protected resource being evaluated by an authorization policy.

```csharp
public sealed class AuthorizationResource
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuthorizationResource](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationresource/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Authorization_AuthorizationResource__ctor_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AuthorizationResource\(string, string?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a new authorization resource.

```csharp
public AuthorizationResource(string resourceType, string? resourceId = null, string? tenantId = null, string? ownerSubjectId = null, IReadOnlyDictionary<string, string>? attributes = null)
```

#### Parameters

`resourceType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical resource type identifier.

`resourceId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable resource identifier when one is known.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tenant identifier associated with the resource.

`ownerSubjectId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The owning subject identifier when one is known.

`attributes` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional attributes associated with the resource.

## Properties

### <a id="Cephalon_Abstractions_Authorization_AuthorizationResource_Attributes"></a> Attributes

Gets the attributes associated with the resource.

```csharp
public IReadOnlyDictionary<string, string> Attributes { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Authorization_AuthorizationResource_OwnerSubjectId"></a> OwnerSubjectId

Gets the owning subject identifier when one is known.

```csharp
public string? OwnerSubjectId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Authorization_AuthorizationResource_ResourceId"></a> ResourceId

Gets the stable resource identifier when one is known.

```csharp
public string? ResourceId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Authorization_AuthorizationResource_ResourceType"></a> ResourceType

Gets the logical resource type identifier.

```csharp
public string ResourceType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Authorization_AuthorizationResource_TenantId"></a> TenantId

Gets the tenant identifier associated with the resource.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
