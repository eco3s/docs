---
title: DELETE /posts/{id}
tags:
    - DELETE
    - Auth Required
---

특정 글을 삭제합니다.

:::info

인증이 필요한 API입니다.

:::

:::caution forbidden

해당 글을 작성한 유저가 아니라면 본 API를 사용할 수 없습니다.

:::

:::danger permanent deletion

해당 동작은 데이터를 영구적으로 삭제합니다.

:::

## Request

### Parameter

| Name | Type                                 | Note                      | Example                   |
| ---- | ------------------------------------ | ------------------------- | ------------------------- |
| id   | [UUID](../../types/semantic/uuid.md) | 삭제하고자 하는 글의 UUID | `"R_-bYVt79M-2yroviNPei"` |

## Response

### Success

:::info type

[Post](../../types/schema/post.md) 를 가져옵니다.

:::

### Possible Errors

-   400
-   403
-   404
