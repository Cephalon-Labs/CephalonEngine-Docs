---
title: Class EngineBuilder
slug: 0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder
editUrl: false
---

Namespace: [Cephalon.Engine.Composition](/0-1-0-preview/reference/api/cephalon-engine-composition/)  
Assembly: Cephalon.Engine.dll  

Builds a Cephalon runtime by composing the application model, module set, and policy inputs
into a single <xref href="Cephalon.Engine.Runtime.EngineRuntime" data-throw-if-not-resolved="false"></xref>.

```csharp
public sealed class EngineBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[AgenticEngineBuilderExtensions.AddAgentics\(EngineBuilder, Action<AgenticRuntimeOptions\>?\)](Cephalon.Agentics.Registration.AgenticEngineBuilderExtensions.md\#Cephalon\_Agentics\_Registration\_AgenticEngineBuilderExtensions\_AddAgentics\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Agentics\_Configuration\_AgenticRuntimeOptions\_\_), 
[AuditEngineBuilderExtensions.AddAudit\(EngineBuilder, Action<AuditRuntimeOptions\>?\)](Cephalon.Audit.Registration.AuditEngineBuilderExtensions.md\#Cephalon\_Audit\_Registration\_AuditEngineBuilderExtensions\_AddAudit\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Audit\_Configuration\_AuditRuntimeOptions\_\_), 
[BehaviorEventingEngineBuilderExtensions.AddBehaviorEventingBridge\(EngineBuilder\)](Cephalon.Eventing.Behaviors.Registration.BehaviorEventingEngineBuilderExtensions.md\#Cephalon\_Eventing\_Behaviors\_Registration\_BehaviorEventingEngineBuilderExtensions\_AddBehaviorEventingBridge\_Cephalon\_Engine\_Composition\_EngineBuilder\_), 
[BehaviorEngineBuilderExtensions.AddBehaviors\(EngineBuilder, Action<IBehaviorCollectionBuilder\>?\)](Cephalon.Behaviors.Hosting.BehaviorEngineBuilderExtensions.md\#Cephalon\_Behaviors\_Hosting\_BehaviorEngineBuilderExtensions\_AddBehaviors\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Behaviors\_Services\_IBehaviorCollectionBuilder\_\_), 
[BehaviorEngineBuilderExtensions.AddBehaviors\(EngineBuilder, Action<BehaviorOptions\>?, Action<IBehaviorCollectionBuilder\>?\)](Cephalon.Behaviors.Hosting.BehaviorEngineBuilderExtensions.md\#Cephalon\_Behaviors\_Hosting\_BehaviorEngineBuilderExtensions\_AddBehaviors\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Behaviors\_Configuration\_BehaviorOptions\_\_System\_Action\_Cephalon\_Behaviors\_Services\_IBehaviorCollectionBuilder\_\_), 
[ClickHouseDataEngineBuilderExtensions.AddClickHouseData\(EngineBuilder, string, string, Action<ClickHouseDataOptions\>?\)](Cephalon.Data.ClickHouse.Registration.ClickHouseDataEngineBuilderExtensions.md\#Cephalon\_Data\_ClickHouse\_Registration\_ClickHouseDataEngineBuilderExtensions\_AddClickHouseData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_String\_System\_String\_System\_Action\_Cephalon\_Data\_ClickHouse\_Configuration\_ClickHouseDataOptions\_\_), 
[DataEngineBuilderExtensions.AddData\(EngineBuilder, Action<DataRuntimeOptions\>?\)](Cephalon.Data.Registration.DataEngineBuilderExtensions.md\#Cephalon\_Data\_Registration\_DataEngineBuilderExtensions\_AddData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Data\_Configuration\_DataRuntimeOptions\_\_), 
[DebeziumDataEngineBuilderExtensions.AddDebeziumData\(EngineBuilder, Action<DebeziumDataOptions\>\)](Cephalon.Data.Debezium.Registration.DebeziumDataEngineBuilderExtensions.md\#Cephalon\_Data\_Debezium\_Registration\_DebeziumDataEngineBuilderExtensions\_AddDebeziumData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Data\_Debezium\_Configuration\_DebeziumDataOptions\_\_), 
[EdgeEngineBuilderExtensions.AddEdge\(EngineBuilder, Action<EdgeRuntimeOptions\>?\)](Cephalon.Edge.Registration.EdgeEngineBuilderExtensions.md\#Cephalon\_Edge\_Registration\_EdgeEngineBuilderExtensions\_AddEdge\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Edge\_Configuration\_EdgeRuntimeOptions\_\_), 
[ElasticsearchDataEngineBuilderExtensions.AddElasticsearchData\(EngineBuilder, string, Action<ElasticsearchDataOptions\>?\)](Cephalon.Data.Elasticsearch.Registration.ElasticsearchDataEngineBuilderExtensions.md\#Cephalon\_Data\_Elasticsearch\_Registration\_ElasticsearchDataEngineBuilderExtensions\_AddElasticsearchData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_String\_System\_Action\_Cephalon\_Data\_Elasticsearch\_Configuration\_ElasticsearchDataOptions\_\_), 
[ElasticsearchDataEngineBuilderExtensions.AddElasticsearchData\(EngineBuilder, Action<ElasticsearchDataOptions\>\)](Cephalon.Data.Elasticsearch.Registration.ElasticsearchDataEngineBuilderExtensions.md\#Cephalon\_Data\_Elasticsearch\_Registration\_ElasticsearchDataEngineBuilderExtensions\_AddElasticsearchData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Data\_Elasticsearch\_Configuration\_ElasticsearchDataOptions\_\_), 
[EntityFrameworkAuditHistoryEngineBuilderExtensions.AddEntityFrameworkAuditHistory<TDbContext\>\(EngineBuilder, Action<DbContextOptionsBuilder\>, Action<EntityFrameworkAuditHistoryOptions\>?\)](Cephalon.Audit.EntityFramework.Registration.EntityFrameworkAuditHistoryEngineBuilderExtensions.md\#Cephalon\_Audit\_EntityFramework\_Registration\_EntityFrameworkAuditHistoryEngineBuilderExtensions\_AddEntityFrameworkAuditHistory\_\_1\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Microsoft\_EntityFrameworkCore\_DbContextOptionsBuilder\_\_System\_Action\_Cephalon\_Audit\_EntityFramework\_Configuration\_EntityFrameworkAuditHistoryOptions\_\_), 
[EntityFrameworkAuditHistoryEngineBuilderExtensions.AddEntityFrameworkAuditHistory<TDbContext\>\(EngineBuilder, Action<EntityFrameworkDatabaseRoleContext, DbContextOptionsBuilder\>, Action<EntityFrameworkAuditHistoryOptions\>?\)](Cephalon.Audit.EntityFramework.Registration.EntityFrameworkAuditHistoryEngineBuilderExtensions.md\#Cephalon\_Audit\_EntityFramework\_Registration\_EntityFrameworkAuditHistoryEngineBuilderExtensions\_AddEntityFrameworkAuditHistory\_\_1\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Data\_EntityFramework\_Configuration\_EntityFrameworkDatabaseRoleContext\_Microsoft\_EntityFrameworkCore\_DbContextOptionsBuilder\_\_System\_Action\_Cephalon\_Audit\_EntityFramework\_Configuration\_EntityFrameworkAuditHistoryOptions\_\_), 
[EntityFrameworkDataEngineBuilderExtensions.AddEntityFrameworkData<TDbContext\>\(EngineBuilder, Action<DbContextOptionsBuilder\>, Action<EntityFrameworkDataOptions\>?\)](Cephalon.Data.EntityFramework.Registration.EntityFrameworkDataEngineBuilderExtensions.md\#Cephalon\_Data\_EntityFramework\_Registration\_EntityFrameworkDataEngineBuilderExtensions\_AddEntityFrameworkData\_\_1\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Microsoft\_EntityFrameworkCore\_DbContextOptionsBuilder\_\_System\_Action\_Cephalon\_Data\_EntityFramework\_Configuration\_EntityFrameworkDataOptions\_\_), 
[EntityFrameworkDataEngineBuilderExtensions.AddEntityFrameworkData<TDbContext\>\(EngineBuilder, Action<EntityFrameworkDatabaseRoleContext, DbContextOptionsBuilder\>, Action<EntityFrameworkDataOptions\>?\)](Cephalon.Data.EntityFramework.Registration.EntityFrameworkDataEngineBuilderExtensions.md\#Cephalon\_Data\_EntityFramework\_Registration\_EntityFrameworkDataEngineBuilderExtensions\_AddEntityFrameworkData\_\_1\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Data\_EntityFramework\_Configuration\_EntityFrameworkDatabaseRoleContext\_Microsoft\_EntityFrameworkCore\_DbContextOptionsBuilder\_\_System\_Action\_Cephalon\_Data\_EntityFramework\_Configuration\_EntityFrameworkDataOptions\_\_), 
[EntityFrameworkDataEngineBuilderExtensions.AddEntityFrameworkData<TReadDbContext, TWriteDbContext\>\(EngineBuilder, Action<DbContextOptionsBuilder\>, Action<DbContextOptionsBuilder\>, Action<EntityFrameworkDataOptions\>?\)](Cephalon.Data.EntityFramework.Registration.EntityFrameworkDataEngineBuilderExtensions.md\#Cephalon\_Data\_EntityFramework\_Registration\_EntityFrameworkDataEngineBuilderExtensions\_AddEntityFrameworkData\_\_2\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Microsoft\_EntityFrameworkCore\_DbContextOptionsBuilder\_\_System\_Action\_Microsoft\_EntityFrameworkCore\_DbContextOptionsBuilder\_\_System\_Action\_Cephalon\_Data\_EntityFramework\_Configuration\_EntityFrameworkDataOptions\_\_), 
[EntityFrameworkDataEngineBuilderExtensions.AddEntityFrameworkData<TReadDbContext, TWriteDbContext\>\(EngineBuilder, Action<EntityFrameworkDatabaseRoleContext, DbContextOptionsBuilder\>, Action<EntityFrameworkDataOptions\>?\)](Cephalon.Data.EntityFramework.Registration.EntityFrameworkDataEngineBuilderExtensions.md\#Cephalon\_Data\_EntityFramework\_Registration\_EntityFrameworkDataEngineBuilderExtensions\_AddEntityFrameworkData\_\_2\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Data\_EntityFramework\_Configuration\_EntityFrameworkDatabaseRoleContext\_Microsoft\_EntityFrameworkCore\_DbContextOptionsBuilder\_\_System\_Action\_Cephalon\_Data\_EntityFramework\_Configuration\_EntityFrameworkDataOptions\_\_), 
[EntityFrameworkEventSourcingEngineBuilderExtensions.AddEntityFrameworkEventSourcing<TContext\>\(EngineBuilder\)](Cephalon.EventSourcing.EntityFramework.Registration.EntityFrameworkEventSourcingEngineBuilderExtensions.md\#Cephalon\_EventSourcing\_EntityFramework\_Registration\_EntityFrameworkEventSourcingEngineBuilderExtensions\_AddEntityFrameworkEventSourcing\_\_1\_Cephalon\_Engine\_Composition\_EngineBuilder\_), 
[EventSourcingEngineBuilderExtensions.AddEventSourcing\(EngineBuilder, Action<EventSourcingOptions\>?\)](Cephalon.EventSourcing.Registration.EventSourcingEngineBuilderExtensions.md\#Cephalon\_EventSourcing\_Registration\_EventSourcingEngineBuilderExtensions\_AddEventSourcing\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_EventSourcing\_Configuration\_EventSourcingOptions\_\_), 
[EventingEngineBuilderExtensions.AddEventing\(EngineBuilder, Action<EventingOptions\>?\)](Cephalon.Eventing.Registration.EventingEngineBuilderExtensions.md\#Cephalon\_Eventing\_Registration\_EventingEngineBuilderExtensions\_AddEventing\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Eventing\_Configuration\_EventingOptions\_\_), 
[IdentityEngineBuilderExtensions.AddIdentityAccess\(EngineBuilder, Action<IdentityRuntimeOptions\>?\)](Cephalon.Identity.Registration.IdentityEngineBuilderExtensions.md\#Cephalon\_Identity\_Registration\_IdentityEngineBuilderExtensions\_AddIdentityAccess\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Identity\_Configuration\_IdentityRuntimeOptions\_\_), 
[KubernetesGatewayEngineBuilderExtensions.AddKubernetesGatewayTrafficMaterializer\(EngineBuilder, Action<KubernetesGatewayTrafficMaterializerOptions\>?\)](Cephalon.Edge.KubernetesGateway.Registration.KubernetesGatewayEngineBuilderExtensions.md\#Cephalon\_Edge\_KubernetesGateway\_Registration\_KubernetesGatewayEngineBuilderExtensions\_AddKubernetesGatewayTrafficMaterializer\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Edge\_KubernetesGateway\_Configuration\_KubernetesGatewayTrafficMaterializerOptions\_\_), 
[MongoDbDataEngineBuilderExtensions.AddMongoDbData\(EngineBuilder, string, string, Action<MongoDbDataOptions\>?\)](Cephalon.Data.MongoDB.Registration.MongoDbDataEngineBuilderExtensions.md\#Cephalon\_Data\_MongoDB\_Registration\_MongoDbDataEngineBuilderExtensions\_AddMongoDbData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_String\_System\_String\_System\_Action\_Cephalon\_Data\_MongoDB\_Configuration\_MongoDbDataOptions\_\_), 
[MongoDbDataEngineBuilderExtensions.AddMongoDbData\(EngineBuilder, Action<MongoDbDataOptions\>\)](Cephalon.Data.MongoDB.Registration.MongoDbDataEngineBuilderExtensions.md\#Cephalon\_Data\_MongoDB\_Registration\_MongoDbDataEngineBuilderExtensions\_AddMongoDbData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Data\_MongoDB\_Configuration\_MongoDbDataOptions\_\_), 
[MultiTenancyEngineBuilderExtensions.AddMultiTenancy\(EngineBuilder, Action<MultiTenancyRuntimeOptions\>?\)](Cephalon.MultiTenancy.Registration.MultiTenancyEngineBuilderExtensions.md\#Cephalon\_MultiTenancy\_Registration\_MultiTenancyEngineBuilderExtensions\_AddMultiTenancy\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_MultiTenancy\_Configuration\_MultiTenancyRuntimeOptions\_\_), 
[MultiTenancyGovernanceEngineBuilderExtensions.AddMultiTenancyGovernance\(EngineBuilder, Action<MultiTenancyGovernanceOptions\>?\)](Cephalon.MultiTenancy.Governance.Registration.MultiTenancyGovernanceEngineBuilderExtensions.md\#Cephalon\_MultiTenancy\_Governance\_Registration\_MultiTenancyGovernanceEngineBuilderExtensions\_AddMultiTenancyGovernance\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_MultiTenancy\_Governance\_Configuration\_MultiTenancyGovernanceOptions\_\_), 
[NatsDataEngineBuilderExtensions.AddNatsData\(EngineBuilder, string, Action<NatsDataOptions\>?\)](Cephalon.Data.Nats.Registration.NatsDataEngineBuilderExtensions.md\#Cephalon\_Data\_Nats\_Registration\_NatsDataEngineBuilderExtensions\_AddNatsData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_String\_System\_Action\_Cephalon\_Data\_Nats\_Configuration\_NatsDataOptions\_\_), 
[NatsDataEngineBuilderExtensions.AddNatsData\(EngineBuilder, Action<NatsDataOptions\>\)](Cephalon.Data.Nats.Registration.NatsDataEngineBuilderExtensions.md\#Cephalon\_Data\_Nats\_Registration\_NatsDataEngineBuilderExtensions\_AddNatsData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Data\_Nats\_Configuration\_NatsDataOptions\_\_), 
[Neo4jDataEngineBuilderExtensions.AddNeo4jData\(EngineBuilder, string, string, string, Action<Neo4jDataOptions\>?\)](Cephalon.Data.Neo4j.Registration.Neo4jDataEngineBuilderExtensions.md\#Cephalon\_Data\_Neo4j\_Registration\_Neo4jDataEngineBuilderExtensions\_AddNeo4jData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_String\_System\_String\_System\_String\_System\_Action\_Cephalon\_Data\_Neo4j\_Configuration\_Neo4jDataOptions\_\_), 
[Neo4jDataEngineBuilderExtensions.AddNeo4jData\(EngineBuilder, Action<Neo4jDataOptions\>\)](Cephalon.Data.Neo4j.Registration.Neo4jDataEngineBuilderExtensions.md\#Cephalon\_Data\_Neo4j\_Registration\_Neo4jDataEngineBuilderExtensions\_AddNeo4jData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Data\_Neo4j\_Configuration\_Neo4jDataOptions\_\_), 
[OpenSearchDataEngineBuilderExtensions.AddOpenSearchData\(EngineBuilder, string, Action<OpenSearchDataOptions\>?\)](Cephalon.Data.OpenSearch.Registration.OpenSearchDataEngineBuilderExtensions.md\#Cephalon\_Data\_OpenSearch\_Registration\_OpenSearchDataEngineBuilderExtensions\_AddOpenSearchData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_String\_System\_Action\_Cephalon\_Data\_OpenSearch\_Configuration\_OpenSearchDataOptions\_\_), 
[OpenSearchDataEngineBuilderExtensions.AddOpenSearchData\(EngineBuilder, Action<OpenSearchDataOptions\>\)](Cephalon.Data.OpenSearch.Registration.OpenSearchDataEngineBuilderExtensions.md\#Cephalon\_Data\_OpenSearch\_Registration\_OpenSearchDataEngineBuilderExtensions\_AddOpenSearchData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Data\_OpenSearch\_Configuration\_OpenSearchDataOptions\_\_), 
[PostgresDataEngineBuilderExtensions.AddPostgresData\(EngineBuilder, string, string, Action<PostgresDataOptions\>?\)](Cephalon.Data.Postgres.Registration.PostgresDataEngineBuilderExtensions.md\#Cephalon\_Data\_Postgres\_Registration\_PostgresDataEngineBuilderExtensions\_AddPostgresData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_String\_System\_String\_System\_Action\_Cephalon\_Data\_Postgres\_Configuration\_PostgresDataOptions\_\_), 
[PostgresDataEngineBuilderExtensions.AddPostgresData\(EngineBuilder, Action<PostgresDataOptions\>\)](Cephalon.Data.Postgres.Registration.PostgresDataEngineBuilderExtensions.md\#Cephalon\_Data\_Postgres\_Registration\_PostgresDataEngineBuilderExtensions\_AddPostgresData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Data\_Postgres\_Configuration\_PostgresDataOptions\_\_), 
[QdrantDataEngineBuilderExtensions.AddQdrantData\(EngineBuilder, string, int, Action<QdrantDataOptions\>?\)](Cephalon.Data.Qdrant.Registration.QdrantDataEngineBuilderExtensions.md\#Cephalon\_Data\_Qdrant\_Registration\_QdrantDataEngineBuilderExtensions\_AddQdrantData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_String\_System\_Int32\_System\_Action\_Cephalon\_Data\_Qdrant\_Configuration\_QdrantDataOptions\_\_), 
[RedisDataEngineBuilderExtensions.AddRedisData\(EngineBuilder, string, Action<RedisDataOptions\>?\)](Cephalon.Data.Redis.Registration.RedisDataEngineBuilderExtensions.md\#Cephalon\_Data\_Redis\_Registration\_RedisDataEngineBuilderExtensions\_AddRedisData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_String\_System\_Action\_Cephalon\_Data\_Redis\_Configuration\_RedisDataOptions\_\_), 
[RedisDataEngineBuilderExtensions.AddRedisData\(EngineBuilder, Action<RedisDataOptions\>\)](Cephalon.Data.Redis.Registration.RedisDataEngineBuilderExtensions.md\#Cephalon\_Data\_Redis\_Registration\_RedisDataEngineBuilderExtensions\_AddRedisData\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Data\_Redis\_Configuration\_RedisDataOptions\_\_), 
[RetrievalEngineBuilderExtensions.AddRetrieval\(EngineBuilder, Action<RetrievalOptions\>?\)](Cephalon.Retrieval.Registration.RetrievalEngineBuilderExtensions.md\#Cephalon\_Retrieval\_Registration\_RetrievalEngineBuilderExtensions\_AddRetrieval\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Retrieval\_Configuration\_RetrievalOptions\_\_), 
[SfidEngineBuilderExtensions.AddSfidIds\(EngineBuilder, Action<SfidIdOptions\>?\)](Cephalon.Ids.Sfid.Registration.SfidEngineBuilderExtensions.md\#Cephalon\_Ids\_Sfid\_Registration\_SfidEngineBuilderExtensions\_AddSfidIds\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Ids\_Sfid\_Configuration\_SfidIdOptions\_\_), 
[TraefikEngineBuilderExtensions.AddTraefikTrafficMaterializer\(EngineBuilder, Action<TraefikTrafficMaterializerOptions\>?\)](Cephalon.Edge.Traefik.Registration.TraefikEngineBuilderExtensions.md\#Cephalon\_Edge\_Traefik\_Registration\_TraefikEngineBuilderExtensions\_AddTraefikTrafficMaterializer\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Edge\_Traefik\_Configuration\_TraefikTrafficMaterializerOptions\_\_), 
[WolverineEventingEngineBuilderExtensions.AddWolverineEventing\(EngineBuilder, Action<WolverineEventingOptions\>?\)](Cephalon.Eventing.Wolverine.Registration.WolverineEventingEngineBuilderExtensions.md\#Cephalon\_Eventing\_Wolverine\_Registration\_WolverineEventingEngineBuilderExtensions\_AddWolverineEventing\_Cephalon\_Engine\_Composition\_EngineBuilder\_System\_Action\_Cephalon\_Eventing\_Wolverine\_Configuration\_WolverineEventingOptions\_\_)

## Remarks

<p>
<xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref> is the main code-first entry point for configuring Cephalon.
It can be driven from configuration, composed in code, or use both approaches together.
</p>
<p>
At build time the builder resolves discovery inputs, package loading, application profile
selection, localization, trust policy, failure policy, and capability filtering into a
deterministic runtime snapshot.
</p>

## Constructors

### <a id="Cephalon_Engine_Composition_EngineBuilder__ctor_Microsoft_Extensions_DependencyInjection_IServiceCollection_"></a> EngineBuilder\(IServiceCollection\)

Creates a new builder over the supplied service collection.

```csharp
public EngineBuilder(IServiceCollection services)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection that receives runtime services, catalogs, policies, and
module- or technology-provided registrations.

## Properties

### <a id="Cephalon_Engine_Composition_EngineBuilder_Services"></a> Services

Gets the service collection that the builder mutates while composing the engine.

```csharp
public IServiceCollection Services { get; }
```

#### Property Value

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

## Methods

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddBackendForFrontendClientBinding_Cephalon_Abstractions_Patterns_BackendForFrontendClientBindingDescriptor_"></a> AddBackendForFrontendClientBinding\(BackendForFrontendClientBindingDescriptor\)

Adds a backend-for-frontend client binding to the current runtime composition.

```csharp
public EngineBuilder AddBackendForFrontendClientBinding(BackendForFrontendClientBindingDescriptor binding)
```

#### Parameters

`binding` BackendForFrontendClientBindingDescriptor

The client binding descriptor to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddBackendForFrontendClientBindings_System_Collections_Generic_IEnumerable_Cephalon_Abstractions_Patterns_BackendForFrontendClientBindingDescriptor__"></a> AddBackendForFrontendClientBindings\(IEnumerable<BackendForFrontendClientBindingDescriptor\>\)

Adds multiple backend-for-frontend client bindings to the current runtime composition.

```csharp
public EngineBuilder AddBackendForFrontendClientBindings(IEnumerable<BackendForFrontendClientBindingDescriptor> bindings)
```

#### Parameters

`bindings` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<BackendForFrontendClientBindingDescriptor\>

The client binding descriptors to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddCdcCapture_Cephalon_Abstractions_Data_CdcCaptureDescriptor_"></a> AddCdcCapture\(CdcCaptureDescriptor\)

Adds a CDC capture to the current runtime composition.

```csharp
public EngineBuilder AddCdcCapture(CdcCaptureDescriptor cdcCapture)
```

#### Parameters

`cdcCapture` CdcCaptureDescriptor

The CDC capture descriptor to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddCdcCaptures_System_Collections_Generic_IEnumerable_Cephalon_Abstractions_Data_CdcCaptureDescriptor__"></a> AddCdcCaptures\(IEnumerable<CdcCaptureDescriptor\>\)

Adds multiple CDC captures to the current runtime composition.

```csharp
public EngineBuilder AddCdcCaptures(IEnumerable<CdcCaptureDescriptor> cdcCaptures)
```

#### Parameters

`cdcCaptures` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<CdcCaptureDescriptor\>

The CDC capture descriptors to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddCellBoundaries_System_Collections_Generic_IEnumerable_Cephalon_Abstractions_Technologies_CellBoundaryDescriptor__"></a> AddCellBoundaries\(IEnumerable<CellBoundaryDescriptor\>\)

Adds multiple cell boundaries to the current runtime composition.

```csharp
public EngineBuilder AddCellBoundaries(IEnumerable<CellBoundaryDescriptor> cellBoundaries)
```

#### Parameters

`cellBoundaries` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<CellBoundaryDescriptor\>

The cell-boundary descriptors to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddCellBoundary_Cephalon_Abstractions_Technologies_CellBoundaryDescriptor_"></a> AddCellBoundary\(CellBoundaryDescriptor\)

Adds a cell boundary to the current runtime composition.

```csharp
public EngineBuilder AddCellBoundary(CellBoundaryDescriptor cellBoundary)
```

#### Parameters

`cellBoundary` CellBoundaryDescriptor

The cell-boundary descriptor to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddCellHealthIsolation_Cephalon_Abstractions_Technologies_CellHealthIsolationDescriptor_"></a> AddCellHealthIsolation\(CellHealthIsolationDescriptor\)

Adds a cell health-isolation answer to the current runtime composition.

```csharp
public EngineBuilder AddCellHealthIsolation(CellHealthIsolationDescriptor healthIsolation)
```

#### Parameters

`healthIsolation` CellHealthIsolationDescriptor

The cell health-isolation descriptor to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddCellHealthIsolations_System_Collections_Generic_IEnumerable_Cephalon_Abstractions_Technologies_CellHealthIsolationDescriptor__"></a> AddCellHealthIsolations\(IEnumerable<CellHealthIsolationDescriptor\>\)

Adds multiple cell health-isolation answers to the current runtime composition.

```csharp
public EngineBuilder AddCellHealthIsolations(IEnumerable<CellHealthIsolationDescriptor> healthIsolations)
```

#### Parameters

`healthIsolations` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<CellHealthIsolationDescriptor\>

The cell health-isolation descriptors to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddCellRoute_Cephalon_Abstractions_Technologies_CellRouteDescriptor_"></a> AddCellRoute\(CellRouteDescriptor\)

Adds a cell route to the current runtime composition.

```csharp
public EngineBuilder AddCellRoute(CellRouteDescriptor cellRoute)
```

#### Parameters

`cellRoute` CellRouteDescriptor

The cell-route descriptor to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddCellRoutes_System_Collections_Generic_IEnumerable_Cephalon_Abstractions_Technologies_CellRouteDescriptor__"></a> AddCellRoutes\(IEnumerable<CellRouteDescriptor\>\)

Adds multiple cell routes to the current runtime composition.

```csharp
public EngineBuilder AddCellRoutes(IEnumerable<CellRouteDescriptor> cellRoutes)
```

#### Parameters

`cellRoutes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<CellRouteDescriptor\>

The cell-route descriptors to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddFeatureFlag_Cephalon_Abstractions_Features_FeatureFlagDescriptor_"></a> AddFeatureFlag\(FeatureFlagDescriptor\)

Adds a feature flag to the current runtime composition.

```csharp
public EngineBuilder AddFeatureFlag(FeatureFlagDescriptor featureFlag)
```

#### Parameters

`featureFlag` FeatureFlagDescriptor

The feature-flag descriptor to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddFeatureFlagProvider__1"></a> AddFeatureFlagProvider<TProvider\>\(\)

Registers one feature-flag provider in the engine service collection.

```csharp
public EngineBuilder AddFeatureFlagProvider<TProvider>() where TProvider : class, IFeatureFlagProvider
```

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

#### Type Parameters

`TProvider` 

The provider implementation type.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddFeatureFlagProvider_Cephalon_Abstractions_Features_IFeatureFlagProvider_"></a> AddFeatureFlagProvider\(IFeatureFlagProvider\)

Registers one feature-flag provider instance in the engine service collection.

```csharp
public EngineBuilder AddFeatureFlagProvider(IFeatureFlagProvider provider)
```

#### Parameters

`provider` IFeatureFlagProvider

The provider instance to register.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddFeatureFlagProviders_System_Collections_Generic_IEnumerable_Cephalon_Abstractions_Features_IFeatureFlagProvider__"></a> AddFeatureFlagProviders\(IEnumerable<IFeatureFlagProvider\>\)

Registers multiple feature-flag provider instances in the engine service collection.

```csharp
public EngineBuilder AddFeatureFlagProviders(IEnumerable<IFeatureFlagProvider> providers)
```

#### Parameters

`providers` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IFeatureFlagProvider\>

The provider instances to register.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddFeatureFlags_System_Collections_Generic_IEnumerable_Cephalon_Abstractions_Features_FeatureFlagDescriptor__"></a> AddFeatureFlags\(IEnumerable<FeatureFlagDescriptor\>\)

Adds multiple feature flags to the current runtime composition.

```csharp
public EngineBuilder AddFeatureFlags(IEnumerable<FeatureFlagDescriptor> featureFlags)
```

#### Parameters

`featureFlags` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<FeatureFlagDescriptor\>

The feature-flag descriptors to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddLanguageResources_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AddLanguageResources\(string, IReadOnlyDictionary<string, string\>\)

Adds resource overrides for a specific culture without replacing the existing localization contract.

```csharp
public EngineBuilder AddLanguageResources(string culture, IReadOnlyDictionary<string, string> resources)
```

#### Parameters

`culture` [string](https://learn.microsoft.com/dotnet/api/system.string)

The culture name to extend, such as <code>en</code> or <code>th-TH</code>.

`resources` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

The key/value resource set to merge for that culture.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

#### Remarks

This method is typically used by hosts that want to layer project-owned localization on top of
engine defaults and any package-provided language packs.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddModule__1"></a> AddModule<TModule\>\(\)

Adds a module by type using its parameterless constructor.

```csharp
public EngineBuilder AddModule<TModule>() where TModule : class, IModule, new()
```

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

#### Type Parameters

`TModule` 

The concrete module type to instantiate and register.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddModule_Cephalon_Abstractions_Modules_IModule_"></a> AddModule\(IModule\)

Adds a concrete module instance to the runtime composition graph.

```csharp
public EngineBuilder AddModule(IModule module)
```

#### Parameters

`module` IModule

The module instance to register.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddModulesFromAssemblies_System_Collections_Generic_IEnumerable_System_Reflection_Assembly__System_Func_System_Type_System_Boolean__"></a> AddModulesFromAssemblies\(IEnumerable<Assembly\>, Func<Type, bool\>?\)

Discovers and adds modules from a sequence of assemblies.

```csharp
public EngineBuilder AddModulesFromAssemblies(IEnumerable<Assembly> assemblies, Func<Type, bool>? filter = null)
```

#### Parameters

`assemblies` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)\>

The assemblies to scan for modules.

`filter` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[Type](https://learn.microsoft.com/dotnet/api/system.type), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>?

An optional predicate that can opt specific candidate types in or out before they are instantiated.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddModulesFromAssembly_System_Reflection_Assembly_System_Func_System_Type_System_Boolean__"></a> AddModulesFromAssembly\(Assembly, Func<Type, bool\>?\)

Discovers and adds modules from an assembly.

```csharp
public EngineBuilder AddModulesFromAssembly(Assembly assembly, Func<Type, bool>? filter = null)
```

#### Parameters

`assembly` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)

The assembly to scan.

`filter` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[Type](https://learn.microsoft.com/dotnet/api/system.type), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>?

An optional predicate that can opt specific candidate types in or out before they are instantiated.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddModulesFromAssemblyContaining__1_System_Func_System_Type_System_Boolean__"></a> AddModulesFromAssemblyContaining<TMarker\>\(Func<Type, bool\>?\)

Discovers and adds modules from the assembly that contains <code class="typeparamref">TMarker</code>.

```csharp
public EngineBuilder AddModulesFromAssemblyContaining<TMarker>(Func<Type, bool>? filter = null)
```

#### Parameters

`filter` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[Type](https://learn.microsoft.com/dotnet/api/system.type), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>?

An optional predicate that can opt specific candidate types in or out before they are instantiated.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

#### Type Parameters

`TMarker` 

A type used only to identify the source assembly.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddPackage_Cephalon_Engine_Configuration_ModulePackageReference_"></a> AddPackage\(ModulePackageReference\)

Adds an explicit package reference to the builder.

```csharp
public EngineBuilder AddPackage(ModulePackageReference package)
```

#### Parameters

`package` [ModulePackageReference](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulepackagereference/)

The package reference to register.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddPackageAssembly_System_String_System_String_"></a> AddPackageAssembly\(string, string?\)

Adds a package reference that points directly to a module assembly.

```csharp
public EngineBuilder AddPackageAssembly(string path, string? id = null)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to the package assembly.

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional stable package identifier. When omitted, the identifier is derived from the reference.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddPackageDirectories_System_Collections_Generic_IEnumerable_Cephalon_Engine_Configuration_ModulePackageDirectory__"></a> AddPackageDirectories\(IEnumerable<ModulePackageDirectory\>\)

Adds multiple package-directory discovery rules.

```csharp
public EngineBuilder AddPackageDirectories(IEnumerable<ModulePackageDirectory> directories)
```

#### Parameters

`directories` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ModulePackageDirectory](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulepackagedirectory/)\>

The package directories to register.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddPackageDirectory_System_String_System_String_System_Boolean_"></a> AddPackageDirectory\(string, string?, bool\)

Adds a directory that should be scanned for package manifests.

```csharp
public EngineBuilder AddPackageDirectory(string path, string? manifestFileName = null, bool includeSubdirectories = true)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The directory path to scan.

`manifestFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The manifest file name to search for. When omitted, the engine uses the default package manifest name.

`includeSubdirectories` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to recurse into child directories; otherwise only the top-level directory is scanned.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddPackageDirectory_Cephalon_Engine_Configuration_ModulePackageDirectory_"></a> AddPackageDirectory\(ModulePackageDirectory\)

Adds a package-directory discovery rule to the builder.

```csharp
public EngineBuilder AddPackageDirectory(ModulePackageDirectory directory)
```

#### Parameters

`directory` [ModulePackageDirectory](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulepackagedirectory/)

The directory discovery descriptor to register.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddPackageManifest_System_String_System_String_"></a> AddPackageManifest\(string, string?\)

Adds a package by its <code>cephalon.package.json</code> manifest file.

```csharp
public EngineBuilder AddPackageManifest(string manifestPath, string? id = null)
```

#### Parameters

`manifestPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to the package manifest file.

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional stable package identifier. When omitted, the identifier is resolved from the manifest.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddPackages_System_Collections_Generic_IEnumerable_Cephalon_Engine_Configuration_ModulePackageReference__"></a> AddPackages\(IEnumerable<ModulePackageReference\>\)

Adds multiple explicit package references.

```csharp
public EngineBuilder AddPackages(IEnumerable<ModulePackageReference> packages)
```

#### Parameters

`packages` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ModulePackageReference](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulepackagereference/)\>

The package references to register.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddPattern_Cephalon_Abstractions_Patterns_PatternDescriptor_"></a> AddPattern\(PatternDescriptor\)

Adds an application or design pattern to the current app profile.

```csharp
public EngineBuilder AddPattern(PatternDescriptor pattern)
```

#### Parameters

`pattern` PatternDescriptor

The pattern descriptor to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddStranglerFigRoute_Cephalon_Abstractions_Patterns_StranglerFigRouteDescriptor_"></a> AddStranglerFigRoute\(StranglerFigRouteDescriptor\)

Adds a strangler-fig route to the current runtime composition.

```csharp
public EngineBuilder AddStranglerFigRoute(StranglerFigRouteDescriptor route)
```

#### Parameters

`route` StranglerFigRouteDescriptor

The route descriptor to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddStranglerFigRoutes_System_Collections_Generic_IEnumerable_Cephalon_Abstractions_Patterns_StranglerFigRouteDescriptor__"></a> AddStranglerFigRoutes\(IEnumerable<StranglerFigRouteDescriptor\>\)

Adds multiple strangler-fig routes to the current runtime composition.

```csharp
public EngineBuilder AddStranglerFigRoutes(IEnumerable<StranglerFigRouteDescriptor> routes)
```

#### Parameters

`routes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<StranglerFigRouteDescriptor\>

The route descriptors to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddTechnology_Cephalon_Abstractions_Technologies_TechnologyDescriptor_"></a> AddTechnology\(TechnologyDescriptor\)

Selects a technology profile for the current app profile.

```csharp
public EngineBuilder AddTechnology(TechnologyDescriptor technology)
```

#### Parameters

`technology` TechnologyDescriptor

The technology descriptor to activate.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_AddTransport_Cephalon_Abstractions_Transports_TransportDescriptor_"></a> AddTransport\(TransportDescriptor\)

Adds a transport to the current app profile selection.

```csharp
public EngineBuilder AddTransport(TransportDescriptor transport)
```

#### Parameters

`transport` TransportDescriptor

The transport descriptor to add.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_Build"></a> Build\(\)

Materializes the configured engine into a runnable <xref href="Cephalon.Engine.Runtime.EngineRuntime" data-throw-if-not-resolved="false"></xref>.

```csharp
public EngineRuntime Build()
```

#### Returns

 [EngineRuntime](/0-1-0-preview/reference/api/cephalon-engine-runtime-engineruntime/)

The fully built runtime.

#### Remarks

Build is the point where Cephalon becomes deterministic. The builder validates duplicate modules,
resolves package-loaded assemblies, orders modules by dependency, applies capability and trust policy,
creates the runtime manifest, and registers the runtime-facing catalogs used by hosts and tooling.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

Thrown when the configured module graph, package inputs, trust policy, transport selection,
or technology selection is invalid.

### <a id="Cephalon_Engine_Composition_EngineBuilder_RegisterTechnology_Cephalon_Abstractions_Technologies_TechnologyDescriptor_"></a> RegisterTechnology\(TechnologyDescriptor\)

Registers a technology descriptor in the available catalog without implicitly selecting it.

```csharp
public EngineBuilder RegisterTechnology(TechnologyDescriptor technology)
```

#### Parameters

`technology` TechnologyDescriptor

The technology descriptor to register.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

#### Remarks

This is useful when a project wants to extend the catalog and let configuration decide
whether the technology is active.

### <a id="Cephalon_Engine_Composition_EngineBuilder_UseBackendForFrontendSettings_Cephalon_Engine_Configuration_BackendForFrontendSettings_"></a> UseBackendForFrontendSettings\(BackendForFrontendSettings\)

Replaces the backend-for-frontend settings used by the runtime client-binding catalog.

```csharp
public EngineBuilder UseBackendForFrontendSettings(BackendForFrontendSettings settings)
```

#### Parameters

`settings` [BackendForFrontendSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendsettings/)

The backend-for-frontend settings to apply.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_UseBlueprint_Cephalon_Abstractions_AppModel_AppBlueprint_"></a> UseBlueprint\(AppBlueprint\)

Selects the base application blueprint that should shape the runtime.

```csharp
public EngineBuilder UseBlueprint(AppBlueprint blueprint)
```

#### Parameters

`blueprint` AppBlueprint

The blueprint descriptor to activate.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_UseCellSettings_Cephalon_Engine_Configuration_CellSettings_"></a> UseCellSettings\(CellSettings\)

Replaces the cell-based architecture settings used by the runtime cell catalogs.

```csharp
public EngineBuilder UseCellSettings(CellSettings settings)
```

#### Parameters

`settings` [CellSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-cellsettings/)

The cell settings to apply.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_UseConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> UseConfiguration\(IConfiguration, string\)

Reads engine settings from configuration and merges them into the current builder state.

```csharp
public EngineBuilder UseConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The root configuration that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration path that should be interpreted as the engine settings section.
The default value is <xref href="Cephalon.Engine.Configuration.EngineSettings.SectionName" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

#### Remarks

This method is the preferred entry point when a host should stay configuration-driven.
It binds the selected blueprint, transports, technologies, options, localization, trust
policy, failure policy, and discovery settings before any code-level overrides are applied.

### <a id="Cephalon_Engine_Composition_EngineBuilder_UseFailurePolicy_Cephalon_Engine_Configuration_FailurePolicy_"></a> UseFailurePolicy\(FailurePolicy\)

Replaces the failure policy used by the runtime lifecycle state machine.

```csharp
public EngineBuilder UseFailurePolicy(FailurePolicy policy)
```

#### Parameters

`policy` [FailurePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-failurepolicy/)

The lifecycle failure policy to apply.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_UseFeatureSettings_Cephalon_Engine_Configuration_FeatureSettings_"></a> UseFeatureSettings\(FeatureSettings\)

Merges feature-flag settings into the current builder state.

```csharp
public EngineBuilder UseFeatureSettings(FeatureSettings settings)
```

#### Parameters

`settings` [FeatureSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featuresettings/)

The feature-flag settings to merge.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_UseLocalization_Cephalon_Engine_Configuration_LocalizationSettings_"></a> UseLocalization\(LocalizationSettings\)

Merges localization settings into the current builder state.

```csharp
public EngineBuilder UseLocalization(LocalizationSettings settings)
```

#### Parameters

`settings` [LocalizationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-localizationsettings/)

The localization settings to merge, including default culture, supported cultures,
and per-culture resource overrides.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_UseMigrationSettings_Cephalon_Engine_Configuration_MigrationSettings_"></a> UseMigrationSettings\(MigrationSettings\)

Replaces the migration-policy settings used by the runtime migration catalogs.

```csharp
public EngineBuilder UseMigrationSettings(MigrationSettings migration)
```

#### Parameters

`migration` [MigrationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-migrationsettings/)

The migration settings to apply.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_UseOptions_Cephalon_Engine_Configuration_EngineOptions_"></a> UseOptions\(EngineOptions\)

Merges engine option overrides such as module enablement and capability toggles.

```csharp
public EngineBuilder UseOptions(EngineOptions options)
```

#### Parameters

`options` [EngineOptions](/0-1-0-preview/reference/api/cephalon-engine-configuration-engineoptions/)

The option overrides to merge.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_UsePackagePolicy_Cephalon_Engine_Configuration_PackagePolicy_"></a> UsePackagePolicy\(PackagePolicy\)

Replaces the package-governance policy used when loading independently shipped module packages.

```csharp
public EngineBuilder UsePackagePolicy(PackagePolicy policy)
```

#### Parameters

`policy` [PackagePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-packagepolicy/)

The package policy to apply.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

### <a id="Cephalon_Engine_Composition_EngineBuilder_UseSettings_Cephalon_Engine_Configuration_EngineSettings_"></a> UseSettings\(EngineSettings\)

Applies a preconstructed <xref href="Cephalon.Engine.Configuration.EngineSettings" data-throw-if-not-resolved="false"></xref> instance to the builder.

```csharp
public EngineBuilder UseSettings(EngineSettings settings)
```

#### Parameters

`settings` [EngineSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-enginesettings/)

The settings object to merge into the current builder state.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.

#### Remarks

Discovery settings are resolved eagerly, which means referenced assemblies or package
manifests are validated before the runtime is built.

### <a id="Cephalon_Engine_Composition_EngineBuilder_UseTrustPolicy_Cephalon_Engine_Configuration_TrustPolicy_"></a> UseTrustPolicy\(TrustPolicy\)

Merges trust and capability-governance settings into the builder.

```csharp
public EngineBuilder UseTrustPolicy(TrustPolicy policy)
```

#### Parameters

`policy` [TrustPolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-trustpolicy/)

The trust policy to apply.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same builder instance.
