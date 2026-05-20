---
title: Class FeatureFlagEvaluationResult
slug: 0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagevaluationresult
editUrl: false
---

Namespace: [Cephalon.Abstractions.Features](/0-1-0-preview/reference/api/cephalon-abstractions-features/)  
Assembly: Cephalon.Abstractions.dll  

Describes the result of evaluating a feature flag for a specific runtime context.

```csharp
public sealed record FeatureFlagEvaluationResult : IEquatable<FeatureFlagEvaluationResult>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FeatureFlagEvaluationResult](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagevaluationresult/)

#### Implements

[IEquatable<FeatureFlagEvaluationResult\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationResult__ctor_System_String_System_Boolean_System_Boolean_System_Boolean_System_String_System_Nullable_Cephalon_Abstractions_Features_FeatureFlagSourceKind__System_String_"></a> FeatureFlagEvaluationResult\(string, bool, bool, bool, string, FeatureFlagSourceKind?, string?\)

Describes the result of evaluating a feature flag for a specific runtime context.

```csharp
public FeatureFlagEvaluationResult(string FeatureId, bool IsDefined, bool IsEnabled, bool Matched, string Reason, FeatureFlagSourceKind? SourceKind = null, string? SourceModuleId = null)
```

#### Parameters

`FeatureId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The evaluated feature-flag identifier.

`IsDefined` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the feature flag exists in the active runtime.

`IsEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the feature flag resolved to enabled.

`Matched` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the supplied evaluation context matched the targeting constraints for the
feature flag.

`Reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing explanation for the evaluation result.

`SourceKind` [FeatureFlagSourceKind](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagsourcekind/)?

The ownership kind for the resolved feature flag when one exists.

`SourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The owning module identifier when the feature flag is module-owned.

## Properties

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationResult_FeatureId"></a> FeatureId

The evaluated feature-flag identifier.

```csharp
public string FeatureId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationResult_IsDefined"></a> IsDefined

Indicates whether the feature flag exists in the active runtime.

```csharp
public bool IsDefined { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationResult_IsEnabled"></a> IsEnabled

Indicates whether the feature flag resolved to enabled.

```csharp
public bool IsEnabled { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationResult_Matched"></a> Matched

Indicates whether the supplied evaluation context matched the targeting constraints for the
feature flag.

```csharp
public bool Matched { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationResult_ProviderResults"></a> ProviderResults

Gets the external provider evaluation results that participated in the final answer.

```csharp
public IReadOnlyList<FeatureFlagProviderEvaluationResult> ProviderResults { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[FeatureFlagProviderEvaluationResult](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagproviderevaluationresult/)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationResult_Reason"></a> Reason

The operator-facing explanation for the evaluation result.

```csharp
public string Reason { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationResult_SourceKind"></a> SourceKind

The ownership kind for the resolved feature flag when one exists.

```csharp
public FeatureFlagSourceKind? SourceKind { get; init; }
```

#### Property Value

 [FeatureFlagSourceKind](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagsourcekind/)?

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationResult_SourceModuleId"></a> SourceModuleId

The owning module identifier when the feature flag is module-owned.

```csharp
public string? SourceModuleId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
