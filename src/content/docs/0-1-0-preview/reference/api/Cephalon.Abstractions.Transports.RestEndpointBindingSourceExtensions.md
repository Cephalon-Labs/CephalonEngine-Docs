---
title: Class RestEndpointBindingSourceExtensions
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingsourceextensions
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Provides canonical wire-name helpers for <xref href="Cephalon.Abstractions.Transports.RestEndpointBindingSource" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class RestEndpointBindingSourceExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointBindingSourceExtensions](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingsourceextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Abstractions_Transports_RestEndpointBindingSourceExtensions_GetWireName_Cephalon_Abstractions_Transports_RestEndpointBindingSource_"></a> GetWireName\(RestEndpointBindingSource\)

Gets the stable wire name used by JSON serialization and REST governance config for the binding source.

```csharp
public static string GetWireName(this RestEndpointBindingSource source)
```

#### Parameters

`source` [RestEndpointBindingSource](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingsource/)

The binding source.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable wire name.

### <a id="Cephalon_Abstractions_Transports_RestEndpointBindingSourceExtensions_TryParseWireName_System_String_Cephalon_Abstractions_Transports_RestEndpointBindingSource__"></a> TryParseWireName\(string?, out RestEndpointBindingSource\)

Tries to parse the stable wire name used by JSON serialization and REST governance config into a binding source.

```csharp
public static bool TryParseWireName(string? value, out RestEndpointBindingSource source)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The wire name to parse.

`source` [RestEndpointBindingSource](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingsource/)

The parsed binding source when the wire name is recognized.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the wire name maps to a supported binding source; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
