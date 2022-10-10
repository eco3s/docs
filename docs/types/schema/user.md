# User

해당 서비스의 이용자를 표현하는 스키마입니다.

## Type

| Name      | Type                                      | Note                                   | Modifiable | Example                   |
| --------- | ----------------------------------------- | -------------------------------------- | ---------- | ------------------------- |
| id        | [UUID](../../types/semantic/uuid.md)      | 해당 유저의 UUID                       | false      | `"R_-bYVt79M-2yroviNPei"` |
| createdAt | [Date](../../types/semantic/date.md)      | 해당 유저가 가입한 시간                | false      | `1665406780`              |
| name      | [string](../../types/primitive/string.md) | 해당 유저의 닉네임                     | true       | `"sinbe3673"`             |
| profile   | [Image](../../types/semantic/image.md)    | 해당 유저의 프로필 사진을 가리키는 URL | false      | (하단 예제 참고)          |

### Id

해당 유저의 UUID입니다.

### createdAt

해당 유저가 생성된 시각입니다.

### name

해당 유저의 이름입니다.

이름은 항상 고유하지 않기 때문에 다른 사용자와 겹칠 수 있으며, 차후 수정될 수 있는 값입니다.

모든 이름은 $n\leq128$ 의 제약을 가집니다. 만약 128글자보다 긴 이름으로 닉네임을 변경하려고 하면 에러가 발생할 수 있습니다.

### profile

[Gravatar](https://gravatar.com) 에 등록된 유저의 프로필 이미지입니다.

![abiria](https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41247)

해당 프로필 URL은 `https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41247`와 같이 `gravatar 프로필 엔드포인트` + `사용자의 이메일 해시값` 형태로 이루어집니다.

해시값은 사용자의 이메일을 `MD5`로 해싱해 만들 수 있습니다.

```bash
echo -n 'oro3673@gmail.com' | md5sum | cut -d ' ' -f 1
# c7f96af819ec334a2cc6256fabd41247
```

따라서 클라이언트에서도 적절한 라이브러리를 통해 같은 작업을 수행할 수 있습니다.

`s={integer}` 쿼리를 사용해서 사진의 크기를 조절할 수 있습니다. 프로필 사진이 크거나 작게 보여야 한다면 사용하세요. 만약 해당 쿼리가 생략된다면 `80x80` 크기로 전달됩니다.

| Name   | Type                               | Note               | Example | Required | Default | Limit             |
| ------ | ---------------------------------- | ------------------ | ------- | -------- | ------- | ----------------- |
| s[ize] | [integer](../primitive/integer.md) | 표시할 이미지 크기 | `64`    | false    | `80`    | $1\leq n\leq2048$ |

| 크기    | 이미지                                                                        |
| ------- | ----------------------------------------------------------------------------- |
| `s=128` | ![abiria](https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41247?s=128) |
| `s=96`  | ![abiria](https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41247?s=96)  |
| `s=64`  | ![abiria](https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41247?s=64)  |

`d={string}` 쿼리를 사용해서 해당 유저를 찾지 못했을 경우 자동적으로 생성할 이미지를 선택할 수 있습니다.

| 종류          | 이미지                                                                              |
| ------------- | ----------------------------------------------------------------------------------- |
| `d=404`       | ![abiria](https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41246?d=404)       |
| `d=mp`        | ![abiria](https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41246?d=mp)        |
| `d=identicon` | ![abiria](https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41246?d=identicon) |
| `d=retro`     | ![abiria](https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41246?d=retro)     |
| `d=blank`     | ![abiria](https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41246?d=blank)     |

자세한 내용은 [Gravatar API 문서](https://gravatar.com/site/implement/) 를 참고하세요.
