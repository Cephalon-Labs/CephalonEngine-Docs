---
title: Enum AuthorizationMode
slug: 0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationmode
editUrl: false
---

Namespace: [Cephalon.Abstractions.Authorization](/0-1-0-preview/reference/api/cephalon-abstractions-authorization/)  
Assembly: Cephalon.Abstractions.dll  

Identifies one authorization approach active inside a policy evaluation.

```csharp
public enum AuthorizationMode
```

## Fields

`Abac = 1` 

Indicates an attribute-based access-control evaluation.



`Policy = 2` 

Indicates a policy-driven authorization evaluation.



`Rbac = 0` 

Indicates a role-based access-control evaluation.
