# Date

날짜와 시간을 **같이** 저장하는 자료형입니다.

즉 이름은 Date이지만, 사용하는 언어나 DB에 따라서 Datetime이라고 불릴 수 있습니다.

시간대(timezone)는 별도로 표현하지 않습니다.

:::info inheritance

기본 자료형이 아닌, [integer](../primitive/integer.md) 를 상속하는 [semantic type](./README.md)입니다.

:::

## Serialization

JSON에서 시간을 표현하기 위한 자료형을 지원하지 않기 때문에 적절한 다른 타입으로의 변환이 필요합니다.

해당 API의 경우, 여러 언어와 클라이언트에서 공통적으로 널리 사용되며 직렬화와 파싱 방법이 단 하나뿐이기 때문에 혼동의 여지가 없는 UNIX timestamp 방식을 사용합니다.

UNIX timestamp는 <ins>1970년 1월 1일 정각부터 현재까지 몇 초가 지났는지</ins>로 시간을 표현합니다.

### Serialization Example

아래에 있는 코드들은 전부 예시이며, 실제 언어마다 다르거나 더욱 적절한 방법이 있을 수 있습니다.

#### JavaScript

다음과 같이 [Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) 객체를 timestamp로 변환할 수 있습니다.

<!-- prettier-ignore -->
```javascript
// 현재 시간을 timestamp로 나타내기
Math.floor(Date.now() / 1000)

// Date 객체를 timestamp로 변환하기
Math.floor(dateObject.getTime() / 1000)
// 또는
Math.floor(dateObject.valueOf() / 1000)

// 짧은 방법이 필요하다면:
~~(new Date / 1000)
// 또는
new Date / 1000 | 0
```

`1000`으로 나누는 이유는 [Date.now()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/now)와 [Date.proprototype.getTime()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) 모두 `초`가 아닌 `밀리초` 단위로 표시되기 때문입니다.

### Parsing

`2022-10-10T11:32:36`나 `Mon Oct 10 2022 20:36:32` 처럼 복잡한 문자열을 직접 파싱하는 것에 비해 단순한 정수 형태로 된 `언제부터 몇 초가 흐른 후인지` 방식인 timestamp는 비교적 일관적인 파싱이 가능합니다.

다만 역시 각 언어 등에 따라서 파싱을 위한 방법이 다를 수 있으므로 각 언어별 문서를 참고하시는 것이 좋습니다.

#### Parsing Example

##### JavaScript

```javascript
new Date(timestamp * 1000)
```

`1000`을 곱하는 이유는 `new Date()` 생성자가 `초`가 아닌 `밀리초`를 받기 때문입니다. 따라서 이 과정이 없다면 실제보다 더욱 옛날 시간으로 표시될 수 있습니다.

## Limit

[integer](../primitive/integer.md) 를 상속받기 때문에, 역시 같은 제약조건을 가집니다.

다만, 반드시 0보다 커야 합니다. 0보다 작은 값을 전달하면 에러가 날 수 있습니다.

:::caution

Date를 받는 API 문서에서는 별도로 제약 조건을 명시하지 않습니다.

하지만 암묵적으로 $0\leq n$ 인 조건이 포함된 것으로 간주합니다.

:::
