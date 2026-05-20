---
title: Class PackageSignatureTrustDecision
slug: 0-1-0-preview/reference/api/cephalon-engine-trust-packagesignaturetrustdecision
editUrl: false
---

Namespace: [Cephalon.Engine.Trust](/0-1-0-preview/reference/api/cephalon-engine-trust/)  
Assembly: Cephalon.Engine.dll  

Describes the trust and verification outcome for a single package signature.

```csharp
public sealed record PackageSignatureTrustDecision : IEquatable<PackageSignatureTrustDecision>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PackageSignatureTrustDecision](/0-1-0-preview/reference/api/cephalon-engine-trust-packagesignaturetrustdecision/)

#### Implements

[IEquatable<PackageSignatureTrustDecision\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Trust_PackageSignatureTrustDecision__ctor_System_String_System_String_System_String_System_String_System_String_System_Boolean_System_String_"></a> PackageSignatureTrustDecision\(string?, string?, string?, string?, string?, bool, string\)

Describes the trust and verification outcome for a single package signature.

```csharp
public PackageSignatureTrustDecision(string? Signer, string? KeyId, string? Fingerprint, string? VerificationSource, string? CertificateThumbprint, bool IsVerified, string Reason)
```

#### Parameters

`Signer` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared signer identity, when available.

`KeyId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared signing-key identifier, when available.

`Fingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared signer fingerprint, when available.

`VerificationSource` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The trust source that verified the signature, when available.

`CertificateThumbprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The signing certificate thumbprint used during verification, when certificate-backed trust was used.

`IsVerified` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether this signature verified successfully against a trusted public key or trusted signing certificate.

`Reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The verification outcome or failure reason for this signature.

## Properties

### <a id="Cephalon_Engine_Trust_PackageSignatureTrustDecision_CertificateThumbprint"></a> CertificateThumbprint

The signing certificate thumbprint used during verification, when certificate-backed trust was used.

```csharp
public string? CertificateThumbprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Trust_PackageSignatureTrustDecision_Fingerprint"></a> Fingerprint

The declared signer fingerprint, when available.

```csharp
public string? Fingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Trust_PackageSignatureTrustDecision_IsVerified"></a> IsVerified

Whether this signature verified successfully against a trusted public key or trusted signing certificate.

```csharp
public bool IsVerified { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Trust_PackageSignatureTrustDecision_KeyId"></a> KeyId

The declared signing-key identifier, when available.

```csharp
public string? KeyId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Trust_PackageSignatureTrustDecision_Reason"></a> Reason

The verification outcome or failure reason for this signature.

```csharp
public string Reason { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Trust_PackageSignatureTrustDecision_Signer"></a> Signer

The declared signer identity, when available.

```csharp
public string? Signer { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Trust_PackageSignatureTrustDecision_VerificationSource"></a> VerificationSource

The trust source that verified the signature, when available.

```csharp
public string? VerificationSource { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
