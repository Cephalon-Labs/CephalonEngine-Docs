---
title: Class QdrantDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-qdrant-registration-qdrantdataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.Qdrant.Registration](/0-1-0-preview/reference/api/cephalon-data-qdrant-registration/)  
Assembly: Cephalon.Data.Qdrant.dll  

Registers the Qdrant vector-store data companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class QdrantDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[QdrantDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-qdrant-registration-qdrantdataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_Qdrant_Registration_QdrantDataEngineBuilderExtensions_AddQdrantData_Cephalon_Engine_Composition_EngineBuilder_System_String_System_Int32_System_Action_Cephalon_Data_Qdrant_Configuration_QdrantDataOptions__"></a> AddQdrantData\(EngineBuilder, string, int, Action<QdrantDataOptions\>?\)

Adds the Qdrant data pack with the supplied host and optional port.

```csharp
public static EngineBuilder AddQdrantData(this EngineBuilder builder, string host, int port = 6334, Action<QdrantDataOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`host` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Qdrant server hostname (e.g. <code>"localhost"</code>).

`port` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Qdrant gRPC port. Defaults to <code>6334</code>.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[QdrantDataOptions](/0-1-0-preview/reference/api/cephalon-data-qdrant-configuration-qdrantdataoptions/)\>?

An optional callback that configures the host-owned Qdrant pack options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

Register outbox or inbox support by configuring <xref href="Cephalon.Data.Qdrant.Configuration.QdrantDataOptions.RegisterOutbox" data-throw-if-not-resolved="false"></xref>
or <xref href="Cephalon.Data.Qdrant.Configuration.QdrantDataOptions.RegisterInbox" data-throw-if-not-resolved="false"></xref> in the <code class="paramref">configure</code> callback.
