---
title: Class StranglerFigRequest
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigrequest
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Describes one request that should be evaluated by a strangler-fig router.

```csharp
public sealed class StranglerFigRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StranglerFigRequest](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRequest__ctor_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> StranglerFigRequest\(string, string, IReadOnlyDictionary<string, string\>?\)

Creates a new strangler-fig routing request.

```csharp
public StranglerFigRequest(string path, string method, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The request path or absolute URI that should be evaluated.

`method` [string](https://learn.microsoft.com/dotnet/api/system.string)

The request method to evaluate, such as <code>GET</code> or <code>POST</code>.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional host-specific metadata that can accompany the request.

## Properties

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRequest_Metadata"></a> Metadata

Gets optional host-specific metadata that accompanied the request.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRequest_Method"></a> Method

Gets the normalized request method.

```csharp
public string Method { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRequest_Path"></a> Path

Gets the request path or absolute URI that should be evaluated.

```csharp
public string Path { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
