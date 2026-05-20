---
title: Class BackendForFrontendClientBindingSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendclientbindingsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes one configuration-driven backend-for-frontend client binding.

```csharp
public sealed class BackendForFrontendClientBindingSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BackendForFrontendClientBindingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendclientbindingsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_BackendForFrontendClientBindingSettings__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_Cephalon_Engine_Configuration_BackendForFrontendBehaviorFilterSettings_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> BackendForFrontendClientBindingSettings\(string, string, string, string, string, string, string?, BackendForFrontendBehaviorFilterSettings?, IReadOnlyDictionary<string, string\>?\)

Creates backend-for-frontend client binding settings.

```csharp
public BackendForFrontendClientBindingSettings(string id, string clientId, string sourceModuleId, string displayName, string description, string transportId, string? entryPoint = null, BackendForFrontendBehaviorFilterSettings? behaviorFilter = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable binding identifier.

`clientId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable client identifier.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cephalon module that owns this binding.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing binding name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the client-specific surface.

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The transport identifier used by this client surface.

`entryPoint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The transport-specific entry point, route prefix, or endpoint handle when one is known.

`behaviorFilter` [BackendForFrontendBehaviorFilterSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendbehaviorfiltersettings/)?

The behavior, capability, and tag-selection hints attached to this binding.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional binding metadata.

## Properties

### <a id="Cephalon_Engine_Configuration_BackendForFrontendClientBindingSettings_BehaviorFilter"></a> BehaviorFilter

Gets the behavior, capability, and tag-selection hints attached to this client binding.

```csharp
public BackendForFrontendBehaviorFilterSettings BehaviorFilter { get; }
```

#### Property Value

 [BackendForFrontendBehaviorFilterSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendbehaviorfiltersettings/)

### <a id="Cephalon_Engine_Configuration_BackendForFrontendClientBindingSettings_ClientId"></a> ClientId

Gets the stable client identifier.

```csharp
public string ClientId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_BackendForFrontendClientBindingSettings_Description"></a> Description

Gets the human-readable description of the client-specific surface.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_BackendForFrontendClientBindingSettings_DisplayName"></a> DisplayName

Gets the operator-facing binding name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_BackendForFrontendClientBindingSettings_EntryPoint"></a> EntryPoint

Gets the transport-specific entry point, route prefix, or endpoint handle when one is known.

```csharp
public string? EntryPoint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_BackendForFrontendClientBindingSettings_Id"></a> Id

Gets the stable binding identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_BackendForFrontendClientBindingSettings_Metadata"></a> Metadata

Gets optional binding metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_BackendForFrontendClientBindingSettings_SourceModuleId"></a> SourceModuleId

Gets the module that owns this client-specific binding.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_BackendForFrontendClientBindingSettings_TransportId"></a> TransportId

Gets the transport identifier used by this client-specific surface.

```csharp
public string TransportId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Engine_Configuration_BackendForFrontendClientBindingSettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection\)

Reads one backend-for-frontend client binding from configuration.

```csharp
public static BackendForFrontendClientBindingSettings FromSection(IConfigurationSection section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)

The configuration section that contains the client binding.

#### Returns

 [BackendForFrontendClientBindingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendclientbindingsettings/)

The parsed client-binding settings.
