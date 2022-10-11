---
tags:
    - Semantic Types
    - string
---

# UUID

어느 장소, 어느 때에서나 반드시 고유한 식별자 타입입니다.

:::info inheritance

기본 자료형이 아닌, [string](../primitive/string.md) 을 상속하는 [semantic type](./README.md)입니다.

:::

## Usage

UUID는 랜덤한 문자열을 id로 지정함으로써 혹시 모를 id충돌을 피할 수 있게 해 주며, 장소에 독립적이기 때문에 어느 곳에서나 중앙집중형의 DB없이 UUID를 생성할 수 있도록 보장합니다.

예를 들어 `1 → 2 → 3 …` 으로 이어지는 id할당 정책이 있다고 할 때 우선 DB는 현재 최신 id가 무엇인지 확인한 후, 그 값에 1을 더해 새 id(4)를 만듭니다.

반대로 UUID는 `42afcb08-70eb-4047-b648-3be045ac19f6 → 654ee416-806a-4401-8760-5379cfe9a0c2 → 654ee416-806a-4401-8760-5379cfe9a0c2 …` 처럼 완전히 무작위적이고 이전 값에 대해 완전히 독립적이기 때문에 새 값을 만드는 경우 이전 값을 참조할 필요가 없습니다.

:::note

실제로 해당 프로젝트의 백엔드는 스토리지와 성능 최적화를 위해 [nanoid](https://github.com/ai/nanoid)를 사용합니다.

하지만 UUID와 nanoid중 어느 것을 쓰더라도 특징이나 사용 방법이 비슷하기 때문에 클라이언트에서 영향을 받는 일은 없습니다.

우선은 UUID가 nanoid보다 조금 더 유명하고 알아듣기 쉽기 때문에 해당 문서를 포함해 전체 명세에서 모두 UUID로 부르겠습니다.

:::

### Usage Example

UUID는 주로 PK(primary key)로 사용됩니다.

이 말은 특정한 UUID를 알고 있다면 그 UUID를 PK로 가진 데이터를 항상 참조할 수 있다는 의미입니다.<br />
마치 학교, 학년, 반, 번호 등을 안다면 그 학생을 특정할 수 있는 것과 같습니다.

따라서 해당 API에서는 많은 경우 `id` 라는 필드에 이 UUID를 전달합니다.

예를 들어 `GET /posts` 로 최신 글 목록을 가져와야 하는 상황이라고 가정합시다.

글 하나하나는 매우 긴 내용과 무거운 사진, 끝없는 댓글과 대댓글들을 가지고 있어 모든 데이터를 한번에 가져오지 않고 각각의 글들을 하나씩 불러와야 합니다.

이 때, `GET /posts`는 각 글들에 대한 간략한 정보와 함께 각 글들의 UUID를 넘겨줄 것이고, 이 UUID를 사용해 특정 글을 가져올 수 있습니다.

```json {4} title="GET /posts"
[
	{
		"title": "수원시에서 황소개구리 발견...",
		"id": "0AcDIB-xWsqAwjCS_70Eb",
		...
	}
	{
		"title": "거북이가..."
		...
]
```

```json {3} title="GET /posts/0AcDIB-xWsqAwjCS_70Eb"
{
	"title": "수원시에서 황소개구리 발견...",
	"id": "0AcDIB-xWsqAwjCS_70Eb",
	"content": "본문 내용...",
	...
}
```

## Limitations

[string](../primitive/string.md) 을 상속받기 때문에, 역시 같은 제약조건을 가집니다.

단, UUID는 **반드시, 항상, 21글자**로만 이루어집니다.

그 이유는 해당 프로젝트가 실제로는 UUID 대신 nanoid를 사용하기 때문입니다.

UUIDv4와는 다르게 **122비트**가 아닌 **126비트**를 사용하므로, base64로 인코딩하면 $\dfrac{126}{8\times3}\cdot4=21(168_{bit})$ 글자가 나옵니다.

따라서 UUID를 전달해야 하는 API에서 21글자를 넘거나 그보다 적은 길이의 문자열을 전달하면 에러가 날 수 있습니다.

:::caution

UUID를 받는 API 문서에서는 별도로 제약 조건을 명시하지 않습니다.

하지만 암묵적으로 $length=21$ 인 조건이 포함된 것으로 간주합니다.

:::

## External Links

-   [Universally unique identifier - Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier)

-   [GitHub - ai/nanoid: A tiny (130 bytes), secure, URL-friendly, unique string ID generator for JavaScript](https://github.com/ai/nanoid)

-   [Nano ID CC](https://zelark.github.io/nano-id-cc)
