import caesarCipher from "../scripts/caesarCipher";

it('Test "Hello World" with key 0', () =>
    expect(caesarCipher('Hello World!', 0)).toMatch(/Hello World!/)
);

it('Test "Hello World" with key 1', () =>
    expect(caesarCipher('Hello World!', 1)).toMatch(/Ifmmp Xpsme!/)
);

it('Test "Hello World" with key 2', () =>
    expect(caesarCipher('Hello World!', 2)).toMatch(/Jgnnq Yqtnf!/)
);

it('Test "Hello World" with key 3', () =>
    expect(caesarCipher('Hello World!', 3)).toMatch(/Khoor Zruog!/)
);

it('Test "Hello World" with key 4', () =>
    expect(caesarCipher('Hello World!', 4)).toMatch(/Lipps Asvph!/)
);