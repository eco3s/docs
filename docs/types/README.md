---
tags:
    - Category
---

import DocCardList from '@theme/DocCardList';

# Types

API 통신에 사용되는 기본적인 타입들을 설명합니다

## Common Conventions

### Array

한 타입을 0개 또는 그 이상 가질 수 있는 타입입니다.

`T`에 대한 배열은 `Array<T>` 처럼 표현할 수 있습니다.

### Enum

한 타입에 대해 미리 정해진 값들 중에서만 선택할 수 있는 타입입니다.

`A`와 `B`중 하나를 선택할 수 있는 enum은 `A | B` 처럼 표현할 수 있습니다.

또한 임의의 타입 `T`의 일부로 구성된 enum은 `Enum<T>` 처럼 표현할 수 있습니다.

예를 들어, `"apple" | "banana"` 는 `Enum<string>` 입니다.

하지만 `Enum<T>` 만으로는 어떤 값이 필요한지 명확하지 않기 때문에 다음과 같은 틀로 자세한 설명이 필요합니다.

| Value   | Note                |
| ------- | ------------------- |
| `경우1` | `경우1`에 대한 설명 |
| `경우2` | `경우2`에 대한 설명 |
| ...     | ...                 |

## List

<DocCardList />
