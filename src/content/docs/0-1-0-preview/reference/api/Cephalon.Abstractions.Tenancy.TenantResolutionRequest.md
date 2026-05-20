---
title: Class TenantResolutionRequest
slug: 0-1-0-preview/reference/api/cephalon-abstractions-tenancy-tenantresolutionrequest
editUrl: false
---

Namespace: [Cephalon.Abstractions.Tenancy](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy/)  
Assembly: Cephalon.Abstractions.dll  

Describes the host-neutral hints available when resolving a tenant for the current operation.

```csharp
public sealed class TenantResolutionRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantResolutionRequest](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy-tenantresolutionrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Tenancy_TenantResolutionRequest__ctor_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantResolutionRequest\(string?, string?, string?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a new tenant-resolution request.

```csharp
public TenantResolutionRequest(string? hostName = null, string? pathBase = null, string? requestedTenantId = null, string? requestedTenantKey = null, string? userId = null, IReadOnlyDictionary<string, string>? attributes = null)
```

#### Parameters

`hostName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The host name associated with the current request when one is known.

`pathBase` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The path base associated with the current request when one is known.

`requestedTenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The explicitly requested tenant identifier when one is known.

`requestedTenantKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The explicitly requested tenant key when one is known.

`userId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The current user identifier when one is known.

`attributes` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional resolution hints supplied by the host or caller.

## Properties

### <a id="Cephalon_Abstractions_Tenancy_TenantResolutionRequest_Attributes"></a> Attributes

Gets optional resolution hints supplied by the host or caller.

```csharp
public IReadOnlyDictionary<string, string> Attributes { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Tenancy_TenantResolutionRequest_HostName"></a> HostName

Gets the host name associated with the current request when one is known.

```csharp
public string? HostName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Tenancy_TenantResolutionRequest_PathBase"></a> PathBase

Gets the path base associated with the current request when one is known.

```csharp
public string? PathBase { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Tenancy_TenantResolutionRequest_RequestedTenantId"></a> RequestedTenantId

Gets the explicitly requested tenant identifier when one is known.

```csharp
public string? RequestedTenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Tenancy_TenantResolutionRequest_RequestedTenantKey"></a> RequestedTenantKey

Gets the explicitly requested tenant key when one is known.

```csharp
public string? RequestedTenantKey { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Tenancy_TenantResolutionRequest_UserId"></a> UserId

Gets the current user identifier when one is known.

```csharp
public string? UserId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
