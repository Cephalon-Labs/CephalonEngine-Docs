---
title: Class IdentitySelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-identityselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the active identity and authorization inputs resolved for a Cephalon app.

```csharp
public sealed class IdentitySelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdentitySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-identityselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_IdentitySelection__ctor_System_Nullable_System_Boolean__System_Collections_Generic_IReadOnlyList_System_String__"></a> IdentitySelection\(bool?, IReadOnlyList<string\>?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.IdentitySelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public IdentitySelection(bool? enabled = null, IReadOnlyList<string>? authorizationModes = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether identity and authorization support was explicitly enabled.

`authorizationModes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The selected authorization modes.

## Properties

### <a id="Cephalon_Abstractions_AppModel_IdentitySelection_AuthorizationModes"></a> AuthorizationModes

Gets the selected authorization modes.

```csharp
public IReadOnlyList<string> AuthorizationModes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_IdentitySelection_Empty"></a> Empty

Gets an empty identity-selection instance.

```csharp
public static IdentitySelection Empty { get; }
```

#### Property Value

 [IdentitySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-identityselection/)

### <a id="Cephalon_Abstractions_AppModel_IdentitySelection_Enabled"></a> Enabled

Gets a value indicating whether identity and authorization support was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_IdentitySelection_HasValues"></a> HasValues

Gets a value indicating whether any identity-selection inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
