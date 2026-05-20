---
title: Namespace Cephalon.Abstractions.Patterns
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns
editUrl: false
---

### Classes

 [BackendForFrontendBehaviorFilterDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendbehaviorfilterdescriptor/)

Describes behavior, capability, and tag-selection hints for one backend-for-frontend binding.

 [BackendForFrontendClientBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendclientbindingdescriptor/)

Describes one client-specific transport binding owned by a Cephalon module.

 [PatternDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-patterndescriptor/)

Describes one pattern that can shape a Cephalon app.

 [StranglerFigIngressRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigingressruntimedescriptor/)

Describes the effective strangler-fig ingress materialization answer for one route.

 [StranglerFigMigrationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigmigrationruntimedescriptor/)

Describes the effective runtime migration policy for one strangler-fig route.

 [StranglerFigRequest](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigrequest/)

Describes one request that should be evaluated by a strangler-fig router.

 [StranglerFigRouteDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigroutedescriptor/)

Describes one strangler-fig route owned by a Cephalon module.

 [StranglerFigRouteResolution](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigrouteresolution/)

Describes the strangler-fig routing decision made for one request.

### Interfaces

 [IBackendForFrontendClientBindingContributor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-ibackendforfrontendclientbindingcontributor/)

Allows a module to contribute backend-for-frontend client bindings into the active runtime.

 [IBackendForFrontendClientBindingRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-ibackendforfrontendclientbindingregistry/)

Collects backend-for-frontend client binding descriptors contributed to the active runtime.

 [IBackendForFrontendRuntimeCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-ibackendforfrontendruntimecatalog/)

Exposes the backend-for-frontend client bindings visible to the current runtime.

 [IStranglerFigIngressRuntimeCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-istranglerfigingressruntimecatalog/)

Exposes the normalized strangler-fig ingress materialization answers visible to the current runtime.

 [IStranglerFigMigrationRuntimeCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-istranglerfigmigrationruntimecatalog/)

Exposes the effective strangler-fig migration policy visible to the current runtime.

 [IStranglerFigRouteContributor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-istranglerfigroutecontributor/)

Allows a module to contribute strangler-fig routes into the active runtime.

 [IStranglerFigRouteRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-istranglerfigrouteregistry/)

Collects strangler-fig route descriptors contributed to the active runtime.

 [IStranglerFigRouter](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-istranglerfigrouter/)

Resolves requests against the active strangler-fig migration routes.

 [IStranglerFigRuntimeCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-istranglerfigruntimecatalog/)

Exposes the strangler-fig routes visible to the current runtime.

### Enums

 [PatternKind](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-patternkind/)

Categorizes the role a pattern plays in an app shape.

 [StranglerFigTarget](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigtarget/)

Identifies which side of a strangler-fig migration boundary currently owns traffic.
