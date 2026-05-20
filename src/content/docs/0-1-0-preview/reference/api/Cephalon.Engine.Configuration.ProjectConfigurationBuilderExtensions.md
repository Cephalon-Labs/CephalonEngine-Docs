---
title: Class ProjectConfigurationBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-projectconfigurationbuilderextensions
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Adds Cephalon project-configuration conventions to a configuration builder.

```csharp
public static class ProjectConfigurationBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ProjectConfigurationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-engine-configuration-projectconfigurationbuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

<p>
Cephalon keeps configuration-driven features friendly to large projects by supporting a
split-file convention under a project's <code>Configurations</code> folder.
</p>
<p>
The current convention loads root-level <code>Add*.json</code> files first, then loads every
<code>{Environment}.json</code> file found under the folder tree. These sources are inserted ahead
of standard host overrides such as <code>appsettings.json</code>, <code>appsettings.{Environment}.json</code>,
user secrets, environment variables, and command-line arguments so projects can keep Cephalon
defaults grouped by concern without losing the normal ASP.NET Core and generic-host override path.
</p>

## Fields

### <a id="Cephalon_Engine_Configuration_ProjectConfigurationBuilderExtensions_DefaultRootFolderName"></a> DefaultRootFolderName

Gets the default root folder name used for split project configuration files.

```csharp
public const string DefaultRootFolderName = "Configurations"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Engine_Configuration_ProjectConfigurationBuilderExtensions_AddCephalonProjectConfigurations_Microsoft_Extensions_Configuration_IConfigurationBuilder_System_String_System_String_System_String_"></a> AddCephalonProjectConfigurations\(IConfigurationBuilder, string, string, string\)

Adds Cephalon project-configuration conventions to the supplied configuration builder.

```csharp
public static IConfigurationBuilder AddCephalonProjectConfigurations(this IConfigurationBuilder configuration, string contentRootPath, string environmentName, string rootFolderName = "Configurations")
```

#### Parameters

`configuration` [IConfigurationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationbuilder)

The configuration builder to extend.

`contentRootPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The project content root that owns the <code>Configurations</code> folder.

`environmentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The current host environment name, such as <code>Development</code> or <code>Local</code>.

`rootFolderName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The split-configuration root folder name. The default value is
<xref href="Cephalon.Engine.Configuration.ProjectConfigurationBuilderExtensions.DefaultRootFolderName" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [IConfigurationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationbuilder)

The same configuration builder for fluent composition.

#### Remarks

The convention currently loads:

<ul><li><code>Configurations/Add*.json</code></li><li><code>Configurations/**/{Environment}.json</code></li></ul>

Existing JSON configuration sources are not duplicated when this method is called more than once.
