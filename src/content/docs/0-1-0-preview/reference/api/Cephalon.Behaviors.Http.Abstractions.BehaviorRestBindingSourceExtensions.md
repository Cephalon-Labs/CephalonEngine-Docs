---
title: Class BehaviorRestBindingSourceExtensions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingsourceextensions
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions/)  
Assembly: Cephalon.Behaviors.Http.dll  

Provides canonical wire-name helpers for <xref href="Cephalon.Behaviors.Http.Abstractions.BehaviorRestBindingSource" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class BehaviorRestBindingSourceExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorRestBindingSourceExtensions](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingsourceextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestBindingSourceExtensions_GetWireName_Cephalon_Behaviors_Http_Abstractions_BehaviorRestBindingSource_"></a> GetWireName\(BehaviorRestBindingSource\)

Gets the stable wire name used by JSON serialization for the binding source.

```csharp
public static string GetWireName(this BehaviorRestBindingSource source)
```

#### Parameters

`source` [BehaviorRestBindingSource](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingsource/)

The binding source.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable wire name.

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestBindingSourceExtensions_TryParseWireName_System_String_Cephalon_Behaviors_Http_Abstractions_BehaviorRestBindingSource__"></a> TryParseWireName\(string?, out BehaviorRestBindingSource\)

Tries to parse the stable wire name used by JSON serialization into a binding source.

```csharp
public static bool TryParseWireName(string? value, out BehaviorRestBindingSource source)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The wire name to parse.

`source` [BehaviorRestBindingSource](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingsource/)

The parsed binding source when the wire name is recognized.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the wire name maps to a supported binding source; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
