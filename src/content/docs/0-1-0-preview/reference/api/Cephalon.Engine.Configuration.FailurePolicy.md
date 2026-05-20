---
title: Class FailurePolicy
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-failurepolicy
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes how the runtime reacts to startup, stop, and restart failures.

```csharp
public sealed class FailurePolicy
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FailurePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-failurepolicy/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_FailurePolicy__ctor_Cephalon_Engine_Configuration_StartupFailureBehavior_Cephalon_Engine_Configuration_StopFailureBehavior_System_Boolean_System_Int32_System_TimeSpan_System_TimeSpan_System_TimeSpan_"></a> FailurePolicy\(StartupFailureBehavior, StopFailureBehavior, bool, int, TimeSpan, TimeSpan, TimeSpan\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.FailurePolicy" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FailurePolicy(StartupFailureBehavior startupFailureBehavior = StartupFailureBehavior.FailFast, StopFailureBehavior stopFailureBehavior = StopFailureBehavior.BestEffortContinue, bool allowManualRestart = true, int maxRestartAttempts = 3, TimeSpan startupReadinessDelay = default, TimeSpan shutdownLivenessGracePeriod = default, TimeSpan manualRestartBackoff = default)
```

#### Parameters

`startupFailureBehavior` [StartupFailureBehavior](/0-1-0-preview/reference/api/cephalon-engine-configuration-startupfailurebehavior/)

How startup failures are handled.

`stopFailureBehavior` [StopFailureBehavior](/0-1-0-preview/reference/api/cephalon-engine-configuration-stopfailurebehavior/)

How stop failures are handled.

`allowManualRestart` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether operators can manually restart the runtime after supported failures.

`maxRestartAttempts` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The maximum number of manual restarts, where <code>-1</code> allows unlimited restarts.

`startupReadinessDelay` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

The optional warmup window that keeps readiness unhealthy after startup succeeds.

`shutdownLivenessGracePeriod` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

The optional drain window that keeps liveness healthy while shutdown is in progress.

`manualRestartBackoff` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

The optional backoff window that delays manual restarts after a restartable failure.

## Properties

### <a id="Cephalon_Engine_Configuration_FailurePolicy_AllowManualRestart"></a> AllowManualRestart

Gets a value indicating whether manual restart is allowed after supported failures.

```csharp
public bool AllowManualRestart { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_FailurePolicy_Default"></a> Default

Gets the default failure policy used when no explicit configuration is supplied.

```csharp
public static FailurePolicy Default { get; }
```

#### Property Value

 [FailurePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-failurepolicy/)

### <a id="Cephalon_Engine_Configuration_FailurePolicy_HasValues"></a> HasValues

Gets a value indicating whether this policy differs from <xref href="Cephalon.Engine.Configuration.FailurePolicy.Default" data-throw-if-not-resolved="false"></xref>.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_FailurePolicy_ManualRestartBackoff"></a> ManualRestartBackoff

Gets the cooldown window that must elapse before a manual restart may run after a restartable failure.

```csharp
public TimeSpan ManualRestartBackoff { get; }
```

#### Property Value

 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

### <a id="Cephalon_Engine_Configuration_FailurePolicy_MaxRestartAttempts"></a> MaxRestartAttempts

Gets the maximum number of manual restarts.

```csharp
public int MaxRestartAttempts { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Engine_Configuration_FailurePolicy_ShutdownLivenessGracePeriod"></a> ShutdownLivenessGracePeriod

Gets the liveness grace window that applies while shutdown is still draining.

```csharp
public TimeSpan ShutdownLivenessGracePeriod { get; }
```

#### Property Value

 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

### <a id="Cephalon_Engine_Configuration_FailurePolicy_StartupFailureBehavior"></a> StartupFailureBehavior

Gets how startup failures are handled.

```csharp
public StartupFailureBehavior StartupFailureBehavior { get; }
```

#### Property Value

 [StartupFailureBehavior](/0-1-0-preview/reference/api/cephalon-engine-configuration-startupfailurebehavior/)

### <a id="Cephalon_Engine_Configuration_FailurePolicy_StartupReadinessDelay"></a> StartupReadinessDelay

Gets the readiness warmup window that applies after startup succeeds.

```csharp
public TimeSpan StartupReadinessDelay { get; }
```

#### Property Value

 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

### <a id="Cephalon_Engine_Configuration_FailurePolicy_StopFailureBehavior"></a> StopFailureBehavior

Gets how stop failures are handled.

```csharp
public StopFailureBehavior StopFailureBehavior { get; }
```

#### Property Value

 [StopFailureBehavior](/0-1-0-preview/reference/api/cephalon-engine-configuration-stopfailurebehavior/)

## Methods

### <a id="Cephalon_Engine_Configuration_FailurePolicy_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads the failure policy from configuration.

```csharp
public static FailurePolicy FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [FailurePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-failurepolicy/)

The parsed failure policy.
