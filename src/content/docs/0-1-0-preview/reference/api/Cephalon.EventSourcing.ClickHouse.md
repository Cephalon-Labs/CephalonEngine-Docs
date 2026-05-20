---
title: Namespace Cephalon.EventSourcing.ClickHouse
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-clickhouse
editUrl: false
---

### Namespaces

 [Cephalon.EventSourcing.ClickHouse.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-clickhouse-hosting/)

### Classes

 [ClickHouseEventEntry](/0-1-0-preview/reference/api/cephalon-eventsourcing-clickhouse-clickhouseevententry/)

Represents one persisted domain event row stored by the ClickHouse event-store provider.

 [ClickHouseEventSourcingConfiguration](/0-1-0-preview/reference/api/cephalon-eventsourcing-clickhouse-clickhouseeventsourcingconfiguration/)

Holds the DDL template for bootstrapping the ClickHouse event-store table.

 [ClickHouseEventStore](/0-1-0-preview/reference/api/cephalon-eventsourcing-clickhouse-clickhouseeventstore/)

ClickHouse-backed implementation of <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref> using a <code>MergeTree</code> table
ordered by <code>(stream_id, stream_version)</code> for efficient per-stream range scans and append operations.
