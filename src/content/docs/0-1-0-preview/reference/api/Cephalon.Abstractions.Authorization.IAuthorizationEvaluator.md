---
title: Interface IAuthorizationEvaluator
slug: 0-1-0-preview/reference/api/cephalon-abstractions-authorization-iauthorizationevaluator
editUrl: false
---

Namespace: [Cephalon.Abstractions.Authorization](/0-1-0-preview/reference/api/cephalon-abstractions-authorization/)  
Assembly: Cephalon.Abstractions.dll  

Evaluates access decisions for the current authorization runtime.

```csharp
public interface IAuthorizationEvaluator
```

## Methods

### <a id="Cephalon_Abstractions_Authorization_IAuthorizationEvaluator_EvaluateAsync_Cephalon_Abstractions_Authorization_AuthorizationSubject_Cephalon_Abstractions_Authorization_AuthorizationResource_Cephalon_Abstractions_Authorization_AuthorizationContext_System_Threading_CancellationToken_"></a> EvaluateAsync\(AuthorizationSubject, AuthorizationResource, AuthorizationContext, CancellationToken\)

Evaluates one authorization request.

```csharp
ValueTask<AuthorizationDecision> EvaluateAsync(AuthorizationSubject subject, AuthorizationResource resource, AuthorizationContext context, CancellationToken cancellationToken = default)
```

#### Parameters

`subject` [AuthorizationSubject](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationsubject/)

The subject requesting access.

`resource` [AuthorizationResource](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationresource/)

The protected resource being accessed.

`context` [AuthorizationContext](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationcontext/)

The operation-specific authorization context.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[AuthorizationDecision](/0-1-0-preview/reference/api/cephalon-abstractions-authorization-authorizationdecision/)\>

A task that completes with the resulting authorization decision.
