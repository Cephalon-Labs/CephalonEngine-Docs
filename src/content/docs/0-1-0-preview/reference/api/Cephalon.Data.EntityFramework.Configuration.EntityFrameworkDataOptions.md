---
title: Class EntityFrameworkDataOptions
slug: 0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdataoptions
editUrl: false
---

Namespace: [Cephalon.Data.EntityFramework.Configuration](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration/)  
Assembly: Cephalon.Data.EntityFramework.dll  

Describes the host-owned options for the Entity Framework Core data companion pack.

```csharp
public sealed class EntityFrameworkDataOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityFrameworkDataOptions](/0-1-0-preview/reference/api/cephalon-data-entityframework-configuration-entityframeworkdataoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions__ctor_System_Type_System_Type_"></a> EntityFrameworkDataOptions\(Type, Type\)

Initializes a new instance of the <xref href="Cephalon.Data.EntityFramework.Configuration.EntityFrameworkDataOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EntityFrameworkDataOptions(Type readDbContextType, Type writeDbContextType)
```

#### Parameters

`readDbContextType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The read-side <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type.

`writeDbContextType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The write-side <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type.

## Fields

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions_ProviderId"></a> ProviderId

Gets the canonical provider identifier emitted by the pack.

```csharp
public const string ProviderId = "entity-framework"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions_EnableSfidIdentifiers"></a> EnableSfidIdentifiers

Gets or sets a value indicating whether the pack should enable official <code>Sfid.EntityFramework</code> conventions and key generation.

```csharp
public bool EnableSfidIdentifiers { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions_ReadDbContextType"></a> ReadDbContextType

Gets the read-side <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type.

```csharp
public Type ReadDbContextType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions_RegisterDbContextCapabilities"></a> RegisterDbContextCapabilities

Gets or sets a value indicating whether the pack should publish read/write <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> role capabilities.

```csharp
public bool RegisterDbContextCapabilities { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions_RegisterInbox"></a> RegisterInbox

Gets or sets a value indicating whether the pack should register the Entity Framework-backed inbox implementation.

```csharp
public bool RegisterInbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions_RegisterOutbox"></a> RegisterOutbox

Gets or sets a value indicating whether the pack should register the Entity Framework-backed outbox implementation.

```csharp
public bool RegisterOutbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions_RegisterProjections"></a> RegisterProjections

Gets or sets a value indicating whether the pack should register Entity Framework-backed projection infrastructure.

```csharp
public bool RegisterProjections { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions_RegisterProviderCapability"></a> RegisterProviderCapability

Gets or sets a value indicating whether the pack should publish the provider capability.

```csharp
public bool RegisterProviderCapability { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions_UsesEngineDatabaseTopology"></a> UsesEngineDatabaseTopology

Gets or sets a value indicating whether the pack resolves read/write roles from <code>Engine:Databases</code>.

```csharp
public bool UsesEngineDatabaseTopology { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions_UsesReadWriteSplit"></a> UsesReadWriteSplit

Gets a value indicating whether distinct read and write <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> types were selected.

```csharp
public bool UsesReadWriteSplit { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_EntityFramework_Configuration_EntityFrameworkDataOptions_WriteDbContextType"></a> WriteDbContextType

Gets the write-side <xref href="Microsoft.EntityFrameworkCore.DbContext" data-throw-if-not-resolved="false"></xref> type.

```csharp
public Type WriteDbContextType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)
