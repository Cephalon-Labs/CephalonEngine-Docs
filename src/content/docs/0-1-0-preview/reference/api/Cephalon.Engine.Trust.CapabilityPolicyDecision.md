---
title: Class CapabilityPolicyDecision
slug: 0-1-0-preview/reference/api/cephalon-engine-trust-capabilitypolicydecision
editUrl: false
---

Namespace: [Cephalon.Engine.Trust](/0-1-0-preview/reference/api/cephalon-engine-trust/)  
Assembly: Cephalon.Engine.dll  

Describes the evaluated trust decision for a single capability.

```csharp
public sealed record CapabilityPolicyDecision : IEquatable<CapabilityPolicyDecision>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CapabilityPolicyDecision](/0-1-0-preview/reference/api/cephalon-engine-trust-capabilitypolicydecision/)

#### Implements

[IEquatable<CapabilityPolicyDecision\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Trust_CapabilityPolicyDecision__ctor_System_String_System_String_System_String_Cephalon_Abstractions_Capabilities_CapabilityAccess_System_Boolean_System_Boolean_System_String_"></a> CapabilityPolicyDecision\(string, string, string?, CapabilityAccess, bool, bool, string\)

Describes the evaluated trust decision for a single capability.

```csharp
public CapabilityPolicyDecision(string CapabilityKey, string SourceModuleId, string? SourcePackageId, CapabilityAccess Access, bool SourceTrusted, bool IsAllowed, string Reason)
```

#### Parameters

`CapabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The capability key that was evaluated.

`SourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module that contributed the capability.

`SourcePackageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The package that contributed the capability when one is known.

`Access` CapabilityAccess

The effective access mode resolved from policy.

`SourceTrusted` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the contributing source is trusted.

`IsAllowed` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the capability is allowed under the resolved policy.

`Reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable reason for the decision.

## Properties

### <a id="Cephalon_Engine_Trust_CapabilityPolicyDecision_Access"></a> Access

The effective access mode resolved from policy.

```csharp
public CapabilityAccess Access { get; init; }
```

#### Property Value

 CapabilityAccess

### <a id="Cephalon_Engine_Trust_CapabilityPolicyDecision_CapabilityKey"></a> CapabilityKey

The capability key that was evaluated.

```csharp
public string CapabilityKey { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Trust_CapabilityPolicyDecision_IsAllowed"></a> IsAllowed

Whether the capability is allowed under the resolved policy.

```csharp
public bool IsAllowed { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Trust_CapabilityPolicyDecision_Reason"></a> Reason

The human-readable reason for the decision.

```csharp
public string Reason { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Trust_CapabilityPolicyDecision_SourceModuleId"></a> SourceModuleId

The module that contributed the capability.

```csharp
public string SourceModuleId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Trust_CapabilityPolicyDecision_SourcePackageId"></a> SourcePackageId

The package that contributed the capability when one is known.

```csharp
public string? SourcePackageId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Trust_CapabilityPolicyDecision_SourceTrusted"></a> SourceTrusted

Whether the contributing source is trusted.

```csharp
public bool SourceTrusted { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
