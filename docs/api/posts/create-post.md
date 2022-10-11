# POST /posts

새 글을 작성합니다.

:::info

인증이 필요한 API입니다.

:::

## Request

### Body

| Name                                            | Type                                         | Note                      | Example             | Required |
| ----------------------------------------------- | -------------------------------------------- | ------------------------- | ------------------- | -------- |
| [title](../../types/schema/post.md#title)       | [string](../../types/primitive/string.md)    | 해당 글의 제목            | `"황소개구리 발견"` | true     |
| [content](../../types/schema/post.md#content)   | [string](../../types/primitive/string.md)    | 글의 내용                 |                     | true     |
| [category](../../types/schema/post.md#category) | [Category](../../types/semantic/category.md) | 해당 글이 분류될 카테고리 | `"report"`          | true     |

작성할 글의 본문과 글에 대한 정보를 보냅니다.

## Response

### Success

:::info return type

[Post](../../types/schema/post.md) 를 리턴합니다.

:::

### Possible Errors

-   400
-   401
