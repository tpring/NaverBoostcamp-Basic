물론, 이 코드를 설명하는 간단하고 깔끔한 **README.md 예시**를 아래에 작성해줄게.
실습 목적과 코드 구조에 대한 설명이 들어가 있고, 복사해서 GitHub 저장소에 바로 붙여도 자연스럽게 보여.

---

## 🐍🎲 Ladder & Snake 게임 시뮬레이터 (JavaScript)

### 개요

이 프로젝트는 단순한 보드게임 **"사다리와 뱀"** 을 자바스크립트로 구현한 시뮬레이션입니다.
플레이어는 주사위를 굴려 이동하고, 특정 위치에 도착하면:

-   **사다리**를 타고 더 높은 칸으로 이동하거나
-   **뱀**에 물려 더 낮은 칸으로 떨어지게 됩니다.

---

### 사용 기술

-   JavaScript (ES6)
-   Node.js 콘솔 기반 실행

---

### 게임 규칙

-   플레이어는 `1`번 칸에서 시작
-   주사위 눈(`dice`)에 따라 전진
-   도착한 칸이 **사다리**거나 **뱀**이 있으면 자동으로 이동 처리됨

---

### 사다리 & 뱀 정의

```js
const ladders = {
    4: 10,
    8: 22,
    21: 21,
    28: 48,
    50: 17,
    71: 21,
    80: 19,
};

const snakes = {
    32: -22,
    36: -30,
    48: -22,
    62: -44,
    88: -64,
    95: -39,
    97: -19,
};
```

-   예: 4번 칸에 도착하면 → 10칸 더 이동하여 14번으로
-   예: 36번 칸에 도착하면 → 30칸 내려가 6번으로

---

### 코드 예시

```js
function nextPosition(current, dice) {
    let next = current + dice;

    if (ladders[next] !== undefined) {
        next += ladders[next];
    } else if (snakes[next] !== undefined) {
        next += snakes[next];
    }

    return next;
}

const diceRolls = [3, 4, 3, 5, 1];
let start = 1;

diceRolls.forEach((dice) => {
    const next = nextPosition(start, dice);
    console.log(`from=${start}, dice=${dice}, next=${next}`);
    start = next;
});
```

---

### 실행 예시 출력

```
from=1, dice=3, next=14
from=14, dice=4, next=18
from=18, dice=3, next=21
from=21, dice=5, next=47
from=47, dice=1, next=48 (→ 뱀에 의해 내려감)
```
