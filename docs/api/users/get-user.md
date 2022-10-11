---
title: GET /users/{id}
---

`id`를 통해 특정 유저를 가져옵니다.

## Request

### Parameter

| Name | Type                                 | Note                    | Example                   |
| ---- | ------------------------------------ | ----------------------- | ------------------------- |
| id   | [UUID](../../types/semantic/uuid.md) | 찾고자 하는 유저의 UUID | `"R_-bYVt79M-2yroviNPei"` |

## Response

### Success

:::info inheritance

[User](../../types/schema/user.md) 를 상속합니다.

User가 가지고 있는 모든 필드를 가지며, 추가적으로 아래 필드를 가집니다.

:::

| Name        | Type                                                     | Note                                     | Example |
| ----------- | -------------------------------------------------------- | ---------------------------------------- | ------- |
| recentPosts | Array<[PostPreview](../../types/schema/post-preview.md)> | 해당 유저가 최근에 쓴 글들을 보여줍니다. |         |

### Possible Errors

-   400
-   404
