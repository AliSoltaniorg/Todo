import Time from './Time';

describe('Time Class Tests', () => {
    const time: string = '01:30';
    test('Should Contructed properties', () => {
        const actual = new Time(time);

        expect(time).toEqual(actual.time);
    });

    test('Should Convert to seconds', () => {
        const timeClass = new Time(time);

        const actual = timeClass.toSecond();

        expect(actual).toEqual(5400);
    });

    test('Should throw error when string connot convert to int', () => {
        expect(() => {
            new Time('s');
        }).toThrow(Error('Value is not an integer'));
    });

    test('Should getHours return hours', () => {
        const timeClass = new Time(time);

        const actual = timeClass.getHours();

        expect(actual).toEqual(1);
    });

    test('Should getMinutes return minutes', () => {
        const timeClass = new Time(time);

        const actual = timeClass.getMinutes();

        expect(actual).toEqual(30);
    });

    test('Should Parse seconds to instance of Time Class', () => {
        const seconds: number = 5400;

        const time = Time.parse(seconds);

        expect(time).toBeInstanceOf(Time);
        expect(time.getHours()).toEqual(1);
        expect(time.getMinutes()).toEqual(30);
    });
});

export {};
