---
title: DELETE /users/{id}
tags:
    - DELETE
    - Auth Required
---

자신의 계정을 삭제합니다.

:::info

인증이 필요한 API입니다.

:::

:::caution forbidden

해당 계정의 소유자가 아니라면 본 API를 사용할 수 없습니다.

:::

:::danger permanent deletion

해당 동작은 데이터를 영구적으로 삭제합니다.

:::

## Request

### Parameter

| Name | Type                                 | Note        | Example                   |
| ---- | ------------------------------------ | ----------- | ------------------------- |
| id   | [UUID](../../types/semantic/uuid.md) | 자신의 UUID | `"R_-bYVt79M-2yroviNPei"` |

## Response

### Success

:::info type

[User](../../types/schema/user.md) 를 가져옵니다.

:::

### Possible Errors

-   400
-   403
-   404
