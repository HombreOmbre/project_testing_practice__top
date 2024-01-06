import analyzeArray from "../scripts/analyzeArray";

it('Test with only numbers', () =>{
    const obj = analyzeArray([1,8,3,4,2,6]);
    expect(obj.average).toEqual(4);
    expect(obj.min).toEqual(1);
    expect(obj.max).toEqual(8);
    expect(obj.length).toEqual(6);
});

it('Test with numbers and numbers as string', () => {
    const obj = analyzeArray([1,'8',3,'4',2,'6']);
    expect(obj.average).toEqual(4);
    expect(obj.min).toEqual(1);
    expect(obj.max).toEqual(8);
    expect(obj.length).toEqual(6);
});

it('Test with numbers as string', () => {
    const obj = analyzeArray(['1','8','3','4','2','6']);
    expect(obj.average).toEqual(4);
    expect(obj.min).toEqual(1);
    expect(obj.max).toEqual(8);
    expect(obj.length).toEqual(6);
});

it('Test with null as a one position in array', () => {
    const obj = analyzeArray([1,null,3,4,2,6]);
    expect(obj).toMatch(/Invalid array/);
});

it('Test with undefined as a one position in array', () => {
    const obj = analyzeArray([1,undefined,3,4,2,6]);
    expect(obj).toMatch(/Invalid array/);
});

it('Test with NaN as a one position in array', () => {
    const obj = analyzeArray([1,NaN,3,4,2,6]);
    expect(obj).toMatch(/Invalid array/);
});

it('Test with empty string as a one position in array', () => {
    const obj = analyzeArray([1,'',3,4,2,6]);
    expect(obj).toMatch(/Invalid array/);
});

it('Test with string as a one position in array', () => {
    const obj = analyzeArray([1,'hello',3,4,2,6]);
    expect(obj).toMatch(/Invalid array/);
});
