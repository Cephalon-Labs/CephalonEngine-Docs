---
title: Class FeatureFlagDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Features](/0-1-0-preview/reference/api/cephalon-abstractions-features/)  
Assembly: Cephalon.Abstractions.dll  

Describes one feature flag visible to the active Cephalon runtime.

```csharp
public sealed class FeatureFlagDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FeatureFlagDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Features_FeatureFlagDescriptor__ctor_System_String_System_String_System_String_System_Boolean_Cephalon_Abstractions_Features_FeatureFlagSourceKind_System_String_Cephalon_Abstractions_Features_FeatureFlagTargetingDescriptor_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Features_FeatureFlagProviderBindingDescriptor__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> FeatureFlagDescriptor\(string, string, string, bool, FeatureFlagSourceKind, string?, FeatureFlagTargetingDescriptor?, IReadOnlyList<FeatureFlagProviderBindingDescriptor\>?, IReadOnlyDictionary<string, string\>?\)

Creates a feature-flag descriptor.

```csharp
public FeatureFlagDescriptor(string id, string displayName, string description, bool enabled = false, FeatureFlagSourceKind sourceKind = FeatureFlagSourceKind.Host, string? sourceModuleId = null, FeatureFlagTargetingDescriptor? targeting = null, IReadOnlyList<FeatureFlagProviderBindingDescriptor>? providerBindings = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable feature-flag identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing feature-flag name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the gated behavior.

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the feature flag is enabled before any targeting constraints are applied.

`sourceKind` [FeatureFlagSourceKind](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagsourcekind/)

Identifies whether the feature flag is host-owned or module-owned.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The module identifier that owns this feature flag when <code class="paramref">sourceKind</code> is
<xref href="Cephalon.Abstractions.Features.FeatureFlagSourceKind.Module" data-throw-if-not-resolved="false"></xref>.

`targeting` [FeatureFlagTargetingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagtargetingdescriptor/)?

The optional targeting constraints attached to the feature flag.

`providerBindings` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[FeatureFlagProviderBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagproviderbindingdescriptor/)\>?

Optional external provider bindings that can further gate the Cephalon-owned feature flag
without replacing the local runtime descriptor as the source of truth.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata.

## Properties

### <a id="Cephalon_Abstractions_Features_FeatureFlagDescriptor_Description"></a> Description

Gets the human-readable description of the gated behavior.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Features_FeatureFlagDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing feature-flag name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Features_FeatureFlagDescriptor_Enabled"></a> Enabled

Gets a value indicating whether the feature flag is enabled before targeting is applied.

```csharp
public bool Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Features_FeatureFlagDescriptor_Id"></a> Id

Gets the stable feature-flag identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Features_FeatureFlagDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata for the feature flag.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagDescriptor_ProviderBindings"></a> ProviderBindings

Gets the optional external provider bindings attached to the feature flag.

```csharp
public IReadOnlyList<FeatureFlagProviderBindingDescriptor> ProviderBindings { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[FeatureFlagProviderBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagproviderbindingdescriptor/)\>

### <a id="Cephalon_Abstractions_Features_FeatureFlagDescriptor_SourceKind"></a> SourceKind

Gets the ownership kind for this feature flag.

```csharp
public FeatureFlagSourceKind SourceKind { get; }
```

#### Property Value

 [FeatureFlagSourceKind](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagsourcekind/)

### <a id="Cephalon_Abstractions_Features_FeatureFlagDescriptor_SourceModuleId"></a> SourceModuleId

Gets the owning module identifier when the feature flag is module-owned.

```csharp
public string? SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Features_FeatureFlagDescriptor_Targeting"></a> Targeting

Gets the optional targeting constraints attached to the feature flag.

```csharp
public FeatureFlagTargetingDescriptor Targeting { get; }
```

#### Property Value

 [FeatureFlagTargetingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagtargetingdescriptor/)
