---
title: Class AuthorizationContext
slug: 0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationcontext
editUrl: false
---

Namespace: [Cephalon.Abstractions.Authorization](/0-1-0-preview/reference/api/cephalon-abstractions-authorization/)  
Assembly: Cephalon.Abstractions.dll  

Describes the operation-specific context supplied to an authorization evaluation.

```csharp
public sealed class AuthorizationContext
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuthorizationContext](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationcontext/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Authorization_AuthorizationContext__ctor_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AuthorizationContext\(string, string?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a new authorization context.

```csharp
public AuthorizationContext(string action, string? policyId = null, string? tenantId = null, string? correlationId = null, IReadOnlyDictionary<string, string>? attributes = null)
```

#### Parameters

`action` [string](https://learn.microsoft.com/dotnet/api/system.string)

The action being requested, such as <code>read</code>, <code>write</code>, or <code>approve</code>.

`policyId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The explicit policy identifier requested by the caller when one is known.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tenant identifier associated with the current operation.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The correlation identifier associated with the current operation.

`attributes` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operation-specific attributes.

## Properties

### <a id="Cephalon_Abstractions_Authorization_AuthorizationContext_Action"></a> Action

Gets the action being requested.

```csharp
public string Action { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Authorization_AuthorizationContext_Attributes"></a> Attributes

Gets the operation-specific attributes.

```csharp
public IReadOnlyDictionary<string, string> Attributes { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Authorization_AuthorizationContext_CorrelationId"></a> CorrelationId

Gets the correlation identifier associated with the current operation.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Authorization_AuthorizationContext_PolicyId"></a> PolicyId

Gets the explicit policy identifier requested by the caller when one is known.

```csharp
public string? PolicyId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Authorization_AuthorizationContext_TenantId"></a> TenantId

Gets the tenant identifier associated with the current operation.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
