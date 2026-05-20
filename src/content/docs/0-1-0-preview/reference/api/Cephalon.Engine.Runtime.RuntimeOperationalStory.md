---
title: Class RuntimeOperationalStory
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeoperationalstory
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Combines the operator-facing runtime story into one payload that explains what loaded, started, failed, and why.

```csharp
public sealed record RuntimeOperationalStory : IEquatable<RuntimeOperationalStory>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RuntimeOperationalStory](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeoperationalstory/)

#### Implements

[IEquatable<RuntimeOperationalStory\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Runtime_RuntimeOperationalStory__ctor_System_DateTimeOffset_Cephalon_Engine_Runtime_RuntimeStatusSnapshot_System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Manifest_PackageManifest__System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Runtime_RuntimeModuleLifecycleState__System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Runtime_RuntimeLifecycleEvent__"></a> RuntimeOperationalStory\(DateTimeOffset, RuntimeStatusSnapshot, IReadOnlyList<PackageManifest\>, IReadOnlyList<RuntimeModuleLifecycleState\>, IReadOnlyList<RuntimeLifecycleEvent\>\)

Combines the operator-facing runtime story into one payload that explains what loaded, started, failed, and why.

```csharp
public RuntimeOperationalStory(DateTimeOffset GeneratedAtUtc, RuntimeStatusSnapshot Status, IReadOnlyList<PackageManifest> LoadedPackages, IReadOnlyList<RuntimeModuleLifecycleState> Modules, IReadOnlyList<RuntimeLifecycleEvent> Timeline)
```

#### Parameters

`GeneratedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the story snapshot was created.

`Status` [RuntimeStatusSnapshot](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatussnapshot/)

The current runtime lifecycle status snapshot.

`LoadedPackages` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PackageManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packagemanifest/)\>

The packages currently visible to the runtime story.

`Modules` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RuntimeModuleLifecycleState](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimemodulelifecyclestate/)\>

The current lifecycle state for each loaded module.

`Timeline` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RuntimeLifecycleEvent](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimelifecycleevent/)\>

The ordered lifecycle narrative for package load, execution-graph transitions, hosted-execution transitions, module transitions, runtime transitions, and failures.

## Properties

### <a id="Cephalon_Engine_Runtime_RuntimeOperationalStory_ExecutionGraphs"></a> ExecutionGraphs

Gets the current lifecycle state for each execution graph visible to the runtime story.

```csharp
public IReadOnlyList<RuntimeExecutionGraphState> ExecutionGraphs { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RuntimeExecutionGraphState](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeexecutiongraphstate/)\>

### <a id="Cephalon_Engine_Runtime_RuntimeOperationalStory_GeneratedAtUtc"></a> GeneratedAtUtc

The UTC timestamp when the story snapshot was created.

```csharp
public DateTimeOffset GeneratedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Engine_Runtime_RuntimeOperationalStory_HostedExecutions"></a> HostedExecutions

Gets the current lifecycle state for each hosted execution visible to the runtime story.

```csharp
public IReadOnlyList<RuntimeHostedExecutionState> HostedExecutions { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RuntimeHostedExecutionState](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehostedexecutionstate/)\>

### <a id="Cephalon_Engine_Runtime_RuntimeOperationalStory_LoadedPackages"></a> LoadedPackages

The packages currently visible to the runtime story.

```csharp
public IReadOnlyList<PackageManifest> LoadedPackages { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PackageManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packagemanifest/)\>

### <a id="Cephalon_Engine_Runtime_RuntimeOperationalStory_Modules"></a> Modules

The current lifecycle state for each loaded module.

```csharp
public IReadOnlyList<RuntimeModuleLifecycleState> Modules { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RuntimeModuleLifecycleState](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimemodulelifecyclestate/)\>

### <a id="Cephalon_Engine_Runtime_RuntimeOperationalStory_Status"></a> Status

The current runtime lifecycle status snapshot.

```csharp
public RuntimeStatusSnapshot Status { get; init; }
```

#### Property Value

 [RuntimeStatusSnapshot](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatussnapshot/)

### <a id="Cephalon_Engine_Runtime_RuntimeOperationalStory_Timeline"></a> Timeline

The ordered lifecycle narrative for package load, execution-graph transitions, hosted-execution transitions, module transitions, runtime transitions, and failures.

```csharp
public IReadOnlyList<RuntimeLifecycleEvent> Timeline { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RuntimeLifecycleEvent](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimelifecycleevent/)\>
