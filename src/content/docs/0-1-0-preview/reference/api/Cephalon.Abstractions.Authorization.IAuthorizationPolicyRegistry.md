---
title: Interface IAuthorizationPolicyRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-authorization-iauthorizationpolicyregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Authorization](/0-1-0-preview/reference/api/cephalon-abstractions-authorization/)  
Assembly: Cephalon.Abstractions.dll  

Receives authorization-policy descriptors contributed by active modules or packages.

```csharp
public interface IAuthorizationPolicyRegistry
```

## Methods

### <a id="Cephalon_Abstractions_Authorization_IAuthorizationPolicyRegistry_Add_Cephalon_Abstractions_Authorization_AuthorizationPolicyDescriptor_"></a> Add\(AuthorizationPolicyDescriptor\)

Adds an authorization policy to the current runtime composition.

```csharp
void Add(AuthorizationPolicyDescriptor policy)
```

#### Parameters

`policy` [AuthorizationPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationpolicydescriptor/)

The authorization-policy descriptor to register.
