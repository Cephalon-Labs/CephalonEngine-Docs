---
title: Interface IHttpBehaviorBindingRegistry
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-ihttpbehaviorbindingregistry
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions/)  
Assembly: Cephalon.Behaviors.Http.dll  

Provides lookup and enumeration of all registered <xref href="Cephalon.Behaviors.Http.Abstractions.IHttpBehaviorBinding" data-throw-if-not-resolved="false"></xref> instances.

```csharp
public interface IHttpBehaviorBindingRegistry
```

## Properties

### <a id="Cephalon_Behaviors_Http_Abstractions_IHttpBehaviorBindingRegistry_All"></a> All

Gets all registered bindings in registration order.

```csharp
IReadOnlyList<IHttpBehaviorBinding> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IHttpBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-ihttpbehaviorbinding/)\>

## Methods

### <a id="Cephalon_Behaviors_Http_Abstractions_IHttpBehaviorBindingRegistry_GetBinding_System_String_"></a> GetBinding\(string\)

Returns the binding registered for <code class="paramref">transportId</code>,
or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if none is registered.

```csharp
IHttpBehaviorBinding? GetBinding(string transportId)
```

#### Parameters

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canonical transport identifier, e.g. <code>http.jsonrpc</code>.

#### Returns

 [IHttpBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-ihttpbehaviorbinding/)?

The matching binding, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.
