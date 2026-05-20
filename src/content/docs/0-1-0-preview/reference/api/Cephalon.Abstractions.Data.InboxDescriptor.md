---
title: Class InboxDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-inboxdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one inbox surface contributed to the active runtime.

```csharp
public sealed class InboxDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-inboxdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_InboxDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> InboxDescriptor\(string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new inbox descriptor.

```csharp
public InboxDescriptor(string id, string displayName, string description, string sourceModuleId, string provider, string mode = "processed-message-store", IReadOnlyList<string>? channelIds = null, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable inbox identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing inbox name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable inbox description.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier that owns the inbox surface.

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical provider identifier that backs the inbox.

`mode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The inbox mode such as <code>processed-message-table</code> or <code>durable-log</code>.

`channelIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional channel identifiers that this inbox is explicitly scoped to.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional descriptive tags associated with the inbox.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the inbox.

## Properties

### <a id="Cephalon_Abstractions_Data_InboxDescriptor_ChannelIds"></a> ChannelIds

Gets the optional channel identifiers that this inbox is explicitly scoped to.

```csharp
public IReadOnlyList<string> ChannelIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_InboxDescriptor_Description"></a> Description

Gets the human-readable inbox description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_InboxDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing inbox name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_InboxDescriptor_Id"></a> Id

Gets the stable inbox identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_InboxDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata associated with the inbox.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_InboxDescriptor_Mode"></a> Mode

Gets the inbox mode.

```csharp
public string Mode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_InboxDescriptor_Provider"></a> Provider

Gets the logical provider identifier that backs the inbox.

```csharp
public string Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_InboxDescriptor_SourceModuleId"></a> SourceModuleId

Gets the identifier of the module that owns the inbox surface.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_InboxDescriptor_Tags"></a> Tags

Gets descriptive tags associated with the inbox.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
