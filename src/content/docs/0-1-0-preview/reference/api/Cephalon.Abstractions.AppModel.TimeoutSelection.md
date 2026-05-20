---
title: Class TimeoutSelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-timeoutselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the timeout-policy inputs resolved for a Cephalon app.

```csharp
public sealed class TimeoutSelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TimeoutSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-timeoutselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_TimeoutSelection__ctor_System_Nullable_System_Boolean__System_Nullable_System_Int32__System_Nullable_System_Int32__"></a> TimeoutSelection\(bool?, int?, int?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.TimeoutSelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public TimeoutSelection(bool? enabled = null, int? totalTimeoutSeconds = null, int? attemptTimeoutSeconds = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether timeout support was explicitly enabled.

`totalTimeoutSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The overall timeout in seconds requested for an execution.

`attemptTimeoutSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The per-attempt timeout in seconds requested for an execution.

## Properties

### <a id="Cephalon_Abstractions_AppModel_TimeoutSelection_AttemptTimeoutSeconds"></a> AttemptTimeoutSeconds

Gets the per-attempt timeout in seconds requested for an execution.

```csharp
public int? AttemptTimeoutSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_AppModel_TimeoutSelection_Empty"></a> Empty

Gets an empty timeout-selection instance.

```csharp
public static TimeoutSelection Empty { get; }
```

#### Property Value

 [TimeoutSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-timeoutselection/)

### <a id="Cephalon_Abstractions_AppModel_TimeoutSelection_Enabled"></a> Enabled

Gets a value indicating whether timeout support was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_TimeoutSelection_HasValues"></a> HasValues

Gets a value indicating whether any timeout-selection inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_TimeoutSelection_TotalTimeoutSeconds"></a> TotalTimeoutSeconds

Gets the overall timeout in seconds requested for an execution.

```csharp
public int? TotalTimeoutSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
