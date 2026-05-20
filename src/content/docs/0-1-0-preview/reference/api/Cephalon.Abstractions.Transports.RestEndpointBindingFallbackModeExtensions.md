---
title: Class RestEndpointBindingFallbackModeExtensions
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingfallbackmodeextensions
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Provides canonical wire-name helpers for <xref href="Cephalon.Abstractions.Transports.RestEndpointBindingFallbackMode" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class RestEndpointBindingFallbackModeExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointBindingFallbackModeExtensions](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingfallbackmodeextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Abstractions_Transports_RestEndpointBindingFallbackModeExtensions_GetWireName_Cephalon_Abstractions_Transports_RestEndpointBindingFallbackMode_"></a> GetWireName\(RestEndpointBindingFallbackMode\)

Gets the stable wire name used by JSON serialization and compatibility metadata for the fallback mode.

```csharp
public static string GetWireName(this RestEndpointBindingFallbackMode mode)
```

#### Parameters

`mode` [RestEndpointBindingFallbackMode](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingfallbackmode/)

The fallback mode.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable wire name.

### <a id="Cephalon_Abstractions_Transports_RestEndpointBindingFallbackModeExtensions_TryParseWireName_System_String_Cephalon_Abstractions_Transports_RestEndpointBindingFallbackMode__"></a> TryParseWireName\(string?, out RestEndpointBindingFallbackMode\)

Tries to parse the stable wire name used by JSON serialization and compatibility metadata into a fallback mode.

```csharp
public static bool TryParseWireName(string? value, out RestEndpointBindingFallbackMode mode)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The wire name to parse.

`mode` [RestEndpointBindingFallbackMode](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointbindingfallbackmode/)

The parsed fallback mode when the wire name is recognized.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the wire name maps to a supported fallback mode; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
