%include inflator/rosetta/lempel_ziv_complexity

costumes "assets/blank.svg";

list tests = [
    "AZSEDRFTGYGUJIJOKB",
    "ABCABCABCABCABCABC",
    "111011111001111011111001",
    "101001010010111110",
    "1001111011000010",
    "1010101010",
    "1010101010101010",
    "1001111011000010000010",
    "100111101100001000001010",
    "0001101001000101",
    "1111111",
    "0001",
    "010",
    "1",
    "",
    "01011010001101110010",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "HELLO WORLD! HELLO WORLD! HELLO WORLD! HELLO WORLD!",
];

func ifelse(tval, cond, fval) {
    if $cond {
        return $tval;
    } else {
        return $fval;
    }
}


# onflag {main;}
proc main {
    local i = 1;
    repeat length tests {
        local test = tests[i];

        local complexity = get_lempel_ziv_complexity(test);

        log ifelse(test, length test != 0, "<empty>") & " -> complexity = " & complexity;
        log "substrings are: " & ifelse(lempel_ziv_complexity, complexity != 0, "None");
        i++;
    }
}
