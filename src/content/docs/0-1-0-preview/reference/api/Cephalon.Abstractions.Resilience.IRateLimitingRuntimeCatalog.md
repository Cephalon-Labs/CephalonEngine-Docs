---
title: Interface IRateLimitingRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-resilience-iratelimitingruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Resilience](/0-1-0-preview/reference/api/cephalon-abstractions-resilience/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the active HTTP rate-limiting policies visible to the current runtime.

```csharp
public interface IRateLimitingRuntimeCatalog
```

## Remarks

Implementations describe the effective policy applied by the active host adapter, such as
ASP.NET Core middleware-based request limiting. This surface is runtime-facing rather than
app-model-facing because it reflects what the host actually enforces after defaults and host
exclusions have been applied.

## Properties

### <a id="Cephalon_Abstractions_Resilience_IRateLimitingRuntimeCatalog_Policies"></a> Policies

Gets all rate-limiting policies visible to the current runtime.

```csharp
IReadOnlyList<RateLimitingRuntimeDescriptor> Policies { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RateLimitingRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-ratelimitingruntimedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Resilience_IRateLimitingRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one rate-limiting policy by its stable identifier.

```csharp
RateLimitingRuntimeDescriptor? GetById(string policyId)
```

#### Parameters

`policyId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The policy identifier to resolve.

#### Returns

 [RateLimitingRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-ratelimitingruntimedescriptor/)?

The matching policy descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Resilience_IRateLimitingRuntimeCatalog_GetByTransportId_System_String_"></a> GetByTransportId\(string\)

Gets all rate-limiting policies that apply to the requested transport identifier.

```csharp
IReadOnlyList<RateLimitingRuntimeDescriptor> GetByTransportId(string transportId)
```

#### Parameters

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable transport identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RateLimitingRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-resilience-ratelimitingruntimedescriptor/)\>

The matching policies, or an empty list when none target the transport.
