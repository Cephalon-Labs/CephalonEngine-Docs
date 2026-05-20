---
title: Interface ITenantDomainOwnershipHttpProofPublicationCatalog
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-itenantdomainownershiphttpproofpublicationcatalog
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Exposes tenant-domain ownership HTTP proof files materialized by the governance companion pack.

```csharp
public interface ITenantDomainOwnershipHttpProofPublicationCatalog
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipHttpProofPublicationCatalog_PublishedProofs"></a> PublishedProofs

Gets the HTTP proof files currently published by the governance companion pack.

```csharp
IReadOnlyList<TenantDomainOwnershipHttpProofPublicationDescriptor> PublishedProofs { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantDomainOwnershipHttpProofPublicationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofpublicationdescriptor/)\>

## Methods

### <a id="Cephalon_MultiTenancy_Governance_Services_ITenantDomainOwnershipHttpProofPublicationCatalog_GetByHostAndPath_System_String_System_String_"></a> GetByHostAndPath\(string, string\)

Finds a published HTTP proof file by request host and path.

```csharp
TenantDomainOwnershipHttpProofPublicationDescriptor? GetByHostAndPath(string hostName, string httpFilePath)
```

#### Parameters

`hostName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The request host name without a URI scheme.

`httpFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The HTTP path requested by the client.

#### Returns

 [TenantDomainOwnershipHttpProofPublicationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershiphttpproofpublicationdescriptor/)?

The matching published HTTP proof file, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when no published proof matches.
