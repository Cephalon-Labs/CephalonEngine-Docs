---
title: Class TenantInvitationDeliverySenderResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverysenderresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the outcome returned by a tenant invitation delivery sender.

```csharp
public sealed class TenantInvitationDeliverySenderResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliverySenderResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverysenderresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliverySenderResult__ctor_System_String_System_Boolean_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantInvitationDeliverySenderResult\(string, bool, string?, string?, DateTimeOffset?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant invitation delivery sender result.

```csharp
public TenantInvitationDeliverySenderResult(string outcome, bool dispatched, string? providerMessageId = null, string? reason = null, DateTimeOffset? dispatchedAtUtc = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The sender outcome.

`dispatched` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the sender accepted the dispatch.

`providerMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider message identifier returned by the sender.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider-facing outcome reason.

`dispatchedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp reported by the sender.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional sender metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliverySenderResult_Dispatched"></a> Dispatched

Gets a value indicating whether the sender accepted the dispatch.

```csharp
public bool Dispatched { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliverySenderResult_DispatchedAtUtc"></a> DispatchedAtUtc

Gets the UTC timestamp reported by the sender.

```csharp
public DateTimeOffset? DispatchedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliverySenderResult_Metadata"></a> Metadata

Gets optional sender metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliverySenderResult_Outcome"></a> Outcome

Gets the sender outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliverySenderResult_ProviderMessageId"></a> ProviderMessageId

Gets the provider message identifier returned by the sender.

```csharp
public string? ProviderMessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliverySenderResult_Reason"></a> Reason

Gets the provider-facing outcome reason.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
