---
title: Class PackageManifest
slug: 0-1-0-preview/reference/api/cephalon-engine-manifest-packagemanifest
editUrl: false
---

Namespace: [Cephalon.Engine.Manifest](/0-1-0-preview/reference/api/cephalon-engine-manifest/)  
Assembly: Cephalon.Engine.dll  

Describes a package that contributed one or more modules to the built runtime.

```csharp
public sealed class PackageManifest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PackageManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packagemanifest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Manifest_PackageManifest__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_String_System_String_Cephalon_Engine_Manifest_PackageDistributionManifest_Cephalon_Engine_Manifest_PackageProvenanceManifest_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Manifest_PackageSignatureManifest__System_Boolean_System_String_System_String_System_Boolean_System_String_"></a> PackageManifest\(string, string, string, string, string, string, IReadOnlyList<string\>, string?, string?, string?, IReadOnlyList<string\>?, string?, string?, string?, PackageDistributionManifest?, PackageProvenanceManifest?, string?, string?, string?, string?, string?, string?, IReadOnlyList<PackageSignatureManifest\>?, bool, string, string, bool, string\)

Creates a new package manifest entry.

```csharp
public PackageManifest(string id, string kind, string assemblyName, string path, string sourcePath, string loadContext, IReadOnlyList<string> modules, string? version, string? minimumEngineVersion, string? maximumEngineVersion, IReadOnlyList<string>? supportedTargetFrameworks, string? publisherId, string? publisherDisplayName, string? publisherWebsite, PackageDistributionManifest? distribution, PackageProvenanceManifest? provenance, string? signatureType, string? signatureSigner, string? signatureKeyId, string? signatureFingerprint, string? signatureCertificateThumbprint, string? signatureAlgorithm, IReadOnlyList<PackageSignatureManifest>? signatures, bool isSignatureVerified, string signatureVerificationReason, string checksumSha256, bool isTrusted, string trustReason)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable package identifier.

`kind` [string](https://learn.microsoft.com/dotnet/api/system.string)

The discovery kind used to resolve the package.

`assemblyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The loaded package assembly name.

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resolved assembly path that was loaded.

`sourcePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The original source path that led to the package load.

`loadContext` [string](https://learn.microsoft.com/dotnet/api/system.string)

The assembly load context name used for the package.

`modules` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The identifiers of modules contributed by the package.

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The package version declared by the package manifest, when available.

`minimumEngineVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The minimum supported engine version declared by the package manifest, when available.

`maximumEngineVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The maximum supported engine version declared by the package manifest, when available.

`supportedTargetFrameworks` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The supported target frameworks declared by the package manifest.

`publisherId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable publisher identifier declared by the package manifest, when available.

`publisherDisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The publisher display name declared by the package manifest, when available.

`publisherWebsite` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The publisher website declared by the package manifest, when available.

`distribution` [PackageDistributionManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packagedistributionmanifest/)?

The external distribution metadata declared by the package manifest, when available.

`provenance` [PackageProvenanceManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packageprovenancemanifest/)?

The provenance metadata declared by the package manifest, when available.

`signatureType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The signature metadata type declared by the package manifest, when available.

`signatureSigner` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The signer identity declared by the package manifest, when available.

`signatureKeyId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The trusted-key identifier declared by the package manifest, when available.

`signatureFingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The signer fingerprint declared by the package manifest, when available.

`signatureCertificateThumbprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The primary signing certificate thumbprint used during verification, when certificate-backed trust was used.

`signatureAlgorithm` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The signature algorithm declared by the package manifest, when available.

`signatures` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PackageSignatureManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packagesignaturemanifest/)\>?

The declared package signatures and their individual verification outcomes.

`isSignatureVerified` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the package signature was cryptographically verified against a trusted public key or signing certificate.

`signatureVerificationReason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The verification outcome summary for the package signature.

`checksumSha256` [string](https://learn.microsoft.com/dotnet/api/system.string)

The computed SHA-256 checksum of the resolved package assembly.

`isTrusted` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the package is trusted by the current trust policy.

`trustReason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reason the package is trusted or not trusted.

## Properties

### <a id="Cephalon_Engine_Manifest_PackageManifest_AssemblyName"></a> AssemblyName

Gets the assembly name that was loaded for the package.

```csharp
public string AssemblyName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_PackageManifest_ChecksumSha256"></a> ChecksumSha256

Gets the computed SHA-256 checksum of the resolved package assembly.

```csharp
public string ChecksumSha256 { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_PackageManifest_Dependencies"></a> Dependencies

Gets the package-to-package dependencies declared by the package manifest.

```csharp
public IReadOnlyList<PackageDependencyManifest> Dependencies { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PackageDependencyManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packagedependencymanifest/)\>

### <a id="Cephalon_Engine_Manifest_PackageManifest_Distribution"></a> Distribution

Gets the external distribution metadata declared by the package manifest, when available.

```csharp
public PackageDistributionManifest? Distribution { get; }
```

#### Property Value

 [PackageDistributionManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packagedistributionmanifest/)?

### <a id="Cephalon_Engine_Manifest_PackageManifest_Id"></a> Id

Gets the stable package identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_PackageManifest_IsSignatureVerified"></a> IsSignatureVerified

Gets a value indicating whether the package signature was cryptographically verified against a trusted signing identity.

```csharp
public bool IsSignatureVerified { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Manifest_PackageManifest_IsTrusted"></a> IsTrusted

Gets a value indicating whether the package is trusted by the current trust policy.

```csharp
public bool IsTrusted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Manifest_PackageManifest_Kind"></a> Kind

Gets the package discovery kind, such as assembly path or manifest-file loading.

```csharp
public string Kind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_PackageManifest_LoadContext"></a> LoadContext

Gets the assembly load context name used for the package.

```csharp
public string LoadContext { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_PackageManifest_MaximumEngineVersion"></a> MaximumEngineVersion

Gets the maximum engine version supported by the package manifest, when available.

```csharp
public string? MaximumEngineVersion { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageManifest_MinimumEngineVersion"></a> MinimumEngineVersion

Gets the minimum engine version required by the package manifest, when available.

```csharp
public string? MinimumEngineVersion { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageManifest_Modules"></a> Modules

Gets the identifiers of modules contributed by the package.

```csharp
public IReadOnlyList<string> Modules { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Manifest_PackageManifest_Path"></a> Path

Gets the resolved assembly path that the engine loaded.

```csharp
public string Path { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_PackageManifest_Provenance"></a> Provenance

Gets the provenance metadata declared by the package manifest, when available.

```csharp
public PackageProvenanceManifest? Provenance { get; }
```

#### Property Value

 [PackageProvenanceManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packageprovenancemanifest/)?

### <a id="Cephalon_Engine_Manifest_PackageManifest_PublisherDisplayName"></a> PublisherDisplayName

Gets the publisher display name declared by the package manifest, when available.

```csharp
public string? PublisherDisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageManifest_PublisherId"></a> PublisherId

Gets the stable publisher identifier declared by the package manifest, when available.

```csharp
public string? PublisherId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageManifest_PublisherWebsite"></a> PublisherWebsite

Gets the publisher website declared by the package manifest, when available.

```csharp
public string? PublisherWebsite { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageManifest_SignatureAlgorithm"></a> SignatureAlgorithm

Gets the signature algorithm declared by the package manifest, when available.

```csharp
public string? SignatureAlgorithm { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageManifest_SignatureCertificateThumbprint"></a> SignatureCertificateThumbprint

Gets the primary signing certificate thumbprint used during verification, when certificate-backed trust was used.

```csharp
public string? SignatureCertificateThumbprint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageManifest_SignatureFingerprint"></a> SignatureFingerprint

Gets the signer fingerprint declared by the package manifest, when available.

```csharp
public string? SignatureFingerprint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageManifest_SignatureKeyId"></a> SignatureKeyId

Gets the trusted-key identifier declared by the package manifest, when available.

```csharp
public string? SignatureKeyId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageManifest_SignatureSigner"></a> SignatureSigner

Gets the signer identity declared by the package manifest, when available.

```csharp
public string? SignatureSigner { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageManifest_SignatureType"></a> SignatureType

Gets the signature metadata type declared by the package manifest, when available.

```csharp
public string? SignatureType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageManifest_SignatureVerificationReason"></a> SignatureVerificationReason

Gets the verification outcome summary for the package signature.

```csharp
public string SignatureVerificationReason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_PackageManifest_Signatures"></a> Signatures

Gets the declared package signatures and their individual verification outcomes.

```csharp
public IReadOnlyList<PackageSignatureManifest> Signatures { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PackageSignatureManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packagesignaturemanifest/)\>

### <a id="Cephalon_Engine_Manifest_PackageManifest_SourcePath"></a> SourcePath

Gets the original source path used to discover the package.

```csharp
public string SourcePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_PackageManifest_SupportedTargetFrameworks"></a> SupportedTargetFrameworks

Gets the target frameworks declared as compatible by the package manifest.

```csharp
public IReadOnlyList<string> SupportedTargetFrameworks { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Manifest_PackageManifest_TrustReason"></a> TrustReason

Gets the reason the package is trusted or not trusted by the current trust policy.

```csharp
public string TrustReason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_PackageManifest_Version"></a> Version

Gets the package version declared by the package manifest, when available.

```csharp
public string? Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
