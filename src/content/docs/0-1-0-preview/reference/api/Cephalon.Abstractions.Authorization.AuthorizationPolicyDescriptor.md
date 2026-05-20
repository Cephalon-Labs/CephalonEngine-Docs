---
title: Class AuthorizationPolicyDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationpolicydescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Authorization](/0-1-0-preview/reference/api/cephalon-abstractions-authorization/)  
Assembly: Cephalon.Abstractions.dll  

Describes one authorization policy surface contributed to the active runtime.

```csharp
public sealed class AuthorizationPolicyDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuthorizationPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationpolicydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Authorization_AuthorizationPolicyDescriptor__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Authorization_AuthorizationMode__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AuthorizationPolicyDescriptor\(string, string, string, IReadOnlyList<AuthorizationMode\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new authorization policy descriptor.

```csharp
public AuthorizationPolicyDescriptor(string id, string displayName, string description, IReadOnlyList<AuthorizationMode>? modes = null, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable authorization-policy identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing authorization-policy name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable authorization-policy description.

`modes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuthorizationMode](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationmode/)\>?

The authorization modes supported by the policy.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional descriptive tags associated with the policy.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the policy.

## Properties

### <a id="Cephalon_Abstractions_Authorization_AuthorizationPolicyDescriptor_Description"></a> Description

Gets the human-readable authorization-policy description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Authorization_AuthorizationPolicyDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing authorization-policy name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Authorization_AuthorizationPolicyDescriptor_Id"></a> Id

Gets the stable authorization-policy identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Authorization_AuthorizationPolicyDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata associated with the policy.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Authorization_AuthorizationPolicyDescriptor_Modes"></a> Modes

Gets the authorization modes supported by the policy.

```csharp
public IReadOnlyList<AuthorizationMode> Modes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuthorizationMode](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationmode/)\>

### <a id="Cephalon_Abstractions_Authorization_AuthorizationPolicyDescriptor_Tags"></a> Tags

Gets descriptive tags associated with the policy.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
