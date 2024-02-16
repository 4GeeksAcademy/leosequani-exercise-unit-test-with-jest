

    test("One euro should be 1.07 dollars", function() {
        // Import the function from app.js
        const {fromEuroToDollar} = require ('./app.js');
        const dollars = fromEuroToDollar(3.5);
        const expected =3.5 * 1.07;
        expect(dollars).toBe(expected);
    })
    test("One dollar should be 156.5 Yen", function() {
        // Import the function from app.js
        const {fromDollarToYen} = require ('./app.js');
        const dollartoYen = fromDollarToYen(5);
        const result =(5/1.07) * 156.5;
        expect(dollartoYen).toBe(result);
    })
    test("One Yen should be 0.87 pounds", function() {
        // Import the function from app.js
        const {fromYenToPound} = require ('./app.js');
        const YentoPound = fromYenToPound(5);
        const result = (5/156.5)*.87
        expect(YentoPound).toBe(result);
    })