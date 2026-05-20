---
title: Class PackageTrustDecision
slug: 0-1-0-preview/reference/api/cephalon-engine-trust-packagetrustdecision
editUrl: false
---

Namespace: [Cephalon.Engine.Trust](/0-1-0-preview/reference/api/cephalon-engine-trust/)  
Assembly: Cephalon.Engine.dll  

Describes the trust outcome for a package after package metadata, signature verification, and host trust rules have been evaluated.

```csharp
public sealed record PackageTrustDecision : IEquatable<PackageTrustDecision>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PackageTrustDecision](/0-1-0-preview/reference/api/cephalon-engine-trust-packagetrustdecision/)

#### Implements

[IEquatable<PackageTrustDecision\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Trust_PackageTrustDecision__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Trust_PackageSignatureTrustDecision__System_Boolean_System_String_System_Boolean_System_String_"></a> PackageTrustDecision\(string, string, string, string?, string?, string?, string?, IReadOnlyList<PackageSignatureTrustDecision\>, bool, string, bool, string\)

Describes the trust outcome for a package after package metadata, signature verification, and host trust rules have been evaluated.

```csharp
public PackageTrustDecision(string PackageId, string AssemblyName, string Path, string? PublisherId, string? SignatureKeyId, string? SignatureFingerprint, string? SignatureCertificateThumbprint, IReadOnlyList<PackageSignatureTrustDecision> Signatures, bool IsSignatureVerified, string SignatureVerificationReason, bool IsTrusted, string Reason)
```

#### Parameters

`PackageId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable package identifier.

`AssemblyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resolved assembly name for the package.

`Path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resolved assembly path used for the package load.

`PublisherId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared publisher identifier, when available.

`SignatureKeyId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The primary signature key identifier, when available.

`SignatureFingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The primary signature fingerprint, when available.

`SignatureCertificateThumbprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The primary signing certificate thumbprint used during verification, when certificate-backed trust was used.

`Signatures` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PackageSignatureTrustDecision](/0-1-0-preview/reference/api/cephalon-engine-trust-packagesignaturetrustdecision/)\>

The per-signer trust and verification details declared by the package.

`IsSignatureVerified` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether at least one declared signature verified successfully.

`SignatureVerificationReason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The aggregate signature verification outcome summary.

`IsTrusted` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the package is trusted by the active runtime trust policy.

`Reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reason the package was trusted or rejected.

## Properties

### <a id="Cephalon_Engine_Trust_PackageTrustDecision_AssemblyName"></a> AssemblyName

The resolved assembly name for the package.

```csharp
public string AssemblyName { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Trust_PackageTrustDecision_IsSignatureVerified"></a> IsSignatureVerified

Whether at least one declared signature verified successfully.

```csharp
public bool IsSignatureVerified { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Trust_PackageTrustDecision_IsTrusted"></a> IsTrusted

Whether the package is trusted by the active runtime trust policy.

```csharp
public bool IsTrusted { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Trust_PackageTrustDecision_PackageId"></a> PackageId

The stable package identifier.

```csharp
public string PackageId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Trust_PackageTrustDecision_Path"></a> Path

The resolved assembly path used for the package load.

```csharp
public string Path { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Trust_PackageTrustDecision_PublisherId"></a> PublisherId

The declared publisher identifier, when available.

```csharp
public string? PublisherId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Trust_PackageTrustDecision_Reason"></a> Reason

The reason the package was trusted or rejected.

```csharp
public string Reason { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Trust_PackageTrustDecision_SignatureCertificateThumbprint"></a> SignatureCertificateThumbprint

The primary signing certificate thumbprint used during verification, when certificate-backed trust was used.

```csharp
public string? SignatureCertificateThumbprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Trust_PackageTrustDecision_SignatureFingerprint"></a> SignatureFingerprint

The primary signature fingerprint, when available.

```csharp
public string? SignatureFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Trust_PackageTrustDecision_SignatureKeyId"></a> SignatureKeyId

The primary signature key identifier, when available.

```csharp
public string? SignatureKeyId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Trust_PackageTrustDecision_SignatureVerificationReason"></a> SignatureVerificationReason

The aggregate signature verification outcome summary.

```csharp
public string SignatureVerificationReason { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Trust_PackageTrustDecision_Signatures"></a> Signatures

The per-signer trust and verification details declared by the package.

```csharp
public IReadOnlyList<PackageSignatureTrustDecision> Signatures { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PackageSignatureTrustDecision](/0-1-0-preview/reference/api/cephalon-engine-trust-packagesignaturetrustdecision/)\>
