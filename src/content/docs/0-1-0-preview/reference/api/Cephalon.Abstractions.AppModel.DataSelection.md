---
title: Class DataSelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-dataselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the active data-selection inputs resolved for a Cephalon app.

```csharp
public sealed class DataSelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-dataselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_DataSelection__ctor_System_String_System_Nullable_System_Boolean__System_Nullable_System_Boolean__System_String_"></a> DataSelection\(string?, bool?, bool?, string?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.DataSelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public DataSelection(string? provider = null, bool? readWriteSplit = null, bool? outboxEnabled = null, string? idGenerator = null)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected primary data-provider family or implementation identifier.

`readWriteSplit` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether distinct read and write paths were explicitly selected.

`outboxEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether the outbox pattern was explicitly enabled.

`idGenerator` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected identifier-generation strategy.

## Properties

### <a id="Cephalon_Abstractions_AppModel_DataSelection_Empty"></a> Empty

Gets an empty data-selection instance.

```csharp
public static DataSelection Empty { get; }
```

#### Property Value

 [DataSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-dataselection/)

### <a id="Cephalon_Abstractions_AppModel_DataSelection_HasValues"></a> HasValues

Gets a value indicating whether any data-selection inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_DataSelection_IdGenerator"></a> IdGenerator

Gets the selected identifier-generation strategy.

```csharp
public string? IdGenerator { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_AppModel_DataSelection_OutboxEnabled"></a> OutboxEnabled

Gets a value indicating whether the outbox pattern was explicitly enabled.

```csharp
public bool? OutboxEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_DataSelection_Provider"></a> Provider

Gets the selected primary data-provider family or implementation identifier.

```csharp
public string? Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_AppModel_DataSelection_ReadWriteSplit"></a> ReadWriteSplit

Gets a value indicating whether distinct read and write paths were explicitly selected.

```csharp
public bool? ReadWriteSplit { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?
