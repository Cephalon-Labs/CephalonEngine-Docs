---
title: Class KnowledgeIndexFreshnessStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexfreshnessstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Retrieval](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval/)  
Assembly: Cephalon.Abstractions.dll  

Defines stable freshness state identifiers for managed retrieval indexes.

```csharp
public static class KnowledgeIndexFreshnessStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KnowledgeIndexFreshnessStates](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexfreshnessstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexFreshnessStates_Failed"></a> Failed

The latest indexing run failed.

```csharp
public const string Failed = "failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexFreshnessStates_Fresh"></a> Fresh

The latest successful index is within the configured freshness window.

```csharp
public const string Fresh = "fresh"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexFreshnessStates_NotIndexed"></a> NotIndexed

The collection has not been indexed.

```csharp
public const string NotIndexed = "not-indexed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexFreshnessStates_Skipped"></a> Skipped

The latest indexing run was skipped.

```csharp
public const string Skipped = "skipped"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexFreshnessStates_Stale"></a> Stale

The latest successful index is older than the configured freshness window.

```csharp
public const string Stale = "stale"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
