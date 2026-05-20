---
title: Class RestEndpointAuthoringPolicySuppressionKindExtensions
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkindextensions
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Provides canonical wire-name helpers for <xref href="Cephalon.Abstractions.Transports.RestEndpointAuthoringPolicySuppressionKind" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class RestEndpointAuthoringPolicySuppressionKindExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointAuthoringPolicySuppressionKindExtensions](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkindextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicySuppressionKindExtensions_GetWireName_Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicySuppressionKind_"></a> GetWireName\(RestEndpointAuthoringPolicySuppressionKind\)

Gets the stable wire name used by JSON serialization and runtime introspection for the suppression kind.

```csharp
public static string GetWireName(this RestEndpointAuthoringPolicySuppressionKind kind)
```

#### Parameters

`kind` [RestEndpointAuthoringPolicySuppressionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkind/)

The suppression kind.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable wire name.

### <a id="Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicySuppressionKindExtensions_TryParseWireName_System_String_Cephalon_Abstractions_Transports_RestEndpointAuthoringPolicySuppressionKind__"></a> TryParseWireName\(string?, out RestEndpointAuthoringPolicySuppressionKind\)

Tries to parse the stable wire name used by JSON serialization and runtime introspection into a suppression kind.

```csharp
public static bool TryParseWireName(string? value, out RestEndpointAuthoringPolicySuppressionKind kind)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The wire name to parse.

`kind` [RestEndpointAuthoringPolicySuppressionKind](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointauthoringpolicysuppressionkind/)

The parsed suppression kind when the wire name is recognized.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the wire name maps to a supported suppression kind; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
