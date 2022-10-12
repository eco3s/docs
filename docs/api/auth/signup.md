---
tags:
    - POST
---

# POST /signup

새 유저를 등록하는 회원가입 기능입니다.

## Request

### Body

| Name     | Type                                      | Note              | Example     | Required |
| -------- | ----------------------------------------- | ----------------- | ----------- | -------- |
| token    | [Token](../../types/semantic/token.md)    | 전달할 `id_token` |             | true     |
| username | [string](../../types/primitive/string.md) | 새 유저의 닉네임  | `coffee123` |          |

Firebase 인증을 통해 받은 `id_token`을 전달합니다.

## Response

### Success

| Name  | Type                                   | Note             | Example |
| ----- | -------------------------------------- | ---------------- | ------- |
| token | [Token](../../types/semantic/token.md) | 발급된 인증 토큰 |         |
| user  | [User](../../types/schema/user.md)     | 생성된 유저 정보 |         |

인증 토큰과 함계 생성된 유저 정보를 전달합니다.

### Possible Errors

-   400
-   401
