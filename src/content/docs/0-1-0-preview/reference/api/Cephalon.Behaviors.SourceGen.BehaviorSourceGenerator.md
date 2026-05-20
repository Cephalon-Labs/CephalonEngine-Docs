---
title: Class BehaviorSourceGenerator
slug: 0-1-0-preview/reference/api/cephalon-behaviors-sourcegen-behaviorsourcegenerator
editUrl: false
---

Namespace: [Cephalon.Behaviors.SourceGen](/0-1-0-preview/reference/api/cephalon-behaviors-sourcegen/)  
Assembly: Cephalon.Behaviors.SourceGen.dll  

Incremental source generator that validates classes decorated with
<code>[AppBehavior]</code>, emits compile-time diagnostics for common authoring mistakes,
and generates zero-reflection registration code with pre-built topology descriptors.
Diagnostic IDs: ABT-010 through ABT-026.

```csharp
[Generator]
public sealed class BehaviorSourceGenerator : IIncrementalGenerator
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorSourceGenerator](/0-1-0-preview/reference/api/cephalon-behaviors-sourcegen-behaviorsourcegenerator/)

#### Implements

[IIncrementalGenerator](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.iincrementalgenerator)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt010MustImplementIAppBehavior"></a> Abt010MustImplementIAppBehavior

ABT-010: Class with [AppBehavior] must implement IAppBehavior&lt;TIn, TOut&gt;.

```csharp
public static readonly DiagnosticDescriptor Abt010MustImplementIAppBehavior
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt011EmptyBehaviorId"></a> Abt011EmptyBehaviorId

ABT-011: [AppBehavior] id must not be empty or whitespace.

```csharp
public static readonly DiagnosticDescriptor Abt011EmptyBehaviorId
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt012MustNotBeAbstract"></a> Abt012MustNotBeAbstract

ABT-012: [AppBehavior] class must not be abstract.

```csharp
public static readonly DiagnosticDescriptor Abt012MustNotBeAbstract
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt013MustNotBeStatic"></a> Abt013MustNotBeStatic

ABT-013: [AppBehavior] class must not be static.

```csharp
public static readonly DiagnosticDescriptor Abt013MustNotBeStatic
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt014RestMustBeModuleOwned"></a> Abt014RestMustBeModuleOwned

ABT-014: REST is module-owned only and must not be declared in behavior topology.

```csharp
public static readonly DiagnosticDescriptor Abt014RestMustBeModuleOwned
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt015RestProfileMethodMustBeSpecified"></a> Abt015RestProfileMethodMustBeSpecified

ABT-015: [BehaviorRestProfile] must select a supported REST method.

```csharp
public static readonly DiagnosticDescriptor Abt015RestProfileMethodMustBeSpecified
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt016RestProfilePatternMustNotBeEmpty"></a> Abt016RestProfilePatternMustNotBeEmpty

ABT-016: [BehaviorRestProfile] relative pattern must not be empty.

```csharp
public static readonly DiagnosticDescriptor Abt016RestProfilePatternMustNotBeEmpty
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt017RestProfileVersionMustBePositive"></a> Abt017RestProfileVersionMustBePositive

ABT-017: [BehaviorRestProfile] API version must be positive when specified.

```csharp
public static readonly DiagnosticDescriptor Abt017RestProfileVersionMustBePositive
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt018RestProfilePatternMustStartWithSlash"></a> Abt018RestProfilePatternMustStartWithSlash

ABT-018: [BehaviorRestProfile] relative pattern must start with '/'.

```csharp
public static readonly DiagnosticDescriptor Abt018RestProfilePatternMustStartWithSlash
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt019RestBindingPropertyNameMustNotBeEmpty"></a> Abt019RestBindingPropertyNameMustNotBeEmpty

ABT-019: [BehaviorRestBinding] target property name must not be empty.

```csharp
public static readonly DiagnosticDescriptor Abt019RestBindingPropertyNameMustNotBeEmpty
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt020RestBindingSourceMustBeSupported"></a> Abt020RestBindingSourceMustBeSupported

ABT-020: [BehaviorRestBinding] source must select a supported binding source.

```csharp
public static readonly DiagnosticDescriptor Abt020RestBindingSourceMustBeSupported
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt021RestBindingsRequireObjectInput"></a> Abt021RestBindingsRequireObjectInput

ABT-021: Explicit REST bindings require an object input with public properties.

```csharp
public static readonly DiagnosticDescriptor Abt021RestBindingsRequireObjectInput
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt022RestBindingPropertyMustExistOnInput"></a> Abt022RestBindingPropertyMustExistOnInput

ABT-022: [BehaviorRestBinding] property must exist on the behavior input.

```csharp
public static readonly DiagnosticDescriptor Abt022RestBindingPropertyMustExistOnInput
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt023RestBindingPropertyMustNotBeDuplicated"></a> Abt023RestBindingPropertyMustNotBeDuplicated

ABT-023: [BehaviorRestBinding] must not target the same property twice.

```csharp
public static readonly DiagnosticDescriptor Abt023RestBindingPropertyMustNotBeDuplicated
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt024RestBodyBindingMustUseBodyCapableMethod"></a> Abt024RestBodyBindingMustUseBodyCapableMethod

ABT-024: GET/DELETE REST profiles must not bind from the request body.

```csharp
public static readonly DiagnosticDescriptor Abt024RestBodyBindingMustUseBodyCapableMethod
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt025RestRouteBindingMustMatchRoutePlaceholder"></a> Abt025RestRouteBindingMustMatchRoutePlaceholder

ABT-025: Route bindings must target placeholders declared in the profile pattern.

```csharp
public static readonly DiagnosticDescriptor Abt025RestRouteBindingMustMatchRoutePlaceholder
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt026RestProfilePatternMustUseValidPlaceholderSyntax"></a> Abt026RestProfilePatternMustUseValidPlaceholderSyntax

ABT-026: REST profile patterns must use valid route placeholder syntax.

```csharp
public static readonly DiagnosticDescriptor Abt026RestProfilePatternMustUseValidPlaceholderSyntax
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Abt027RestPreservedImplicitQueryFallbackRequiresExplicitBindings"></a> Abt027RestPreservedImplicitQueryFallbackRequiresExplicitBindings

ABT-027: Preserved implicit query fallback requires at least one explicit binding.

```csharp
public static readonly DiagnosticDescriptor Abt027RestPreservedImplicitQueryFallbackRequiresExplicitBindings
```

#### Field Value

 [DiagnosticDescriptor](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.diagnosticdescriptor)

## Methods

### <a id="Cephalon_Behaviors_SourceGen_BehaviorSourceGenerator_Initialize_Microsoft_CodeAnalysis_IncrementalGeneratorInitializationContext_"></a> Initialize\(IncrementalGeneratorInitializationContext\)

Called to initialize the generator and register generation steps via callbacks
on the <code class="paramref">context</code>

```csharp
public void Initialize(IncrementalGeneratorInitializationContext context)
```

#### Parameters

`context` [IncrementalGeneratorInitializationContext](https://learn.microsoft.com/dotnet/api/microsoft.codeanalysis.incrementalgeneratorinitializationcontext)

The <xref href="Microsoft.CodeAnalysis.IncrementalGeneratorInitializationContext" data-throw-if-not-resolved="false"></xref> to register callbacks on
