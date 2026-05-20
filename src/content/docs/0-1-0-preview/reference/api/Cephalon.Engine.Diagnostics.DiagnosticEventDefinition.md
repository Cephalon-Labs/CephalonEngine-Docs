---
title: Class DiagnosticEventDefinition
slug: 0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticeventdefinition
editUrl: false
---

Namespace: [Cephalon.Engine.Diagnostics](/0-1-0-preview/reference/api/cephalon-engine-diagnostics/)  
Assembly: Cephalon.Engine.dll  

Describes one published diagnostics event id together with its intended meaning.

```csharp
public sealed record DiagnosticEventDefinition : IEquatable<DiagnosticEventDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DiagnosticEventDefinition](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticeventdefinition/)

#### Implements

[IEquatable<DiagnosticEventDefinition\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Diagnostics_DiagnosticEventDefinition__ctor_System_Int32_System_String_Cephalon_Engine_Diagnostics_DiagnosticSeverity_System_String_System_String_"></a> DiagnosticEventDefinition\(int, string, DiagnosticSeverity, string, string\)

Describes one published diagnostics event id together with its intended meaning.

```csharp
public DiagnosticEventDefinition(int Id, string Name, DiagnosticSeverity Severity, string MessageTemplate, string Description)
```

#### Parameters

`Id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The stable numeric event identifier.

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable event name paired with the numeric identifier.

`Severity` [DiagnosticSeverity](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticseverity/)

The intended severity for the event.

`MessageTemplate` [string](https://learn.microsoft.com/dotnet/api/system.string)

The structured message template emitted by the logger.

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing explanation of when the event is emitted.

## Properties

### <a id="Cephalon_Engine_Diagnostics_DiagnosticEventDefinition_Description"></a> Description

The operator-facing explanation of when the event is emitted.

```csharp
public string Description { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_DiagnosticEventDefinition_Id"></a> Id

The stable numeric event identifier.

```csharp
public int Id { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Engine_Diagnostics_DiagnosticEventDefinition_MessageTemplate"></a> MessageTemplate

The structured message template emitted by the logger.

```csharp
public string MessageTemplate { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_DiagnosticEventDefinition_Name"></a> Name

The stable event name paired with the numeric identifier.

```csharp
public string Name { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Diagnostics_DiagnosticEventDefinition_Severity"></a> Severity

The intended severity for the event.

```csharp
public DiagnosticSeverity Severity { get; init; }
```

#### Property Value

 [DiagnosticSeverity](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticseverity/)
