---
title: Class EdgeRuntimeOptions
slug: 0-1-0-preview/reference/api/cephalon-edge-configuration-edgeruntimeoptions
editUrl: false
---

Namespace: [Cephalon.Edge.Configuration](/0-1-0-preview/reference/api/cephalon-edge-configuration/)  
Assembly: Cephalon.Edge.dll  

Configures the built-in edge runtime pack.

```csharp
public sealed class EdgeRuntimeOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EdgeRuntimeOptions](/0-1-0-preview/reference/api/cephalon-edge-configuration-edgeruntimeoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These options seed the host-owned part of the edge runtime. Installed modules can still
contribute additional nodes through <xref href="Cephalon.Edge.Services.IEdgeNodeContributor" data-throw-if-not-resolved="false"></xref>.

## Constructors

### <a id="Cephalon_Edge_Configuration_EdgeRuntimeOptions__ctor"></a> EdgeRuntimeOptions\(\)

Creates edge runtime options with the default host-owned features enabled.

```csharp
public EdgeRuntimeOptions()
```

## Properties

### <a id="Cephalon_Edge_Configuration_EdgeRuntimeOptions_EnableOfflineMode"></a> EnableOfflineMode

Gets or sets a value indicating whether offline mode features are enabled.

```csharp
public bool EnableOfflineMode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Edge_Configuration_EdgeRuntimeOptions_EnableSynchronization"></a> EnableSynchronization

Gets or sets a value indicating whether synchronization features are enabled.

```csharp
public bool EnableSynchronization { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Edge_Configuration_EdgeRuntimeOptions_Nodes"></a> Nodes

Gets the host-defined edge nodes that should be available to the edge runtime.

```csharp
public IList<EdgeNodeDescriptor> Nodes { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[EdgeNodeDescriptor](/0-1-0-preview/reference/api/cephalon-edge-services-edgenodedescriptor/)\>
