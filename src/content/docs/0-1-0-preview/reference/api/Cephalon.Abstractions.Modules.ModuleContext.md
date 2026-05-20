---
title: Class ModuleContext
slug: 0-1-0-preview/reference/api/cephalon-abstractions-modules-modulecontext
editUrl: false
---

Namespace: [Cephalon.Abstractions.Modules](/0-1-0-preview/reference/api/cephalon-abstractions-modules/)  
Assembly: Cephalon.Abstractions.dll  

Provides runtime services shared with module lifecycle hooks.

```csharp
public sealed class ModuleContext
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModuleContext](/0-1-0-preview/reference/api/cephalon-abstractions-modules-modulecontext/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Modules_ModuleContext__ctor_System_IServiceProvider_"></a> ModuleContext\(IServiceProvider\)

Creates a module runtime context.

```csharp
public ModuleContext(IServiceProvider services)
```

#### Parameters

`services` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

The root service provider for the runtime.

## Properties

### <a id="Cephalon_Abstractions_Modules_ModuleContext_Services"></a> Services

Gets the root service provider for the runtime.

```csharp
public IServiceProvider Services { get; }
```

#### Property Value

 [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)
