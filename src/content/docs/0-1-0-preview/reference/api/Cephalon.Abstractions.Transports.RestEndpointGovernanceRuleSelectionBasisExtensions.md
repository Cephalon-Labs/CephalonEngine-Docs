---
title: Class RestEndpointGovernanceRuleSelectionBasisExtensions
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasisextensions
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Provides canonical wire-name helpers for <xref href="Cephalon.Abstractions.Transports.RestEndpointGovernanceRuleSelectionBasis" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class RestEndpointGovernanceRuleSelectionBasisExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointGovernanceRuleSelectionBasisExtensions](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasisextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceRuleSelectionBasisExtensions_GetWireName_Cephalon_Abstractions_Transports_RestEndpointGovernanceRuleSelectionBasis_"></a> GetWireName\(RestEndpointGovernanceRuleSelectionBasis\)

Gets the stable wire name used by JSON serialization and runtime introspection for the
selection basis.

```csharp
public static string GetWireName(this RestEndpointGovernanceRuleSelectionBasis basis)
```

#### Parameters

`basis` [RestEndpointGovernanceRuleSelectionBasis](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis/)

The selection basis.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable wire name.

### <a id="Cephalon_Abstractions_Transports_RestEndpointGovernanceRuleSelectionBasisExtensions_TryParseWireName_System_String_Cephalon_Abstractions_Transports_RestEndpointGovernanceRuleSelectionBasis__"></a> TryParseWireName\(string?, out RestEndpointGovernanceRuleSelectionBasis\)

Tries to parse the stable wire name used by JSON serialization and runtime introspection into
a selection basis.

```csharp
public static bool TryParseWireName(string? value, out RestEndpointGovernanceRuleSelectionBasis basis)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The wire name to parse.

`basis` [RestEndpointGovernanceRuleSelectionBasis](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis/)

The parsed selection basis when the wire name is recognized.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the wire name maps to a supported selection basis; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
