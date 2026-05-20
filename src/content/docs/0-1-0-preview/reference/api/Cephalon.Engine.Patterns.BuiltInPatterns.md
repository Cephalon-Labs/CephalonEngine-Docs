---
title: Class BuiltInPatterns
slug: 0-1-0-preview/reference/api/cephalon-engine-patterns-builtinpatterns
editUrl: false
---

Namespace: [Cephalon.Engine.Patterns](/0-1-0-preview/reference/api/cephalon-engine-patterns/)  
Assembly: Cephalon.Engine.dll  

Provides the built-in pattern descriptors used by Cephalon app profiles.

```csharp
public static class BuiltInPatterns
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BuiltInPatterns](/0-1-0-preview/reference/api/cephalon-engine-patterns-builtinpatterns/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_All"></a> All

Gets all built-in pattern descriptors.

```csharp
public static IReadOnlyList<PatternDescriptor> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<PatternDescriptor\>

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_AntiCorruptionLayer"></a> AntiCorruptionLayer

Gets the anti-corruption-layer pattern.

```csharp
public static PatternDescriptor AntiCorruptionLayer { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_BackendForFrontendPattern"></a> BackendForFrontendPattern

Gets the backend-for-frontend pattern.

```csharp
public static PatternDescriptor BackendForFrontendPattern { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_CleanArchitecture"></a> CleanArchitecture

Gets the clean-architecture pattern.

```csharp
public static PatternDescriptor CleanArchitecture { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_CqrsPattern"></a> CqrsPattern

Gets the CQRS pattern.

```csharp
public static PatternDescriptor CqrsPattern { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_DomainDrivenDesign"></a> DomainDrivenDesign

Gets the domain-driven-design pattern.

```csharp
public static PatternDescriptor DomainDrivenDesign { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_EventSourcingPattern"></a> EventSourcingPattern

Gets the event-sourcing pattern.

```csharp
public static PatternDescriptor EventSourcingPattern { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_HexagonalArchitecture"></a> HexagonalArchitecture

Gets the hexagonal-architecture pattern.

```csharp
public static PatternDescriptor HexagonalArchitecture { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_LayeredArchitecture"></a> LayeredArchitecture

Gets the layered-architecture pattern.

```csharp
public static PatternDescriptor LayeredArchitecture { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_MediatorPattern"></a> MediatorPattern

Gets the mediator design pattern.

```csharp
public static PatternDescriptor MediatorPattern { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_MicroserviceTopology"></a> MicroserviceTopology

Gets the microservice deployment topology pattern.

```csharp
public static PatternDescriptor MicroserviceTopology { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_ModularArchitecture"></a> ModularArchitecture

Gets the modular-architecture composition pattern.

```csharp
public static PatternDescriptor ModularArchitecture { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_ModuleFirstOrganization"></a> ModuleFirstOrganization

Gets the module-first organization pattern.

```csharp
public static PatternDescriptor ModuleFirstOrganization { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_OnionArchitecture"></a> OnionArchitecture

Gets the onion-architecture pattern.

```csharp
public static PatternDescriptor OnionArchitecture { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_OutboxPattern"></a> OutboxPattern

Gets the outbox pattern.

```csharp
public static PatternDescriptor OutboxPattern { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_PipelinePattern"></a> PipelinePattern

Gets the pipeline design pattern.

```csharp
public static PatternDescriptor PipelinePattern { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_SharedFoundationPattern"></a> SharedFoundationPattern

Gets the shared-foundation pattern.

```csharp
public static PatternDescriptor SharedFoundationPattern { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_SingleHostTopology"></a> SingleHostTopology

Gets the single-host deployment topology pattern.

```csharp
public static PatternDescriptor SingleHostTopology { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_SpecificationPattern"></a> SpecificationPattern

Gets the specification design pattern.

```csharp
public static PatternDescriptor SpecificationPattern { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_StranglerFigPattern"></a> StranglerFigPattern

Gets the strangler-fig migration pattern.

```csharp
public static PatternDescriptor StranglerFigPattern { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_StrategyPattern"></a> StrategyPattern

Gets the strategy design pattern.

```csharp
public static PatternDescriptor StrategyPattern { get; }
```

#### Property Value

 PatternDescriptor

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_VerticalSliceOrganization"></a> VerticalSliceOrganization

Gets the vertical-slice organization pattern.

```csharp
public static PatternDescriptor VerticalSliceOrganization { get; }
```

#### Property Value

 PatternDescriptor

## Methods

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_Resolve_System_String_"></a> Resolve\(string\)

Resolves a pattern identifier, display name, or alias.

```csharp
public static PatternDescriptor Resolve(string value)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pattern identifier, display name, or alias to resolve.

#### Returns

 PatternDescriptor

The resolved pattern descriptor.

### <a id="Cephalon_Engine_Patterns_BuiltInPatterns_TryResolve_System_String_Cephalon_Abstractions_Patterns_PatternDescriptor__"></a> TryResolve\(string, out PatternDescriptor\)

Attempts to resolve a pattern identifier, display name, or alias.

```csharp
public static bool TryResolve(string value, out PatternDescriptor pattern)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pattern identifier, display name, or alias to resolve.

`pattern` PatternDescriptor

The resolved pattern descriptor when the lookup succeeds.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the pattern was resolved; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
