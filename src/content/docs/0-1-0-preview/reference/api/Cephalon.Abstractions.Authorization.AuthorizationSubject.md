---
title: Class AuthorizationSubject
slug: 0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationsubject
editUrl: false
---

Namespace: [Cephalon.Abstractions.Authorization](/0-1-0-preview/reference/api/cephalon-abstractions-authorization/)  
Assembly: Cephalon.Abstractions.dll  

Describes the caller or actor being evaluated by an authorization policy.

```csharp
public sealed class AuthorizationSubject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuthorizationSubject](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationsubject/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Authorization_AuthorizationSubject__ctor_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AuthorizationSubject\(string, string?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new authorization subject.

```csharp
public AuthorizationSubject(string subjectId, string? displayName = null, IReadOnlyList<string>? roles = null, IReadOnlyList<string>? tenantIds = null, IReadOnlyDictionary<string, string>? attributes = null)
```

#### Parameters

`subjectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable subject identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The human-readable subject name when one is known.

`roles` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional roles assigned to the subject.

`tenantIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional tenant identifiers associated with the subject.

`attributes` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional attributes associated with the subject.

## Properties

### <a id="Cephalon_Abstractions_Authorization_AuthorizationSubject_Attributes"></a> Attributes

Gets the attributes associated with the subject.

```csharp
public IReadOnlyDictionary<string, string> Attributes { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Authorization_AuthorizationSubject_DisplayName"></a> DisplayName

Gets the human-readable subject name when one is known.

```csharp
public string? DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Authorization_AuthorizationSubject_Roles"></a> Roles

Gets the roles assigned to the subject.

```csharp
public IReadOnlyList<string> Roles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Authorization_AuthorizationSubject_SubjectId"></a> SubjectId

Gets the stable subject identifier.

```csharp
public string SubjectId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Authorization_AuthorizationSubject_TenantIds"></a> TenantIds

Gets the tenant identifiers associated with the subject.

```csharp
public IReadOnlyList<string> TenantIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
