---
title: Class JsonRpcRequest
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-jsonrpcrequest
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Bindings](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings/)  
Assembly: Cephalon.Behaviors.Http.dll  

Represents a JSON-RPC 2.0 request envelope.

```csharp
public sealed class JsonRpcRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[JsonRpcRequest](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-jsonrpcrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Behaviors_Http_Bindings_JsonRpcRequest_Id"></a> Id

Gets or sets the request identifier.

```csharp
[JsonPropertyName("id")]
public JsonElement? Id { get; set; }
```

#### Property Value

 [JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?

### <a id="Cephalon_Behaviors_Http_Bindings_JsonRpcRequest_Jsonrpc"></a> Jsonrpc

Gets or sets the JSON-RPC version string (must be "2.0").

```csharp
[JsonPropertyName("jsonrpc")]
public string? Jsonrpc { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Behaviors_Http_Bindings_JsonRpcRequest_Method"></a> Method

Gets or sets the method name.

```csharp
[JsonPropertyName("method")]
public string? Method { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Behaviors_Http_Bindings_JsonRpcRequest_Params"></a> Params

Gets or sets the optional parameters.

```csharp
[JsonPropertyName("params")]
public JsonElement? Params { get; set; }
```

#### Property Value

 [JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?
