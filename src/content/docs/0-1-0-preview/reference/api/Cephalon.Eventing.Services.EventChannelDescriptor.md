---
title: Class EventChannelDescriptor
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-eventchanneldescriptor
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Describes an event channel that can be surfaced through the eventing runtime pack.

```csharp
public sealed class EventChannelDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventChannelDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventchanneldescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Eventing_Services_EventChannelDescriptor__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__"></a> EventChannelDescriptor\(string, string, string, IReadOnlyList<string\>?\)

Creates a new event channel descriptor.

```csharp
public EventChannelDescriptor(string id, string displayName, string description, IReadOnlyList<string>? tags = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable channel identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing channel name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the channel.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional tags that classify the channel.

## Properties

### <a id="Cephalon_Eventing_Services_EventChannelDescriptor_Description"></a> Description

Gets the human-readable description of the channel.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventChannelDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing display name for the channel.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventChannelDescriptor_Id"></a> Id

Gets the stable channel identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventChannelDescriptor_Tags"></a> Tags

Gets the normalized tag set associated with the channel.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
