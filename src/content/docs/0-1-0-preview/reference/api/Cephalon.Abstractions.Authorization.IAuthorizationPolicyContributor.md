---
title: Interface IAuthorizationPolicyContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-authorization-iauthorizationpolicycontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Authorization](/0-1-0-preview/reference/api/cephalon-abstractions-authorization/)  
Assembly: Cephalon.Abstractions.dll  

Contributes one or more authorization-policy descriptors to the active runtime.

```csharp
public interface IAuthorizationPolicyContributor
```

## Methods

### <a id="Cephalon_Abstractions_Authorization_IAuthorizationPolicyContributor_RegisterPolicies_Cephalon_Abstractions_Authorization_IAuthorizationPolicyRegistry_"></a> RegisterPolicies\(IAuthorizationPolicyRegistry\)

Registers one or more authorization-policy descriptors with the supplied registry.

```csharp
void RegisterPolicies(IAuthorizationPolicyRegistry policies)
```

#### Parameters

`policies` [IAuthorizationPolicyRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-iauthorizationpolicyregistry/)

The registry that collects contributed authorization-policy descriptors.
