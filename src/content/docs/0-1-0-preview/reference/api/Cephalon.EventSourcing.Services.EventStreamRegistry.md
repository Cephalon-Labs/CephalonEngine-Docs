---
title: Class EventStreamRegistry
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-services-eventstreamregistry
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Services](/0-1-0-preview/reference/api/cephalon-eventsourcing-services/)  
Assembly: Cephalon.EventSourcing.dll  

Collects event-stream descriptors registered by the active host and companion packs.

```csharp
public sealed class EventStreamRegistry : IEventStoreRegistry, IEventStoreContributor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventStreamRegistry](/0-1-0-preview/reference/api/cephalon-eventsourcing-services-eventstreamregistry/)

#### Implements

IEventStoreRegistry, 
IEventStoreContributor

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_EventSourcing_Services_EventStreamRegistry__ctor"></a> EventStreamRegistry\(\)

Initializes a new instance of the <xref href="Cephalon.EventSourcing.Services.EventStreamRegistry" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EventStreamRegistry()
```

## Methods

### <a id="Cephalon_EventSourcing_Services_EventStreamRegistry_Contribute"></a> Contribute\(\)

Returns the descriptors that have been registered with the current registry instance.

```csharp
public IReadOnlyList<EventStreamDescriptor> Contribute()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<EventStreamDescriptor\>

The registered descriptors.

### <a id="Cephalon_EventSourcing_Services_EventStreamRegistry_Register_Cephalon_Abstractions_EventSourcing_EventStreamDescriptor_"></a> Register\(EventStreamDescriptor\)

Registers one event-stream descriptor with the registry.

```csharp
public void Register(EventStreamDescriptor descriptor)
```

#### Parameters

`descriptor` EventStreamDescriptor

The descriptor to register.
