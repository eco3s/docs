# GET /users/(id)

`id`를 통해 특정 유저를 가져옵니다.

## Request

### Parameter

| Name | Type                                 | Note                    | Example                 |
| ---- | ------------------------------------ | ----------------------- | ----------------------- |
| id   | [UUID](../../types/semantic/UUID.md) | 찾고자 하는 유저의 UUID | `R_-bYVt79M-2yroviNPei` |

## Response

### Success

| Name        | Type                                      | Note                                     | Example                                                              |
| ----------- | ----------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------- |
| id          | [UUID](../../types/semantic/UUID.md)      | 해당 유저의 UUID                         | `R_-bYVt79M-2yroviNPei`                                              |
| createdAt   | [Date](../../types/semantic/Date.md)      | 해당 유저가 가입한 시간                  | `1665406780677`                                                      |
| name        | [string](../../types/primitive/string.md) | 해당 유저의 닉네임                       | `"awesome_user3673"`                                                 |
| profile     | `Image`                                   | 해당 유저의 프로필 사진을 가리키는 URL   | `"https://www.gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41247"` |
| recentPosts | `Array<Post>`                             | 해당 유저가 최근에 쓴 글들을 보여줍니다. |                                                                      |

`User` 에 더해 `recentPosts` 배열을 가져옵니다.

### Possible Errors

-   400
-   404
