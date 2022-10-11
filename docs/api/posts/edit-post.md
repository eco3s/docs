---
title: PATCH /posts/{id}
tags:
    - PATCH
    - Auth Required
---

자신이 작성한 글을 수정합니다.

:::info

인증이 필요한 API입니다.

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

:::note

이 타입은 [Post](../../types/schema/post.md)의 부분 타입(Subset)입니다.

:::

| Name                                            | Type                                         | Note                      |
| ----------------------------------------------- | -------------------------------------------- | ------------------------- |
| [title](../../types/schema/post.md#title)       | [string](../../types/primitive/string.md)    | 새로 변경할 제목          |
| [content](../../types/schema/post.md#content)   | [string](../../types/primitive/string.md)    | 새로 변경할 내용          |
| [category](../../types/schema/post.md#category) | [Category](../../types/semantic/category.md) | 새로 글이 분류될 카테고리 |

모든 필드는 필수가 아닙니다. 수정하고자 하는 필드만 넣을 수 있습니다.

## Response

:::info return type

[Post](../../types/schema/post.md) 를 리턴합니다.

:::

### Possible Errors

-   400
-   403
-   404
