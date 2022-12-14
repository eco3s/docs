---
tags:
    - Semantic Types
    - string
    - Enum
---

# Category

하나의 [Post](../../types/schema/post.md) 가 소속될 수 있는 카테고리를 나타냅니다.

미리 정해진 값들 중에서 선택되는 `Enum<string>` 타입입니다.

:::info inheritance

기본 자료형이 아닌, [string](../primitive/string.md) 을 상속하는 [semantic type](./README.md)입니다.

:::

## Type

현재 3개의 값이 존재합니다.

| Value      | Note                                                                  |
| ---------- | --------------------------------------------------------------------- |
| `"report"` | 신고 카테고리. 발견한 생태계 유해종을 신고하고 공유하는 공간입니다.   |
| `"qa"`     | 질문 카테고리. 생태계 유해종에 대한 질문과 답변을 할 수 있습니다.     |
| `"info"`   | 정보 카테고리. 생태계 유해종에 대한 정보를 자유롭게 나눌 수 있습니다. |
