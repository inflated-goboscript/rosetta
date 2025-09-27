# convert to julian date from gregorian
func julian(y, m, d) {
    return (1461 * ($y + 4800 + ($m-14)/12)) / 4
        + (367 * ($m - 2 - ($m-14))) / 12
        - (3 * ($y + 4900 + ($m-14)/12)/100) / 4
        + $d - 32075;
}