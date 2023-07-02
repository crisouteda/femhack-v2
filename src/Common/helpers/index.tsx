type ArrayRange = (start: number, stop: number, step: number) => number[];
export const arrayRange: ArrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (_value, index) => start + index * step
  );
