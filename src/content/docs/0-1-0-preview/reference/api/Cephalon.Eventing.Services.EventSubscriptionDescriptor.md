---
title: Class EventSubscriptionDescriptor
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptiondescriptor
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Describes one declared event subscription available to the active eventing runtime.

```csharp
public sealed class EventSubscriptionDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventSubscriptionDescriptor](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptiondescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Eventing_Services_EventSubscriptionDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> EventSubscriptionDescriptor\(string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new event subscription descriptor.

```csharp
public EventSubscriptionDescriptor(string id, string displayName, string description, string channelId, string handlerId, string deliveryMode, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable subscription identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing subscription name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the subscription.

`channelId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical event channel that the subscription consumes.

`handlerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical handler or consumer identifier that receives the event.

`deliveryMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The declared delivery mode for the subscription.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional tags that classify the subscription.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional subscription metadata.

## Properties

### <a id="Cephalon_Eventing_Services_EventSubscriptionDescriptor_ChannelId"></a> ChannelId

Gets the logical event channel that the subscription consumes.

```csharp
public string ChannelId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionDescriptor_DeliveryMode"></a> DeliveryMode

Gets the declared delivery mode for the subscription.

```csharp
public string DeliveryMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionDescriptor_Description"></a> Description

Gets the human-readable description of the subscription.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing display name for the subscription.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionDescriptor_HandlerId"></a> HandlerId

Gets the logical handler or consumer identifier that receives the event.

```csharp
public string HandlerId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionDescriptor_Id"></a> Id

Gets the stable subscription identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionDescriptor_Metadata"></a> Metadata

Gets normalized metadata associated with the subscription.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Eventing_Services_EventSubscriptionDescriptor_Tags"></a> Tags

Gets the normalized tag set associated with the subscription.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
