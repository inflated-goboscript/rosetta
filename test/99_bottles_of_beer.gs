%include inflator/string

costumes "assets/blank.svg";

func add_bottle(n) {
    local s = "s";
    local s2 = "s";        
    local n_minus_1 = $n - 1;
    local end = "\n";

    if $n == 1 {
        n_minus_1 = "No more";
        s = "";
        end = "";
    } elif $n == 2 {
        s2 = "";
    }

    return $n&" bottle"&s&" of beer on the wall\n" &
        $n&" bottle"&s&" of beer\n" &
        "Take one down, pass it around\n" &
        n_minus_1&" bottle"&s2&" of beer on the wall" & end;
}

proc do_99_bottles_of_beer {
    local ret = "";
    local i = 99;
    repeat 99 {
        ret &= add_bottle(i);
        i--;
    }

    split ret, "\n";
    i = 1;
    repeat length split {
        log split[i];
        i++;
    }
}

onflag{main;}
proc main {
    do_99_bottles_of_beer;
}