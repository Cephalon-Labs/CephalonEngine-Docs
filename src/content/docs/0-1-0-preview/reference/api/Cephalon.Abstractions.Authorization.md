---
title: Namespace Cephalon.Abstractions.Authorization
slug: 0-1-0-preview/reference/api/cephalon-abstractions-authorization
editUrl: false
---

### Classes

 [AuthorizationContext](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationcontext/)

Describes the operation-specific context supplied to an authorization evaluation.

 [AuthorizationDecision](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationdecision/)

Describes the outcome of one authorization evaluation.

 [AuthorizationPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationpolicydescriptor/)

Describes one authorization policy surface contributed to the active runtime.

 [AuthorizationResource](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationresource/)

Describes the protected resource being evaluated by an authorization policy.

 [AuthorizationSubject](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationsubject/)

Describes the caller or actor being evaluated by an authorization policy.

### Interfaces

 [IAuthorizationEvaluator](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-iauthorizationevaluator/)

Evaluates access decisions for the current authorization runtime.

 [IAuthorizationPolicyCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-iauthorizationpolicycatalog/)

Exposes the authorization policies visible to the current runtime.

 [IAuthorizationPolicyContributor](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-iauthorizationpolicycontributor/)

Contributes one or more authorization-policy descriptors to the active runtime.

 [IAuthorizationPolicyRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-iauthorizationpolicyregistry/)

Receives authorization-policy descriptors contributed by active modules or packages.

### Enums

 [AuthorizationMode](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationmode/)

Identifies one authorization approach active inside a policy evaluation.
