---
title: Class AppProfile
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-appprofile
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes the resolved runtime profile selected for a Cephalon app.

```csharp
public sealed class AppProfile
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AppProfile](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-appprofile/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_AppProfile__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Patterns_PatternDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Technologies_TechnologyDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_TransportDescriptor__Cephalon_Abstractions_AppModel_DataSelection_Cephalon_Abstractions_AppModel_DatabaseTopologySelection_Cephalon_Abstractions_AppModel_IdentitySelection_Cephalon_Abstractions_AppModel_TenancySelection_Cephalon_Abstractions_AppModel_AuditSelection_Cephalon_Abstractions_AppModel_MessagingSelection_Cephalon_Abstractions_AppModel_ResilienceSelection_"></a> AppProfile\(string, string, string, IReadOnlyList<PatternDescriptor\>, IReadOnlyList<TechnologyDescriptor\>?, IReadOnlyList<TransportDescriptor\>?, DataSelection?, DatabaseTopologySelection?, IdentitySelection?, TenancySelection?, AuditSelection?, MessagingSelection?, ResilienceSelection?\)

Creates an app profile without scaffold metadata.

```csharp
public AppProfile(string blueprintId, string blueprintDisplayName, string blueprintDescription, IReadOnlyList<PatternDescriptor> patterns, IReadOnlyList<TechnologyDescriptor>? technologies = null, IReadOnlyList<TransportDescriptor>? transports = null, DataSelection? data = null, DatabaseTopologySelection? databases = null, IdentitySelection? identity = null, TenancySelection? tenancy = null, AuditSelection? audit = null, MessagingSelection? messaging = null, ResilienceSelection? resilience = null)
```

#### Parameters

`blueprintId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The selected blueprint identifier.

`blueprintDisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The selected blueprint display name.

`blueprintDescription` [string](https://learn.microsoft.com/dotnet/api/system.string)

The selected blueprint description.

`patterns` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PatternDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-patterndescriptor/)\>

The patterns active for the app.

`technologies` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TechnologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologydescriptor/)\>?

The selected technology profiles.

`transports` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TransportDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-transportdescriptor/)\>?

The selected transports.

`data` [DataSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-dataselection/)?

The selected data inputs.

`databases` [DatabaseTopologySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetopologyselection/)?

The selected database topology inputs.

`identity` [IdentitySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-identityselection/)?

The selected identity and authorization inputs.

`tenancy` [TenancySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-tenancyselection/)?

The selected multi-tenancy inputs.

`audit` [AuditSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-auditselection/)?

The selected audit inputs.

`messaging` [MessagingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-messagingselection/)?

The selected messaging inputs.

`resilience` [ResilienceSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-resilienceselection/)?

The selected resilience-policy inputs.

### <a id="Cephalon_Abstractions_AppModel_AppProfile__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Patterns_PatternDescriptor__Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldPlan_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Technologies_TechnologyDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_TransportDescriptor__Cephalon_Abstractions_AppModel_DataSelection_Cephalon_Abstractions_AppModel_DatabaseTopologySelection_Cephalon_Abstractions_AppModel_IdentitySelection_Cephalon_Abstractions_AppModel_TenancySelection_Cephalon_Abstractions_AppModel_AuditSelection_Cephalon_Abstractions_AppModel_MessagingSelection_Cephalon_Abstractions_AppModel_ResilienceSelection_"></a> AppProfile\(string, string, string, IReadOnlyList<PatternDescriptor\>, ScaffoldPlan?, IReadOnlyList<TechnologyDescriptor\>?, IReadOnlyList<TransportDescriptor\>?, DataSelection?, DatabaseTopologySelection?, IdentitySelection?, TenancySelection?, AuditSelection?, MessagingSelection?, ResilienceSelection?\)

Creates an app profile with optional scaffold metadata.

```csharp
[JsonConstructor]
public AppProfile(string blueprintId, string blueprintDisplayName, string blueprintDescription, IReadOnlyList<PatternDescriptor> patterns, ScaffoldPlan? scaffold, IReadOnlyList<TechnologyDescriptor>? technologies = null, IReadOnlyList<TransportDescriptor>? transports = null, DataSelection? data = null, DatabaseTopologySelection? databases = null, IdentitySelection? identity = null, TenancySelection? tenancy = null, AuditSelection? audit = null, MessagingSelection? messaging = null, ResilienceSelection? resilience = null)
```

#### Parameters

`blueprintId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The selected blueprint identifier.

`blueprintDisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The selected blueprint display name.

`blueprintDescription` [string](https://learn.microsoft.com/dotnet/api/system.string)

The selected blueprint description.

`patterns` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PatternDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-patterndescriptor/)\>

The patterns active for the app.

`scaffold` [ScaffoldPlan](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldplan/)?

The scaffold plan associated with the app shape.

`technologies` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TechnologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologydescriptor/)\>?

The selected technology profiles.

`transports` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TransportDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-transportdescriptor/)\>?

The selected transports.

`data` [DataSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-dataselection/)?

The selected data inputs.

`databases` [DatabaseTopologySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetopologyselection/)?

The selected database topology inputs.

`identity` [IdentitySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-identityselection/)?

The selected identity and authorization inputs.

`tenancy` [TenancySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-tenancyselection/)?

The selected multi-tenancy inputs.

`audit` [AuditSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-auditselection/)?

The selected audit inputs.

`messaging` [MessagingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-messagingselection/)?

The selected messaging inputs.

`resilience` [ResilienceSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-resilienceselection/)?

The selected resilience-policy inputs.

## Properties

### <a id="Cephalon_Abstractions_AppModel_AppProfile_Audit"></a> Audit

Gets the selected audit inputs.

```csharp
public AuditSelection Audit { get; }
```

#### Property Value

 [AuditSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-auditselection/)

### <a id="Cephalon_Abstractions_AppModel_AppProfile_BlueprintDescription"></a> BlueprintDescription

Gets the selected blueprint description.

```csharp
public string BlueprintDescription { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_AppProfile_BlueprintDisplayName"></a> BlueprintDisplayName

Gets the selected blueprint display name.

```csharp
public string BlueprintDisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_AppProfile_BlueprintId"></a> BlueprintId

Gets the selected blueprint identifier.

```csharp
public string BlueprintId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_AppProfile_Data"></a> Data

Gets the selected data inputs.

```csharp
public DataSelection Data { get; }
```

#### Property Value

 [DataSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-dataselection/)

### <a id="Cephalon_Abstractions_AppModel_AppProfile_Databases"></a> Databases

Gets the selected database topology inputs.

```csharp
public DatabaseTopologySelection Databases { get; }
```

#### Property Value

 [DatabaseTopologySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-databasetopologyselection/)

### <a id="Cephalon_Abstractions_AppModel_AppProfile_Identity"></a> Identity

Gets the selected identity and authorization inputs.

```csharp
public IdentitySelection Identity { get; }
```

#### Property Value

 [IdentitySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-identityselection/)

### <a id="Cephalon_Abstractions_AppModel_AppProfile_Messaging"></a> Messaging

Gets the selected messaging inputs.

```csharp
public MessagingSelection Messaging { get; }
```

#### Property Value

 [MessagingSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-messagingselection/)

### <a id="Cephalon_Abstractions_AppModel_AppProfile_Patterns"></a> Patterns

Gets the active patterns for the app.

```csharp
public IReadOnlyList<PatternDescriptor> Patterns { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PatternDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-patterndescriptor/)\>

### <a id="Cephalon_Abstractions_AppModel_AppProfile_Resilience"></a> Resilience

Gets the selected resilience-policy inputs.

```csharp
public ResilienceSelection Resilience { get; }
```

#### Property Value

 [ResilienceSelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-resilienceselection/)

### <a id="Cephalon_Abstractions_AppModel_AppProfile_Scaffold"></a> Scaffold

Gets the scaffold plan associated with the app shape, when one is defined.

```csharp
public ScaffoldPlan? Scaffold { get; }
```

#### Property Value

 [ScaffoldPlan](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldplan/)?

### <a id="Cephalon_Abstractions_AppModel_AppProfile_Technologies"></a> Technologies

Gets the selected technology profiles.

```csharp
public IReadOnlyList<TechnologyDescriptor> Technologies { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TechnologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologydescriptor/)\>

### <a id="Cephalon_Abstractions_AppModel_AppProfile_Tenancy"></a> Tenancy

Gets the selected multi-tenancy inputs.

```csharp
public TenancySelection Tenancy { get; }
```

#### Property Value

 [TenancySelection](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-tenancyselection/)

### <a id="Cephalon_Abstractions_AppModel_AppProfile_Transports"></a> Transports

Gets the selected transports.

```csharp
public IReadOnlyList<TransportDescriptor> Transports { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TransportDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-transportdescriptor/)\>
