---
title: Interface IBehaviorResilienceRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-resilience-ibehaviorresilienceruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Resilience](/0-1-0-preview/reference/api/cephalon-abstractions-resilience/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the active behavior-execution resilience policies visible to the current runtime.

```csharp
public interface IBehaviorResilienceRuntimeCatalog
```

## Remarks

This runtime-facing surface reports what the behavior dispatch pipeline actually enforces after
defaults and implementation limits have been applied. It complements the requested contract
projected through <code>AppProfile.Resilience</code>.

## Properties

### <a id="Cephalon_Abstractions_Resilience_IBehaviorResilienceRuntimeCatalog_Policies"></a> Policies

Gets all behavior-execution resilience policies visible to the current runtime.

```csharp
IReadOnlyList<BehaviorResilienceRuntimeDescriptor> Policies { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BehaviorResilienceRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorresilienceruntimedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Resilience_IBehaviorResilienceRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one behavior-execution resilience policy by its stable identifier.

```csharp
BehaviorResilienceRuntimeDescriptor? GetById(string policyId)
```

#### Parameters

`policyId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable policy identifier to resolve.

#### Returns

 [BehaviorResilienceRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorresilienceruntimedescriptor/)?

The matching policy descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Resilience_IBehaviorResilienceRuntimeCatalog_Resolve_System_String_System_String_"></a> Resolve\(string, string?\)

Resolves the effective behavior-execution resilience policy for one behavior and optional transport.

```csharp
BehaviorResilienceRuntimeDescriptor? Resolve(string behaviorId, string? transportId = null)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier to resolve.

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable transport identifier when one is known.

#### Returns

 [BehaviorResilienceRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorresilienceruntimedescriptor/)?

The matched policy descriptor, including explicit disable overrides when one suppresses the default policy;
otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when no behavior-execution policy applies.
