---
title: Class JsonRpcSuccessResponse
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-jsonrpcsuccessresponse
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Bindings](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings/)  
Assembly: Cephalon.Behaviors.Http.dll  

Represents a successful JSON-RPC 2.0 response envelope.

```csharp
public sealed class JsonRpcSuccessResponse
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[JsonRpcSuccessResponse](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-jsonrpcsuccessresponse/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Behaviors_Http_Bindings_JsonRpcSuccessResponse_Id"></a> Id

Gets or sets the echoed request identifier.

```csharp
[JsonPropertyName("id")]
public JsonElement? Id { get; set; }
```

#### Property Value

 [JsonElement](https://learn.microsoft.com/dotnet/api/system.text.json.jsonelement)?

### <a id="Cephalon_Behaviors_Http_Bindings_JsonRpcSuccessResponse_Jsonrpc"></a> Jsonrpc

Gets or sets the JSON-RPC version (always "2.0").

```csharp
[JsonPropertyName("jsonrpc")]
public string Jsonrpc { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Http_Bindings_JsonRpcSuccessResponse_Result"></a> Result

Gets or sets the result payload.

```csharp
[JsonPropertyName("result")]
public object? Result { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)?
