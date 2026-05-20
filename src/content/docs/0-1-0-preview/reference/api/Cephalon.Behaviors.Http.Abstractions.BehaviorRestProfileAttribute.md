---
title: Class BehaviorRestProfileAttribute
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestprofileattribute
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions/)  
Assembly: Cephalon.Behaviors.Http.dll  

Declares metadata-only REST projection preferences for a behavior without publishing a public REST route.

```csharp
[AttributeUsage(AttributeTargets.Class, AllowMultiple = false, Inherited = false)]
public sealed class BehaviorRestProfileAttribute : Attribute
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute) ← 
[BehaviorRestProfileAttribute](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestprofileattribute/)

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

This attribute does not activate public REST by itself. Cephalon keeps public REST module-owned,
so the attribute only describes a candidate method, relative route pattern, and optional API
version for future generated or descriptor-backed module projections. Use repeated
<xref href="Cephalon.Behaviors.Http.Abstractions.BehaviorRestBindingAttribute" data-throw-if-not-resolved="false"></xref> declarations when a module-owned projection should
bind selected input properties explicitly from route values, query string values, headers, or
JSON body fields. When a profile declares explicit bindings and still needs remaining query
values to flow implicitly, set <xref href="Cephalon.Behaviors.Http.Abstractions.BehaviorRestProfileAttribute.PreserveImplicitQueryFallback" data-throw-if-not-resolved="false"></xref> to <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>.

## Constructors

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestProfileAttribute__ctor_Cephalon_Behaviors_Http_Abstractions_BehaviorRestMethod_System_String_"></a> BehaviorRestProfileAttribute\(BehaviorRestMethod, string\)

Initializes a new instance of <xref href="Cephalon.Behaviors.Http.Abstractions.BehaviorRestProfileAttribute" data-throw-if-not-resolved="false"></xref>.

```csharp
public BehaviorRestProfileAttribute(BehaviorRestMethod method, string relativePattern)
```

#### Parameters

`method` [BehaviorRestMethod](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestmethod/)

The candidate REST method for a future module-owned projection.

`relativePattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

The candidate route pattern relative to a future owning REST group, for example
<code>"/{cartId}"</code> or <code>"/{cartId}/items"</code>.

## Properties

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestProfileAttribute_ApiVersionMajor"></a> ApiVersionMajor

Gets or sets the candidate API major version for the future REST projection.

```csharp
public int ApiVersionMajor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The default value <code>0</code> means "unspecified". Host-level publication still depends on the
published OpenAPI document allow-list such as <code>OpenApi:EnabledVersions</code>.

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestProfileAttribute_Method"></a> Method

Gets the candidate REST method for the future module-owned projection.

```csharp
public BehaviorRestMethod Method { get; }
```

#### Property Value

 [BehaviorRestMethod](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestmethod/)

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestProfileAttribute_PreserveImplicitQueryFallback"></a> PreserveImplicitQueryFallback

Gets or sets a value indicating whether explicit profile bindings should preserve the
remaining implicit query-string fallback surface.

```csharp
public bool PreserveImplicitQueryFallback { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This flag is meaningful only when the profile also declares explicit bindings through
<xref href="Cephalon.Behaviors.Http.Abstractions.BehaviorRestBindingAttribute" data-throw-if-not-resolved="false"></xref>. It lets module-owned shorthand keep selected
explicit route/query/header/body bindings while still letting unbound query-string values
populate the remaining input properties deterministically.

### <a id="Cephalon_Behaviors_Http_Abstractions_BehaviorRestProfileAttribute_RelativePattern"></a> RelativePattern

Gets the candidate route pattern relative to a future owning REST group.

```csharp
public string RelativePattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
