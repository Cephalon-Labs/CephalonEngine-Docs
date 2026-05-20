---
title: Class BehaviorApiSurfaceDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorapisurfacedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Describes the logical public API surface projected by a behavior across transport adapters.

```csharp
public sealed class BehaviorApiSurfaceDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorApiSurfaceDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorapisurfacedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

This descriptor stays transport-agnostic. Route-shaped non-REST adapters such as JSON-RPC,
GraphQL-over-SSE, GraphQL-over-WebSocket, Server-Sent Events, and WebSocket can project
canonical routes from the same logical surface without forcing transport-specific path
details into behavior identifiers. Public REST stays module-owned.

## Constructors

### <a id="Cephalon_Abstractions_Behaviors_BehaviorApiSurfaceDescriptor__ctor_System_String_System_String_"></a> BehaviorApiSurfaceDescriptor\(string, string\)

Initializes a new <xref href="Cephalon.Abstractions.Behaviors.BehaviorApiSurfaceDescriptor" data-throw-if-not-resolved="false"></xref>.

```csharp
public BehaviorApiSurfaceDescriptor(string groupPath, string operationPath)
```

#### Parameters

`groupPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical group path, such as <code>cart</code> or <code>orders/status</code>.

`operationPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical operation path, such as <code>get</code> or <code>remove-item</code>.

## Properties

### <a id="Cephalon_Abstractions_Behaviors_BehaviorApiSurfaceDescriptor_GroupPath"></a> GroupPath

Gets the logical group path shared by transport-specific projections.

```csharp
public string GroupPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorApiSurfaceDescriptor_OperationPath"></a> OperationPath

Gets the logical operation path shared by transport-specific projections.

```csharp
public string OperationPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Abstractions_Behaviors_BehaviorApiSurfaceDescriptor_CreateDefault_System_String_"></a> CreateDefault\(string\)

Creates a default API surface descriptor from the supplied behavior identifier.

```csharp
public static BehaviorApiSurfaceDescriptor CreateDefault(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier.

#### Returns

 [BehaviorApiSurfaceDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorapisurfacedescriptor/)

The default logical API surface derived from the identifier.

#### Remarks

Behavior identifiers such as <code>cart.get</code> become group <code>cart</code> plus operation <code>get</code>.
Identifiers with more than two segments join all but the final segment into the group path.
