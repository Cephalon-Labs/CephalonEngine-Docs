---
title: Class AuthorizationDecision
slug: 0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationdecision
editUrl: false
---

Namespace: [Cephalon.Abstractions.Authorization](/0-1-0-preview/reference/api/cephalon-abstractions-authorization/)  
Assembly: Cephalon.Abstractions.dll  

Describes the outcome of one authorization evaluation.

```csharp
public sealed class AuthorizationDecision
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuthorizationDecision](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationdecision/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Authorization_AuthorizationDecision__ctor_System_Boolean_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Authorization_AuthorizationMode__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AuthorizationDecision\(bool, string?, string?, IReadOnlyList<AuthorizationMode\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new authorization decision.

```csharp
public AuthorizationDecision(bool isAllowed, string? policyId = null, string? reason = null, IReadOnlyList<AuthorizationMode>? modes = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`isAllowed` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether access was allowed.

`policyId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The policy identifier that produced the decision when one is known.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The human-readable reason associated with the decision.

`modes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuthorizationMode](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationmode/)\>?

The authorization modes that participated in the decision.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional decision metadata.

## Properties

### <a id="Cephalon_Abstractions_Authorization_AuthorizationDecision_IsAllowed"></a> IsAllowed

Gets a value indicating whether access was allowed.

```csharp
public bool IsAllowed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Authorization_AuthorizationDecision_Metadata"></a> Metadata

Gets optional decision metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Authorization_AuthorizationDecision_Modes"></a> Modes

Gets the authorization modes that participated in the decision.

```csharp
public IReadOnlyList<AuthorizationMode> Modes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuthorizationMode](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationmode/)\>

### <a id="Cephalon_Abstractions_Authorization_AuthorizationDecision_PolicyId"></a> PolicyId

Gets the policy identifier that produced the decision when one is known.

```csharp
public string? PolicyId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Authorization_AuthorizationDecision_Reason"></a> Reason

Gets the human-readable reason associated with the decision.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### <a id="Cephalon_Abstractions_Authorization_AuthorizationDecision_Allow_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Authorization_AuthorizationMode__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> Allow\(string?, string?, IReadOnlyList<AuthorizationMode\>?, IReadOnlyDictionary<string, string\>?\)

Creates an allowed authorization decision.

```csharp
public static AuthorizationDecision Allow(string? policyId = null, string? reason = null, IReadOnlyList<AuthorizationMode>? modes = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`policyId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The policy identifier that produced the decision when one is known.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The human-readable reason associated with the decision.

`modes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuthorizationMode](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationmode/)\>?

The authorization modes that participated in the decision.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional decision metadata.

#### Returns

 [AuthorizationDecision](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationdecision/)

An allowed authorization decision.

### <a id="Cephalon_Abstractions_Authorization_AuthorizationDecision_Deny_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Authorization_AuthorizationMode__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> Deny\(string?, string?, IReadOnlyList<AuthorizationMode\>?, IReadOnlyDictionary<string, string\>?\)

Creates a denied authorization decision.

```csharp
public static AuthorizationDecision Deny(string? policyId = null, string? reason = null, IReadOnlyList<AuthorizationMode>? modes = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`policyId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The policy identifier that produced the decision when one is known.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The human-readable reason associated with the decision.

`modes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuthorizationMode](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationmode/)\>?

The authorization modes that participated in the decision.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional decision metadata.

#### Returns

 [AuthorizationDecision](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationdecision/)

A denied authorization decision.
