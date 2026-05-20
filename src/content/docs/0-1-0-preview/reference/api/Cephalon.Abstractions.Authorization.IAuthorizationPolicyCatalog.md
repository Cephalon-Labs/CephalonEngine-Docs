---
title: Interface IAuthorizationPolicyCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-authorization-iauthorizationpolicycatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Authorization](/0-1-0-preview/reference/api/cephalon-abstractions-authorization/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the authorization policies visible to the current runtime.

```csharp
public interface IAuthorizationPolicyCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Authorization_IAuthorizationPolicyCatalog_Policies"></a> Policies

Gets all authorization policies visible to the current runtime.

```csharp
IReadOnlyList<AuthorizationPolicyDescriptor> Policies { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuthorizationPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationpolicydescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Authorization_IAuthorizationPolicyCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one authorization policy by its stable identifier.

```csharp
AuthorizationPolicyDescriptor? GetById(string policyId)
```

#### Parameters

`policyId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The authorization-policy identifier to resolve.

#### Returns

 [AuthorizationPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationpolicydescriptor/)?

The matching policy, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Authorization_IAuthorizationPolicyCatalog_GetByMode_Cephalon_Abstractions_Authorization_AuthorizationMode_"></a> GetByMode\(AuthorizationMode\)

Gets all authorization policies that support the requested mode.

```csharp
IReadOnlyList<AuthorizationPolicyDescriptor> GetByMode(AuthorizationMode mode)
```

#### Parameters

`mode` [AuthorizationMode](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationmode/)

The authorization mode to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuthorizationPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationpolicydescriptor/)\>

The matching policies, or an empty list when none support the requested mode.
