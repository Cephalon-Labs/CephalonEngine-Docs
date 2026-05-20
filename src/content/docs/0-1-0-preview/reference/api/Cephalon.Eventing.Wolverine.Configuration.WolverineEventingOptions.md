---
title: Class WolverineEventingOptions
slug: 0-1-0-preview/reference/api/cephalon-eventing-wolverine-configuration-wolverineeventingoptions
editUrl: false
---

Namespace: [Cephalon.Eventing.Wolverine.Configuration](/0-1-0-preview/reference/api/cephalon-eventing-wolverine-configuration/)  
Assembly: Cephalon.Eventing.Wolverine.dll  

Describes the host-owned options for the optional Wolverine eventing companion pack.

```csharp
public sealed class WolverineEventingOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WolverineEventingOptions](/0-1-0-preview/reference/api/cephalon-eventing-wolverine-configuration-wolverineeventingoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Eventing_Wolverine_Configuration_WolverineEventingOptions__ctor"></a> WolverineEventingOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Eventing.Wolverine.Configuration.WolverineEventingOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public WolverineEventingOptions()
```

## Properties

### <a id="Cephalon_Eventing_Wolverine_Configuration_WolverineEventingOptions_ConfigureHost"></a> ConfigureHost

Gets or sets an optional callback that can extend Wolverine host wiring before the runtime starts.

```csharp
public Action<WolverineOptions>? ConfigureHost { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<WolverineOptions\>?

### <a id="Cephalon_Eventing_Wolverine_Configuration_WolverineEventingOptions_DispatchBatchSize"></a> DispatchBatchSize

Gets or sets the maximum number of staged events the Wolverine-owned dispatch loop should read per polling cycle.

```csharp
public int DispatchBatchSize { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Eventing_Wolverine_Configuration_WolverineEventingOptions_DispatchMaxAttempts"></a> DispatchMaxAttempts

Gets or sets the maximum number of Wolverine-managed dispatch attempts for one staged event publication.

```csharp
public int DispatchMaxAttempts { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The default value of <code>3</code> keeps the provider-managed dispatch lane bounded so poison
staged publications eventually report a terminal <code>failed</code> observation instead of
re-entering pending-dispatch reads forever. Set this to <code>1</code> to disable dispatch
retries while still reporting the managed dispatch attempt.

### <a id="Cephalon_Eventing_Wolverine_Configuration_WolverineEventingOptions_DispatchPollingIntervalSeconds"></a> DispatchPollingIntervalSeconds

Gets or sets the number of seconds the Wolverine-owned dispatch loop should wait between polling cycles.

```csharp
public int DispatchPollingIntervalSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Eventing_Wolverine_Configuration_WolverineEventingOptions_EnableDispatchLoop"></a> EnableDispatchLoop

Gets or sets a value indicating whether the pack should own the durable staged-event dispatch loop instead of leaving dispatch consumer-managed. Defaults to <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

```csharp
public bool EnableDispatchLoop { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Eventing_Wolverine_Configuration_WolverineEventingOptions_EnableHostWiring"></a> EnableHostWiring

Gets or sets a value indicating whether the pack should register Wolverine host wiring into the current service collection.

```csharp
public bool EnableHostWiring { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Eventing_Wolverine_Configuration_WolverineEventingOptions_EnableRuntimeSurface"></a> EnableRuntimeSurface

Gets or sets a value indicating whether the pack should publish its runtime surface into Cephalon technology introspection.

```csharp
public bool EnableRuntimeSurface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Eventing_Wolverine_Configuration_WolverineEventingOptions_EnableSubscriptionExecution"></a> EnableSubscriptionExecution

Gets or sets a value indicating whether the pack should execute declared event subscriptions through the Wolverine-managed staged-event dispatch path. Defaults to <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

```csharp
public bool EnableSubscriptionExecution { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Eventing_Wolverine_Configuration_WolverineEventingOptions_RetryDelaySeconds"></a> RetryDelaySeconds

Gets or sets the number of seconds the Wolverine-owned dispatch loop should wait before retrying a failed dispatch attempt.

```csharp
public int RetryDelaySeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Eventing_Wolverine_Configuration_WolverineEventingOptions_SubscriptionMaxAttempts"></a> SubscriptionMaxAttempts

Gets or sets the maximum number of Wolverine-managed execution attempts for one declared subscription message.

```csharp
public int SubscriptionMaxAttempts { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The default value of <code>3</code> keeps the provider-managed retry lane bounded so poison
messages eventually report a terminal <code>failed</code> observation instead of being
requeued forever. Set this to <code>1</code> to disable subscription retries while still
reporting the managed execution attempt.

### <a id="Cephalon_Eventing_Wolverine_Configuration_WolverineEventingOptions_SubscriptionRetryDelaySeconds"></a> SubscriptionRetryDelaySeconds

Gets or sets the number of seconds the Wolverine-managed subscription execution path should wait before requeueing a failed subscription attempt.

```csharp
public int SubscriptionRetryDelaySeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
