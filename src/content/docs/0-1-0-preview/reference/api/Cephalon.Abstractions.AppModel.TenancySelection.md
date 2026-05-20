---
title: Class TenancySelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-tenancyselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the active multi-tenancy inputs resolved for a Cephalon app.

```csharp
public sealed class TenancySelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenancySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-tenancyselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_TenancySelection__ctor_System_Nullable_System_Boolean__System_String_"></a> TenancySelection\(bool?, string?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.TenancySelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public TenancySelection(bool? enabled = null, string? mode = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether multi-tenancy was explicitly enabled.

`mode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected tenancy mode.

## Properties

### <a id="Cephalon_Abstractions_AppModel_TenancySelection_Empty"></a> Empty

Gets an empty tenancy-selection instance.

```csharp
public static TenancySelection Empty { get; }
```

#### Property Value

 [TenancySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-tenancyselection/)

### <a id="Cephalon_Abstractions_AppModel_TenancySelection_Enabled"></a> Enabled

Gets a value indicating whether multi-tenancy was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_TenancySelection_HasValues"></a> HasValues

Gets a value indicating whether any tenancy-selection inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_TenancySelection_Mode"></a> Mode

Gets the selected tenancy mode.

```csharp
public string? Mode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
