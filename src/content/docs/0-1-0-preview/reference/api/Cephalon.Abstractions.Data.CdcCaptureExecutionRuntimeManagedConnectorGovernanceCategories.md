---
title: Class CdcCaptureExecutionRuntimeManagedConnectorGovernanceCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorgovernancecategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable managed-connector governance categories used by CDC execution-runtime descriptors.

```csharp
public static class CdcCaptureExecutionRuntimeManagedConnectorGovernanceCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorGovernanceCategories](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorgovernancecategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceCategories_FutureControlPlaneMode"></a> FutureControlPlaneMode

The execution runtime declares a future control-plane management mode that Cephalon has not adopted yet.

```csharp
public const string FutureControlPlaneMode = "future-control-plane-mode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceCategories_MissingConnectClusterId"></a> MissingConnectClusterId

The execution runtime does not currently declare the upstream connector-cluster identifier.

```csharp
public const string MissingConnectClusterId = "missing-connect-cluster-id"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceCategories_MissingConnectorClass"></a> MissingConnectorClass

The execution runtime does not currently declare the upstream connector class.

```csharp
public const string MissingConnectorClass = "missing-connector-class"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceCategories_MissingManagementMode"></a> MissingManagementMode

The execution runtime does not currently declare a managed-connector management mode.

```csharp
public const string MissingManagementMode = "missing-management-mode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorGovernanceCategories_MissingSourceProviderId"></a> MissingSourceProviderId

The execution runtime does not currently declare the upstream source-provider identifier.

```csharp
public const string MissingSourceProviderId = "missing-source-provider-id"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
