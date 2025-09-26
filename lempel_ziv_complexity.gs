list lempel_ziv_complexity;

# Computes the Lempel-Ziv complexity of a given string sequence.
# Returns the list of distinct substrings used in the parsing process.
proc cache_lempel_ziv_complexity seq {
    # note: using a proc instead of a func, because goboscript funcs cannot return lists.

    delete lempel_ziv_complexity; # Initialise an empty list to store unique substrings
    local n = length $seq; # Length of the input sequence
    # Edge case: if the sequence is empty, return the empty list
    if n == 0 {
        stop_this_script;
    }

    local i = 1;  # Start index for scanning the sequences

}
