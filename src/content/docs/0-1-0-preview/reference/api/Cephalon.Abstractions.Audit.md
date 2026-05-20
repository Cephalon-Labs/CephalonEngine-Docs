---
title: Namespace Cephalon.Abstractions.Audit
slug: 0-1-0-preview/reference/api/cephalon-abstractions-audit
editUrl: false
---

### Classes

 [AuditActor](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditactor/)

Describes the actor responsible for one audited operation.

 [AuditChange](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditchange/)

Describes one field-level change captured by an audit entry.

 [AuditEntry](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditentry/)

Describes one auditable operation recorded by the active audit implementation.

 [AuditHistoryEntry](/0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryentry/)

Represents one audit entry returned from a durable or queryable audit-history store.

 [AuditHistoryExportRequest](/0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryexportrequest/)

Describes a host-agnostic audit-history export request against the active audit-history exporter.

 [AuditHistoryQuery](/0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryquery/)

Describes a host-agnostic audit-history query against the active audit-history reader.

 [AuditHistoryQueryResult](/0-1-0-preview/reference/api/cephalon-abstractions-audit-audithistoryqueryresult/)

Represents one page of audit-history results returned by an <xref href="Cephalon.Abstractions.Audit.IAuditHistoryReader" data-throw-if-not-resolved="false"></xref>.

 [AuditStoreDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditstoredescriptor/)

Describes one audit store surface contributed to the active runtime.

### Interfaces

 [IAuditHistoryExporter](/0-1-0-preview/reference/api/cephalon-abstractions-audit-iaudithistoryexporter/)

Streams persisted audit-history entries for export-oriented operator or application flows.

 [IAuditHistoryReader](/0-1-0-preview/reference/api/cephalon-abstractions-audit-iaudithistoryreader/)

Reads persisted audit-history entries from the active runtime.

 [IAuditStoreCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-audit-iauditstorecatalog/)

Exposes the audit-store surfaces visible to the current runtime.

 [IAuditStoreContributor](/0-1-0-preview/reference/api/cephalon-abstractions-audit-iauditstorecontributor/)

Contributes one or more audit-store descriptors to the active runtime.

 [IAuditStoreRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-audit-iauditstoreregistry/)

Receives audit-store descriptors contributed by active modules or packages.

 [IAuditStoreRuntimeContributor](/0-1-0-preview/reference/api/cephalon-abstractions-audit-iauditstoreruntimecontributor/)

Contributes runtime-resolved audit-store descriptors to the active Cephalon audit surface.

 [IAuditWriter](/0-1-0-preview/reference/api/cephalon-abstractions-audit-iauditwriter/)

Persists audit entries for the current runtime.

### Enums

 [AuditOutcome](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditoutcome/)

Identifies the outcome recorded for an audit entry.
