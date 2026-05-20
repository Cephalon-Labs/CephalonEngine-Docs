---
title: Class TechnologyCatalogSnapshot
slug: 0-1-0-preview/reference/api/cephalon-engine-technologies-technologycatalogsnapshot
editUrl: false
---

Namespace: [Cephalon.Engine.Technologies](/0-1-0-preview/reference/api/cephalon-engine-technologies/)  
Assembly: Cephalon.Engine.dll  

Captures the built-in and registered technology catalog visible to the runtime.

```csharp
public sealed class TechnologyCatalogSnapshot
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TechnologyCatalogSnapshot](/0-1-0-preview/reference/api/cephalon-engine-technologies-technologycatalogsnapshot/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Technologies_TechnologyCatalogSnapshot__ctor_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Technologies_TechnologyDescriptor__"></a> TechnologyCatalogSnapshot\(IReadOnlyList<TechnologyDescriptor\>\)

Initializes a new instance of the <xref href="Cephalon.Engine.Technologies.TechnologyCatalogSnapshot" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TechnologyCatalogSnapshot(IReadOnlyList<TechnologyDescriptor> technologies)
```

#### Parameters

`technologies` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<TechnologyDescriptor\>

The technologies visible in the catalog.

## Properties

### <a id="Cephalon_Engine_Technologies_TechnologyCatalogSnapshot_Technologies"></a> Technologies

Gets the technologies visible in the catalog.

```csharp
public IReadOnlyList<TechnologyDescriptor> Technologies { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<TechnologyDescriptor\>
