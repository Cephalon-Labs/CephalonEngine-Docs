---
title: Class TrustSnapshot
slug: 0-1-0-preview/reference/api/cephalon-engine-trust-trustsnapshot
editUrl: false
---

Namespace: [Cephalon.Engine.Trust](/0-1-0-preview/reference/api/cephalon-engine-trust/)  
Assembly: Cephalon.Engine.dll  

Captures the effective trust policy together with evaluated package and capability decisions.

```csharp
public sealed record TrustSnapshot : IEquatable<TrustSnapshot>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TrustSnapshot](/0-1-0-preview/reference/api/cephalon-engine-trust-trustsnapshot/)

#### Implements

[IEquatable<TrustSnapshot\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Trust_TrustSnapshot__ctor_Cephalon_Engine_Configuration_TrustPolicy_System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Trust_PackageTrustDecision__System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Trust_CapabilityPolicyDecision__"></a> TrustSnapshot\(TrustPolicy, IReadOnlyList<PackageTrustDecision\>, IReadOnlyList<CapabilityPolicyDecision\>\)

Captures the effective trust policy together with evaluated package and capability decisions.

```csharp
public TrustSnapshot(TrustPolicy Policy, IReadOnlyList<PackageTrustDecision> Packages, IReadOnlyList<CapabilityPolicyDecision> Capabilities)
```

#### Parameters

`Policy` [TrustPolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-trustpolicy/)

The policy that produced the trust decisions.

`Packages` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PackageTrustDecision](/0-1-0-preview/reference/api/cephalon-engine-trust-packagetrustdecision/)\>

The evaluated package trust decisions.

`Capabilities` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CapabilityPolicyDecision](/0-1-0-preview/reference/api/cephalon-engine-trust-capabilitypolicydecision/)\>

The evaluated capability trust decisions.

## Properties

### <a id="Cephalon_Engine_Trust_TrustSnapshot_Capabilities"></a> Capabilities

The evaluated capability trust decisions.

```csharp
public IReadOnlyList<CapabilityPolicyDecision> Capabilities { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CapabilityPolicyDecision](/0-1-0-preview/reference/api/cephalon-engine-trust-capabilitypolicydecision/)\>

### <a id="Cephalon_Engine_Trust_TrustSnapshot_Packages"></a> Packages

The evaluated package trust decisions.

```csharp
public IReadOnlyList<PackageTrustDecision> Packages { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PackageTrustDecision](/0-1-0-preview/reference/api/cephalon-engine-trust-packagetrustdecision/)\>

### <a id="Cephalon_Engine_Trust_TrustSnapshot_Policy"></a> Policy

The policy that produced the trust decisions.

```csharp
public TrustPolicy Policy { get; init; }
```

#### Property Value

 [TrustPolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-trustpolicy/)
