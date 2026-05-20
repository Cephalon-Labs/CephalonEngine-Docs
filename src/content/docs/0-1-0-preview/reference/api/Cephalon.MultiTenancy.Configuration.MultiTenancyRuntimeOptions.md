---
title: Class MultiTenancyRuntimeOptions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-configuration-multitenancyruntimeoptions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Configuration](/0-1-0-preview/reference/api/cephalon-multitenancy-configuration/)  
Assembly: Cephalon.MultiTenancy.dll  

Describes host-agnostic runtime options for the Cephalon multi-tenancy companion pack.

```csharp
public sealed class MultiTenancyRuntimeOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MultiTenancyRuntimeOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-configuration-multitenancyruntimeoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Configuration_MultiTenancyRuntimeOptions__ctor"></a> MultiTenancyRuntimeOptions\(\)

Initializes a new instance of the <xref href="Cephalon.MultiTenancy.Configuration.MultiTenancyRuntimeOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiTenancyRuntimeOptions()
```

## Properties

### <a id="Cephalon_MultiTenancy_Configuration_MultiTenancyRuntimeOptions_DefaultTenantId"></a> DefaultTenantId

Gets or sets the default tenant identifier used when no explicit request hint resolves a tenant.

```csharp
public string? DefaultTenantId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Configuration_MultiTenancyRuntimeOptions_EnableDefaultResolver"></a> EnableDefaultResolver

Gets or sets a value indicating whether the built-in configuration-driven tenant resolver is active.

```csharp
public bool EnableDefaultResolver { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Configuration_MultiTenancyRuntimeOptions_Tenants"></a> Tenants

Gets the configured tenants that the built-in resolver can match by id, key, or domain.

```csharp
public List<TenantContext> Tenants { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<TenantContext\>

## Methods

### <a id="Cephalon_MultiTenancy_Configuration_MultiTenancyRuntimeOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration?, string\)

Reads multi-tenancy runtime options from configuration.

```csharp
public static MultiTenancyRuntimeOptions FromConfiguration(IConfiguration? configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The root configuration that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [MultiTenancyRuntimeOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-configuration-multitenancyruntimeoptions/)

The parsed multi-tenancy runtime options.
