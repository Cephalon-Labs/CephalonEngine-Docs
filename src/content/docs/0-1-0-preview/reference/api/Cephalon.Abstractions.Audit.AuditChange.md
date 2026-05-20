---
title: Class AuditChange
slug: 0-1-0-preview/reference/api/cephalon-abstractions-audit-auditchange
editUrl: false
---

Namespace: [Cephalon.Abstractions.Audit](/0-1-0-preview/reference/api/cephalon-abstractions-audit/)  
Assembly: Cephalon.Abstractions.dll  

Describes one field-level change captured by an audit entry.

```csharp
public sealed class AuditChange
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditChange](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditchange/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Audit_AuditChange__ctor_System_String_System_String_System_String_"></a> AuditChange\(string, string?, string?\)

Creates a new audit change.

```csharp
public AuditChange(string fieldName, string? oldValue = null, string? newValue = null)
```

#### Parameters

`fieldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical field or property name that changed.

`oldValue` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The previous serialized value when one is known.

`newValue` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The new serialized value when one is known.

## Properties

### <a id="Cephalon_Abstractions_Audit_AuditChange_FieldName"></a> FieldName

Gets the logical field or property name that changed.

```csharp
public string FieldName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Audit_AuditChange_NewValue"></a> NewValue

Gets the new serialized value when one is known.

```csharp
public string? NewValue { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Audit_AuditChange_OldValue"></a> OldValue

Gets the previous serialized value when one is known.

```csharp
public string? OldValue { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
