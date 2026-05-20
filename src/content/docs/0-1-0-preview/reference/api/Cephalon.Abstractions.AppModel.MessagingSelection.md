---
title: Class MessagingSelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-messagingselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the active messaging inputs resolved for a Cephalon app.

```csharp
public sealed class MessagingSelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MessagingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-messagingselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_MessagingSelection__ctor_System_String_"></a> MessagingSelection\(string?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.MessagingSelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public MessagingSelection(string? provider = null)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected messaging provider or runtime adapter.

## Properties

### <a id="Cephalon_Abstractions_AppModel_MessagingSelection_Empty"></a> Empty

Gets an empty messaging-selection instance.

```csharp
public static MessagingSelection Empty { get; }
```

#### Property Value

 [MessagingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-messagingselection/)

### <a id="Cephalon_Abstractions_AppModel_MessagingSelection_HasValues"></a> HasValues

Gets a value indicating whether any messaging-selection inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_MessagingSelection_Provider"></a> Provider

Gets the selected messaging provider or runtime adapter.

```csharp
public string? Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
