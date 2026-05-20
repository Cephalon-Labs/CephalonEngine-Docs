---
title: Class PrincipleReply
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlereply
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Grpc.Contracts.Discovery](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery/)  
Assembly: Cephalon.AspNetCore.Grpc.dll  

Returns one principle from the streamed discovery sequence.

```csharp
public sealed class PrincipleReply : IMessage<PrincipleReply>, IEquatable<PrincipleReply>, IDeepCloneable<PrincipleReply>, IBufferMessage, IMessage
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PrincipleReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlereply/)

#### Implements

IMessage<PrincipleReply\>, 
[IEquatable<PrincipleReply\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
IDeepCloneable<PrincipleReply\>, 
IBufferMessage, 
IMessage

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply__ctor"></a> PrincipleReply\(\)

```csharp
public PrincipleReply()
```

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply__ctor_Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_"></a> PrincipleReply\(PrincipleReply\)

```csharp
public PrincipleReply(PrincipleReply other)
```

#### Parameters

`other` [PrincipleReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlereply/)

## Fields

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_PrincipleFieldNumber"></a> PrincipleFieldNumber

Field number for the "principle" field.

```csharp
public const int PrincipleFieldNumber = 1
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_Descriptor"></a> Descriptor

```csharp
public static MessageDescriptor Descriptor { get; }
```

#### Property Value

 MessageDescriptor

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_Parser"></a> Parser

```csharp
public static MessageParser<PrincipleReply> Parser { get; }
```

#### Property Value

 MessageParser<[PrincipleReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlereply/)\>

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_Principle"></a> Principle

The principle text being streamed to the caller.

```csharp
public string Principle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_CalculateSize"></a> CalculateSize\(\)

Calculates the size of this message in Protocol Buffer wire format, in bytes.

```csharp
public int CalculateSize()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of bytes required to write this message
            to a coded output stream.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_Clone"></a> Clone\(\)

Creates a deep clone of this object.

```csharp
public PrincipleReply Clone()
```

#### Returns

 [PrincipleReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlereply/)

A deep clone of this object.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_Equals_System_Object_"></a> Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object other)
```

#### Parameters

`other` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the specified object  is equal to the current object; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_Equals_Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_"></a> Equals\(PrincipleReply\)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(PrincipleReply other)
```

#### Parameters

`other` [PrincipleReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlereply/)

An object to compare with this object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_MergeFrom_Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_"></a> MergeFrom\(PrincipleReply\)

Merges the given message into this one.

```csharp
public void MergeFrom(PrincipleReply other)
```

#### Parameters

`other` [PrincipleReply](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlereply/)

#### Remarks

See the user guide for precise merge semantics.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_MergeFrom_Google_Protobuf_CodedInputStream_"></a> MergeFrom\(CodedInputStream\)

Merges the data from the specified coded input stream with the current message.

```csharp
public void MergeFrom(CodedInputStream input)
```

#### Parameters

`input` CodedInputStream

#### Remarks

See the user guide for precise merge semantics.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrincipleReply_WriteTo_Google_Protobuf_CodedOutputStream_"></a> WriteTo\(CodedOutputStream\)

Writes the data to the given coded output stream.

```csharp
public void WriteTo(CodedOutputStream output)
```

#### Parameters

`output` CodedOutputStream

Coded output stream to write the data to. Must not be null.
