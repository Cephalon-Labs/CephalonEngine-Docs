---
title: Class BehaviorFeatureDisabledException
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfeaturedisabledexception
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Thrown when a behavior declares one or more required feature flags and the active runtime
evaluation context does not satisfy one of them.

```csharp
public sealed class BehaviorFeatureDisabledException : Exception, ISerializable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← 
[BehaviorFeatureDisabledException](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfeaturedisabledexception/)

#### Implements

[ISerializable](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

#### Inherited Members

[Exception.GetBaseException\(\)](https://learn.microsoft.com/dotnet/api/system.exception.getbaseexception), 
[Exception.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.exception.gettype), 
[Exception.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.exception.tostring), 
[Exception.Data](https://learn.microsoft.com/dotnet/api/system.exception.data), 
[Exception.HelpLink](https://learn.microsoft.com/dotnet/api/system.exception.helplink), 
[Exception.HResult](https://learn.microsoft.com/dotnet/api/system.exception.hresult), 
[Exception.InnerException](https://learn.microsoft.com/dotnet/api/system.exception.innerexception), 
[Exception.Message](https://learn.microsoft.com/dotnet/api/system.exception.message), 
[Exception.Source](https://learn.microsoft.com/dotnet/api/system.exception.source), 
[Exception.StackTrace](https://learn.microsoft.com/dotnet/api/system.exception.stacktrace), 
[Exception.TargetSite](https://learn.microsoft.com/dotnet/api/system.exception.targetsite), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Behaviors_BehaviorFeatureDisabledException__ctor_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_Nullable_Cephalon_Abstractions_Features_FeatureFlagSourceKind__System_String_"></a> BehaviorFeatureDisabledException\(string, string, IReadOnlyList<string\>, string, FeatureFlagSourceKind?, string?\)

Initializes a new instance of <xref href="Cephalon.Abstractions.Behaviors.BehaviorFeatureDisabledException" data-throw-if-not-resolved="false"></xref>.

```csharp
public BehaviorFeatureDisabledException(string behaviorId, string featureFlagId, IReadOnlyList<string> requiredFeatureFlagIds, string reason, FeatureFlagSourceKind? sourceKind = null, string? sourceModuleId = null)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The behavior identifier that was blocked.

`featureFlagId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The specific required feature flag that evaluated to disabled.

`requiredFeatureFlagIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The full ordered set of required feature flags.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The evaluation reason returned by the feature-toggle runtime.

`sourceKind` [FeatureFlagSourceKind](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagsourcekind/)?

The ownership kind of the resolved feature flag when one exists.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The owning module identifier when the resolved feature flag is module-owned.

## Properties

### <a id="Cephalon_Abstractions_Behaviors_BehaviorFeatureDisabledException_BehaviorId"></a> BehaviorId

Gets the behavior identifier that was blocked.

```csharp
public string BehaviorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorFeatureDisabledException_FeatureFlagId"></a> FeatureFlagId

Gets the required feature flag that evaluated to disabled for the active runtime context.

```csharp
public string FeatureFlagId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorFeatureDisabledException_Reason"></a> Reason

Gets the operator-facing evaluation reason that explained why the feature flag was not
available for the current runtime context.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorFeatureDisabledException_RequiredFeatureFlagIds"></a> RequiredFeatureFlagIds

Gets the full ordered set of required feature flags declared by the behavior.

```csharp
public IReadOnlyList<string> RequiredFeatureFlagIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Behaviors_BehaviorFeatureDisabledException_SourceKind"></a> SourceKind

Gets the ownership kind of the resolved feature flag when one exists.

```csharp
public FeatureFlagSourceKind? SourceKind { get; }
```

#### Property Value

 [FeatureFlagSourceKind](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagsourcekind/)?

### <a id="Cephalon_Abstractions_Behaviors_BehaviorFeatureDisabledException_SourceModuleId"></a> SourceModuleId

Gets the owning module identifier when the resolved feature flag is module-owned.

```csharp
public string? SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
