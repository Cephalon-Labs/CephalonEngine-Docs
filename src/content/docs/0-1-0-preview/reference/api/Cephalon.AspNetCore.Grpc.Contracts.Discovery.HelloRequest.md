---
title: Class HelloRequest
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Grpc.Contracts.Discovery](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery/)  
Assembly: Cephalon.AspNetCore.Grpc.dll  

Describes the caller that is requesting a greeting.

```csharp
public sealed class HelloRequest : IMessage<HelloRequest>, IEquatable<HelloRequest>, IDeepCloneable<HelloRequest>, IBufferMessage, IMessage
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HelloRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest/)

#### Implements

IMessage<HelloRequest\>, 
[IEquatable<HelloRequest\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
IDeepCloneable<HelloRequest\>, 
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

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest__ctor"></a> HelloRequest\(\)

```csharp
public HelloRequest()
```

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest__ctor_Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_"></a> HelloRequest\(HelloRequest\)

```csharp
public HelloRequest(HelloRequest other)
```

#### Parameters

`other` [HelloRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest/)

## Fields

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_NameFieldNumber"></a> NameFieldNumber

Field number for the "name" field.

```csharp
public const int NameFieldNumber = 1
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_Descriptor"></a> Descriptor

```csharp
public static MessageDescriptor Descriptor { get; }
```

#### Property Value

 MessageDescriptor

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_Name"></a> Name

The display name to greet.

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_Parser"></a> Parser

```csharp
public static MessageParser<HelloRequest> Parser { get; }
```

#### Property Value

 MessageParser<[HelloRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest/)\>

## Methods

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_CalculateSize"></a> CalculateSize\(\)

Calculates the size of this message in Protocol Buffer wire format, in bytes.

```csharp
public int CalculateSize()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of bytes required to write this message
            to a coded output stream.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_Clone"></a> Clone\(\)

Creates a deep clone of this object.

```csharp
public HelloRequest Clone()
```

#### Returns

 [HelloRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest/)

A deep clone of this object.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_Equals_System_Object_"></a> Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object other)
```

#### Parameters

`other` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the specified object  is equal to the current object; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_Equals_Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_"></a> Equals\(HelloRequest\)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(HelloRequest other)
```

#### Parameters

`other` [HelloRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest/)

An object to compare with this object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_MergeFrom_Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_"></a> MergeFrom\(HelloRequest\)

Merges the given message into this one.

```csharp
public void MergeFrom(HelloRequest other)
```

#### Parameters

`other` [HelloRequest](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-contracts-discovery-hellorequest/)

#### Remarks

See the user guide for precise merge semantics.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_MergeFrom_Google_Protobuf_CodedInputStream_"></a> MergeFrom\(CodedInputStream\)

Merges the data from the specified coded input stream with the current message.

```csharp
public void MergeFrom(CodedInputStream input)
```

#### Parameters

`input` CodedInputStream

#### Remarks

See the user guide for precise merge semantics.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### <a id="Cephalon_AspNetCore_Grpc_Contracts_Discovery_HelloRequest_WriteTo_Google_Protobuf_CodedOutputStream_"></a> WriteTo\(CodedOutputStream\)

Writes the data to the given coded output stream.

```csharp
public void WriteTo(CodedOutputStream output)
```

#### Parameters

`output` CodedOutputStream

Coded output stream to write the data to. Must not be null.
