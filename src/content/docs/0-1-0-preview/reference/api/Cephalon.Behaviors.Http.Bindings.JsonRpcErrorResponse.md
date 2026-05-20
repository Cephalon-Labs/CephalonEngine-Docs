---
title: Class JsonRpcErrorResponse
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-jsonrpcerrorresponse
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Bindings](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings/)  
Assembly: Cephalon.Behaviors.Http.dll  

Represents an error JSON-RPC 2.0 response envelope.

```csharp
public sealed class JsonRpcErrorResponse
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[JsonRpcErrorResponse](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-jsonrpcerrorresponse/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Behaviors_Http_Bindings_JsonRpcErrorResponse_Error"></a> Error

Gets or sets the error object.

```csharp
[JsonPropertyName("error")]
public JsonRpcError Error { get; set; }
```

#### Property Value

 [JsonRpcError](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-jsonrpcerror/)

### <a id="Cephalon_Behaviors_Http_Bindings_JsonRpcErrorResponse_Id"></a> Id

Gets or sets the echoed request identifier (null for parse errors).

```csharp
[JsonPropertyName("id")]
public JsonElement? Id { get; set; }
```

#### Property Value

 [JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?

### <a id="Cephalon_Behaviors_Http_Bindings_JsonRpcErrorResponse_Jsonrpc"></a> Jsonrpc

Gets or sets the JSON-RPC version (always "2.0").

```csharp
[JsonPropertyName("jsonrpc")]
public string Jsonrpc { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
