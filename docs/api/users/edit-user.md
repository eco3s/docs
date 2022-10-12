---
title: PATCH /users/{id}
tags:
    - PATCH
    - Auth Required
---

자신의 정보를 수정합니다.

:::info

인증이 필요한 API입니다.

:::

:::caution forbidden

해당 계정의 소유자가 아니라면 본 API를 사용할 수 없습니다.

:::

## Request

### Parameter

| Name | Type                                 | Note        | Example                   |
| ---- | ------------------------------------ | ----------- | ------------------------- |
| id   | [UUID](../../types/semantic/uuid.md) | 자신의 UUID | `"R_-bYVt79M-2yroviNPei"` |

[name](../../types/schema/user.md#name) 이 아니라 [id(UUID)](../../types/schema/user.md#id)를 사용하는 것에 주의하세요.

### Body

:::info

[UserInit](../../types/schema/user-init.md) 타입을 전달합니다.

:::

:::tip

모든 필드는 필수가 아닙니다. 수정하고자 하는 필드만 넣을 수 있습니다.

:::

## Response

### Success

:::info return type

수정된 [User](../../types/schema/user.md) 를 리턴합니다.

:::

### Possible Errors

-   400
-   403
-   404
