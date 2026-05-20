---
title: Interface IDatabaseTopologyOperationalSnapshotProvider
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-idatabasetopologyoperationalsnapshotprovider
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Creates the engine-owned operator-facing database-topology posture snapshot for the current runtime.

```csharp
public interface IDatabaseTopologyOperationalSnapshotProvider
```

## Methods

### <a id="Cephalon_Abstractions_Data_IDatabaseTopologyOperationalSnapshotProvider_CreateSnapshot"></a> CreateSnapshot\(\)

Creates the current database-topology posture snapshot.

```csharp
DatabaseTopologyOperationalSnapshot CreateSnapshot()
```

#### Returns

 [DatabaseTopologyOperationalSnapshot](/0-1-0-preview/reference/api/cephalon-abstractions-data-databasetopologyoperationalsnapshot/)

The current operator-facing database-topology posture snapshot.
