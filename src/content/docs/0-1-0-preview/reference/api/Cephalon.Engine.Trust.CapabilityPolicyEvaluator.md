---
title: Class CapabilityPolicyEvaluator
slug: 0-1-0-preview/reference/api/cephalon-engine-trust-capabilitypolicyevaluator
editUrl: false
---

Namespace: [Cephalon.Engine.Trust](/0-1-0-preview/reference/api/cephalon-engine-trust/)  
Assembly: Cephalon.Engine.dll  

Evaluates capability and package trust decisions against the current trust policy snapshot.

```csharp
public sealed class CapabilityPolicyEvaluator
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CapabilityPolicyEvaluator](/0-1-0-preview/reference/api/cephalon-engine-trust-capabilitypolicyevaluator/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Trust_CapabilityPolicyEvaluator__ctor_Cephalon_Engine_Trust_TrustSnapshot_"></a> CapabilityPolicyEvaluator\(TrustSnapshot\)

Initializes a new instance of the <xref href="Cephalon.Engine.Trust.CapabilityPolicyEvaluator" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CapabilityPolicyEvaluator(TrustSnapshot snapshot)
```

#### Parameters

`snapshot` [TrustSnapshot](/0-1-0-preview/reference/api/cephalon-engine-trust-trustsnapshot/)

The trust snapshot to evaluate against.

## Properties

### <a id="Cephalon_Engine_Trust_CapabilityPolicyEvaluator_Snapshot"></a> Snapshot

Gets the trust snapshot being evaluated.

```csharp
public TrustSnapshot Snapshot { get; }
```

#### Property Value

 [TrustSnapshot](/0-1-0-preview/reference/api/cephalon-engine-trust-trustsnapshot/)

## Methods

### <a id="Cephalon_Engine_Trust_CapabilityPolicyEvaluator_CreateSnapshot_Cephalon_Engine_Configuration_TrustPolicy_System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Manifest_PackageManifest__System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Manifest_ModuleManifest__System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Manifest_CapabilityManifest__"></a> CreateSnapshot\(TrustPolicy, IReadOnlyList<PackageManifest\>, IReadOnlyList<ModuleManifest\>, IReadOnlyList<CapabilityManifest\>\)

Creates a trust snapshot from the supplied policy, packages, modules, and capabilities.

```csharp
public static TrustSnapshot CreateSnapshot(TrustPolicy policy, IReadOnlyList<PackageManifest> packages, IReadOnlyList<ModuleManifest> modules, IReadOnlyList<CapabilityManifest> capabilities)
```

#### Parameters

`policy` [TrustPolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-trustpolicy/)

The trust policy to apply.

`packages` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PackageManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packagemanifest/)\>

The package manifests visible to the runtime.

`modules` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ModuleManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-modulemanifest/)\>

The module manifests visible to the runtime.

`capabilities` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CapabilityManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-capabilitymanifest/)\>

The capability manifests visible to the runtime.

#### Returns

 [TrustSnapshot](/0-1-0-preview/reference/api/cephalon-engine-trust-trustsnapshot/)

A computed trust snapshot.

### <a id="Cephalon_Engine_Trust_CapabilityPolicyEvaluator_IsAllowed_System_String_"></a> IsAllowed\(string\)

Determines whether a capability is allowed under the current trust policy.

```csharp
public bool IsAllowed(string capabilityKey)
```

#### Parameters

`capabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The capability key to evaluate.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the capability is allowed; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_Engine_Trust_CapabilityPolicyEvaluator_TryGetDecision_System_String_Cephalon_Engine_Trust_CapabilityPolicyDecision__"></a> TryGetDecision\(string, out CapabilityPolicyDecision\)

Attempts to resolve the trust decision for a capability.

```csharp
public bool TryGetDecision(string capabilityKey, out CapabilityPolicyDecision decision)
```

#### Parameters

`capabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The capability key to evaluate.

`decision` [CapabilityPolicyDecision](/0-1-0-preview/reference/api/cephalon-engine-trust-capabilitypolicydecision/)

The resolved trust decision.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when a decision was produced.
