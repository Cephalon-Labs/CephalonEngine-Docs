---
title: Class IdentityRuntimeOptions
slug: 0-1-0-preview/reference/api/cephalon-identity-configuration-identityruntimeoptions
editUrl: false
---

Namespace: [Cephalon.Identity.Configuration](/0-1-0-preview/reference/api/cephalon-identity-configuration/)  
Assembly: Cephalon.Identity.dll  

Describes host-agnostic runtime options for the Cephalon identity companion pack.

```csharp
public sealed class IdentityRuntimeOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdentityRuntimeOptions](/0-1-0-preview/reference/api/cephalon-identity-configuration-identityruntimeoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Identity_Configuration_IdentityRuntimeOptions__ctor_System_Boolean_System_Boolean_System_Boolean_"></a> IdentityRuntimeOptions\(bool, bool, bool\)

Initializes a new instance of the <xref href="Cephalon.Identity.Configuration.IdentityRuntimeOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public IdentityRuntimeOptions(bool enableDefaultEvaluator = true, bool enableRuntimeSurface = true, bool requireExplicitPolicy = true)
```

#### Parameters

`enableDefaultEvaluator` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the built-in metadata-driven <code>IAuthorizationEvaluator</code> should stay active.

`enableRuntimeSurface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the companion pack should project identity and authorization runtime metadata through the
shared technology surface set.

`requireExplicitPolicy` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether callers must provide an explicit <code>AuthorizationContext.PolicyId</code> when using the built-in
metadata-driven evaluator.

## Properties

### <a id="Cephalon_Identity_Configuration_IdentityRuntimeOptions_EnableDefaultEvaluator"></a> EnableDefaultEvaluator

Gets or sets a value indicating whether the built-in metadata-driven authorization evaluator is active.

```csharp
public bool EnableDefaultEvaluator { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Identity_Configuration_IdentityRuntimeOptions_EnableRuntimeSurface"></a> EnableRuntimeSurface

Gets or sets a value indicating whether the pack should publish a runtime surface under
<code>identity-access</code>.

```csharp
public bool EnableRuntimeSurface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Identity_Configuration_IdentityRuntimeOptions_RequireExplicitPolicy"></a> RequireExplicitPolicy

Gets or sets a value indicating whether authorization calls must provide an explicit policy identifier.

```csharp
public bool RequireExplicitPolicy { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Cephalon_Identity_Configuration_IdentityRuntimeOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration?, string\)

Reads identity runtime options from configuration.

```csharp
public static IdentityRuntimeOptions FromConfiguration(IConfiguration? configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The root configuration that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [IdentityRuntimeOptions](/0-1-0-preview/reference/api/cephalon-identity-configuration-identityruntimeoptions/)

The parsed identity runtime options.
