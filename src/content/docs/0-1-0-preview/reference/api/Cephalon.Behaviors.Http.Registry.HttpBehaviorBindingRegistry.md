---
title: Class HttpBehaviorBindingRegistry
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-registry-httpbehaviorbindingregistry
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Registry](/0-1-0-preview/reference/api/cephalon-behaviors-http-registry/)  
Assembly: Cephalon.Behaviors.Http.dll  

Default implementation of <xref href="Cephalon.Behaviors.Http.Abstractions.IHttpBehaviorBindingRegistry" data-throw-if-not-resolved="false"></xref>.
Bindings are indexed at construction time using a frozen dictionary for
O(1) lock-free lookup on every request.

```csharp
public sealed class HttpBehaviorBindingRegistry : IHttpBehaviorBindingRegistry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HttpBehaviorBindingRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-http-registry-httpbehaviorbindingregistry/)

#### Implements

[IHttpBehaviorBindingRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-ihttpbehaviorbindingregistry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Http_Registry_HttpBehaviorBindingRegistry__ctor_System_Collections_Generic_IEnumerable_Cephalon_Behaviors_Http_Abstractions_IHttpBehaviorBinding__"></a> HttpBehaviorBindingRegistry\(IEnumerable<IHttpBehaviorBinding\>\)

Initializes the registry from the supplied enumeration of bindings.
Duplicate transport IDs are not allowed; the last registration wins.

```csharp
public HttpBehaviorBindingRegistry(IEnumerable<IHttpBehaviorBinding> bindings)
```

#### Parameters

`bindings` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IHttpBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-ihttpbehaviorbinding/)\>

The bindings to register.

## Properties

### <a id="Cephalon_Behaviors_Http_Registry_HttpBehaviorBindingRegistry_All"></a> All

Gets all registered bindings in registration order.

```csharp
public IReadOnlyList<IHttpBehaviorBinding> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IHttpBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-ihttpbehaviorbinding/)\>

## Methods

### <a id="Cephalon_Behaviors_Http_Registry_HttpBehaviorBindingRegistry_GetBinding_System_String_"></a> GetBinding\(string\)

Returns the binding registered for <code class="paramref">transportId</code>,
or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if none is registered.

```csharp
public IHttpBehaviorBinding? GetBinding(string transportId)
```

#### Parameters

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canonical transport identifier, e.g. <code>http.jsonrpc</code>.

#### Returns

 [IHttpBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-ihttpbehaviorbinding/)?

The matching binding, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.
