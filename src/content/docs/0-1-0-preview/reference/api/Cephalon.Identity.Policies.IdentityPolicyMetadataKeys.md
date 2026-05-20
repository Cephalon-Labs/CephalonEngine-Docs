---
title: Class IdentityPolicyMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-identity-policies-identitypolicymetadatakeys
editUrl: false
---

Namespace: [Cephalon.Identity.Policies](/0-1-0-preview/reference/api/cephalon-identity-policies/)  
Assembly: Cephalon.Identity.dll  

Defines the metadata keys understood by the built-in Cephalon identity evaluator.

```csharp
public static class IdentityPolicyMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdentityPolicyMetadataKeys](/0-1-0-preview/reference/api/cephalon-identity-policies-identitypolicymetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Identity_Policies_IdentityPolicyMetadataKeys_ContextAttributePrefix"></a> ContextAttributePrefix

The metadata key prefix for required evaluation-context attributes.

```csharp
public const string ContextAttributePrefix = "context."
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Identity_Policies_IdentityPolicyMetadataKeys_RequireOwner"></a> RequireOwner

The metadata key that requires the current subject to match the resource owner when set to
<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>.

```csharp
public const string RequireOwner = "requireOwner"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Identity_Policies_IdentityPolicyMetadataKeys_RequireTenantMatch"></a> RequireTenantMatch

The metadata key that requires the subject, resource, and context to stay within the same tenant
boundary when set to <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>.

```csharp
public const string RequireTenantMatch = "requireTenantMatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Identity_Policies_IdentityPolicyMetadataKeys_RequiredRoleMatch"></a> RequiredRoleMatch

The metadata key that controls how <xref href="Cephalon.Identity.Policies.IdentityPolicyMetadataKeys.RequiredRoles" data-throw-if-not-resolved="false"></xref> should be matched.

```csharp
public const string RequiredRoleMatch = "requiredRoleMatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Identity_Policies_IdentityPolicyMetadataKeys_RequiredRoleMatchAll"></a> RequiredRoleMatchAll

The value used by <xref href="Cephalon.Identity.Policies.IdentityPolicyMetadataKeys.RequiredRoleMatch" data-throw-if-not-resolved="false"></xref> when all listed roles must be present.

```csharp
public const string RequiredRoleMatchAll = "all"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Identity_Policies_IdentityPolicyMetadataKeys_RequiredRoleMatchAny"></a> RequiredRoleMatchAny

The value used by <xref href="Cephalon.Identity.Policies.IdentityPolicyMetadataKeys.RequiredRoleMatch" data-throw-if-not-resolved="false"></xref> when any listed role may satisfy the policy.

```csharp
public const string RequiredRoleMatchAny = "any"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Identity_Policies_IdentityPolicyMetadataKeys_RequiredRoles"></a> RequiredRoles

The metadata key that lists required subject roles as a comma-separated value.

```csharp
public const string RequiredRoles = "requiredRoles"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Identity_Policies_IdentityPolicyMetadataKeys_ResourceAttributePrefix"></a> ResourceAttributePrefix

The metadata key prefix for required resource attributes.

```csharp
public const string ResourceAttributePrefix = "resource."
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Identity_Policies_IdentityPolicyMetadataKeys_SubjectAttributePrefix"></a> SubjectAttributePrefix

The metadata key prefix for required subject attributes.

```csharp
public const string SubjectAttributePrefix = "subject."
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
