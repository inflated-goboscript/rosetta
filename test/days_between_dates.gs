%include inflator/rosetta/days_between_dates
%include inflator/string

costumes "assets/blank.svg";

func diff(one, two) {
    split $one, "-";
    local y1 = split[1];
    local m1 = split[2];
    local d1 = split[3];

    split $two, "-";
    local y2 = split[1];
    local m2 = split[2];
    local d2 = split[3];

    # goboscript does not need to cast strings to integers
    local year2 = julian(y2, m2, d2);
    local year1 = julian(y1, m1, d1);
    return floor(year2 - year1);
}

# onflag {main;}
proc main {
    ask "one";
    one = answer();
    ask "two";
    two = answer();

    log diff(one, two);
}