---
title: Class FeatureFlagProviderEvaluationResult
slug: 0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagproviderevaluationresult
editUrl: false
---

Namespace: [Cephalon.Abstractions.Features](/0-1-0-preview/reference/api/cephalon-abstractions-features/)  
Assembly: Cephalon.Abstractions.dll  

Describes the result of evaluating one feature-flag provider binding.

```csharp
public sealed record FeatureFlagProviderEvaluationResult : IEquatable<FeatureFlagProviderEvaluationResult>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FeatureFlagProviderEvaluationResult](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagproviderevaluationresult/)

#### Implements

[IEquatable<FeatureFlagProviderEvaluationResult\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Features_FeatureFlagProviderEvaluationResult__ctor_System_String_System_String_System_Boolean_System_Boolean_System_String_"></a> FeatureFlagProviderEvaluationResult\(string, string, bool, bool, string\)

Describes the result of evaluating one feature-flag provider binding.

```csharp
public FeatureFlagProviderEvaluationResult(string ProviderId, string ProviderFeatureId, bool IsDefined, bool IsEnabled, string Reason)
```

#### Parameters

`ProviderId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The external provider identifier.

`ProviderFeatureId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider-side feature identifier.

`IsDefined` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the provider recognizes the requested feature.

`IsEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the provider resolved the feature to enabled.

`Reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing explanation for the provider evaluation result.

## Properties

### <a id="Cephalon_Abstractions_Features_FeatureFlagProviderEvaluationResult_IsDefined"></a> IsDefined

Indicates whether the provider recognizes the requested feature.

```csharp
public bool IsDefined { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Features_FeatureFlagProviderEvaluationResult_IsEnabled"></a> IsEnabled

Indicates whether the provider resolved the feature to enabled.

```csharp
public bool IsEnabled { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Features_FeatureFlagProviderEvaluationResult_ProviderFeatureId"></a> ProviderFeatureId

The provider-side feature identifier.

```csharp
public string ProviderFeatureId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Features_FeatureFlagProviderEvaluationResult_ProviderId"></a> ProviderId

The external provider identifier.

```csharp
public string ProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Features_FeatureFlagProviderEvaluationResult_Reason"></a> Reason

The operator-facing explanation for the provider evaluation result.

```csharp
public string Reason { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
