---
title: Class AuditStoreDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-audit-auditstoredescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Audit](/0-1-0-preview/reference/api/cephalon-abstractions-audit/)  
Assembly: Cephalon.Abstractions.dll  

Describes one audit store surface contributed to the active runtime.

```csharp
public sealed class AuditStoreDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditStoreDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditstoredescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Audit_AuditStoreDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AuditStoreDescriptor\(string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new audit-store descriptor.

```csharp
public AuditStoreDescriptor(string id, string displayName, string description, string sourceModuleId, string provider, string mode = "application-managed", IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable audit-store identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing audit-store name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable audit-store description.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier that owns the audit-store surface.

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical provider identifier that backs the audit-store surface.

`mode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The audit-store mode such as <code>volatile-buffer</code> or <code>transactional-table</code>.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional descriptive tags associated with the audit store.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the audit store.

## Properties

### <a id="Cephalon_Abstractions_Audit_AuditStoreDescriptor_Description"></a> Description

Gets the human-readable audit-store description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Audit_AuditStoreDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing audit-store name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Audit_AuditStoreDescriptor_Id"></a> Id

Gets the stable audit-store identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Audit_AuditStoreDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata associated with the audit store.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Audit_AuditStoreDescriptor_Mode"></a> Mode

Gets the audit-store mode.

```csharp
public string Mode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Audit_AuditStoreDescriptor_Provider"></a> Provider

Gets the logical provider identifier that backs the audit-store surface.

```csharp
public string Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Audit_AuditStoreDescriptor_SourceModuleId"></a> SourceModuleId

Gets the identifier of the module that owns the audit-store surface.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Audit_AuditStoreDescriptor_Tags"></a> Tags

Gets descriptive tags associated with the audit store.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
