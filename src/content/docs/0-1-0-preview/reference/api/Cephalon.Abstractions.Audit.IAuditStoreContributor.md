---
title: Interface IAuditStoreContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-audit-iauditstorecontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Audit](/0-1-0-preview/reference/api/cephalon-abstractions-audit/)  
Assembly: Cephalon.Abstractions.dll  

Contributes one or more audit-store descriptors to the active runtime.

```csharp
public interface IAuditStoreContributor
```

## Methods

### <a id="Cephalon_Abstractions_Audit_IAuditStoreContributor_RegisterAuditStores_Cephalon_Abstractions_Audit_IAuditStoreRegistry_"></a> RegisterAuditStores\(IAuditStoreRegistry\)

Registers one or more audit-store descriptors with the supplied registry.

```csharp
void RegisterAuditStores(IAuditStoreRegistry auditStores)
```

#### Parameters

`auditStores` [IAuditStoreRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-audit-iauditstoreregistry/)

The registry that collects contributed audit-store descriptors.
