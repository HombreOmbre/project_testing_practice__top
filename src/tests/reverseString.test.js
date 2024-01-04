import exp from "constants";
import reverseString from "../scripts/reverseString";

it('Test reverseString func', () =>
    expect(reverseString('string')).toBe('gnirts')
);

it('Test string as parameter', () =>
    expect(reverseString('string')).toBe('gnirts')
);

it('Test string with upper and lowercase letters', () =>
    expect(reverseString('StRiNg')).toBe('gNiRtS')
);

it('Test string with numbers as parameter', () =>
    expect(reverseString('2Street56')).toBe('65teertS2')
);

it('Test number as a sting', () =>
    expect(reverseString('2024')).toBe('4202')
);

it('Test string with white spaces as parameter', () =>
    expect(reverseString('  Street ')).toBe('teertS')
);

it('Test string with white space in the middle of string', () =>
    expect(reverseString('Best Street')).toBe('teertS tseB')
);

it('Test string with special characters', () =>
    expect(reverseString('!@#>?<')).toBe('<?>#@!')
);

it('Test empty string as parameter', () =>
    expect(reverseString('')).toBeNull()
);

it('Test empty parameter', () =>
    expect(reverseString()).toBeNull()
);

it('Test number as paramter', () =>
    expect(reverseString(24)).toBeNull()
);

it('Test undefined as parameter', () =>
    expect(reverseString(undefined)).toBeNull()
);

it('Test boolean as parameter', () => 
    expect(reverseString(true)).toBeNull()
);

it('Test NaN as paramter', () =>
    expect(reverseString(NaN)).toBeNull()
);

