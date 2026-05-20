---
title: Class DiagnosticsConvention
slug: 0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticsconvention
editUrl: false
---

Namespace: [Cephalon.Engine.Diagnostics](/0-1-0-preview/reference/api/cephalon-engine-diagnostics/)  
Assembly: Cephalon.Engine.dll  

Describes the diagnostics convention published by one engine package or companion package.

```csharp
public sealed record DiagnosticsConvention : IEquatable<DiagnosticsConvention>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DiagnosticsConvention](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticsconvention/)

#### Implements

[IEquatable<DiagnosticsConvention\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Diagnostics_DiagnosticsConvention__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Diagnostics_DiagnosticEventDefinition__"></a> DiagnosticsConvention\(string, string, string, IReadOnlyList<DiagnosticEventDefinition\>\)

Describes the diagnostics convention published by one engine package or companion package.

```csharp
public DiagnosticsConvention(string Source, string LoggerCategoryPrefix, string Description, IReadOnlyList<DiagnosticEventDefinition> Events)
```

#### Parameters

`Source` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable package or subsystem identifier that owns the convention.

`LoggerCategoryPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logger category prefix used by the convention.

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing explanation of what the convention covers.

`Events` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DiagnosticEventDefinition](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticeventdefinition/)\>

The published event definitions that belong to the convention.

## Properties

### <a id="Cephalon_Engine_Diagnostics_DiagnosticsConvention_Description"></a> Description

The operator-facing explanation of what the convention covers.

```csharp
public string Description { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_DiagnosticsConvention_Events"></a> Events

The published event definitions that belong to the convention.

```csharp
public IReadOnlyList<DiagnosticEventDefinition> Events { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DiagnosticEventDefinition](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticeventdefinition/)\>

### <a id="Cephalon_Engine_Diagnostics_DiagnosticsConvention_LoggerCategoryPrefix"></a> LoggerCategoryPrefix

The logger category prefix used by the convention.

```csharp
public string LoggerCategoryPrefix { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_DiagnosticsConvention_MaximumEventId"></a> MaximumEventId

Gets the largest event id published by this convention.

```csharp
public int? MaximumEventId { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Diagnostics_DiagnosticsConvention_MinimumEventId"></a> MinimumEventId

Gets the smallest event id published by this convention.

```csharp
public int? MinimumEventId { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Diagnostics_DiagnosticsConvention_Source"></a> Source

The stable package or subsystem identifier that owns the convention.

```csharp
public string Source { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
