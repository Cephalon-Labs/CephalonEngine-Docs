---
title: Class PackagePolicy
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-packagepolicy
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Defines governance requirements for independently shipped module packages.

```csharp
public sealed class PackagePolicy
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PackagePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-packagepolicy/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

<p>
<xref href="Cephalon.Engine.Configuration.PackagePolicy" data-throw-if-not-resolved="false"></xref> lets a host decide whether package loading should remain permissive
or require stronger metadata such as declared versions, compatibility ranges, publisher provenance,
or integrity hashes.
</p>
<p>
The policy applies to package assembly-path loads, manifest-file loads, and package-directory discovery.
When stricter requirements are enabled, packages that do not declare the required metadata fail fast
during engine build instead of loading ambiguously at runtime.
</p>

## Constructors

### <a id="Cephalon_Engine_Configuration_PackagePolicy__ctor_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_"></a> PackagePolicy\(bool, bool, bool, bool, bool, bool, bool, bool, bool, bool, bool\)

Creates a package policy.

```csharp
public PackagePolicy(bool allowAssemblyPathPackages = true, bool requireVersion = false, bool requireMinimumEngineVersion = false, bool requireMaximumEngineVersion = false, bool requireSupportedTargetFrameworks = false, bool requirePublisherId = false, bool requireSignatureFingerprint = false, bool requireSignatureKeyId = false, bool requireSignatureValue = false, bool requireSignatureVerification = false, bool requireIntegritySha256 = false)
```

#### Parameters

`allowAssemblyPathPackages` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to allow raw assembly-path packages; otherwise package loads must come
through a manifest-driven flow.

`requireVersion` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to require a declared package version in <code>cephalon.package.json</code>.

`requireMinimumEngineVersion` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to require <code>compatibility.minimumEngineVersion</code>.

`requireMaximumEngineVersion` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to require <code>compatibility.maximumEngineVersion</code>.

`requireSupportedTargetFrameworks` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to require <code>compatibility.supportedTargetFrameworks</code>.

`requirePublisherId` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to require <code>publisher.id</code>.

`requireSignatureFingerprint` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to require at least one declared signature entry to provide a signer fingerprint.

`requireSignatureKeyId` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to require at least one declared signature entry to provide a signature key identifier.

`requireSignatureValue` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to require at least one declared signature entry to provide a detached signature value.

`requireSignatureVerification` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to require a successful cryptographic signature verification against
a trusted public key.

`requireIntegritySha256` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to require <code>integrity.sha256</code>.

## Properties

### <a id="Cephalon_Engine_Configuration_PackagePolicy_AllowAssemblyPathPackages"></a> AllowAssemblyPathPackages

Gets a value indicating whether raw assembly-path packages are allowed.

```csharp
public bool AllowAssemblyPathPackages { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_PackagePolicy_Default"></a> Default

Gets the default package policy.

```csharp
public static PackagePolicy Default { get; }
```

#### Property Value

 [PackagePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-packagepolicy/)

### <a id="Cephalon_Engine_Configuration_PackagePolicy_HasValues"></a> HasValues

Gets a value indicating whether the policy differs from the default baseline.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_PackagePolicy_RequireIntegritySha256"></a> RequireIntegritySha256

Gets a value indicating whether package manifests must declare an integrity SHA-256 value.

```csharp
public bool RequireIntegritySha256 { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_PackagePolicy_RequireMaximumEngineVersion"></a> RequireMaximumEngineVersion

Gets a value indicating whether package manifests must declare a maximum supported engine version.

```csharp
public bool RequireMaximumEngineVersion { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_PackagePolicy_RequireMinimumEngineVersion"></a> RequireMinimumEngineVersion

Gets a value indicating whether package manifests must declare a minimum supported engine version.

```csharp
public bool RequireMinimumEngineVersion { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_PackagePolicy_RequirePublisherId"></a> RequirePublisherId

Gets a value indicating whether package manifests must declare a stable publisher identifier.

```csharp
public bool RequirePublisherId { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_PackagePolicy_RequireSignatureFingerprint"></a> RequireSignatureFingerprint

Gets a value indicating whether package manifests must declare a signer fingerprint on at least one signature entry.

```csharp
public bool RequireSignatureFingerprint { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_PackagePolicy_RequireSignatureKeyId"></a> RequireSignatureKeyId

Gets a value indicating whether package manifests must declare a signature key identifier on at least one signature entry.

```csharp
public bool RequireSignatureKeyId { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_PackagePolicy_RequireSignatureValue"></a> RequireSignatureValue

Gets a value indicating whether package manifests must declare a detached signature value on at least one signature entry.

```csharp
public bool RequireSignatureValue { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_PackagePolicy_RequireSignatureVerification"></a> RequireSignatureVerification

Gets a value indicating whether package signatures must verify against a trusted public key.

```csharp
public bool RequireSignatureVerification { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_PackagePolicy_RequireSupportedTargetFrameworks"></a> RequireSupportedTargetFrameworks

Gets a value indicating whether package manifests must declare supported target frameworks.

```csharp
public bool RequireSupportedTargetFrameworks { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_PackagePolicy_RequireVersion"></a> RequireVersion

Gets a value indicating whether package manifests must declare a version.

```csharp
public bool RequireVersion { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Cephalon_Engine_Configuration_PackagePolicy_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads package policy from configuration.

```csharp
public static PackagePolicy FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The root configuration that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration path that should be interpreted as the engine settings section.
The default value is <xref href="Cephalon.Engine.Configuration.EngineSettings.SectionName" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [PackagePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-packagepolicy/)

The configured package policy, or <xref href="Cephalon.Engine.Configuration.PackagePolicy.Default" data-throw-if-not-resolved="false"></xref> when no values are supplied.
