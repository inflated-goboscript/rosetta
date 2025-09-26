%include inflator/string

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
    until i >= n {
        local k = 1;
        # Check whether `seq[i:i+k]` occurs anywhere in the previous prefix `seq[:i+k-1]`.
        # If it does, increase k. Stop when it's new (not found in the previous prefix)
        until not(i + k <= n and slice($seq, i, i+k) in slice($seq, 1, i+k-1)) {
            k++;
        }
        # If we haven't reached the end of the sequence, take `seq[i:i+k]`, else take the remaining tail
        if i + k <= n {
            phrase = slice($seq, i, i+k);
        } else {
            phrase = slice($seq, i, n);
        }

        add phrase to lempel_ziv_complexity;
        i += length phrase;
    }
}
