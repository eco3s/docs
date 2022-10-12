---
title: PATCH /posts/{id}
tags:
    - PATCH
    - Auth Required
---

자신이 작성한 글을 수정합니다.

:::info

[인증](../auth/README.md#authorization)이 필요한 API입니다.

:::

:::caution forbidden

해당 글을 작성한 유저가 아니라면 본 API를 사용할 수 없습니다.

:::

## Request

### Parameter

| Name | Type                               | Note                      | Example                   |
| ---- | ---------------------------------- | ------------------------- | ------------------------- |
| id   | [UUID](../../types/schema/user.md) | 수정하고자 하는 글의 UUID | `"R_-bYVt79M-2yroviNPei"` |

### Body

:::info

Partial<[PostInit](../../types/schema/post-init)> 타입을 전달합니다.

:::

:::tip

모든 필드는 필수가 아닙니다. 수정하고자 하는 필드만 넣을 수 있습니다.

:::

## Response

:::info return type

[Post](../../types/schema/post.md) 를 리턴합니다.

:::

### Possible Errors

-   400
-   403
-   404
