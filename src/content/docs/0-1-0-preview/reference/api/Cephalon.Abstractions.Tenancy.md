---
title: Namespace Cephalon.Abstractions.Tenancy
slug: 0-1-0-preview/reference/api/cephalon-abstractions-tenancy
editUrl: false
---

### Classes

 [TenantContext](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy-tenantcontext/)

Describes the tenant currently associated with an operation or ambient runtime scope.

 [TenantResolutionRequest](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy-tenantresolutionrequest/)

Describes the host-neutral hints available when resolving a tenant for the current operation.

 [TenantResolutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy-tenantresolutionresult/)

Describes the outcome of one tenant-resolution attempt.

### Interfaces

 [ITenantContextAccessor](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy-itenantcontextaccessor/)

Exposes the tenant context currently active for the ambient runtime scope.

 [ITenantResolver](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy-itenantresolver/)

Resolves the tenant context for the current operation from host-neutral hints.
