---
title: Class TenantResolutionResult
slug: 0-1-0-preview/reference/api/cephalon-abstractions-tenancy-tenantresolutionresult
editUrl: false
---

Namespace: [Cephalon.Abstractions.Tenancy](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy/)  
Assembly: Cephalon.Abstractions.dll  

Describes the outcome of one tenant-resolution attempt.

```csharp
public sealed class TenantResolutionResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantResolutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy-tenantresolutionresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Tenancy_TenantResolutionResult__ctor_Cephalon_Abstractions_Tenancy_TenantContext_System_String_System_String_"></a> TenantResolutionResult\(TenantContext?, string?, string?\)

Creates a new tenant-resolution result.

```csharp
public TenantResolutionResult(TenantContext? tenant, string? source = null, string? reason = null)
```

#### Parameters

`tenant` [TenantContext](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy-tenantcontext/)?

The resolved tenant context when resolution succeeded.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source or strategy that produced the result when one is known.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The human-readable reason associated with the result.

## Properties

### <a id="Cephalon_Abstractions_Tenancy_TenantResolutionResult_IsResolved"></a> IsResolved

Gets a value indicating whether tenant resolution succeeded.

```csharp
public bool IsResolved { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Tenancy_TenantResolutionResult_Reason"></a> Reason

Gets the human-readable reason associated with the result.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Tenancy_TenantResolutionResult_Source"></a> Source

Gets the source or strategy that produced the result when one is known.

```csharp
public string? Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Tenancy_TenantResolutionResult_Tenant"></a> Tenant

Gets the resolved tenant context when resolution succeeded.

```csharp
public TenantContext? Tenant { get; }
```

#### Property Value

 [TenantContext](/0-1-0-preview/reference/api/cephalon-abstractions-tenancy-tenantcontext/)?
