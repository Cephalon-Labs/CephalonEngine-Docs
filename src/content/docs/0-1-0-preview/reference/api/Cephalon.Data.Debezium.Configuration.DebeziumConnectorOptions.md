---
title: Class DebeziumConnectorOptions
slug: 0-1-0-preview/reference/api/cephalon-data-debezium-configuration-debeziumconnectoroptions
editUrl: false
---

Namespace: [Cephalon.Data.Debezium.Configuration](/0-1-0-preview/reference/api/cephalon-data-debezium-configuration/)  
Assembly: Cephalon.Data.Debezium.dll  

Declares one external Debezium-managed connector runtime for the active Cephalon data runtime.

```csharp
public sealed class DebeziumConnectorOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DebeziumConnectorOptions](/0-1-0-preview/reference/api/cephalon-data-debezium-configuration-debeziumconnectoroptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_AcknowledgementMode"></a> AcknowledgementMode

Gets or sets the acknowledgement mode published for the connector runtime.

```csharp
public string AcknowledgementMode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_CdcCaptures"></a> CdcCaptures

Gets the Debezium-managed CDC captures that should bind to this connector runtime.

```csharp
public IList<DebeziumCaptureOptions> CdcCaptures { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[DebeziumCaptureOptions](/0-1-0-preview/reference/api/cephalon-data-debezium-configuration-debeziumcaptureoptions/)\>

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_ConnectClusterId"></a> ConnectClusterId

Gets or sets the operator-facing Kafka Connect or Debezium cluster identifier that owns the connector.

```csharp
public string ConnectClusterId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_ConnectorClass"></a> ConnectorClass

Gets or sets the Debezium connector-class identifier when the runtime should publish it on shared operator surfaces.

```csharp
public string ConnectorClass { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_Description"></a> Description

Gets or sets the human-readable connector description.

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_DisplayName"></a> DisplayName

Gets or sets the operator-facing connector name.

```csharp
public string DisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_EdgeNodeIds"></a> EdgeNodeIds

Gets the declared edge-node identifiers that can originate observations for the managed connector runtime.

```csharp
public IList<string> EdgeNodeIds { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_ExecutionOwnership"></a> ExecutionOwnership

Gets or sets the execution-ownership mode published for the connector runtime.

```csharp
public string ExecutionOwnership { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_ExecutionTopology"></a> ExecutionTopology

Gets or sets the execution-topology classification published for the connector runtime.

```csharp
public string ExecutionTopology { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_ExpectedTaskCount"></a> ExpectedTaskCount

Gets or sets the expected Debezium task count when the connector should publish that expectation even if task ids are not declared individually.

```csharp
public int? ExpectedTaskCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_Id"></a> Id

Gets or sets the stable execution-runtime identifier for the managed connector.

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_ManagementMode"></a> ManagementMode

Gets or sets the operator-facing lifecycle-management mode published for the connector runtime.

```csharp
public string ManagementMode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_Metadata"></a> Metadata

Gets arbitrary operator-facing metadata that should flow through the execution-runtime descriptor.

```csharp
public IDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_ObservationStaleAfterSeconds"></a> ObservationStaleAfterSeconds

Gets or sets the report-freshness window, in seconds, used to mark connector observations stale.

```csharp
public int? ObservationStaleAfterSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_RejectConflictingReporterIds"></a> RejectConflictingReporterIds

Gets or sets a value indicating whether the connector rejects conflicting reporter identities while an active lease still exists.

```csharp
public bool RejectConflictingReporterIds { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_RejectOutOfOrderReports"></a> RejectOutOfOrderReports

Gets or sets a value indicating whether the connector rejects out-of-order external reports.

```csharp
public bool RejectOutOfOrderReports { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_ReporterLeaseSeconds"></a> ReporterLeaseSeconds

Gets or sets the reporter-lease window, in seconds, used to keep one reporter authoritative for the connector.

```csharp
public int? ReporterLeaseSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_SourceProviderId"></a> SourceProviderId

Gets or sets the upstream provider identifier behind the managed connector, such as <code>postgresql</code> or <code>sqlserver</code>.

```csharp
public string SourceProviderId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_TaskIds"></a> TaskIds

Gets the declared task identifiers that belong to the managed connector runtime.

```csharp
public IList<string> TaskIds { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumConnectorOptions_TopicPrefix"></a> TopicPrefix

Gets or sets the Debezium topic prefix when the connector fans out into one or more topics.

```csharp
public string TopicPrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
