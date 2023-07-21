## Code from the [Redux from Scratch](https://www.youtube.com/watch?v=-g1f0j5Qk8A) tutorial by [Tejas Kumar](https://tej.as/)

![Redux from Scratch by Tejas Kumar](./Header.jpg)

> This is an unofficial repository accompanying the video by Tejas Kumar. If you like the [video](https://www.youtube.com/watch?v=-g1f0j5Qk8A) please, don't forget to **like** and subscribe to Tejas Kumar's [YouTube Channel](https://www.youtube.com/@tejask) for more amazing content. 

**Note:** it is advised to go through the video tutorial and code everything yourself from scratch, in order to understand exactly what happens at each step and to improve your coding skills. Also, it is really useful to try the following recommendation left in the comments:

_"For those following along, a top tip when you're writing tests like this is to **make sure that every assertion you write fails at least once**. There's always a risk that the tests are passing for some reason that you haven't noticed, and that your code doesn't actually work. I think that seeing everything fail once is one of the best TDD habits you can get into."_

**Run tests:**

```bash
npx vitest
```
or

```bash
npm t
```

**Serve index.html**

```bash
npx vite
```

or 

```bash
npm start
```

## How the project was initialized

```bash
npm init -y
npm i -D vitest
```

---

## Variation: `legacy_createStore`

Since the original [API](https://redux.js.org/api/createstore) accepts the `reducer` as the first argument, the folder `legacy_createStore` contains a variation of the `createStore` method created by Tejas Kumar that is closer to the original API and accepts the `reducer` as its only argument. The `initialState` is passed as a default parameter just like when using the original API.