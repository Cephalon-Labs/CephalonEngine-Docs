---
title: Class ScaffoldGenerator
slug: 0-1-0-preview/reference/api/cephalon-scaffolding-generation-scaffoldgenerator
editUrl: false
---

Namespace: [Cephalon.Scaffolding.Generation](/0-1-0-preview/reference/api/cephalon-scaffolding-generation/)  
Assembly: Cephalon.Scaffolding.dll  

Turns a Cephalon app profile and scaffold request into concrete projects, folders, and files.

```csharp
public static class ScaffoldGenerator
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ScaffoldGenerator](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-scaffoldgenerator/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Scaffolding_Generation_ScaffoldGenerator_Generate_Cephalon_Abstractions_AppModel_AppProfile_Cephalon_Scaffolding_Generation_ScaffoldRequest_"></a> Generate\(AppProfile, ScaffoldRequest\)

Generates a rendered scaffold from the supplied application profile and request.

```csharp
public static RenderedScaffold Generate(AppProfile appProfile, ScaffoldRequest request)
```

#### Parameters

`appProfile` [AppProfile](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-appprofile/)

The application profile that carries scaffold guidance.

`request` [ScaffoldRequest](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-scaffoldrequest/)

The concrete naming and framework request for generation.

#### Returns

 [RenderedScaffold](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedscaffold/)

The rendered scaffold output.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

Thrown when the supplied app profile does not carry a scaffold plan or when required scoped
values such as modules or features are missing for the selected blueprint.
