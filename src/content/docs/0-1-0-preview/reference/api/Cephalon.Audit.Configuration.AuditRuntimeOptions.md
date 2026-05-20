---
title: Class AuditRuntimeOptions
slug: 0-1-0-preview/reference/api/cephalon-audit-configuration-auditruntimeoptions
editUrl: false
---

Namespace: [Cephalon.Audit.Configuration](/0-1-0-preview/reference/api/cephalon-audit-configuration/)  
Assembly: Cephalon.Audit.dll  

Describes host-agnostic runtime options for the Cephalon audit companion pack.

```csharp
public sealed class AuditRuntimeOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditRuntimeOptions](/0-1-0-preview/reference/api/cephalon-audit-configuration-auditruntimeoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Audit_Configuration_AuditRuntimeOptions__ctor_System_Int32_"></a> AuditRuntimeOptions\(int\)

Initializes a new instance of the <xref href="Cephalon.Audit.Configuration.AuditRuntimeOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AuditRuntimeOptions(int inMemoryBufferCapacity = 1024)
```

#### Parameters

`inMemoryBufferCapacity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The maximum number of audit entries retained by the default in-memory writer.

## Properties

### <a id="Cephalon_Audit_Configuration_AuditRuntimeOptions_EnableInMemoryWriter"></a> EnableInMemoryWriter

Gets or sets a value indicating whether the built-in in-memory audit writer should remain active.

```csharp
public bool EnableInMemoryWriter { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Audit_Configuration_AuditRuntimeOptions_InMemoryBufferCapacity"></a> InMemoryBufferCapacity

Gets or sets the maximum number of audit entries retained by the default in-memory writer.

```csharp
public int InMemoryBufferCapacity { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Cephalon_Audit_Configuration_AuditRuntimeOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration?, string\)

Reads audit runtime options from configuration.

```csharp
public static AuditRuntimeOptions FromConfiguration(IConfiguration? configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The root configuration that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [AuditRuntimeOptions](/0-1-0-preview/reference/api/cephalon-audit-configuration-auditruntimeoptions/)

The parsed audit runtime options.
