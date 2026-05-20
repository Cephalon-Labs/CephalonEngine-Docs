---
title: Interface IAuditStoreRuntimeContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-audit-iauditstoreruntimecontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Audit](/0-1-0-preview/reference/api/cephalon-abstractions-audit/)  
Assembly: Cephalon.Abstractions.dll  

Contributes runtime-resolved audit-store descriptors to the active Cephalon audit surface.

```csharp
public interface IAuditStoreRuntimeContributor
```

## Methods

### <a id="Cephalon_Abstractions_Audit_IAuditStoreRuntimeContributor_DescribeAuditStores"></a> DescribeAuditStores\(\)

Describes the audit stores that should appear in the active runtime after configuration,
topology, and provider-specific options have been resolved.

```csharp
IReadOnlyList<AuditStoreDescriptor> DescribeAuditStores()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AuditStoreDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditstoredescriptor/)\>

The audit-store descriptors that should appear in the active runtime.
