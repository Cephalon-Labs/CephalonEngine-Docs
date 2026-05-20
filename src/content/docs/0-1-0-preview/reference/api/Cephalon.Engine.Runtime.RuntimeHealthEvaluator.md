---
title: Class RuntimeHealthEvaluator
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehealthevaluator
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Evaluates runtime liveness, readiness, and dependency health.

```csharp
public sealed class RuntimeHealthEvaluator
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RuntimeHealthEvaluator](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehealthevaluator/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Runtime_RuntimeHealthEvaluator__ctor_Cephalon_Engine_Runtime_IRuntime_System_Collections_Generic_IEnumerable_Cephalon_Abstractions_Health_IDependencyHealthContributor__"></a> RuntimeHealthEvaluator\(IRuntime, IEnumerable<IDependencyHealthContributor\>\)

Initializes a new instance of the <xref href="Cephalon.Engine.Runtime.RuntimeHealthEvaluator" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RuntimeHealthEvaluator(IRuntime runtime, IEnumerable<IDependencyHealthContributor> dependencyHealthContributors)
```

#### Parameters

`runtime` [IRuntime](/0-1-0-preview/reference/api/cephalon-engine-runtime-iruntime/)

The runtime to evaluate.

`dependencyHealthContributors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IDependencyHealthContributor\>

The dependency contributors that provide health data.

## Methods

### <a id="Cephalon_Engine_Runtime_RuntimeHealthEvaluator_EvaluateDependencies"></a> EvaluateDependencies\(\)

Evaluates dependency-level health reports without applying probe semantics.

```csharp
public DependencyHealthReport[] EvaluateDependencies()
```

#### Returns

 DependencyHealthReport\[\]

The dependency-health reports visible to the evaluator.

### <a id="Cephalon_Engine_Runtime_RuntimeHealthEvaluator_EvaluateLiveness"></a> EvaluateLiveness\(\)

Evaluates whether the runtime process is live.

```csharp
public RuntimeHealthReport EvaluateLiveness()
```

#### Returns

 [RuntimeHealthReport](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehealthreport/)

The liveness report.

### <a id="Cephalon_Engine_Runtime_RuntimeHealthEvaluator_EvaluateReadiness"></a> EvaluateReadiness\(\)

Evaluates whether the runtime is ready to serve traffic.

```csharp
public RuntimeHealthReport EvaluateReadiness()
```

#### Returns

 [RuntimeHealthReport](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehealthreport/)

The readiness report.
