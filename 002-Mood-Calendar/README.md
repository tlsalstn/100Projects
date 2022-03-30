# 2. Mood Calenda
### 모든 날의 기분을 설정할 수 있는 달력
`Map`을 사용해 `key`를 날짜로, `value`를 기분으로 저장해, 실제로 선택한 날짜의 기분만 저장하게했다.
## 사용 스택
- React
- Styled-Components
- Jest
- Vite
- Typescript

## 새로 알게 된 점
- 값 복사가 아닌 참조를 하는 타입을 `useState`로 사용할 때 `setState`에서 참조를 하지 않는 새로운 값을 반환해야한다.
  - Ex) `useState`의 타입으로 `Map`을 사용할 때 `setState`에서 새로운 `Map`을 반환해야한다.

### Bad
```
const [map, setMap] = useState<Map<any>, <any>>(new Map());

setMap((prev) => {
  prev.set('new key', value)
  return prev
});
```
### Good
```
const [map, setMap] = useState<Map<any>, <any>>(new Map());

setMap((prev) => {
  const updatedMap = new Map([...prev, ['new key', value]);
  return updatedMap;
});
```

## 영상
![002](https://user-images.githubusercontent.com/39144276/160874146-9ede9731-a29b-4e35-a032-e7634ba4000b.gif)
