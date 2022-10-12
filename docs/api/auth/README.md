# Authentication

[OAuth 2.0](https://oauth.net/2)와 [Firebase Authentication](https://firebase.google.com/docs/auth)을 사용하여 유저를 인증합니다.

## Providers

다음의 provider들을 사용합니다.

| Name   | Id         |
| ------ | ---------- |
| Google | `"google"` |

## Process

인증은 다음과 같은 과정을 통해 이루어집니다.

주의할 점은, Sign Up(회원가입) 과정이 끝나고도 별도의 로그인 과정이 필요하지 않습니다.

### Sign Up

1. 클라이언트는 각 언어에 맞는 Firebase Authentication SDK를 사용하여 Firebase에 유저 인증 요청을 보냅니다.
2. Firebase는 요청이 성공한 경우 `id_token`을 발급합니다.
3. 클라이언트는 유저로부터 닉네임 등의 회원가입에 필요한 정보를 전달받습니다.
4. 클라이언트는 해당 `id_token`을 `POST /signup` 엔드포인트로 전달합니다.
5. 서버는 요청을 받아들여 `id_token`을 검증하고, 유저를 필요에 따라 생성하고, 유저에게 필요한 정보를 등록하고, 마지막으로 앞으로의 인증에 사용할 JWT 토큰을 발급해 클라이언트로 전달합니다.
6. 클라이언트는 전달받은 토큰을 사용해 앞으로의 요청을 인증할 수 있습니다.

### Sign In

로그인은 회원가입과 크게 다르지 않습니다.

1. 클라이언트는 각 언어에 맞는 Firebase Authentication SDK를 사용하여 Firebase에 유저 인증 요청을 보냅니다.
2. Firebase는 요청이 성공한 경우 `id_token`을 발급합니다.
3. 클라이언트는 해당 `id_token`을 `POST /signin` 엔드포인트로 전달합니다.
4. 서버는 요청을 받아들여 `id_token`을 검증하고, DB에서 저장된 유저를 찾고, 마지막으로 앞으로의 인증에 사용할 JWT 토큰을 발급해 클라이언트로 전달합니다.
5. 클라이언트는 전달받은 토큰을 사용해 앞으로의 요청을 인증할 수 있습니다.

### Sign Out

별도의 로그아웃 과정이 필요하지 않습니다.

더이상 인증 토큰을 사용하지 않을 경우, 해당 클라이언트의 로컬 스토리지 또는 캐시에서 발급받은 토큰을 삭제해 주세요.

또한 다른 계정으로 재로그인이 필요한 경우, 마찬가지로 토큰을 삭제하고 새 계정으로 토큰을 요청하면 됩니다.

## Authorization

발급받은 [JWT](https://jwt.io)토큰을 [Authorization 헤더](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)에 넣음으로써 인증이 필요한 API를 사용할 수 있습니다.

구체적으로는, `Bearer <여기에 토큰 값이 들어갑니다>` 형식을 사용합니다.

```http {5}
POST /posts HTTP/1.1

Accept: */*
Accept-Encoding: gzip, deflate, br
Authorization: Bearer eyJhbGciOi...(예시)
Connection: keep-alive
```

:::caution

회원가입/로그인시 사용하는 `id_token`도 동일한 방법으로 Authorization 헤더에 넣음으로써 서버에 보내줍니다.

하지만, `id_token`과 인증용으로 따로 발급받은 토큰은 다릅니다.

`id_token`을 백엔드에 넘기면 인증 후 인증용 새 JWT 토큰을 발급하여 응답으로 돌려주며, 그 후 모든 인증은 해당 토큰을 사용합니다.

:::

:::info

본 API는 인증 토큰에 만료기한을 두지 않으며, refresh token또한 별도로 발급하지 않습니다.

다만, 이 사항은 추후 변경될 수 있습니다.

:::

### Payload

인증을 위한 JWT 토큰의 페이로드에는 다음과 같은 정보가 들어갑니다.

| Name | Note                                                               |
| ---- | ------------------------------------------------------------------ |
| \_id | 해당 토큰으로 인증된 사용자의 [UUID](../../types/semantic/uuid.md) |
