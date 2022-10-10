<!-- # string -->

문자열 타입입니다.

## Limitations

문자열은 길이 제한을 가질 수 있습니다.

| 단,              | 범위    | 표현 방식  | 예시        |
| ---------------- | ------- | ---------- | ----------- |
| 기본             | [0, +∞) | (없음)     | (없음)      |
| 고정 길이 문자열 | [a, a]  | length = a | length = 21 |

이 때, length는 해당 문자열의 길이를 뜻하는 정수입니다.

인덱스가 아니며, 1부터 시작합니다. 예를 들어, 문자열 `"Abiria"` 의 길이는 6입니다.

또한 length는 절대로 0보다 작을 수 없습니다. 따라서 조건에 `length < 4` 라고 써 있어도 0, 1, 2, 3등은 가능하지만 -1은 불가능합니다.