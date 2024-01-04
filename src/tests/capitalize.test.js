import capitalize from "../scripts/capitalize";

it('Test capitalize func', () =>
    expect(capitalize('Leopold')).toBe('Leopold')
);

it('Test capitalize func', () => 
    expect(capitalize('Leopold')).toBe('Leopold')    
);

it('Capitalize first letter', () => 
    expect(capitalize('leopold')).toMatch(/^[A-Z]/)
);

it('Capitalize first letter and rest are lower case', () => 
    expect(capitalize('lEOPOLD')).toMatch(/^[A-Z]/)
);

it('Capitalize first letter and rest are lower case (V2)', () => 
    expect(capitalize('lEoPoLd')).toMatch(/^[A-Z]/)
);

it('Test number as parameter', () => 
    expect(capitalize(24)).toBeNull()
)

it('Test undefined as parameter', () =>
    expect(capitalize(undefined)).toBeNull()
)

it('Test boolean as parameter', () => 
    expect(capitalize(true)).toBeNull()
)

it('Test number in the string as parameter', () => 
    expect(capitalize('25')).toBeNull()
)

it('Test NaN as parameter', () =>
    expect(capitalize(NaN)).toBeNull()
);

it('Test combined string with numbers', () => 
    expect(capitalize('Leopold22')).toBeNull()
);

it('Test more complicated string combined with numbers', () => 
    expect(capitalize('23leop44old34')).toBeNull()
);

it('Test empty string', () => 
    expect(capitalize('')).toBeNull()
);

it('Test func without parameter', () => 
    expect(capitalize()).toBeNull()
);

it('Test special characters as parameter', () => 
    expect(capitalize('?.,!@')).toBeNull()
);

it('Test special characters and some string as parameter', () =>
    expect(capitalize('!>?LeOPoLd</!')).toBeNull()
);

it('Test string with white spaces as parameter', () =>
    expect(capitalize(' Leopold ')).toMatch(/^[A-Z]/)
);