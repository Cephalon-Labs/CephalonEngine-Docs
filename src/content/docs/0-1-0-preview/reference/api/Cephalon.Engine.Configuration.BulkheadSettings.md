---
title: Class BulkheadSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-bulkheadsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven bulkhead settings for a Cephalon app.

```csharp
public sealed class BulkheadSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BulkheadSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-bulkheadsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_BulkheadSettings__ctor_System_Nullable_System_Boolean__System_Nullable_System_Int32__System_Nullable_System_Int32__"></a> BulkheadSettings\(bool?, int?, int?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.BulkheadSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BulkheadSettings(bool? enabled = null, int? maxConcurrentExecutions = null, int? maxQueuedActions = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether bulkhead isolation was explicitly enabled.

`maxConcurrentExecutions` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The maximum concurrent executions allowed inside the bulkhead.

`maxQueuedActions` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The maximum queued actions allowed before rejection.

## Properties

### <a id="Cephalon_Engine_Configuration_BulkheadSettings_Empty"></a> Empty

Gets an empty bulkhead-settings instance.

```csharp
public static BulkheadSettings Empty { get; }
```

#### Property Value

 [BulkheadSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-bulkheadsettings/)

### <a id="Cephalon_Engine_Configuration_BulkheadSettings_Enabled"></a> Enabled

Gets a value indicating whether bulkhead isolation was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_BulkheadSettings_HasValues"></a> HasValues

Gets a value indicating whether any bulkhead settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_BulkheadSettings_MaxConcurrentExecutions"></a> MaxConcurrentExecutions

Gets the maximum concurrent executions allowed inside the bulkhead.

```csharp
public int? MaxConcurrentExecutions { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_BulkheadSettings_MaxQueuedActions"></a> MaxQueuedActions

Gets the maximum queued actions allowed before rejection.

```csharp
public int? MaxQueuedActions { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
