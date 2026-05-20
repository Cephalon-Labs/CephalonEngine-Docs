---
title: Class IdentityAspNetCoreOptions
slug: 0-1-0-preview/reference/api/cephalon-identity-aspnetcore-configuration-identityaspnetcoreoptions
editUrl: false
---

Namespace: [Cephalon.Identity.AspNetCore.Configuration](/0-1-0-preview/reference/api/cephalon-identity-aspnetcore-configuration/)  
Assembly: Cephalon.Identity.AspNetCore.dll  

Describes ASP.NET Core-specific identity and authorization adapter options for Cephalon.

```csharp
public sealed class IdentityAspNetCoreOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdentityAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-identity-aspnetcore-configuration-identityaspnetcoreoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions__ctor"></a> IdentityAspNetCoreOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Identity.AspNetCore.Configuration.IdentityAspNetCoreOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public IdentityAspNetCoreOptions()
```

## Properties

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_AllowIdentityNameAsSubjectIdFallback"></a> AllowIdentityNameAsSubjectIdFallback

Gets or sets a value indicating whether <xref href="System.Security.Claims.ClaimsIdentity.Name" data-throw-if-not-resolved="false"></xref> can be used as the subject id
fallback when none of the configured claim types are present.

```csharp
public bool AllowIdentityNameAsSubjectIdFallback { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_AuthorizationDecisionItemKey"></a> AuthorizationDecisionItemKey

Gets or sets the <xref href="Microsoft.AspNetCore.Http.HttpContext.Items" data-throw-if-not-resolved="false"></xref> key that stores the most recent
Cephalon authorization decision for the current request.

```csharp
public string AuthorizationDecisionItemKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_DisplayNameClaimTypes"></a> DisplayNameClaimTypes

Gets the claim types that can provide the human-readable display name for the current subject.

```csharp
public List<string> DisplayNameClaimTypes { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_IncludeAllClaimsAsSubjectAttributes"></a> IncludeAllClaimsAsSubjectAttributes

Gets or sets a value indicating whether unmatched claims should be projected into
<xref href="Cephalon.Abstractions.Authorization.AuthorizationSubject.Attributes" data-throw-if-not-resolved="false"></xref>.

```csharp
public bool IncludeAllClaimsAsSubjectAttributes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_IncludeHeadersAsContextAttributes"></a> IncludeHeadersAsContextAttributes

Gets or sets a value indicating whether request headers should be projected into
<xref href="Cephalon.Abstractions.Authorization.AuthorizationContext.Attributes" data-throw-if-not-resolved="false"></xref>.

```csharp
public bool IncludeHeadersAsContextAttributes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_IncludeQueryStringAsContextAttributes"></a> IncludeQueryStringAsContextAttributes

Gets or sets a value indicating whether query-string values should be projected into
<xref href="Cephalon.Abstractions.Authorization.AuthorizationContext.Attributes" data-throw-if-not-resolved="false"></xref>.

```csharp
public bool IncludeQueryStringAsContextAttributes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_IncludeRouteValuesAsResourceAttributes"></a> IncludeRouteValuesAsResourceAttributes

Gets or sets a value indicating whether route values should be projected into
<xref href="Cephalon.Abstractions.Authorization.AuthorizationResource.Attributes" data-throw-if-not-resolved="false"></xref>.

```csharp
public bool IncludeRouteValuesAsResourceAttributes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_OwnerSubjectIdRouteKeys"></a> OwnerSubjectIdRouteKeys

Gets the route-value keys that can provide the owning subject identifier for the current resource.

```csharp
public List<string> OwnerSubjectIdRouteKeys { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_ResourceIdRouteKeys"></a> ResourceIdRouteKeys

Gets the route-value keys that can provide the current resource identifier.

```csharp
public List<string> ResourceIdRouteKeys { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_RoleClaimTypes"></a> RoleClaimTypes

Gets the claim types that can provide role memberships for the current subject.

```csharp
public List<string> RoleClaimTypes { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_SubjectIdClaimTypes"></a> SubjectIdClaimTypes

Gets the claim types that can provide the stable Cephalon authorization subject identifier.

```csharp
public List<string> SubjectIdClaimTypes { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_TenantClaimTypes"></a> TenantClaimTypes

Gets the claim types that can provide tenant memberships for the current subject.

```csharp
public List<string> TenantClaimTypes { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_TenantHeaderNames"></a> TenantHeaderNames

Gets the request-header names that can provide the current tenant identifier when route values do not.

```csharp
public List<string> TenantHeaderNames { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_TenantRouteKeys"></a> TenantRouteKeys

Gets the route-value keys that can provide the current tenant identifier.

```csharp
public List<string> TenantRouteKeys { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="Cephalon_Identity_AspNetCore_Configuration_IdentityAspNetCoreOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration?, string\)

Reads ASP.NET Core identity adapter options from configuration.

```csharp
public static IdentityAspNetCoreOptions FromConfiguration(IConfiguration? configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The root configuration that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The engine root section path to read from.

#### Returns

 [IdentityAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-identity-aspnetcore-configuration-identityaspnetcoreoptions/)

The parsed ASP.NET Core identity adapter options.
