# Token

[JWT](https://jwt.io) 토큰을 나타내는 자료형입니다.

:::info inheritance

기본 자료형이 아닌, [string](../primitive/string.md) 을 상속하는 [semantic type](./README.md)입니다.

:::

## Usage

주로 사용자 인증에 사용됩니다.

인증을 위해서는 해당 값을 HTTP의 [Authorization 헤더](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)에 `Bearer <토큰 값>` 형식으로 넣어서 요청해야 합니다.

## Limitations

[string](../primitive/string.md) 을 상속받기 때문에, 역시 같은 제약조건을 가집니다.

JWT 토큰은 다음 제약조건을 만족시켜야 합니다.

<!-- prettier-ignore -->
```javascript
/^[\w-]*\.[\w-]*\.[\w-]*$/
```

만약 전달된 토큰이 해석 불가능하다면 [TokenInvalid](../error/README.md#TokenInvalid) 에러를 반환할 수 있습니다.

:::caution

UUID를 받는 API 문서에서는 별도로 제약 조건을 명시하지 않습니다.

:::
