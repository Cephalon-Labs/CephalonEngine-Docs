---
title: Class BehaviorRestMethodExtensions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestmethodextensions
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions/)  
Assembly: Cephalon.Behaviors.Http.dll  

Provides canonical wire-name helpers for <xref href="Cephalon.Behaviors.Http.Abstractions.BehaviorRestMethod" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class BehaviorRestMethodExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorRestMethodExtensions](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestmethodextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestMethodExtensions_GetWireName_Cephalon_Behaviors_Http_Abstractions_BehaviorRestMethod_"></a> GetWireName\(BehaviorRestMethod\)

Gets the stable wire name used by JSON serialization for the REST method.

```csharp
public static string GetWireName(this BehaviorRestMethod method)
```

#### Parameters

`method` [BehaviorRestMethod](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestmethod/)

The REST method.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable wire name.

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestMethodExtensions_TryParseWireName_System_String_Cephalon_Behaviors_Http_Abstractions_BehaviorRestMethod__"></a> TryParseWireName\(string?, out BehaviorRestMethod\)

Tries to parse the stable wire name used by JSON serialization into a REST method.

```csharp
public static bool TryParseWireName(string? value, out BehaviorRestMethod method)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The wire name to parse.

`method` [BehaviorRestMethod](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestmethod/)

The parsed REST method when the wire name is recognized.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the wire name maps to a supported REST method; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
