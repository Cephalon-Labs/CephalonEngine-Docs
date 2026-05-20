---
title: Class EventStreamDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-eventstreamdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.EventSourcing](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing/)  
Assembly: Cephalon.Abstractions.dll  

Describes one logical event stream visible to the current runtime.

```csharp
public sealed record EventStreamDescriptor : IEquatable<EventStreamDescriptor>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventStreamDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-eventstreamdescriptor/)

#### Implements

[IEquatable<EventStreamDescriptor\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_EventSourcing_EventStreamDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> EventStreamDescriptor\(string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.EventSourcing.EventStreamDescriptor" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EventStreamDescriptor(string id, string displayName, string description, string sourceModuleId, string provider, string mode = "append-only", IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable event-stream identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing event-stream name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable event-stream description.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier that owns the event stream.

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider identifier that persists the stream.

`mode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stream persistence mode. The default is <code>append-only</code>.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The descriptive tags associated with the stream.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The provider-specific metadata associated with the stream.

## Properties

### <a id="Cephalon_Abstractions_EventSourcing_EventStreamDescriptor_Description"></a> Description

Gets the normalized human-readable description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_EventSourcing_EventStreamDescriptor_DisplayName"></a> DisplayName

Gets the normalized operator-facing name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_EventSourcing_EventStreamDescriptor_Id"></a> Id

Gets the normalized event-stream identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_EventSourcing_EventStreamDescriptor_Metadata"></a> Metadata

Gets the normalized provider-specific metadata associated with the stream.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_EventSourcing_EventStreamDescriptor_Mode"></a> Mode

Gets the normalized stream persistence mode.

```csharp
public string Mode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_EventSourcing_EventStreamDescriptor_Provider"></a> Provider

Gets the normalized provider identifier.

```csharp
public string Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_EventSourcing_EventStreamDescriptor_SourceModuleId"></a> SourceModuleId

Gets the normalized source module identifier.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_EventSourcing_EventStreamDescriptor_Tags"></a> Tags

Gets the normalized descriptive tags associated with the stream.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
