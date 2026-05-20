---
title: Class BuiltInTechnologies
slug: 0-1-0-preview/reference/api/cephalon-engine-technologies-builtintechnologies
editUrl: false
---

Namespace: [Cephalon.Engine.Technologies](/0-1-0-preview/reference/api/cephalon-engine-technologies/)  
Assembly: Cephalon.Engine.dll  

Provides the built-in technology descriptors used by Cephalon app profiles.

```csharp
public static class BuiltInTechnologies
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BuiltInTechnologies](/0-1-0-preview/reference/api/cephalon-engine-technologies-builtintechnologies/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Engine_Technologies_BuiltInTechnologies_AgenticWorkloads"></a> AgenticWorkloads

Gets the built-in agentic-workloads technology profile.

```csharp
public static TechnologyDescriptor AgenticWorkloads { get; }
```

#### Property Value

 TechnologyDescriptor

### <a id="Cephalon_Engine_Technologies_BuiltInTechnologies_All"></a> All

Gets all built-in technology descriptors.

```csharp
public static IReadOnlyList<TechnologyDescriptor> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<TechnologyDescriptor\>

### <a id="Cephalon_Engine_Technologies_BuiltInTechnologies_CellBasedArchitecture"></a> CellBasedArchitecture

Gets the built-in cell-based-architecture technology profile.

```csharp
public static TechnologyDescriptor CellBasedArchitecture { get; }
```

#### Property Value

 TechnologyDescriptor

### <a id="Cephalon_Engine_Technologies_BuiltInTechnologies_EdgeNativeDelivery"></a> EdgeNativeDelivery

Gets the built-in edge-native-delivery technology profile.

```csharp
public static TechnologyDescriptor EdgeNativeDelivery { get; }
```

#### Property Value

 TechnologyDescriptor

### <a id="Cephalon_Engine_Technologies_BuiltInTechnologies_EventDrivenIntegration"></a> EventDrivenIntegration

Gets the built-in event-driven-integration technology profile.

```csharp
public static TechnologyDescriptor EventDrivenIntegration { get; }
```

#### Property Value

 TechnologyDescriptor

### <a id="Cephalon_Engine_Technologies_BuiltInTechnologies_HybridCloudRuntime"></a> HybridCloudRuntime

Gets the built-in hybrid-cloud-runtime technology profile.

```csharp
public static TechnologyDescriptor HybridCloudRuntime { get; }
```

#### Property Value

 TechnologyDescriptor

### <a id="Cephalon_Engine_Technologies_BuiltInTechnologies_IdentityAccess"></a> IdentityAccess

Gets the built-in identity-access technology profile.

```csharp
public static TechnologyDescriptor IdentityAccess { get; }
```

#### Property Value

 TechnologyDescriptor

### <a id="Cephalon_Engine_Technologies_BuiltInTechnologies_KnowledgeRetrieval"></a> KnowledgeRetrieval

Gets the built-in knowledge-retrieval technology profile.

```csharp
public static TechnologyDescriptor KnowledgeRetrieval { get; }
```

#### Property Value

 TechnologyDescriptor

### <a id="Cephalon_Engine_Technologies_BuiltInTechnologies_MultiTenancy"></a> MultiTenancy

Gets the built-in multi-tenancy technology profile.

```csharp
public static TechnologyDescriptor MultiTenancy { get; }
```

#### Property Value

 TechnologyDescriptor

### <a id="Cephalon_Engine_Technologies_BuiltInTechnologies_RealtimeExperience"></a> RealtimeExperience

Gets the built-in realtime-experience technology profile.

```csharp
public static TechnologyDescriptor RealtimeExperience { get; }
```

#### Property Value

 TechnologyDescriptor

### <a id="Cephalon_Engine_Technologies_BuiltInTechnologies_ServerlessHosting"></a> ServerlessHosting

Gets the built-in serverless-hosting technology profile.

```csharp
public static TechnologyDescriptor ServerlessHosting { get; }
```

#### Property Value

 TechnologyDescriptor

### <a id="Cephalon_Engine_Technologies_BuiltInTechnologies_ServiceMeshIntegration"></a> ServiceMeshIntegration

Gets the built-in service-mesh-integration technology profile.

```csharp
public static TechnologyDescriptor ServiceMeshIntegration { get; }
```

#### Property Value

 TechnologyDescriptor

## Methods

### <a id="Cephalon_Engine_Technologies_BuiltInTechnologies_Resolve_System_String_"></a> Resolve\(string\)

Resolves a technology identifier, display name, or alias.

```csharp
public static TechnologyDescriptor Resolve(string value)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The technology identifier, display name, or alias to resolve.

#### Returns

 TechnologyDescriptor

The resolved technology descriptor.

### <a id="Cephalon_Engine_Technologies_BuiltInTechnologies_TryResolve_System_String_Cephalon_Abstractions_Technologies_TechnologyDescriptor__"></a> TryResolve\(string, out TechnologyDescriptor\)

Attempts to resolve a technology identifier, display name, or alias.

```csharp
public static bool TryResolve(string value, out TechnologyDescriptor technology)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The technology identifier, display name, or alias to resolve.

`technology` TechnologyDescriptor

The resolved technology descriptor when the lookup succeeds.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the technology was resolved; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
