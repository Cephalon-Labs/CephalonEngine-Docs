---
title: Interface IAuditStoreRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-audit-iauditstoreregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Audit](/0-1-0-preview/reference/api/cephalon-abstractions-audit/)  
Assembly: Cephalon.Abstractions.dll  

Receives audit-store descriptors contributed by active modules or packages.

```csharp
public interface IAuditStoreRegistry
```

## Methods

### <a id="Cephalon_Abstractions_Audit_IAuditStoreRegistry_Add_Cephalon_Abstractions_Audit_AuditStoreDescriptor_"></a> Add\(AuditStoreDescriptor\)

Adds an audit store to the current runtime composition.

```csharp
void Add(AuditStoreDescriptor auditStore)
```

#### Parameters

`auditStore` [AuditStoreDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditstoredescriptor/)

The audit-store descriptor to register.
