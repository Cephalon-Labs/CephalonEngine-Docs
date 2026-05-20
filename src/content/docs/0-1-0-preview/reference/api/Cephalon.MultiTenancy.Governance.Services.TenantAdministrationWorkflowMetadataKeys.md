---
title: Class TenantAdministrationWorkflowMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantadministrationworkflowmetadatakeys
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable metadata keys written by tenant-administration workflow commands.

```csharp
public static class TenantAdministrationWorkflowMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantAdministrationWorkflowMetadataKeys](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantadministrationworkflowmetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowMetadataKeys_AdministrationWorkflowOwnership"></a> AdministrationWorkflowOwnership

Metadata key describing who owns the tenant-administration workflow that wrote the descriptor.

```csharp
public const string AdministrationWorkflowOwnership = "administrationWorkflowOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowMetadataKeys_LastAdministrationActor"></a> LastAdministrationActor

Metadata key containing the actor that requested the last tenant-administration command.

```csharp
public const string LastAdministrationActor = "lastAdministrationActor"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowMetadataKeys_LastAdministrationCommand"></a> LastAdministrationCommand

Metadata key containing the last tenant-administration command.

```csharp
public const string LastAdministrationCommand = "lastAdministrationCommand"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowMetadataKeys_LastAdministrationCorrelationId"></a> LastAdministrationCorrelationId

Metadata key containing the correlation identifier for the last tenant-administration command.

```csharp
public const string LastAdministrationCorrelationId = "lastAdministrationCorrelationId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowMetadataKeys_LastAdministrationOccurredAtUtc"></a> LastAdministrationOccurredAtUtc

Metadata key containing the UTC timestamp when the last tenant-administration command was evaluated.

```csharp
public const string LastAdministrationOccurredAtUtc = "lastAdministrationOccurredAtUtc"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowMetadataKeys_LastAdministrationOutcome"></a> LastAdministrationOutcome

Metadata key containing the last tenant-administration command outcome.

```csharp
public const string LastAdministrationOutcome = "lastAdministrationOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantAdministrationWorkflowMetadataKeys_LastAdministrationReason"></a> LastAdministrationReason

Metadata key containing the operator-facing reason for the last tenant-administration command.

```csharp
public const string LastAdministrationReason = "lastAdministrationReason"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
