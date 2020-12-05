const fs = require('fs');

const passportFields = ["byr",
    "iyr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid",
]

fs.readFile("./inputD4", 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }

    let passports = data.split('\n\n');
    let valid1, valid2;
    passports = passports.map(a => a.split('\n').join(' ').split(' ').map(x => x.split(':')));
    valid1 = passports.filter(y => checkPassport(y) == true);

    //Part 1    
    console.log("Part1: ", valid1.length, "Total:", data.split('\n\n').length);

    //Part 2
    valid2 = valid1.filter(x => validateFields(x) == true);
    console.log("Part2: ", valid2.length, "Total:", valid1.length)
})

//Part 1
function checkPassport(passport) {
    let p = new Map(passport);

    return passportFields.every(x => p.has(x));
}

//Part 2
function validateFields(passport) {
    // console.log(passport)
    const p = {};
    passport.forEach(x => p[x[0]] = x[1]);
    const unit = p.hgt.slice(-2);
    const hgt = p.hgt.slice(0, -2);


    return (p.byr >= 1920 && p.byr <= 2002) &&
        (p.iyr >= 2010 && p.iyr <= 2020) && //iyr
        (p.eyr >= 2020 && p.eyr <= 2030) && //eyr
        ((unit === 'cm' && hgt >= 150 && hgt <= 193) ||
            (unit === 'in' && hgt >= 59 && hgt <= 76)) && //hgt
        (p.hcl[0] === '#' && /^[0-9a-f]{6}$/g.test(p.hcl.slice(1))) && //hcl
        (["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(p.ecl)) && //ecl
        (/^[0-9]{9}$/g.test(p.pid)) //pid
}