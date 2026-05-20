---
title: Class BuiltInTransports
slug: 0-1-0-preview/reference/api/cephalon-engine-transports-builtintransports
editUrl: false
---

Namespace: [Cephalon.Engine.Transports](/0-1-0-preview/reference/api/cephalon-engine-transports/)  
Assembly: Cephalon.Engine.dll  

Provides the built-in transport descriptors used by Cephalon app profiles.

```csharp
public static class BuiltInTransports
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BuiltInTransports](/0-1-0-preview/reference/api/cephalon-engine-transports-builtintransports/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Engine_Transports_BuiltInTransports_All"></a> All

Gets all built-in transport descriptors.

```csharp
public static IReadOnlyList<TransportDescriptor> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<TransportDescriptor\>

### <a id="Cephalon_Engine_Transports_BuiltInTransports_BehaviorHttp"></a> BehaviorHttp

Gets the built-in behavior HTTP transport descriptor that bridges behavior topology
bindings to ASP.NET Core endpoints, including canonical versioned routes for route-shaped
transports without the older <code>/behaviors/{id}</code> compatibility aliases.

```csharp
public static TransportDescriptor BehaviorHttp { get; }
```

#### Property Value

 TransportDescriptor

### <a id="Cephalon_Engine_Transports_BuiltInTransports_GraphQL"></a> GraphQL

Gets the built-in GraphQL transport descriptor.

```csharp
public static TransportDescriptor GraphQL { get; }
```

#### Property Value

 TransportDescriptor

### <a id="Cephalon_Engine_Transports_BuiltInTransports_Grpc"></a> Grpc

Gets the built-in gRPC transport descriptor.

```csharp
public static TransportDescriptor Grpc { get; }
```

#### Property Value

 TransportDescriptor

### <a id="Cephalon_Engine_Transports_BuiltInTransports_JsonRpc"></a> JsonRpc

Gets the built-in JSON-RPC transport descriptor.

```csharp
public static TransportDescriptor JsonRpc { get; }
```

#### Property Value

 TransportDescriptor

### <a id="Cephalon_Engine_Transports_BuiltInTransports_RestApi"></a> RestApi

Gets the built-in REST transport descriptor.

```csharp
public static TransportDescriptor RestApi { get; }
```

#### Property Value

 TransportDescriptor

### <a id="Cephalon_Engine_Transports_BuiltInTransports_ServerSentEvents"></a> ServerSentEvents

Gets the built-in server-sent-events transport descriptor.

```csharp
public static TransportDescriptor ServerSentEvents { get; }
```

#### Property Value

 TransportDescriptor

### <a id="Cephalon_Engine_Transports_BuiltInTransports_WebSocket"></a> WebSocket

Gets the built-in WebSocket transport descriptor.

```csharp
public static TransportDescriptor WebSocket { get; }
```

#### Property Value

 TransportDescriptor

## Methods

### <a id="Cephalon_Engine_Transports_BuiltInTransports_Resolve_System_String_"></a> Resolve\(string\)

Resolves a transport identifier, display name, or alias.

```csharp
public static TransportDescriptor Resolve(string value)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The transport identifier, display name, or alias to resolve.

#### Returns

 TransportDescriptor

The resolved transport descriptor.

### <a id="Cephalon_Engine_Transports_BuiltInTransports_TryResolve_System_String_Cephalon_Abstractions_Transports_TransportDescriptor__"></a> TryResolve\(string, out TransportDescriptor\)

Attempts to resolve a transport identifier, display name, or alias.

```csharp
public static bool TryResolve(string value, out TransportDescriptor transport)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The transport identifier, display name, or alias to resolve.

`transport` TransportDescriptor

The resolved transport descriptor when the lookup succeeds.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the transport was resolved; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
