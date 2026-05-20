---
title: Class TenantDomainVerificationMethods
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainverificationmethods
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable verification-method labels for tenant domain ownership descriptors.

```csharp
public static class TenantDomainVerificationMethods
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainVerificationMethods](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainverificationmethods/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainVerificationMethods_DnsTxt"></a> DnsTxt

Domain ownership is expected to be verified by a DNS TXT record.

```csharp
public const string DnsTxt = "dns-txt"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainVerificationMethods_HttpFile"></a> HttpFile

Domain ownership is expected to be verified by an HTTP file or well-known endpoint.

```csharp
public const string HttpFile = "http-file"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainVerificationMethods_Manual"></a> Manual

Domain ownership was verified by an operator or another trusted manual process.

```csharp
public const string Manual = "manual"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
