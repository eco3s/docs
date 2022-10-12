---
tags:
    - POST
    - Auth Required
---

# POST /posts

새 글을 작성합니다.

:::info

[인증](../auth/README.md#authorization)이 필요한 API입니다.

:::

## Request

### Body

:::info body type

[PostInit](../../types/schema/post-init) 타입을 전달합니다.

:::

작성할 글의 본문과 글에 대한 정보를 보냅니다.

## Response

### Success

:::info return type

[Post](../../types/schema/post.md) 를 리턴합니다.

:::

### Possible Errors

-   400
-   401
