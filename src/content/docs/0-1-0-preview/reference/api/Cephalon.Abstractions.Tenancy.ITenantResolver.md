---
title: Interface ITenantResolver
slug: 0-1-0-preview/reference/api/cephalon-abstractions-tenancy-itenantresolver
editUrl: false
---

Namespace: [Cephalon.Abstractions.Tenancy](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy/)  
Assembly: Cephalon.Abstractions.dll  

Resolves the tenant context for the current operation from host-neutral hints.

```csharp
public interface ITenantResolver
```

## Methods

### <a id="Cephalon_Abstractions_Tenancy_ITenantResolver_ResolveAsync_Cephalon_Abstractions_Tenancy_TenantResolutionRequest_System_Threading_CancellationToken_"></a> ResolveAsync\(TenantResolutionRequest, CancellationToken\)

Resolves the tenant context for the supplied request.

```csharp
ValueTask<TenantResolutionResult> ResolveAsync(TenantResolutionRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [TenantResolutionRequest](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy-tenantresolutionrequest/)

The host-neutral resolution request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[TenantResolutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy-tenantresolutionresult/)\>

A task that completes with the resulting tenant-resolution outcome.
