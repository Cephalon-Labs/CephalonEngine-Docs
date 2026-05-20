---
title: Interface IRuntimeIntrospectionSnapshotProvider
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-iruntimeintrospectionsnapshotprovider
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Creates operator-facing runtime introspection snapshots.

```csharp
public interface IRuntimeIntrospectionSnapshotProvider
```

## Methods

### <a id="Cephalon_Engine_Runtime_IRuntimeIntrospectionSnapshotProvider_CreateSnapshot"></a> CreateSnapshot\(\)

Creates a new runtime introspection snapshot from the current engine state.

```csharp
RuntimeIntrospectionSnapshot CreateSnapshot()
```

#### Returns

 [RuntimeIntrospectionSnapshot](/0-1-0-preview/reference/api/cephalon-engine-runtime-runtimeintrospectionsnapshot/)

The composed runtime snapshot.
