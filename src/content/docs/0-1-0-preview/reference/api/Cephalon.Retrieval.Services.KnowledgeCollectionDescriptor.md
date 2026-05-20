---
title: Class KnowledgeCollectionDescriptor
slug: 0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgecollectiondescriptor
editUrl: false
---

Namespace: [Cephalon.Retrieval.Services](/0-1-0-preview/reference/api/cephalon-retrieval-services/)  
Assembly: Cephalon.Retrieval.dll  

Describes a knowledge collection that can be surfaced through the retrieval runtime pack.

```csharp
public sealed class KnowledgeCollectionDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KnowledgeCollectionDescriptor](/0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgecollectiondescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Retrieval_Services_KnowledgeCollectionDescriptor__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__"></a> KnowledgeCollectionDescriptor\(string, string, string, IReadOnlyList<string\>?\)

Creates a new knowledge collection descriptor.

```csharp
public KnowledgeCollectionDescriptor(string id, string displayName, string description, IReadOnlyList<string>? tags = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable collection identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing collection name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the collection.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional tags that classify the collection.

## Properties

### <a id="Cephalon_Retrieval_Services_KnowledgeCollectionDescriptor_Description"></a> Description

Gets the human-readable description of the collection.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Retrieval_Services_KnowledgeCollectionDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing display name for the collection.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Retrieval_Services_KnowledgeCollectionDescriptor_Id"></a> Id

Gets the stable collection identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Retrieval_Services_KnowledgeCollectionDescriptor_Tags"></a> Tags

Gets the normalized tag set associated with the collection.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
