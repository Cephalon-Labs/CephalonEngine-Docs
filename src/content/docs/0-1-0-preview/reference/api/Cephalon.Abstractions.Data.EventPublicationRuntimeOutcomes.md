---
title: Class EventPublicationRuntimeOutcomes
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-eventpublicationruntimeoutcomes
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines stable outcome identifiers reported by event-publication runtime-state catalogs.

```csharp
public static class EventPublicationRuntimeOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventPublicationRuntimeOutcomes](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventpublicationruntimeoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeOutcomes_Accepted"></a> Accepted

The publication was accepted or staged by the active runtime, but downstream delivery may still be pending.

```csharp
public const string Accepted = "accepted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeOutcomes_Failed"></a> Failed

The publication failed while the active runtime processed it.

```csharp
public const string Failed = "failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeOutcomes_Skipped"></a> Skipped

The publication was accepted but no runtime-owned work was executed.

```csharp
public const string Skipped = "skipped"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeOutcomes_Succeeded"></a> Succeeded

The publication completed its runtime-owned execution path successfully.

```csharp
public const string Succeeded = "succeeded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
