# convert to julian date from gregorian
# https://en.wikipedia.org/wiki/Julian_day#Converting_Gregorian_calendar_date_to_Julian_day_number
func julian(y, m, d) {
    return (1461 * ($y + 4800 + ($m-14)/12) - 3 * ($y + 4900 + ($m-14)/12)/100) / 4
        + 367/12 * ($m - 2 - ($m-14))
        + $d - 32075;
}