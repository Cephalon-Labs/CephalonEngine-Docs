---
title: Class PrinciplesRequest
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlesrequest
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Grpc.Contracts.Discovery](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery/)  
Assembly: Cephalon.AspNetCore.Grpc.dll  

Requests the baseline Cephalon principles stream.

```csharp
public sealed class PrinciplesRequest : IMessage<PrinciplesRequest>, IEquatable<PrinciplesRequest>, IDeepCloneable<PrinciplesRequest>, IBufferMessage, IMessage
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PrinciplesRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlesrequest/)

#### Implements

IMessage<PrinciplesRequest\>, 
[IEquatable<PrinciplesRequest\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
IDeepCloneable<PrinciplesRequest\>, 
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

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest__ctor"></a> PrinciplesRequest\(\)

```csharp
public PrinciplesRequest()
```

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest__ctor_Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_"></a> PrinciplesRequest\(PrinciplesRequest\)

```csharp
public PrinciplesRequest(PrinciplesRequest other)
```

#### Parameters

`other` [PrinciplesRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlesrequest/)

## Properties

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_Descriptor"></a> Descriptor

```csharp
public static MessageDescriptor Descriptor { get; }
```

#### Property Value

 MessageDescriptor

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_Parser"></a> Parser

```csharp
public static MessageParser<PrinciplesRequest> Parser { get; }
```

#### Property Value

 MessageParser<[PrinciplesRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlesrequest/)\>

## Methods

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_CalculateSize"></a> CalculateSize\(\)

Calculates the size of this message in Protocol Buffer wire format, in bytes.

```csharp
public int CalculateSize()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of bytes required to write this message
            to a coded output stream.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_Clone"></a> Clone\(\)

Creates a deep clone of this object.

```csharp
public PrinciplesRequest Clone()
```

#### Returns

 [PrinciplesRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlesrequest/)

A deep clone of this object.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_Equals_System_Object_"></a> Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object other)
```

#### Parameters

`other` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the specified object  is equal to the current object; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_Equals_Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_"></a> Equals\(PrinciplesRequest\)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(PrinciplesRequest other)
```

#### Parameters

`other` [PrinciplesRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlesrequest/)

An object to compare with this object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_MergeFrom_Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_"></a> MergeFrom\(PrinciplesRequest\)

Merges the given message into this one.

```csharp
public void MergeFrom(PrinciplesRequest other)
```

#### Parameters

`other` [PrinciplesRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-principlesrequest/)

#### Remarks

See the user guide for precise merge semantics.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_MergeFrom_Google_Protobuf_CodedInputStream_"></a> MergeFrom\(CodedInputStream\)

Merges the data from the specified coded input stream with the current message.

```csharp
public void MergeFrom(CodedInputStream input)
```

#### Parameters

`input` CodedInputStream

#### Remarks

See the user guide for precise merge semantics.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_PrinciplesRequest_WriteTo_Google_Protobuf_CodedOutputStream_"></a> WriteTo\(CodedOutputStream\)

Writes the data to the given coded output stream.

```csharp
public void WriteTo(CodedOutputStream output)
```

#### Parameters

`output` CodedOutputStream

Coded output stream to write the data to. Must not be null.
