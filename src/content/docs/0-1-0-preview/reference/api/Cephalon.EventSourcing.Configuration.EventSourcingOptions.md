---
title: Class EventSourcingOptions
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-configuration-eventsourcingoptions
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Configuration](/0-1-0-preview/reference/api/cephalon-eventsourcing-configuration/)  
Assembly: Cephalon.EventSourcing.dll  

Describes the host-owned options for the runtime-neutral Cephalon event-sourcing pack.

```csharp
public sealed class EventSourcingOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventSourcingOptions](/0-1-0-preview/reference/api/cephalon-eventsourcing-configuration-eventsourcingoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_EventSourcing_Configuration_EventSourcingOptions__ctor"></a> EventSourcingOptions\(\)

Initializes a new instance of the <xref href="Cephalon.EventSourcing.Configuration.EventSourcingOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EventSourcingOptions()
```

## Fields

### <a id="Cephalon_EventSourcing_Configuration_EventSourcingOptions_SectionName"></a> SectionName

The configuration section that owns the host-level event-sourcing settings.

```csharp
public const string SectionName = "Engine:EventSourcing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_EventSourcing_Configuration_EventSourcingOptions_DefaultProvider"></a> DefaultProvider

Gets or sets the default event-store provider identifier.

```csharp
public string DefaultProvider { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Configuration_EventSourcingOptions_EnableSnapshots"></a> EnableSnapshots

Gets or sets a value indicating whether snapshot-aware paths are enabled.

```csharp
public bool EnableSnapshots { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
