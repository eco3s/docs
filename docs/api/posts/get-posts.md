---
tags:
    - GET
---

# GET /posts

모든 글 목록을 조건에 맞게 가져옵니다.

최신 글을 시간순으로 보여주거나, 과거 글을 순서대로 탐색하거나, 주어진 조건으로 검색 등을 수행할 수 있습니다.

## Request

### Query

| Name     | Type                                          | Note                           | Example                 | Default  | Limit             |
| -------- | --------------------------------------------- | ------------------------------ | ----------------------- | -------- | ----------------- |
| limit    | [integer](../../types/primitive/integer.md)?  | 한번에 가져올 글 갯수          | `50`                    | $\infty$ | $0\leq n\leq1024$ |
| skip     | [integer](../../types/primitive/integer.md)?  | 한번에 건너뛸 글 갯수          | `20`                    | `0`      | $0\leq n$         |
| author   | [UUID](../../types/semantic/uuid.md)?         | 특정 유저가 작성한 글만 검색   | `kw9_EumIWFWqJUPPm32CD` |          |                   |
| category | [Category](../../types/semantic/category.md)? | 특정 카테고리에 있는 글만 검색 | `"qa"`                  |          |                   |
| asc      | [boolean](../../types/primitive/boolean.md)?  | 오름차순으로 정렬할지 여부     | `true`                  | `false`  |                   |

#### limit

한번에 얼마만큼의 글을 불러올지 결정합니다.

생략하면 DB에 저장된 모든 글을 불러옵니다.

#### skip

글을 얼마만큼 건너뛸지 결정합니다.

`limit`과 `skip`으로 pagination을 구현할 수 있습니다.

#### author

특정 유저가 쓴 글만 불러옵니다.

예를 들어 `author=kw9_EumIWFWqJUPPm32CD`는 id가 `"kw9_EumIWFWqJUPPm32CD"`인 유저가 작성한 글만 검색합니다.

#### category

특정 카테고리에 있는 글만 불러옵니다.

예를 들어 `category=qa`는 질문 게시판에 올라온 글들만 보여줍니다.

해당 쿼리는 필수는 아니지만 대부분의 경우 카테고리별로 최신글들을 보여줘야 하기 때문에 해당 쿼리를 사용해야 합니다.

#### asc

정렬을 오름차순으로 정렬할지를 결정합니다.

기본값은 내림차순입니다.

글들을 시간을 기준으로 정렬하기 때문에 내림차순으로 정렬하면 가장 최근 글부터 보여지고 오름차순으로 정렬하면 가장 오래된 글부터 보여집니다.

## Response

### Success

:::info array type

[PostPreview](../../types/schema/post-preview.md)의 배열이 반환됩니다.

:::

### Possible Errors

-   400
