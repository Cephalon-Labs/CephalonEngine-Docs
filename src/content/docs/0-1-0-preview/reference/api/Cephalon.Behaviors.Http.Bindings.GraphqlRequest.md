---
title: Class GraphqlRequest
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-graphqlrequest
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Bindings](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings/)  
Assembly: Cephalon.Behaviors.Http.dll  

Represents a parsed GraphQL request containing the query string and optional variables.

```csharp
public sealed record GraphqlRequest : IEquatable<GraphqlRequest>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GraphqlRequest](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-graphqlrequest/)

#### Implements

[IEquatable<GraphqlRequest\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Http_Bindings_GraphqlRequest__ctor_System_String_System_Text_Json_JsonElement_"></a> GraphqlRequest\(string, JsonElement\)

Represents a parsed GraphQL request containing the query string and optional variables.

```csharp
public GraphqlRequest(string Query, JsonElement Variables)
```

#### Parameters

`Query` [string](https://learn.microsoft.com/dotnet/api/system.string)

The GraphQL query string.

`Variables` [JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)

The optional variables document.

## Properties

### <a id="Cephalon_Behaviors_Http_Bindings_GraphqlRequest_Query"></a> Query

The GraphQL query string.

```csharp
public string Query { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Http_Bindings_GraphqlRequest_Variables"></a> Variables

The optional variables document.

```csharp
public JsonElement Variables { get; init; }
```

#### Property Value

 [JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)
