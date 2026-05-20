---
title: Class DataProductDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-dataproductdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one module-owned data product surface contributed to the active runtime.

```csharp
public sealed class DataProductDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataProductDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-dataproductdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_DataProductDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> DataProductDescriptor\(string, string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new data product descriptor.

```csharp
public DataProductDescriptor(string id, string displayName, string description, string sourceModuleId, string domainId, string contractId, string mode = "query", IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable data product identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing data product name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable data product description.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier that owns the data product.

`domainId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable domain or bounded-context identifier for the data product.

`contractId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable query or contract identifier exposed by the data product.

`mode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The access mode such as <code>query</code>, <code>snapshot</code>, or <code>feed</code>.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional descriptive tags associated with the data product.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the data product.

## Properties

### <a id="Cephalon_Abstractions_Data_DataProductDescriptor_ContractId"></a> ContractId

Gets the stable query or contract identifier exposed by the data product.

```csharp
public string ContractId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DataProductDescriptor_Description"></a> Description

Gets the human-readable data product description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DataProductDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing data product name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DataProductDescriptor_DomainId"></a> DomainId

Gets the stable domain or bounded-context identifier for the data product.

```csharp
public string DomainId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DataProductDescriptor_Id"></a> Id

Gets the stable data product identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DataProductDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata associated with the data product.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_DataProductDescriptor_Mode"></a> Mode

Gets the declared access mode for the data product.

```csharp
public string Mode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DataProductDescriptor_SourceModuleId"></a> SourceModuleId

Gets the identifier of the module that owns the data product.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_DataProductDescriptor_Tags"></a> Tags

Gets descriptive tags associated with the data product.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
