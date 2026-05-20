---
title: Class FeatureFlagTargetingDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagtargetingdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Features](/0-1-0-preview/reference/api/cephalon-abstractions-features/)  
Assembly: Cephalon.Abstractions.dll  

Describes the optional targeting constraints that govern when a feature flag is considered
active for a given runtime evaluation context.

```csharp
public sealed class FeatureFlagTargetingDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FeatureFlagTargetingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagtargetingdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor__ctor_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__"></a> FeatureFlagTargetingDescriptor\(IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?\)

Creates feature-flag targeting constraints.

```csharp
public FeatureFlagTargetingDescriptor(IReadOnlyList<string>? includedModuleIds = null, IReadOnlyList<string>? excludedModuleIds = null, IReadOnlyList<string>? includedBehaviorIds = null, IReadOnlyList<string>? excludedBehaviorIds = null, IReadOnlyList<string>? includedCapabilityKeys = null, IReadOnlyList<string>? excludedCapabilityKeys = null, IReadOnlyList<string>? includedTransportIds = null, IReadOnlyList<string>? excludedTransportIds = null, IReadOnlyList<string>? includedEnvironmentNames = null, IReadOnlyList<string>? excludedEnvironmentNames = null, IReadOnlyList<string>? includedTenantIds = null, IReadOnlyList<string>? excludedTenantIds = null, IReadOnlyList<string>? includedSubjectIds = null, IReadOnlyList<string>? excludedSubjectIds = null, IReadOnlyList<string>? includedTags = null, IReadOnlyList<string>? excludedTags = null)
```

#### Parameters

`includedModuleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The module identifiers that are explicitly included in the targeted audience.

`excludedModuleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The module identifiers that are explicitly excluded from the targeted audience.

`includedBehaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The behavior identifiers that are explicitly included in the targeted audience.

`excludedBehaviorIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The behavior identifiers that are explicitly excluded from the targeted audience.

`includedCapabilityKeys` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The capability keys that are explicitly included in the targeted audience.

`excludedCapabilityKeys` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The capability keys that are explicitly excluded from the targeted audience.

`includedTransportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The transport identifiers that are explicitly included in the targeted audience.

`excludedTransportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The transport identifiers that are explicitly excluded from the targeted audience.

`includedEnvironmentNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The environment names that are explicitly included in the targeted audience.

`excludedEnvironmentNames` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The environment names that are explicitly excluded from the targeted audience.

`includedTenantIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The tenant identifiers that are explicitly included in the targeted audience.

`excludedTenantIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The tenant identifiers that are explicitly excluded from the targeted audience.

`includedSubjectIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The subject identifiers that are explicitly included in the targeted audience.

`excludedSubjectIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The subject identifiers that are explicitly excluded from the targeted audience.

`includedTags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The descriptive tags that are explicitly included in the targeted audience.

`excludedTags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The descriptive tags that are explicitly excluded from the targeted audience.

## Properties

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_Empty"></a> Empty

Gets an empty targeting descriptor with no constraints.

```csharp
public static FeatureFlagTargetingDescriptor Empty { get; }
```

#### Property Value

 [FeatureFlagTargetingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagtargetingdescriptor/)

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_ExcludedBehaviorIds"></a> ExcludedBehaviorIds

Gets the explicitly excluded behavior identifiers.

```csharp
public IReadOnlyList<string> ExcludedBehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_ExcludedCapabilityKeys"></a> ExcludedCapabilityKeys

Gets the explicitly excluded capability keys.

```csharp
public IReadOnlyList<string> ExcludedCapabilityKeys { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_ExcludedEnvironmentNames"></a> ExcludedEnvironmentNames

Gets the explicitly excluded environment names.

```csharp
public IReadOnlyList<string> ExcludedEnvironmentNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_ExcludedModuleIds"></a> ExcludedModuleIds

Gets the explicitly excluded module identifiers.

```csharp
public IReadOnlyList<string> ExcludedModuleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_ExcludedSubjectIds"></a> ExcludedSubjectIds

Gets the explicitly excluded subject identifiers.

```csharp
public IReadOnlyList<string> ExcludedSubjectIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_ExcludedTags"></a> ExcludedTags

Gets the explicitly excluded descriptive tags.

```csharp
public IReadOnlyList<string> ExcludedTags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_ExcludedTenantIds"></a> ExcludedTenantIds

Gets the explicitly excluded tenant identifiers.

```csharp
public IReadOnlyList<string> ExcludedTenantIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_ExcludedTransportIds"></a> ExcludedTransportIds

Gets the explicitly excluded transport identifiers.

```csharp
public IReadOnlyList<string> ExcludedTransportIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_HasValues"></a> HasValues

Gets a value indicating whether any targeting constraint was supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_IncludedBehaviorIds"></a> IncludedBehaviorIds

Gets the explicitly included behavior identifiers.

```csharp
public IReadOnlyList<string> IncludedBehaviorIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_IncludedCapabilityKeys"></a> IncludedCapabilityKeys

Gets the explicitly included capability keys.

```csharp
public IReadOnlyList<string> IncludedCapabilityKeys { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_IncludedEnvironmentNames"></a> IncludedEnvironmentNames

Gets the explicitly included environment names.

```csharp
public IReadOnlyList<string> IncludedEnvironmentNames { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_IncludedModuleIds"></a> IncludedModuleIds

Gets the explicitly included module identifiers.

```csharp
public IReadOnlyList<string> IncludedModuleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_IncludedSubjectIds"></a> IncludedSubjectIds

Gets the explicitly included subject identifiers.

```csharp
public IReadOnlyList<string> IncludedSubjectIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_IncludedTags"></a> IncludedTags

Gets the explicitly included descriptive tags.

```csharp
public IReadOnlyList<string> IncludedTags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_IncludedTenantIds"></a> IncludedTenantIds

Gets the explicitly included tenant identifiers.

```csharp
public IReadOnlyList<string> IncludedTenantIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_IncludedTransportIds"></a> IncludedTransportIds

Gets the explicitly included transport identifiers.

```csharp
public IReadOnlyList<string> IncludedTransportIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
