---
title: Class BehaviorOptions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-configuration-behavioroptions
editUrl: false
---

Namespace: [Cephalon.Behaviors.Configuration](/0-1-0-preview/reference/api/cephalon-behaviors-configuration/)  
Assembly: Cephalon.Behaviors.dll  

Top-level behavior options read from the <code>Engine:Behaviors</code> configuration section.

```csharp
public sealed class BehaviorOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorOptions](/0-1-0-preview/reference/api/cephalon-behaviors-configuration-behavioroptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Behaviors_Configuration_BehaviorOptions_AutoRegister"></a> AutoRegister

Gets or sets whether the engine automatically discovers and registers behaviors
from loaded assemblies. When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>, the engine
scans assemblies for concrete types decorated with
<code>[AppBehavior]</code> and implementing <code>IAppBehavior&lt;TIn, TOut&gt;</code>,
registering any that have not already been registered manually.

```csharp
public bool AutoRegister { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Explicit module-owned behavior registration through <code>BehaviorModuleBase</code> and
<code>RestBehaviorModuleBase</code> is now the preferred default path. Use auto-registration as
an opt-in fallback for legacy, exploratory, or convention-driven scenarios that still rely
on assembly scanning.

### <a id="Cephalon_Behaviors_Configuration_BehaviorOptions_AutoRegisterAssemblies"></a> AutoRegisterAssemblies

Gets or sets the list of assembly names to scan for auto-registration.
When empty and <xref href="Cephalon.Behaviors.Configuration.BehaviorOptions.AutoRegister" data-throw-if-not-resolved="false"></xref> is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>,
the engine scans all loaded assemblies that reference <code>Cephalon.Abstractions</code>,
excluding well-known framework prefixes and any entries in
<xref href="Cephalon.Behaviors.Configuration.BehaviorOptions.AutoRegisterExcludeAssemblyPrefixes" data-throw-if-not-resolved="false"></xref>.

```csharp
public List<string> AutoRegisterAssemblies { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Behaviors_Configuration_BehaviorOptions_AutoRegisterExcludeAssemblyPrefixes"></a> AutoRegisterExcludeAssemblyPrefixes

Gets or sets additional assembly name prefixes to exclude from auto-registration scanning.
Only effective when <xref href="Cephalon.Behaviors.Configuration.BehaviorOptions.AutoRegisterAssemblies" data-throw-if-not-resolved="false"></xref> is empty (default scan mode).
The engine already excludes well-known framework prefixes (<code>System.</code>,
<code>Microsoft.</code>, etc.) — use this property to add project-specific exclusions
such as <code>"MyCompany.Shared."</code> or <code>"ThirdParty."</code>.

```csharp
public List<string> AutoRegisterExcludeAssemblyPrefixes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
