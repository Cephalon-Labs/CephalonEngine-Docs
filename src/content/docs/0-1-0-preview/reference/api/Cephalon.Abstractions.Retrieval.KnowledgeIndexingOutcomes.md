---
title: Class KnowledgeIndexingOutcomes
slug: 0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexingoutcomes
editUrl: false
---

Namespace: [Cephalon.Abstractions.Retrieval](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval/)  
Assembly: Cephalon.Abstractions.dll  

Defines stable outcome identifiers emitted by managed retrieval indexing.

```csharp
public static class KnowledgeIndexingOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KnowledgeIndexingOutcomes](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexingoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingOutcomes_Failed"></a> Failed

Indexing failed before a replacement index could be published.

```csharp
public const string Failed = "failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingOutcomes_Skipped"></a> Skipped

Indexing was skipped because required runtime inputs were not available.

```csharp
public const string Skipped = "skipped"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingOutcomes_Started"></a> Started

Indexing started for a collection.

```csharp
public const string Started = "started"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingOutcomes_Succeeded"></a> Succeeded

Indexing completed successfully.

```csharp
public const string Succeeded = "succeeded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
