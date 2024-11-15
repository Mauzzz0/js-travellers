# Решение
### Вспомогательная функция
Она нужна, чтобы проверить, что число лежит в интервале между `min` и `max`
```typescript
const between = (value: number, min: number, max: number): boolean => {
  return min <= value && value <= max;
};
```

### Типы
Дженерик `Result<T>`
```typescript
export type Result<T> = {
  ready: boolean;
  data: T;
};
```

### Константы
```typescript
const minAge = 18;

const minWeight = 50;
const maxWeight = 90;

const minHeight = 150;
const maxHeight = 190;
```

### Сама функция
Обычный `reduce` и простая проверка критериев
```typescript
export const checkTravellers = <T extends BaseTraveller>(
  travellers: T[],
): Record<string, Result<T>> => {
  return travellers.reduce(
    (acc, traveller) => {
      const ready =
        traveller.age >= minAge &&
        between(traveller.weight, minWeight, maxWeight) &&
        between(traveller.height, minHeight, maxHeight);

      acc[traveller.name] = { ready, data: traveller };

      return acc;
    },
    {} as Record<string, Result<T>>,
  );
};
```
