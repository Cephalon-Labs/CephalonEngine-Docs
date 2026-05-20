---
title: Class TenantDomainOwnershipVerificationWorkflowCommands
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipverificationworkflowcommands
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines built-in tenant-domain ownership verification workflow commands.

```csharp
public static class TenantDomainOwnershipVerificationWorkflowCommands
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipVerificationWorkflowCommands](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipverificationworkflowcommands/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowCommands_Expire"></a> Expire

Expires a non-expired tenant-domain ownership declaration.

```csharp
public const string Expire = "expire"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowCommands_Reject"></a> Reject

Rejects a pending tenant-domain ownership declaration.

```csharp
public const string Reject = "reject"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowCommands_Request"></a> Request

Creates a pending tenant-domain ownership declaration.

```csharp
public const string Request = "request"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowCommands_Suspend"></a> Suspend

Suspends a verified tenant-domain ownership declaration.

```csharp
public const string Suspend = "suspend"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowCommands_Verify"></a> Verify

Marks a pending tenant-domain ownership declaration as verified.

```csharp
public const string Verify = "verify"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
