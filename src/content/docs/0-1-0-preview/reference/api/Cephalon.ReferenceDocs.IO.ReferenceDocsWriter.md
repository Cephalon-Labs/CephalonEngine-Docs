---
title: Class ReferenceDocsWriter
slug: 0-1-0-preview/reference/api/cephalon-referencedocs-io-referencedocswriter
editUrl: false
---

Namespace: [Cephalon.ReferenceDocs.IO](/0-1-0-preview/reference/api/cephalon-referencedocs-io/)  
Assembly: Cephalon.ReferenceDocs.dll  

Writes rendered reference documentation to the local file system.

```csharp
public static class ReferenceDocsWriter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReferenceDocsWriter](/0-1-0-preview/reference/api/cephalon-referencedocs-io-referencedocswriter/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_ReferenceDocs_IO_ReferenceDocsWriter_WriteAsync_Cephalon_ReferenceDocs_Generation_RenderedReferenceDocs_System_Boolean_System_Threading_CancellationToken_"></a> WriteAsync\(RenderedReferenceDocs, bool, CancellationToken\)

Writes the supplied reference docs output to disk.

```csharp
public static Task WriteAsync(RenderedReferenceDocs rendered, bool overwrite = true, CancellationToken cancellationToken = default)
```

#### Parameters

`rendered` [RenderedReferenceDocs](/0-1-0-preview/reference/api/cephalon-referencedocs-generation-renderedreferencedocs/)

The rendered reference docs to write.

`overwrite` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to overwrite existing files; otherwise the write fails when a target file exists.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that can cancel the write operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when all files have been written.
