---
title: Namespace Cephalon.Behaviors.Http.Bindings
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-bindings
editUrl: false
---

### Classes

 [GraphqlHttpBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-graphqlhttpbehaviorbinding/)

GraphQL HTTP transport binding (transport ID: <code>http.graphql</code>). Accepts canonical routes
such as <code>POST /graphql/v1/cart/get</code>. The request body uses a standard GraphQL envelope and
the <code>variables</code> object is dispatched as the behavior input.

 [GraphqlRequest](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-graphqlrequest/)

Represents a parsed GraphQL request containing the query string and optional variables.

 [GraphqlSseBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-graphqlssebehaviorbinding/)

GraphQL over Server-Sent Events (SSE) transport binding (transport ID: <code>http.graphql-sse</code>).
Accepts canonical routes such as <code>POST /graphql-sse/v1/cart/get</code>.
The <code>variables</code> object is used as the behavior input, then the result is streamed as SSE
events before sending a <code>complete</code> event.

 [GraphqlWsBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-graphqlwsbehaviorbinding/)

GraphQL over WebSocket transport binding (transport ID: <code>http.graphql-ws</code>).
Upgrades canonical routes such as <code>GET /graphql-ws/v1/cart/get</code> to a WebSocket connection.
The connection implements the
<code>graphql-transport-ws</code> sub-protocol:
<code>connection_init</code> → <code>connection_ack</code> → <code>subscribe</code> → <code>next</code> → <code>complete</code>.

 [JsonRpcError](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-jsonrpcerror/)

Represents the error object inside a JSON-RPC 2.0 error response.

 [JsonRpcErrorResponse](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-jsonrpcerrorresponse/)

Represents an error JSON-RPC 2.0 response envelope.

 [JsonRpcHttpBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-jsonrpchttpbehaviorbinding/)

JSON-RPC 2.0 HTTP transport binding (transport ID: <code>http.jsonrpc</code>).
Accepts canonical routes such as <code>POST /json-rpc/v1/cart/get</code> and returns a JSON-RPC 2.0
response or error object.
Per the JSON-RPC 2.0 specification the HTTP status is always <code>200 OK</code>.

 [JsonRpcRequest](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-jsonrpcrequest/)

Represents a JSON-RPC 2.0 request envelope.

 [JsonRpcSuccessResponse](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-jsonrpcsuccessresponse/)

Represents a successful JSON-RPC 2.0 response envelope.

 [SseBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-ssebehaviorbinding/)

Server-Sent Events transport binding (transport ID: <code>http.sse</code>).
Opens a long-lived SSE stream at canonical routes such as
<code>GET /sse/v1/cart/get</code>.
Query-string parameters are parsed into a JSON object and deserialized as the
behavior's typed input. The behavior is dispatched immediately; its return value
is streamed as a <code>data: {json}\n\n</code> event. The connection stays alive with
periodic heartbeat comments until the client disconnects.

 [WebSocketBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-bindings-websocketbehaviorbinding/)

Bidirectional WebSocket transport binding (transport ID: <code>http.ws</code>).
Upgrades canonical routes such as <code>GET /ws/v1/cart/get</code> to a full-duplex WebSocket
connection.
Each received JSON text frame is dispatched to the behavior and the result
is sent back as a JSON text frame. The connection is closed gracefully on
client close or cancellation.
