---
tags:
    - GET
---

# GET /users

모든 유저의 목록을 가져옵니다.

:::caution forbidden

일반 유저는 해당 기능을 사용할 필요가 없거나, 사용할 수 없습니다.

:::

## Request

### Query

| Name  | Type                                        | Note                  | Example | Required | Default  | Limit             |
| ----- | ------------------------------------------- | --------------------- | ------- | -------- | -------- | ----------------- |
| limit | [integer](../../types/primitive/integer.md) | 한번에 가져올 유저 수 | `50`    | false    | $\infty$ | $0\leq n\leq1024$ |
| skip  | [integer](../../types/primitive/integer.md) | 한번에 건너뛸 유저 수 | `20`    | false    | `0`      | $0\leq n$         |

`limit`과 `skip`으로 pagination을 구현할 수 있습니다.

## Response

### Success

:::info array type

[User](../../types/schema/user.md)의 배열이 반환됩니다.

:::

### Possible Errors

-   400
