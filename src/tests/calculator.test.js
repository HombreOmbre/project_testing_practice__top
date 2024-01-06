import calculator from "../scripts/calculator";

it('Test add func', () =>
    expect(calculator.add(1,0)).toEqual(1)
);

it('Test validation for string in first arg', () => 
    expect(calculator.add('aa', 0)).toBe(NaN)
);

it('Test validation for string in second arg', () => 
    expect(calculator.add(0, 'aa')).toBe(NaN)
);

it('Test validation for string in both args', () => 
    expect(calculator.add('aa', 'bb')).toBe(NaN)
);

it('Test validation for undefined in first arg', () => 
    expect(calculator.add(undefined, 0)).toBe(NaN)
);

it('Test validation for undefined in second arg', () => 
    expect(calculator.add(0, undefined)).toBe(NaN)
);

it('Test validation for undefined in both args', () => 
    expect(calculator.add(undefined, undefined)).toBe(NaN)
);

it('Test validation for boolean in first arg', () => 
    expect(calculator.add(false, 0)).toBe(NaN)
);

it('Test validation for boolean in second arg', () => 
    expect(calculator.add(0, true)).toBe(NaN)
);

it('Test validation for boolean in both args', () => 
    expect(calculator.add(false, true)).toBe(NaN)
);

it('Test validation for empty string in first arg', () => 
    expect(calculator.add('', 0)).toBe(NaN)
);

it('Test validation for empty string in second arg', () => 
    expect(calculator.add(0, '')).toBe(NaN)
);

it('Test validation for empty string in both args', () => 
    expect(calculator.add('', '')).toBe(NaN)
);

it('Test validation for NaN in first arg', () => 
    expect(calculator.add(NaN, 0)).toBe(NaN)
);

it('Test validation for NaN in second arg', () => 
    expect(calculator.add(0, NaN)).toBe(NaN)
);

it('Test validation for NaN in both args', () => 
    expect(calculator.add(NaN, NaN)).toBe(NaN)
);

it('Test validation for special characters in first arg', () => 
    expect(calculator.add('!@#', 0)).toBe(NaN)
);

it('Test validation for special characters in second arg', () => 
    expect(calculator.add(0, '!@#')).toBe(NaN)
);

it('Test validation for special characters in second arg', () => 
    expect(calculator.add('><?', '!@#')).toBe(NaN)
);

it('Test validation for number as string in first arg', () => 
    expect(calculator.add('25', 1)).toEqual(26)
);

it('Test validation for number as string in second arg', () => 
    expect(calculator.add(1, '25')).toEqual(26)
);

it('Test validation for number as string in both args', () => 
    expect(calculator.add('1', '25')).toEqual(26)
);

it('Test add func with numbers', () => 
    expect(calculator.add(2, 3)).toEqual(5)
);

it('Test substract func with numbers', () => 
    expect(calculator.substract(10, 5)).toEqual(5)
);

it('Test divide func with numbers', () => 
    expect(calculator.divide(10, 5)).toEqual(2)
);

it('Test multiply func with numbers', () => 
    expect(calculator.multiply(10, 5)).toEqual(50)
);
