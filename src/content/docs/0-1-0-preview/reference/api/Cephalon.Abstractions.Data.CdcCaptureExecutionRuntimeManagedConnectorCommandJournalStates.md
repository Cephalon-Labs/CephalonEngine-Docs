---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournalstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable state identifiers used by managed-connector command-journal answers.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStates](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandjournalstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStates_Bounded"></a> Bounded

The command journal currently retains bounded recent history and the retained evidence is sufficient for operator-facing automation answers.

```csharp
public const string Bounded = "bounded"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStates_CooldownActive"></a> CooldownActive

The command journal currently retains matching recent command evidence that is still inside the retry cooldown window.

```csharp
public const string CooldownActive = "cooldown-active"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStates_DuplicateEvidencePresent"></a> DuplicateEvidencePresent

The command journal currently retains matching command evidence showing that replaying the command would be duplicative.

```csharp
public const string DuplicateEvidencePresent = "duplicate-evidence-present"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStates_Empty"></a> Empty

The command journal currently has no recorded managed-connector command outcomes.

```csharp
public const string Empty = "empty"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStates_InsufficientForAutomation"></a> InsufficientForAutomation

The command journal currently retains history, but the retained evidence is still insufficient for automatic execution or background automation.

```csharp
public const string InsufficientForAutomation = "insufficient-for-automation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStates_NotApplicable"></a> NotApplicable

The command journal does not currently apply to the execution runtime.

```csharp
public const string NotApplicable = "not-applicable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandJournalStates_Truncated"></a> Truncated

The command journal currently retains only the newest bounded command history because older entries were truncated.

```csharp
public const string Truncated = "truncated"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
