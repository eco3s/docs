import DocCardList from '@theme/DocCardList';

# Semantic Types

고유한 타입으로 취급하지만 API등 데이터 전송시 다른 primitive type으로 변환이 불가피한 자료형을 의미합니다.

예를 들어 [Date](./date.md) 타입은 내부적으로 각 언어와 DB에 맞는 적절한 날짜 자료형을 사용할 수 있지만 JSON이 이 Date형식을 지원하지 않으므로 전송시 UNIX 타임스탬프로 변환 후 실제로는 [integer](../primitive/integer.md) 타입으로 정보를 주고받습니다.

또는 각 기본 타입들을 상속받지만 제한된 값들 중에서만 선택이 가능한 [`Enum<T>`](../README.md#enum)도 Semantic type에 포함될 수 있습니다.

## Naming Convention

일반적으로 대문자로 시작하는 `PascalCase` 이름을 가집니다.

다만 두문자어(약어)의 경우 모두 대문자로만 이루어진 `SCREAMING_SNAKE_CASE` 를 사용할 수 있습니다.

예를 들어 [UUID](./uuid.md)의 경우, `Uuid` 가 아닌 `UUID` 라는 이름을 그대로 사용합니다.

## List

<DocCardList />
