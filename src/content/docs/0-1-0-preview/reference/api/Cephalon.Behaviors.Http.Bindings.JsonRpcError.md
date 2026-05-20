---
title: Class JsonRpcError
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-jsonrpcerror
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Bindings](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings/)  
Assembly: Cephalon.Behaviors.Http.dll  

Represents the error object inside a JSON-RPC 2.0 error response.

```csharp
public sealed class JsonRpcError
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[JsonRpcError](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-jsonrpcerror/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Behaviors_Http_Bindings_JsonRpcError_Code"></a> Code

Gets or sets the numeric error code.

```csharp
[JsonPropertyName("code")]
public int Code { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Behaviors_Http_Bindings_JsonRpcError_Data"></a> Data

Gets or sets optional additional error data.

```csharp
[JsonPropertyName("data")]
public string? Data { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Behaviors_Http_Bindings_JsonRpcError_Message"></a> Message

Gets or sets the short error message.

```csharp
[JsonPropertyName("message")]
public string Message { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
