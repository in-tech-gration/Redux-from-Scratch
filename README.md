Redux from Scratch (App Development Tutorial) - Tejas Kumar

npm init -y
npm i -D vitest

npx vitest

> No test suite found

redux.test.ts:

```ts
import { describe, it, expect } from "vitest";

describe("our redux", ()=>{
  it("should update state properly", ()=>{
    expect(true).toBe(true);
  });
});
```

npx vitest

> All tests pass

redux.test.ts:

index.html:

npx vite