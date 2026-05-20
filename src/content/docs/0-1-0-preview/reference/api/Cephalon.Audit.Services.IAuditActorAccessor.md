---
title: Interface IAuditActorAccessor
slug: 0-1-0-preview/reference/api/cephalon-audit-services-iauditactoraccessor
editUrl: false
---

Namespace: [Cephalon.Audit.Services](/0-1-0-preview/reference/api/cephalon-audit-services/)  
Assembly: Cephalon.Audit.dll  

Exposes the audit actor currently associated with the ambient runtime scope when one is known.

```csharp
public interface IAuditActorAccessor
```

## Properties

### <a id="Cephalon_Audit_Services_IAuditActorAccessor_Current"></a> Current

Gets the audit actor currently associated with the ambient runtime scope when one is known.

```csharp
AuditActor? Current { get; }
```

#### Property Value

 AuditActor?
