---
title: Class FeatureFlagEvaluationContext
slug: 0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagevaluationcontext
editUrl: false
---

Namespace: [Cephalon.Abstractions.Features](/0-1-0-preview/reference/api/cephalon-abstractions-features/)  
Assembly: Cephalon.Abstractions.dll  

Supplies contextual information for evaluating a feature flag at runtime.

```csharp
public sealed class FeatureFlagEvaluationContext
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FeatureFlagEvaluationContext](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagevaluationcontext/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationContext__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> FeatureFlagEvaluationContext\(string?, string?, string?, string?, string?, string?, string?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a feature-flag evaluation context.

```csharp
public FeatureFlagEvaluationContext(string? environmentName = null, string? moduleId = null, string? behaviorId = null, string? capabilityKey = null, string? transportId = null, string? tenantId = null, string? subjectId = null, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`environmentName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The active hosting environment name.

`moduleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The current module identifier when one is known.

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The current behavior identifier when one is known.

`capabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The current capability key when one is known.

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The active transport identifier when one is known.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The current tenant identifier when one is known.

`subjectId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The current subject identifier when one is known.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The descriptive tags associated with the current request or workload.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional evaluation metadata.

## Properties

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationContext_BehaviorId"></a> BehaviorId

Gets the current behavior identifier when one is known.

```csharp
public string? BehaviorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationContext_CapabilityKey"></a> CapabilityKey

Gets the current capability key when one is known.

```csharp
public string? CapabilityKey { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationContext_Empty"></a> Empty

Gets an empty feature-flag evaluation context.

```csharp
public static FeatureFlagEvaluationContext Empty { get; }
```

#### Property Value

 [FeatureFlagEvaluationContext](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagevaluationcontext/)

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationContext_EnvironmentName"></a> EnvironmentName

Gets the active hosting environment name.

```csharp
public string? EnvironmentName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationContext_Metadata"></a> Metadata

Gets additional evaluation metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationContext_ModuleId"></a> ModuleId

Gets the current module identifier when one is known.

```csharp
public string? ModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationContext_SubjectId"></a> SubjectId

Gets the current subject identifier when one is known.

```csharp
public string? SubjectId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationContext_Tags"></a> Tags

Gets the descriptive tags associated with the current request or workload.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationContext_TenantId"></a> TenantId

Gets the current tenant identifier when one is known.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Features_FeatureFlagEvaluationContext_TransportId"></a> TransportId

Gets the active transport identifier when one is known.

```csharp
public string? TransportId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
