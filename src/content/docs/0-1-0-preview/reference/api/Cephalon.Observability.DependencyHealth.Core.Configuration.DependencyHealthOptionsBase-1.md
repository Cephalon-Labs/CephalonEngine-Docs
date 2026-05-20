---
title: Class DependencyHealthOptionsBase
slug: 0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencyhealthoptionsbase-1
editUrl: false
---

Namespace: [Cephalon.Observability.DependencyHealth.Core.Configuration](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration/)  
Assembly: Cephalon.Observability.DependencyHealth.Core.dll  

Base class for provider-specific dependency-health options.

```csharp
public abstract class DependencyHealthOptionsBase<TDefinition> where TDefinition : DependencyDefinitionBase
```

#### Type Parameters

`TDefinition` 

The provider-specific dependency definition type.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<TDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Observability_DependencyHealth_Core_Configuration_DependencyHealthOptionsBase_1_Dependencies"></a> Dependencies

Gets or sets the configured dependencies.

```csharp
public IReadOnlyList<TDefinition> Dependencies { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<TDefinition\>

### <a id="Cephalon_Observability_DependencyHealth_Core_Configuration_DependencyHealthOptionsBase_1_RefreshIntervalSeconds"></a> RefreshIntervalSeconds

Gets or sets the interval in seconds between background refresh attempts.

```csharp
public int RefreshIntervalSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Cephalon_Observability_DependencyHealth_Core_Configuration_DependencyHealthOptionsBase_1_GetBoolean_System_String_System_Boolean_"></a> GetBoolean\(string?, bool\)

Parses a boolean value, returning <code class="paramref">defaultValue</code> when absent or unparseable.

```csharp
protected static bool GetBoolean(string? value, bool defaultValue)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`defaultValue` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Observability_DependencyHealth_Core_Configuration_DependencyHealthOptionsBase_1_GetInt32_System_String_System_Int32_"></a> GetInt32\(string?, int\)

Parses a positive integer value, returning <code class="paramref">defaultValue</code> when absent or non-positive.

```csharp
protected static int GetInt32(string? value, int defaultValue)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`defaultValue` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Observability_DependencyHealth_Core_Configuration_DependencyHealthOptionsBase_1_GetNullableBoolean_System_String_"></a> GetNullableBoolean\(string?\)

Parses a nullable boolean value, returning <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when absent or unparseable.

```csharp
protected static bool? GetNullableBoolean(string? value)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?
