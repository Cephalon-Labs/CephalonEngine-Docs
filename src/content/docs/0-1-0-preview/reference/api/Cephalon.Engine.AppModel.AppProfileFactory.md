---
title: Class AppProfileFactory
slug: 0-1-0-preview/reference/api/cephalon-engine-appmodel-appprofilefactory
editUrl: false
---

Namespace: [Cephalon.Engine.AppModel](/0-1-0-preview/reference/api/cephalon-engine-appmodel/)  
Assembly: Cephalon.Engine.dll  

Builds app profiles from <xref href="Cephalon.Engine.Configuration.EngineSettings" data-throw-if-not-resolved="false"></xref> values.

```csharp
public static class AppProfileFactory
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AppProfileFactory](/0-1-0-preview/reference/api/cephalon-engine-appmodel-appprofilefactory/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Engine_AppModel_AppProfileFactory_Create_Cephalon_Engine_Configuration_EngineSettings_"></a> Create\(EngineSettings\)

Creates an app profile from the configured engine settings.

```csharp
public static AppProfile Create(EngineSettings settings)
```

#### Parameters

`settings` [EngineSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-enginesettings/)

The engine settings that describe the blueprint, patterns, transports, and technologies.

#### Returns

 AppProfile

The built app profile.
