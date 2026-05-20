---
title: Class FileSystemScaffoldWriter
slug: 0-1-0-preview/reference/api/cephalon-scaffolding-io-filesystemscaffoldwriter
editUrl: false
---

Namespace: [Cephalon.Scaffolding.IO](/0-1-0-preview/reference/api/cephalon-scaffolding-io/)  
Assembly: Cephalon.Scaffolding.dll  

Writes a rendered scaffold to the local file system.

```csharp
public static class FileSystemScaffoldWriter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FileSystemScaffoldWriter](/0-1-0-preview/reference/api/cephalon-scaffolding-io-filesystemscaffoldwriter/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Scaffolding_IO_FileSystemScaffoldWriter_WriteAsync_System_String_Cephalon_Scaffolding_Generation_RenderedScaffold_System_Boolean_System_Threading_CancellationToken_"></a> WriteAsync\(string, RenderedScaffold, bool, CancellationToken\)

Writes the supplied scaffold to disk.

```csharp
public static Task WriteAsync(string rootPath, RenderedScaffold scaffold, bool overwrite = false, CancellationToken cancellationToken = default)
```

#### Parameters

`rootPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target root directory.

`scaffold` [RenderedScaffold](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedscaffold/)

The rendered scaffold to write.

`overwrite` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to overwrite existing files; otherwise the write fails when a target file exists.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that can cancel the write operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when all folders and files have been written.
