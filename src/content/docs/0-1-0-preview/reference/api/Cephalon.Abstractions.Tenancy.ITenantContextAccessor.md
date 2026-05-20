---
title: Interface ITenantContextAccessor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-tenancy-itenantcontextaccessor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Tenancy](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the tenant context currently active for the ambient runtime scope.

```csharp
public interface ITenantContextAccessor
```

## Properties

### <a id="Cephalon_Abstractions_Tenancy_ITenantContextAccessor_Current"></a> Current

Gets the tenant context currently active for the ambient runtime scope.

```csharp
TenantContext? Current { get; }
```

#### Property Value

 [TenantContext](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy-tenantcontext/)?
