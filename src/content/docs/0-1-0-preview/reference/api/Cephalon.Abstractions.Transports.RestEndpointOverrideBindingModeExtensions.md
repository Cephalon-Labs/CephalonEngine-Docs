---
title: Class RestEndpointOverrideBindingModeExtensions
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverridebindingmodeextensions
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Provides canonical wire-name helpers for <xref href="Cephalon.Abstractions.Transports.RestEndpointOverrideBindingMode" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class RestEndpointOverrideBindingModeExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointOverrideBindingModeExtensions](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverridebindingmodeextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideBindingModeExtensions_GetWireName_Cephalon_Abstractions_Transports_RestEndpointOverrideBindingMode_"></a> GetWireName\(RestEndpointOverrideBindingMode\)

Gets the stable wire name used by JSON serialization and compatibility metadata for the override binding mode.

```csharp
public static string GetWireName(this RestEndpointOverrideBindingMode bindingMode)
```

#### Parameters

`bindingMode` [RestEndpointOverrideBindingMode](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverridebindingmode/)

The override binding mode.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable wire name.

### <a id="Cephalon_Abstractions_Transports_RestEndpointOverrideBindingModeExtensions_TryParseWireName_System_String_Cephalon_Abstractions_Transports_RestEndpointOverrideBindingMode__"></a> TryParseWireName\(string?, out RestEndpointOverrideBindingMode\)

Tries to parse the stable wire name used by JSON serialization and compatibility metadata into an override binding mode.

```csharp
public static bool TryParseWireName(string? value, out RestEndpointOverrideBindingMode bindingMode)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The wire name to parse.

`bindingMode` [RestEndpointOverrideBindingMode](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverridebindingmode/)

The parsed override binding mode when the wire name is recognized.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the wire name maps to a supported override binding mode;
otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
