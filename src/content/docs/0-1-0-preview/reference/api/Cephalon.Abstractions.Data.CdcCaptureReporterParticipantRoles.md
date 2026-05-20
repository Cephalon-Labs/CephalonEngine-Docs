---
title: Class CdcCaptureReporterParticipantRoles
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereporterparticipantroles
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable participant-role identifiers used by CDC reporter-coordination stories.

```csharp
public static class CdcCaptureReporterParticipantRoles
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureReporterParticipantRoles](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereporterparticipantroles/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterParticipantRoles_Active"></a> Active

The reporter currently holds one active lease for the execution runtime.

```csharp
public const string Active = "active"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterParticipantRoles_Rejected"></a> Rejected

The reporter most recently attempted to report while another reporter still owned the active lease.

```csharp
public const string Rejected = "rejected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterParticipantRoles_Standby"></a> Standby

The reporter is still visible through accepted runtime observations, but does not currently hold the active lease.

```csharp
public const string Standby = "standby"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
