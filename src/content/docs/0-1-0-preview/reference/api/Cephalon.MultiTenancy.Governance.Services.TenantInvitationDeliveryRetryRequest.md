---
title: Class TenantInvitationDeliveryRetryRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretryrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes a bounded tenant invitation delivery retry runner request.

```csharp
public sealed class TenantInvitationDeliveryRetryRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryRetryRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretryrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRequest__ctor_System_Nullable_System_DateTimeOffset__System_Nullable_System_Int32__System_Boolean_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantInvitationDeliveryRetryRequest\(DateTimeOffset?, int?, bool, string?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant invitation delivery retry runner request.

```csharp
public TenantInvitationDeliveryRetryRequest(DateTimeOffset? atUtc = null, int? maxItems = null, bool dueOnly = true, string? source = null, string? actor = null, string? correlationId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp used for retry evaluation.

`maxItems` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The maximum number of retry entries to attempt.

`dueOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether entries scheduled after <code class="paramref">atUtc</code> should be skipped.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source recorded on retry attempts.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor recorded on retry attempts.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The correlation identifier recorded on retry attempts.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional retry runner metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRequest_Actor"></a> Actor

Gets the actor recorded on retry attempts.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRequest_AtUtc"></a> AtUtc

Gets the UTC timestamp used for retry evaluation.

```csharp
public DateTimeOffset? AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRequest_CorrelationId"></a> CorrelationId

Gets the correlation identifier recorded on retry attempts.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRequest_DueOnly"></a> DueOnly

Gets a value indicating whether entries scheduled after <xref href="Cephalon.MultiTenancy.Governance.Services.TenantInvitationDeliveryRetryRequest.AtUtc" data-throw-if-not-resolved="false"></xref> should be skipped.

```csharp
public bool DueOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRequest_MaxItems"></a> MaxItems

Gets the maximum number of retry entries to attempt.

```csharp
public int? MaxItems { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRequest_Metadata"></a> Metadata

Gets optional retry runner metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryRequest_Source"></a> Source

Gets the source recorded on retry attempts.

```csharp
public string? Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
