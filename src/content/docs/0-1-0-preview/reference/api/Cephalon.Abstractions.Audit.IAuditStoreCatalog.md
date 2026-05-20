---
title: Interface IAuditStoreCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-audit-iauditstorecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Audit](/0-1-0-preview/reference/api/cephalon-abstractions-audit/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the audit-store surfaces visible to the current runtime.

```csharp
public interface IAuditStoreCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Audit_IAuditStoreCatalog_AuditStores"></a> AuditStores

Gets all audit-store surfaces visible to the current runtime.

```csharp
IReadOnlyList<AuditStoreDescriptor> AuditStores { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuditStoreDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditstoredescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Audit_IAuditStoreCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one audit store by its stable identifier.

```csharp
AuditStoreDescriptor? GetById(string auditStoreId)
```

#### Parameters

`auditStoreId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The audit-store identifier to resolve.

#### Returns

 [AuditStoreDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditstoredescriptor/)?

The matching audit store, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Audit_IAuditStoreCatalog_GetByProvider_System_String_"></a> GetByProvider\(string\)

Gets all audit stores backed by the requested provider identifier.

```csharp
IReadOnlyList<AuditStoreDescriptor> GetByProvider(string provider)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuditStoreDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditstoredescriptor/)\>

The matching audit stores, or an empty list when the provider contributes none.

### <a id="Cephalon_Abstractions_Audit_IAuditStoreCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all audit stores contributed by the requested module.

```csharp
IReadOnlyList<AuditStoreDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuditStoreDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditstoredescriptor/)\>

The matching audit stores, or an empty list when the module contributed none.
