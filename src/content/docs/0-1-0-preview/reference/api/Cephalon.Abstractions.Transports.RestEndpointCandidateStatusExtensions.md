---
title: Class RestEndpointCandidateStatusExtensions
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidatestatusextensions
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Provides canonical wire-name helpers for <xref href="Cephalon.Abstractions.Transports.RestEndpointCandidateStatus" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class RestEndpointCandidateStatusExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointCandidateStatusExtensions](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidatestatusextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateStatusExtensions_GetWireName_Cephalon_Abstractions_Transports_RestEndpointCandidateStatus_"></a> GetWireName\(RestEndpointCandidateStatus\)

Gets the stable wire name used by JSON serialization for the candidate status.

```csharp
public static string GetWireName(this RestEndpointCandidateStatus status)
```

#### Parameters

`status` [RestEndpointCandidateStatus](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidatestatus/)

The candidate status.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable wire name.

### <a id="Cephalon_Abstractions_Transports_RestEndpointCandidateStatusExtensions_TryParseWireName_System_String_Cephalon_Abstractions_Transports_RestEndpointCandidateStatus__"></a> TryParseWireName\(string?, out RestEndpointCandidateStatus\)

Tries to parse the stable wire name used by JSON serialization into a candidate status.

```csharp
public static bool TryParseWireName(string? value, out RestEndpointCandidateStatus status)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The wire name to parse.

`status` [RestEndpointCandidateStatus](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointcandidatestatus/)

The parsed candidate status when the wire name is recognized.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the wire name maps to a supported candidate status; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
