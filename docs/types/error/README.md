import APITable from '@site/src/components/APITable';

# Error

오류를 표현하기 위해 사용되는, [Schema](../schema/README.md) 타입의 일종입니다.

오류는 언제든 어느 엔드포인트에서든 발생할 수 있으며, 상태 코드로 오류인지 정상 응답인지를 구분할 수 있습니다.

예를 들어 [GET /posts/{id}](../../api/posts/get-post.md) 요청에서 `200`이 아닌 다른 상태 코드를 가진 응답이 반환된다면 해당 응답은 에러 객체이며, 아래 스키마에 따라 파싱할 수 있음을 확신할 수 있습니다.

## Type

| Name                | Type                                                         | Note               | Example                 |
| ------------------- | ------------------------------------------------------------ | ------------------ | ----------------------- |
| [status](#status)   | [integer](../../types/primitive/integer.md) enum (하단 참고) | HTTP 상태 코드     | `404`                   |
| [type](#error-type) | [string](../../types/primitive/string.md) enum (하단 참고)   | 발생한 에러의 종류 | `"PageNotFound"`        |
| [message](#message) | [string](../../types/primitive/string.md)                    | 에러 메세지        | `"could not find page"` |
| [payload](#payload) | (각 [type](#type)에 따라 다름, 하단 참고)                    | 에러 데이터        |                         |

### status

[HTTP Status Code](https://developer.mozilla.org/docs/Web/HTTP/Status) 를 나타냅니다.

대부분의 경우, 모든 에러는 알맞은 상태 코드와 함께 전달되기 때문에 해당 값을 읽을 필요가 없습니다.

`enum` 타입이며, 아래와 같은 값을 가집니다.

| Value | Meaning                                                                         | Note                                                                                                                                                                           |
| ----- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `400` | [Bad Request](https://developer.mozilla.org/docs/Web/HTTP/Status/400)           | 대부분의 경우 클라이언트가 보낸 요청이 제약 조건을 만족하지 못하거나, 파싱에 실패하거나, 처리할 수 없는 값을 포함하고 있어 발생합니다.                                         |
| `401` | [Unauthorized](https://developer.mozilla.org/docs/Web/HTTP/Status/401)          | 사용자가 로그인한 상태가 아닌 상태에서 인증이 필요한 API에 접근할 경우 발생합니다. 로그인이 실패할 경우에도 발생합니다.                                                        |
| `403` | [Forbidden](https://developer.mozilla.org/docs/Web/HTTP/Status/403)             | 사용자가 로그인을 했지만 API를 실행하기 위한 권한이 부족할 때 발생합니다.<br />예를 들어 한 사용자가 다른 사용자가 작성한 글을 지우려고 한다면 해당 에러가 발생할 수 있습니다. |
| `404` | [Not Found](https://developer.mozilla.org/docs/Web/HTTP/Status/404)             | 요청한 값이 없을 때 발생합니다. 예를 들어 작성된 적 없거나 삭제된 글을 조회하려 한다면 해당 에러가 발생할 수 있습니다.                                                         |
| `500` | [Internal Server Error](https://developer.mozilla.org/docs/Web/HTTP/Status/500) | 서버에서 에러를 적절히 처리하지 못했을 때 발생합니다.                                                                                                                          |

### message

사람이 읽을 수 있는 형태의 문자열 에러 메세지입니다.

:::caution

해당 에러 메세지를 파싱하지 마세요.

에러의 종류는 [type](#error-type)으로 파악할 수 있습니다.

:::

### type {#error-type}

해당 에러 종류를 나타내는 고유하고 일관적인 문자열입니다.

에러 종류를 파악하기 위해서는 해당 값을 아래 표에 맞게 비교해야 합니다.

여러 단어로 이루어진 경우 `PascalCase`로 표현합니다.

아래 표는 편의를 위해 넓은 범위의 에러부터 좁은 범위의 에러 순으로 나열합니다.

```mdx-code-block
<APITable>
```

| Value            | Note                                                   | [Status](#status) | [Payload](#payload) |
| ---------------- | ------------------------------------------------------ | ----------------- | ------------------- |
| `Error`          | 알 수 없는 종류의 에러가 발생하였습니다.               |                   | `null`              |
| `ServerError`    | 서버 내부에서 에러가 발생하였습니다.                   | 500               | `null`              |
| `BadRequest`     | 클라이언트의 요청을 처리하던 중 에러가 발생하였습니다. | 400               | `null`              |
| `WrongEndpoint`  | 존재하지 않는 엔드포인트를 호출하였습니다.             | 400               | (설명 참고)         |
| `RequestInvalid` | 요청이 올바르지 않습니다.                              | 400               | `null`              |
| `TokenRequired`  | 인증을 위해 필요한 토큰이 누락되었습니다.              | 401               | `null`              |
| `TokenInvalid`   | 전달된 토큰이 올바르지 않습니다.                       | 401               | `null`              |
| `TokenExpired`   | 전달된 토큰이 만료되었습니다.                          | 401               | `null`              |

```mdx-code-block
</APITable>
```

### payload

해당 에러에 대한 데이터입니다.

어떤 에러 종류([type](#error-type))인지에 따라 값이 다르며, 값이 없을 수도 있습니다.

값이 없는 경우 `null`, 값이 있는 경우 `null`이 아닌 다른 값을 가지며 두 가지 경우를 가진 enum으로 표현할 수 있습니다.

| Value       | Note          |
| ----------- | ------------- |
| `null`      | 페이로드 없음 |
| `T != null` | 페이로드 있음 |
