---
title: Class DataRuntimeOptions
slug: 0-1-0-preview/reference/api/cephalon-data-configuration-dataruntimeoptions
editUrl: false
---

Namespace: [Cephalon.Data.Configuration](/0-1-0-preview/reference/api/cephalon-data-configuration/)  
Assembly: Cephalon.Data.dll  

Describes the host-owned options for the runtime-neutral Cephalon data pack.

```csharp
public sealed class DataRuntimeOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataRuntimeOptions](/0-1-0-preview/reference/api/cephalon-data-configuration-dataruntimeoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Data_Configuration_DataRuntimeOptions__ctor"></a> DataRuntimeOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Data.Configuration.DataRuntimeOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DataRuntimeOptions()
```

## Properties

### <a id="Cephalon_Data_Configuration_DataRuntimeOptions_CdcExecutionRuntimes"></a> CdcExecutionRuntimes

Gets the host-defined CDC execution runtimes that should be available to the active data runtime.

```csharp
public IList<CdcCaptureExecutionRuntimeOptions> CdcExecutionRuntimes { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[CdcCaptureExecutionRuntimeOptions](/0-1-0-preview/reference/api/cephalon-data-configuration-cdccaptureexecutionruntimeoptions/)\>

### <a id="Cephalon_Data_Configuration_DataRuntimeOptions_CdcPollingIntervalSeconds"></a> CdcPollingIntervalSeconds

Gets or sets the polling interval, in seconds, used by the shared CDC hosted execution pump.

```csharp
public int CdcPollingIntervalSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_Configuration_DataRuntimeOptions_EnableCdcExecution"></a> EnableCdcExecution

Gets or sets a value indicating whether the pack should register the shared CDC hosted execution pump.

```csharp
public bool EnableCdcExecution { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Configuration_DataRuntimeOptions_EnableExternalCdcRuntimeReporting"></a> EnableExternalCdcRuntimeReporting

Gets or sets a value indicating whether the pack should accept external CDC execution-runtime reports through the shared runtime-state catalog.

```csharp
public bool EnableExternalCdcRuntimeReporting { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Configuration_DataRuntimeOptions_EnableManagedConnectorAutomaticRetryExecution"></a> EnableManagedConnectorAutomaticRetryExecution

Gets or sets a value indicating whether the pack should run the shared automatic managed-connector background retry lane.

```csharp
public bool EnableManagedConnectorAutomaticRetryExecution { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Configuration_DataRuntimeOptions_ManagedConnectorAutomaticRetryCoordinationOwnerId"></a> ManagedConnectorAutomaticRetryCoordinationOwnerId

Gets or sets the host-owned local coordination owner identifier used to decide whether the current node can run automatic managed-connector retries.

```csharp
public string? ManagedConnectorAutomaticRetryCoordinationOwnerId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_Configuration_DataRuntimeOptions_ManagedConnectorAutomaticRetryPollingIntervalSeconds"></a> ManagedConnectorAutomaticRetryPollingIntervalSeconds

Gets or sets the polling interval, in seconds, used by the shared automatic managed-connector background retry lane.

```csharp
public int ManagedConnectorAutomaticRetryPollingIntervalSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_Configuration_DataRuntimeOptions_ManagedConnectorCommandJournalPersistencePath"></a> ManagedConnectorCommandJournalPersistencePath

Gets or sets the optional durable file path used to persist the shared managed-connector command journal across process restarts.

```csharp
public string? ManagedConnectorCommandJournalPersistencePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_Configuration_DataRuntimeOptions_RegisterReadStore"></a> RegisterReadStore

Gets or sets a value indicating whether the pack should register the default read-store dispatcher.

```csharp
public bool RegisterReadStore { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Configuration_DataRuntimeOptions_RegisterWriteStore"></a> RegisterWriteStore

Gets or sets a value indicating whether the pack should register the default write-store dispatcher.

```csharp
public bool RegisterWriteStore { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
