---
title: Class EngineOptions
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-engineoptions
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Captures module and capability enablement overrides for the runtime.

```csharp
public sealed class EngineOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EngineOptions](/0-1-0-preview/reference/api/cephalon-engine-configuration-engineoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_EngineOptions__ctor_System_Collections_Generic_IReadOnlyDictionary_System_String_System_Boolean__System_Collections_Generic_IReadOnlyDictionary_System_String_System_Boolean__"></a> EngineOptions\(IReadOnlyDictionary<string, bool\>?, IReadOnlyDictionary<string, bool\>?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.EngineOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EngineOptions(IReadOnlyDictionary<string, bool>? modules = null, IReadOnlyDictionary<string, bool>? capabilities = null)
```

#### Parameters

`modules` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>?

Module enablement overrides keyed by module identifier.

`capabilities` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>?

Capability enablement overrides keyed by capability key.

## Properties

### <a id="Cephalon_Engine_Configuration_EngineOptions_Capabilities"></a> Capabilities

Gets capability enablement overrides keyed by capability key.

```csharp
public IReadOnlyDictionary<string, bool> Capabilities { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="Cephalon_Engine_Configuration_EngineOptions_Empty"></a> Empty

Gets an empty options instance with no explicit overrides.

```csharp
public static EngineOptions Empty { get; }
```

#### Property Value

 [EngineOptions](/0-1-0-preview/reference/api/cephalon-engine-configuration-engineoptions/)

### <a id="Cephalon_Engine_Configuration_EngineOptions_HasValues"></a> HasValues

Gets a value indicating whether any explicit option overrides are present.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_EngineOptions_Modules"></a> Modules

Gets module enablement overrides keyed by module identifier.

```csharp
public IReadOnlyDictionary<string, bool> Modules { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

## Methods

### <a id="Cephalon_Engine_Configuration_EngineOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads engine options from configuration.

```csharp
public static EngineOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [EngineOptions](/0-1-0-preview/reference/api/cephalon-engine-configuration-engineoptions/)

The parsed engine options.

### <a id="Cephalon_Engine_Configuration_EngineOptions_IsCapabilityEnabled_System_String_"></a> IsCapabilityEnabled\(string\)

Determines whether a capability is enabled under the current option set.

```csharp
public bool IsCapabilityEnabled(string capabilityKey)
```

#### Parameters

`capabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The capability key to evaluate.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the capability is enabled; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_Engine_Configuration_EngineOptions_IsModuleEnabled_System_String_"></a> IsModuleEnabled\(string\)

Determines whether a module is enabled under the current option set.

```csharp
public bool IsModuleEnabled(string moduleId)
```

#### Parameters

`moduleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier to evaluate.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the module is enabled; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_Engine_Configuration_EngineOptions_Merge_Cephalon_Engine_Configuration_EngineOptions_"></a> Merge\(EngineOptions?\)

Merges another option set into the current instance.

```csharp
public EngineOptions Merge(EngineOptions? other)
```

#### Parameters

`other` [EngineOptions](/0-1-0-preview/reference/api/cephalon-engine-configuration-engineoptions/)?

The option set to overlay on top of the current values.

#### Returns

 [EngineOptions](/0-1-0-preview/reference/api/cephalon-engine-configuration-engineoptions/)

A merged option set.
