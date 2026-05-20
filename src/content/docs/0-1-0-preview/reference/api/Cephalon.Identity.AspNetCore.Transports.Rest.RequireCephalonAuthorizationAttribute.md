---
title: Class RequireCephalonAuthorizationAttribute
slug: 0-1-0-preview/reference/api/cephalon-identity-aspnetcore-transports-rest-requirecephalonauthorizationattribute
editUrl: false
---

Namespace: [Cephalon.Identity.AspNetCore.Transports.Rest](/0-1-0-preview/reference/api/cephalon-identity-aspnetcore-transports-rest/)  
Assembly: Cephalon.Identity.AspNetCore.dll  

Requires a Cephalon authorization decision before an ASP.NET Core controller or action can execute.

```csharp
[AttributeUsage(AttributeTargets.Class|AttributeTargets.Method, AllowMultiple = true, Inherited = true)]
public sealed class RequireCephalonAuthorizationAttribute : Attribute, IFilterFactory, IOrderedFilter, IFilterMetadata
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute) ← 
[RequireCephalonAuthorizationAttribute](/0-1-0-preview/reference/api/cephalon-identity-aspnetcore-transports-rest-requirecephalonauthorizationattribute/)

#### Implements

[IFilterFactory](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.ifilterfactory), 
[IOrderedFilter](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.iorderedfilter), 
[IFilterMetadata](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.ifiltermetadata)

#### Inherited Members

[Attribute.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.attribute.equals), 
[Attribute.GetCustomAttribute\(Assembly, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-assembly\-system\-type\)), 
[Attribute.GetCustomAttribute\(Assembly, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-assembly\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttribute\(MemberInfo, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-memberinfo\-system\-type\)), 
[Attribute.GetCustomAttribute\(MemberInfo, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-memberinfo\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttribute\(Module, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-module\-system\-type\)), 
[Attribute.GetCustomAttribute\(Module, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-module\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttribute\(ParameterInfo, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-parameterinfo\-system\-type\)), 
[Attribute.GetCustomAttribute\(ParameterInfo, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-parameterinfo\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(Assembly\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-assembly\)), 
[Attribute.GetCustomAttributes\(Assembly, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-assembly\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(Assembly, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-assembly\-system\-type\)), 
[Attribute.GetCustomAttributes\(Assembly, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-assembly\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(MemberInfo\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-memberinfo\)), 
[Attribute.GetCustomAttributes\(MemberInfo, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-memberinfo\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(MemberInfo, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-memberinfo\-system\-type\)), 
[Attribute.GetCustomAttributes\(MemberInfo, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-memberinfo\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(Module\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-module\)), 
[Attribute.GetCustomAttributes\(Module, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-module\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(Module, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-module\-system\-type\)), 
[Attribute.GetCustomAttributes\(Module, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-module\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(ParameterInfo\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-parameterinfo\)), 
[Attribute.GetCustomAttributes\(ParameterInfo, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-parameterinfo\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(ParameterInfo, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-parameterinfo\-system\-type\)), 
[Attribute.GetCustomAttributes\(ParameterInfo, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-parameterinfo\-system\-type\-system\-boolean\)), 
[Attribute.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.attribute.gethashcode), 
[Attribute.IsDefaultAttribute\(\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefaultattribute), 
[Attribute.IsDefined\(Assembly, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-assembly\-system\-type\)), 
[Attribute.IsDefined\(Assembly, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-assembly\-system\-type\-system\-boolean\)), 
[Attribute.IsDefined\(MemberInfo, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-memberinfo\-system\-type\)), 
[Attribute.IsDefined\(MemberInfo, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-memberinfo\-system\-type\-system\-boolean\)), 
[Attribute.IsDefined\(Module, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-module\-system\-type\)), 
[Attribute.IsDefined\(Module, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-module\-system\-type\-system\-boolean\)), 
[Attribute.IsDefined\(ParameterInfo, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-parameterinfo\-system\-type\)), 
[Attribute.IsDefined\(ParameterInfo, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-parameterinfo\-system\-type\-system\-boolean\)), 
[Attribute.Match\(object?\)](https://learn.microsoft.com/dotnet/api/system.attribute.match), 
[Attribute.TypeId](https://learn.microsoft.com/dotnet/api/system.attribute.typeid), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

This keeps controller and action authorization low ceremony by reusing the same Cephalon request-shaping,
challenge, forbid, and problem-details behavior already used by the minimal-API helper surface.

## Constructors

### <a id="Cephalon_Identity_AspNetCore_Transports_Rest_RequireCephalonAuthorizationAttribute__ctor_System_String_"></a> RequireCephalonAuthorizationAttribute\(string\)

Requires a Cephalon authorization decision before an ASP.NET Core controller or action can execute.

```csharp
public RequireCephalonAuthorizationAttribute(string policyId)
```

#### Parameters

`policyId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

This keeps controller and action authorization low ceremony by reusing the same Cephalon request-shaping,
challenge, forbid, and problem-details behavior already used by the minimal-API helper surface.

## Properties

### <a id="Cephalon_Identity_AspNetCore_Transports_Rest_RequireCephalonAuthorizationAttribute_Action"></a> Action

Gets or sets the optional action to evaluate.

```csharp
public string? Action { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Identity_AspNetCore_Transports_Rest_RequireCephalonAuthorizationAttribute_IsReusable"></a> IsReusable

Gets a value indicating whether the MVC filter instance can be reused across requests.

```csharp
public bool IsReusable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Identity_AspNetCore_Transports_Rest_RequireCephalonAuthorizationAttribute_Order"></a> Order

Gets the MVC filter order used to run the Cephalon authorization boundary early in the authorization stage.

```csharp
public int Order { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Identity_AspNetCore_Transports_Rest_RequireCephalonAuthorizationAttribute_OwnerSubjectIdRouteKey"></a> OwnerSubjectIdRouteKey

Gets or sets the optional route-value key that provides the owning subject identifier.

```csharp
public string? OwnerSubjectIdRouteKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Identity_AspNetCore_Transports_Rest_RequireCephalonAuthorizationAttribute_PolicyId"></a> PolicyId

Gets the Cephalon authorization policy id that must allow the request.

```csharp
public string PolicyId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Identity_AspNetCore_Transports_Rest_RequireCephalonAuthorizationAttribute_ResourceIdRouteKey"></a> ResourceIdRouteKey

Gets or sets the optional route-value key that provides the resource identifier.

```csharp
public string? ResourceIdRouteKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Identity_AspNetCore_Transports_Rest_RequireCephalonAuthorizationAttribute_ResourceType"></a> ResourceType

Gets or sets the optional logical resource type.

```csharp
public string? ResourceType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Identity_AspNetCore_Transports_Rest_RequireCephalonAuthorizationAttribute_TenantRouteKey"></a> TenantRouteKey

Gets or sets the optional route-value key that provides the tenant identifier.

```csharp
public string? TenantRouteKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### <a id="Cephalon_Identity_AspNetCore_Transports_Rest_RequireCephalonAuthorizationAttribute_CreateInstance_System_IServiceProvider_"></a> CreateInstance\(IServiceProvider\)

Creates the MVC authorization filter that evaluates the current request through the shared Cephalon boundary executor.

```csharp
public IFilterMetadata CreateInstance(IServiceProvider serviceProvider)
```

#### Parameters

`serviceProvider` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The request-scoped service provider used to resolve executor services.

#### Returns

 [IFilterMetadata](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.filters.ifiltermetadata)

The filter instance that will enforce the declared Cephalon authorization metadata.
