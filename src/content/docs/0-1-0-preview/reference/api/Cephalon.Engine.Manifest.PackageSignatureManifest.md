---
title: Class PackageSignatureManifest
slug: 0-1-0-preview/reference/api/cephalon-engine-manifest-packagesignaturemanifest
editUrl: false
---

Namespace: [Cephalon.Engine.Manifest](/0-1-0-preview/reference/api/cephalon-engine-manifest/)  
Assembly: Cephalon.Engine.dll  

Describes a single package signature declared by a package manifest and the outcome of verifying it.

```csharp
public sealed class PackageSignatureManifest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PackageSignatureManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packagesignaturemanifest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Manifest_PackageSignatureManifest__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Boolean_System_String_"></a> PackageSignatureManifest\(string?, string?, string?, string?, string?, string?, string?, bool, string\)

Creates a package signature manifest entry.

```csharp
public PackageSignatureManifest(string? type, string? signer, string? keyId, string? fingerprint, string? algorithm, string? verificationSource, string? certificateThumbprint, bool isVerified, string verificationReason)
```

#### Parameters

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared signature type.

`signer` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared signer identity.

`keyId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared signature key identifier.

`fingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared signer fingerprint.

`algorithm` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared signature algorithm.

`verificationSource` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The trust source that verified the signature, when available.

`certificateThumbprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The thumbprint of the signing certificate used during verification, when certificate-backed trust was used.

`isVerified` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether this signature was cryptographically verified against a trusted public key or signing certificate.

`verificationReason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The verification outcome summary for this signature.

## Properties

### <a id="Cephalon_Engine_Manifest_PackageSignatureManifest_Algorithm"></a> Algorithm

Gets the declared signature algorithm.

```csharp
public string? Algorithm { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageSignatureManifest_CertificateThumbprint"></a> CertificateThumbprint

Gets the signing certificate thumbprint used during verification, when certificate-backed trust was used.

```csharp
public string? CertificateThumbprint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageSignatureManifest_Fingerprint"></a> Fingerprint

Gets the declared signer fingerprint.

```csharp
public string? Fingerprint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageSignatureManifest_IsVerified"></a> IsVerified

Gets a value indicating whether this signature was cryptographically verified against a trusted signing identity.

```csharp
public bool IsVerified { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Manifest_PackageSignatureManifest_KeyId"></a> KeyId

Gets the declared signature key identifier.

```csharp
public string? KeyId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageSignatureManifest_Signer"></a> Signer

Gets the declared signer identity.

```csharp
public string? Signer { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageSignatureManifest_Type"></a> Type

Gets the declared signature type.

```csharp
public string? Type { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageSignatureManifest_VerificationReason"></a> VerificationReason

Gets the verification outcome summary for this signature.

```csharp
public string VerificationReason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_PackageSignatureManifest_VerificationSource"></a> VerificationSource

Gets the trust source that verified the signature, when available.

```csharp
public string? VerificationSource { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
