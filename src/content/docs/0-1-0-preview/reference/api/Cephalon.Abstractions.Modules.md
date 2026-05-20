---
title: Namespace Cephalon.Abstractions.Modules
slug: 0-1-0-preview/reference/api/cephalon-abstractions-modules
editUrl: false
---

### Classes

 [ModuleBase](/0-1-0-preview/reference/api/cephalon-abstractions-modules-modulebase/)

Provides default no-op implementations for module and lifecycle contracts.

 [ModuleContext](/0-1-0-preview/reference/api/cephalon-abstractions-modules-modulecontext/)

Provides runtime services shared with module lifecycle hooks.

 [ModuleDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-modules-moduledescriptor/)

Describes a module for discovery, ordering, manifest generation, and diagnostics.

### Interfaces

 [IModule](/0-1-0-preview/reference/api/cephalon-abstractions-modules-imodule/)

Defines the host-agnostic contract that every Cephalon module implements.

 [IModuleLifecycle](/0-1-0-preview/reference/api/cephalon-abstractions-modules-imodulelifecycle/)

Defines the deterministic lifecycle hooks managed by the host runtime.
