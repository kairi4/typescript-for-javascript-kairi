export { };

enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    Jun,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);


enum COLORS {
    RED = '#FF000',
    WHITE = '#FFFFF',
    GREEN = '#00000',
    YELLOW = '#FFF00'
}

let green = COLORS.GREEN;
console.log({ green });

let yellow = COLORS.YELLOW;
console.log({ yellow });