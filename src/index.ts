
export default class SlideWindow<T = number> {
  #size: number;

  #values: T[];

  constructor(size: number, values?: T[]) {
    this.#size = size;
    this.#values = values ?? [];
    this.#fitValues();
  }

  public add(value: T) {
    this.#values.push(value);
    this.#fitValues();
    return this;
  }

  public max(): number {
    if (!this.#isNumberArray()) {
      return 0;
    }
    return Math.max(...(this.#values as number[]));
  }

  public min(): number {
    if (!this.#isNumberArray()) {
      return 0;
    }
    return Math.min(...(this.#values as number[]));
  }

  public sum(): number {
    if (!this.#isNumberArray()) {
      return 0;
    }
    return (this.#values as number[]).reduce((a, b) => a + b, 0);
  }

  public avg(): number {
    if (!this.#isNumberArray()) {
      return 0;
    }
    return this.sum() / this.#values.length;
  }

  public toArray() {
    return [...this.#values];
  }

  public clear() {
    this.#values = [];
  }

  #fitValues() {
    this.#values = this.#values.slice(this.#size * -1);
  }

  #isNumberArray() {
    if (this.#values.length === 0) {
      return false;
    }
    return typeof this.#values[0] === 'number';
  }
}
