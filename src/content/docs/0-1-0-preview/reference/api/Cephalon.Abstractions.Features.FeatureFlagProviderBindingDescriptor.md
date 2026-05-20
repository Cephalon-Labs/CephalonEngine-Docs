---
title: Class FeatureFlagProviderBindingDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagproviderbindingdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Features](/0-1-0-preview/reference/api/cephalon-abstractions-features/)  
Assembly: Cephalon.Abstractions.dll  

Describes one external provider binding attached to a Cephalon-owned feature flag.

```csharp
public sealed class FeatureFlagProviderBindingDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FeatureFlagProviderBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagproviderbindingdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Features_FeatureFlagProviderBindingDescriptor__ctor_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> FeatureFlagProviderBindingDescriptor\(string, string?, IReadOnlyDictionary<string, string\>?\)

Creates a feature-flag provider binding.

```csharp
public FeatureFlagProviderBindingDescriptor(string providerId, string? providerFeatureId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`providerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable external provider identifier.

`providerFeatureId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider-specific feature identifier. When omitted, the owning Cephalon feature-flag id
is used.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional provider-specific binding metadata.

## Properties

### <a id="Cephalon_Abstractions_Features_FeatureFlagProviderBindingDescriptor_Metadata"></a> Metadata

Gets provider-specific binding metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagProviderBindingDescriptor_ProviderFeatureId"></a> ProviderFeatureId

Gets the provider-specific feature identifier when one was supplied.

```csharp
public string? ProviderFeatureId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Features_FeatureFlagProviderBindingDescriptor_ProviderId"></a> ProviderId

Gets the stable external provider identifier.

```csharp
public string ProviderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Abstractions_Features_FeatureFlagProviderBindingDescriptor_ResolveProviderFeatureId_System_String_"></a> ResolveProviderFeatureId\(string\)

Resolves the provider-side feature identifier for the supplied Cephalon feature flag.

```csharp
public string ResolveProviderFeatureId(string featureFlagId)
```

#### Parameters

`featureFlagId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The owning Cephalon feature-flag identifier.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider-side feature identifier.
