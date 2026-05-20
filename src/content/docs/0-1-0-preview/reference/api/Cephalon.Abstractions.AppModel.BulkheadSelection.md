---
title: Class BulkheadSelection
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-bulkheadselection
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the bulkhead-isolation inputs resolved for a Cephalon app.

```csharp
public sealed class BulkheadSelection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BulkheadSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-bulkheadselection/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_BulkheadSelection__ctor_System_Nullable_System_Boolean__System_Nullable_System_Int32__System_Nullable_System_Int32__"></a> BulkheadSelection\(bool?, int?, int?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.AppModel.BulkheadSelection" data-throw-if-not-resolved="false"></xref> class.

```csharp
[JsonConstructor]
public BulkheadSelection(bool? enabled = null, int? maxConcurrentExecutions = null, int? maxQueuedActions = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether bulkhead isolation was explicitly enabled.

`maxConcurrentExecutions` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The maximum concurrent executions allowed inside the bulkhead.

`maxQueuedActions` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The maximum queued actions allowed before rejection.

## Properties

### <a id="Cephalon_Abstractions_AppModel_BulkheadSelection_Empty"></a> Empty

Gets an empty bulkhead-selection instance.

```csharp
public static BulkheadSelection Empty { get; }
```

#### Property Value

 [BulkheadSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-bulkheadselection/)

### <a id="Cephalon_Abstractions_AppModel_BulkheadSelection_Enabled"></a> Enabled

Gets a value indicating whether bulkhead isolation was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Abstractions_AppModel_BulkheadSelection_HasValues"></a> HasValues

Gets a value indicating whether any bulkhead-selection inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_AppModel_BulkheadSelection_MaxConcurrentExecutions"></a> MaxConcurrentExecutions

Gets the maximum concurrent executions allowed inside the bulkhead.

```csharp
public int? MaxConcurrentExecutions { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_AppModel_BulkheadSelection_MaxQueuedActions"></a> MaxQueuedActions

Gets the maximum queued actions allowed before rejection.

```csharp
public int? MaxQueuedActions { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
