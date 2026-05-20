---
title: Class EventStreamConcurrencyException
slug: 0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-eventstreamconcurrencyexception
editUrl: false
---

Namespace: [Cephalon.Abstractions.EventSourcing](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing/)  
Assembly: Cephalon.Abstractions.dll  

Represents an optimistic concurrency failure while appending events to a stream.

```csharp
public sealed class EventStreamConcurrencyException : Exception, ISerializable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← 
[EventStreamConcurrencyException](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-eventstreamconcurrencyexception/)

#### Implements

[ISerializable](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

#### Inherited Members

[Exception.GetBaseException\(\)](https://learn.microsoft.com/dotnet/api/system.exception.getbaseexception), 
[Exception.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.exception.gettype), 
[Exception.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.exception.tostring), 
[Exception.Data](https://learn.microsoft.com/dotnet/api/system.exception.data), 
[Exception.HelpLink](https://learn.microsoft.com/dotnet/api/system.exception.helplink), 
[Exception.HResult](https://learn.microsoft.com/dotnet/api/system.exception.hresult), 
[Exception.InnerException](https://learn.microsoft.com/dotnet/api/system.exception.innerexception), 
[Exception.Message](https://learn.microsoft.com/dotnet/api/system.exception.message), 
[Exception.Source](https://learn.microsoft.com/dotnet/api/system.exception.source), 
[Exception.StackTrace](https://learn.microsoft.com/dotnet/api/system.exception.stacktrace), 
[Exception.TargetSite](https://learn.microsoft.com/dotnet/api/system.exception.targetsite), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_EventSourcing_EventStreamConcurrencyException__ctor_System_String_System_Int64_System_Int64_"></a> EventStreamConcurrencyException\(string, long, long\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.EventSourcing.EventStreamConcurrencyException" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EventStreamConcurrencyException(string streamId, long expectedVersion, long actualVersion)
```

#### Parameters

`streamId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stream identifier that failed the concurrency check.

`expectedVersion` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The version that the caller expected.

`actualVersion` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The version that currently exists in the store.

## Properties

### <a id="Cephalon_Abstractions_EventSourcing_EventStreamConcurrencyException_ActualVersion"></a> ActualVersion

Gets the version that currently exists in the store.

```csharp
public long ActualVersion { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_Abstractions_EventSourcing_EventStreamConcurrencyException_ExpectedVersion"></a> ExpectedVersion

Gets the version that the caller expected.

```csharp
public long ExpectedVersion { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_Abstractions_EventSourcing_EventStreamConcurrencyException_StreamId"></a> StreamId

Gets the stream identifier that failed the concurrency check.

```csharp
public string StreamId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
