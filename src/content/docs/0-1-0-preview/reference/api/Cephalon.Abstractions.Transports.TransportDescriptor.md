---
title: Class TransportDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-transportdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one transport exposed by an app.

```csharp
public sealed class TransportDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TransportDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-transportdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Transports_TransportDescriptor__ctor_System_String_System_String_System_String_Cephalon_Abstractions_Transports_TransportFeatures_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TransportDescriptor\(string, string, string, TransportFeatures, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a transport descriptor.

```csharp
public TransportDescriptor(string id, string displayName, string description, TransportFeatures features, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable transport identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable transport name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The transport description.

`features` [TransportFeatures](/0-1-0-preview/reference/api/cephalon-abstractions-transports-transportfeatures/)

The features supported by the transport.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The tags associated with the transport.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional transport metadata.

## Properties

### <a id="Cephalon_Abstractions_Transports_TransportDescriptor_Description"></a> Description

Gets the transport description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_TransportDescriptor_DisplayName"></a> DisplayName

Gets the human-readable transport name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_TransportDescriptor_Features"></a> Features

Gets the features supported by the transport.

```csharp
public TransportFeatures Features { get; }
```

#### Property Value

 [TransportFeatures](/0-1-0-preview/reference/api/cephalon-abstractions-transports-transportfeatures/)

### <a id="Cephalon_Abstractions_Transports_TransportDescriptor_Id"></a> Id

Gets the stable transport identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_TransportDescriptor_Metadata"></a> Metadata

Gets optional transport metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_TransportDescriptor_Tags"></a> Tags

Gets the tags associated with the transport.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
