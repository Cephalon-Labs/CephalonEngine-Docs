---
title: Class TrustPolicy
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-trustpolicy
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Defines package-trust and capability-governance rules for a Cephalon runtime.

```csharp
public sealed class TrustPolicy
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TrustPolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-trustpolicy/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

<p>
<xref href="Cephalon.Engine.Configuration.TrustPolicy" data-throw-if-not-resolved="false"></xref> is the engine's host-owned trust contract. It decides whether
independently shipped packages must be explicitly trusted, how capability access is resolved,
and which publishers, signer fingerprints, public keys, signing certificates, or assembly
checksums are accepted.
</p>
<p>
Package-loading decisions use this policy together with package metadata from
<code>cephalon.package.json</code>, cryptographic signature verification results, and the active
package policy. Capability access decisions then flow into runtime introspection and optional
HTTP request-time enforcement through the ASP.NET Core host adapters.
</p>

## Constructors

### <a id="Cephalon_Engine_Configuration_TrustPolicy__ctor_System_Boolean_Cephalon_Abstractions_Capabilities_CapabilityAccess_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_Cephalon_Abstractions_Capabilities_CapabilityAccess__System_Collections_Generic_IReadOnlyDictionary_System_String_System_Collections_Generic_IReadOnlyList_System_String___"></a> TrustPolicy\(bool, CapabilityAccess, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, CapabilityAccess\>?, IReadOnlyDictionary<string, IReadOnlyList<string\>\>?\)

Creates a trust policy.

```csharp
public TrustPolicy(bool requireTrustedPackages = false, CapabilityAccess defaultCapabilityAccess = CapabilityAccess.Allowed, IReadOnlyList<string>? trustedPackages = null, IReadOnlyList<string>? trustedAssemblies = null, IReadOnlyList<string>? trustedPublishers = null, IReadOnlyList<string>? trustedSignerFingerprints = null, IReadOnlyDictionary<string, string>? trustedSignaturePublicKeys = null, IReadOnlyDictionary<string, string>? trustedSignatureCertificates = null, IReadOnlyList<string>? trustedSignatureCertificateAuthorities = null, IReadOnlyDictionary<string, CapabilityAccess>? capabilities = null, IReadOnlyDictionary<string, IReadOnlyList<string>>? allowedPackageChecksums = null)
```

#### Parameters

`requireTrustedPackages` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to require independently loaded packages to match at least one trust rule;
otherwise package loads may proceed without an explicit trust match.

`defaultCapabilityAccess` CapabilityAccess

The default access applied when a capability key does not appear in <code class="paramref">capabilities</code>.

`trustedPackages` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Package identifiers that should be treated as trusted when package-level allow-listing is in use.

`trustedAssemblies` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Assembly names that should be treated as trusted when assembly-level allow-listing is in use.

`trustedPublishers` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Stable publisher identifiers that should be treated as trusted for independently shipped packages.

`trustedSignerFingerprints` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Signer fingerprints that should be treated as trusted for detached-signature provenance checks.

`trustedSignaturePublicKeys` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Public keys keyed by signing identity or signer fingerprint, used for cryptographic signature verification.

`trustedSignatureCertificates` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Signing certificates keyed by signing identity or signer fingerprint, used for certificate-backed
cryptographic signature verification.

`trustedSignatureCertificateAuthorities` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Root or intermediate certificate authorities used to validate configured signing certificates when
certificate-chain verification is enabled.

`capabilities` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), CapabilityAccess\>?

Explicit per-capability access overrides keyed by capability key.

`allowedPackageChecksums` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>?

Explicit package checksum allow-lists keyed by package identifier.

## Properties

### <a id="Cephalon_Engine_Configuration_TrustPolicy_AllowedPackageChecksums"></a> AllowedPackageChecksums

Gets the package checksum allow-lists keyed by package identifier.

```csharp
public IReadOnlyDictionary<string, IReadOnlyList<string>> AllowedPackageChecksums { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="Cephalon_Engine_Configuration_TrustPolicy_Capabilities"></a> Capabilities

Gets the explicit per-capability access rules.

```csharp
public IReadOnlyDictionary<string, CapabilityAccess> Capabilities { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), CapabilityAccess\>

### <a id="Cephalon_Engine_Configuration_TrustPolicy_Default"></a> Default

Gets the default trust policy.

```csharp
public static TrustPolicy Default { get; }
```

#### Property Value

 [TrustPolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-trustpolicy/)

### <a id="Cephalon_Engine_Configuration_TrustPolicy_DefaultCapabilityAccess"></a> DefaultCapabilityAccess

Gets the default access applied to capability keys without an explicit override.

```csharp
public CapabilityAccess DefaultCapabilityAccess { get; }
```

#### Property Value

 CapabilityAccess

### <a id="Cephalon_Engine_Configuration_TrustPolicy_HasValues"></a> HasValues

Gets a value indicating whether the policy differs from the default baseline.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_TrustPolicy_RequireTrustedPackages"></a> RequireTrustedPackages

Gets a value indicating whether explicitly discovered packages must satisfy a trust rule.

```csharp
public bool RequireTrustedPackages { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_TrustPolicy_TrustedAssemblies"></a> TrustedAssemblies

Gets the trusted assembly-name allow-list.

```csharp
public IReadOnlyList<string> TrustedAssemblies { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_TrustPolicy_TrustedPackages"></a> TrustedPackages

Gets the trusted package identifier allow-list.

```csharp
public IReadOnlyList<string> TrustedPackages { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_TrustPolicy_TrustedPublishers"></a> TrustedPublishers

Gets the trusted publisher identifier allow-list.

```csharp
public IReadOnlyList<string> TrustedPublishers { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_TrustPolicy_TrustedSignatureCertificateAuthorities"></a> TrustedSignatureCertificateAuthorities

Gets the configured certificate authorities used to validate trusted signing certificate chains.

```csharp
public IReadOnlyList<string> TrustedSignatureCertificateAuthorities { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_TrustPolicy_TrustedSignatureCertificates"></a> TrustedSignatureCertificates

Gets the configured trusted signing certificates used for certificate-backed detached-signature verification.

```csharp
public IReadOnlyDictionary<string, string> TrustedSignatureCertificates { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_TrustPolicy_TrustedSignaturePublicKeys"></a> TrustedSignaturePublicKeys

Gets the configured trusted public keys used for detached-signature verification.

```csharp
public IReadOnlyDictionary<string, string> TrustedSignaturePublicKeys { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_TrustPolicy_TrustedSignerFingerprints"></a> TrustedSignerFingerprints

Gets the trusted signer fingerprint allow-list.

```csharp
public IReadOnlyList<string> TrustedSignerFingerprints { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="Cephalon_Engine_Configuration_TrustPolicy_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads a trust policy from configuration.

```csharp
public static TrustPolicy FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The root configuration that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration path that should be interpreted as the engine settings section.
The default value is <xref href="Cephalon.Engine.Configuration.EngineSettings.SectionName" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [TrustPolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-trustpolicy/)

The configured trust policy, or <xref href="Cephalon.Engine.Configuration.TrustPolicy.Default" data-throw-if-not-resolved="false"></xref> when no values are supplied.

### <a id="Cephalon_Engine_Configuration_TrustPolicy_Merge_Cephalon_Engine_Configuration_TrustPolicy_"></a> Merge\(TrustPolicy?\)

Merges another trust policy into the current policy.

```csharp
public TrustPolicy Merge(TrustPolicy? other)
```

#### Parameters

`other` [TrustPolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-trustpolicy/)?

The policy to merge on top of the current instance.

#### Returns

 [TrustPolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-trustpolicy/)

A merged trust policy where allow-lists are unioned, keyed rules are overwritten by
<code class="paramref">other</code>, and stricter package-trust requirements remain enabled.

### <a id="Cephalon_Engine_Configuration_TrustPolicy_ResolveCapabilityAccess_System_String_"></a> ResolveCapabilityAccess\(string\)

Resolves the effective access for a capability key.

```csharp
public CapabilityAccess ResolveCapabilityAccess(string capabilityKey)
```

#### Parameters

`capabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The capability key to evaluate.

#### Returns

 CapabilityAccess

The explicit access configured for <code class="paramref">capabilityKey</code>, or
<xref href="Cephalon.Engine.Configuration.TrustPolicy.DefaultCapabilityAccess" data-throw-if-not-resolved="false"></xref> when no override exists.
