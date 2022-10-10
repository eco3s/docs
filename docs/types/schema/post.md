# Post

import APITable from '@site/src/components/APITable';

하나의 글을 표현하는 자료형입니다.

## Type

```mdx-code-block
<APITable>
```

| Name      | Type                                         | Note                             | Modifiable | Example                   |
| --------- | -------------------------------------------- | -------------------------------- | ---------- | ------------------------- |
| id        | [UUID](../../types/semantic/uuid.md)         | 해당 글의 UUID                   | false      | `"R_-bYVt79M-2yroviNPei"` |
| createdAt | [Date](../../types/semantic/date.md)         | 해당 글이 처음으로 등록된 시간   | false      | `1665418285`              |
| updatedAt | [Date](../../types/semantic/date.md)         | 해당 글이 마지막으로 수정된 시간 | false      | `1665426780`              |
| author    | [User](../../types/schema/user.md)           | 해당 글을 작성한 유저            | false      |                           |
| title     | [string](../../types/primitive/string.md)    | 글의 제목                        | true       | `"황소개구리 발견"`       |
| content   | [string](../../types/primitive/string.md)    | 글의 본문                        | true       |                           |
| category  | [Category](../../types/semantic/category.md) | 해당 글이 분류된 카테고리        | true       | `"report"`                |

```mdx-code-block
</APITable>
```

### Id

해당 글의 UUID입니다.

### createdAt

해당 글이 처음 작성된 시각입니다.

### updatedAt

해당 글이 마지막으로 수정된 시각입니다.

이 값이 `createdAt` 값과 같다면 해당 글은 수정되지 않은 상태임을 알 수 있습니다.

### author

해당 글을 쓴 작성자입니다.

[User](../../types/schema/user.md) 객체로 전달됩니다.

```json {5-10} title="GET /posts/pchlZa175pl_R1BO9ke1A"
{
	"id": "pchlZa175pl_R1BO9ke1A",
	"createdAt": 1665418285,
	"updatedAt": 1665418285,
	"author": {
		"id": "5zr-w9OlMLH9OHaxFz6ma",
		"createdAt": 1567436445,
		"name": "coffee123",
		"profile": "https://www.gravatar.com/avatar/203f1505f5893e2eb0194b2bff64521b"
	},
	"title": "황소개구리의 서식지가 궁금합니다",
	"content": "...",
	"category": "qa"
}
```

### title

해당 글의 제목입니다.

$length<128$ 의 길이 제한을 가집니다.

### content

해당 글의 본문 데이터입니다.

텍스트 길이에 제한을 가지지 않습니다.
