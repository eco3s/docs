---
title: GET /posts/{id}
---

`id`를 통해 특정 글을 불러옵니다.

## Request

### Parameter

| Name | Type                                 | Note                  | Example                   |
| ---- | ------------------------------------ | --------------------- | ------------------------- |
| id   | [UUID](../../types/semantic/uuid.md) | 찾고자 하는 글의 UUID | `"R_-bYVt79M-2yroviNPei"` |

## Response

### Success

:::info type

[Post](../../types/schema/post.md) 를 가져옵니다.

:::

### Possible Errors

-   400
-   404
