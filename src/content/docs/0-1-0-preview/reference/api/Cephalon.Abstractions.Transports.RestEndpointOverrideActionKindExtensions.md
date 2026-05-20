---
title: Class RestEndpointOverrideActionKindExtensions
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkindextensions
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Provides canonical wire-name helpers for <xref href="Cephalon.Abstractions.Transports.RestEndpointOverrideActionKind" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class RestEndpointOverrideActionKindExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointOverrideActionKindExtensions](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkindextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideActionKindExtensions_GetWireName_Cephalon_Abstractions_Transports_RestEndpointOverrideActionKind_"></a> GetWireName\(RestEndpointOverrideActionKind\)

Gets the stable wire name used by JSON serialization for the override action kind.

```csharp
public static string GetWireName(this RestEndpointOverrideActionKind actionKind)
```

#### Parameters

`actionKind` [RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)

The override action kind.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable wire name.

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideActionKindExtensions_TryParseWireName_System_String_Cephalon_Abstractions_Transports_RestEndpointOverrideActionKind__"></a> TryParseWireName\(string?, out RestEndpointOverrideActionKind\)

Tries to parse the stable wire name used by JSON serialization into an override action kind.

```csharp
public static bool TryParseWireName(string? value, out RestEndpointOverrideActionKind actionKind)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The wire name to parse.

`actionKind` [RestEndpointOverrideActionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind/)

The parsed override action kind when the wire name is recognized.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the wire name maps to a supported override action kind;
otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
