Demonstrates: 

> Typescript error 'ComponentChildren' is not assignable to type 'ReactNode'.

Just do `yarn` and then check types validation:

```bash
➜ tsc --jsx react-jsx src/app.tsx
src/app.tsx:6:13 - error TS2322: Type 'ComponentChildren' is not assignable to type 'ReactNode'.
  Type 'bigint' is not assignable to type 'ReactNode'.

6             {children}
              ~~~~~~~~~~
```