# based on https://rosettacode.org/wiki/Lempel%E2%80%93Ziv_complexity#Python

%include inflator/string

list lempel_ziv_complexity;

# Computes the Lempel-Ziv complexity of a given string sequence.
# List of distinct substrings used in the parsing process accessible as the `lempel_ziv_complexity` list.
func get_lempel_ziv_complexity(seq) {
    # note: returning length list and not list itself, because goboscript funcs cannot return lists.

    delete lempel_ziv_complexity; # Initialise an empty list to store unique substrings
    local n = length $seq; # Length of the input sequence
    # Edge case: if the sequence is empty, return the empty list
    if n == 0 {
        return 0;
    }

    local i = 1;  # Start index for scanning the sequences
    until i > n {
        local k = 1;
        # Check whether `seq[i:i+k]` occurs anywhere in the previous prefix `seq[:i+k-1]`.
        # If it does, increase k. Stop when it's new (not found in the previous prefix)
        # due to a goboscript bug involving functions in until loops, the calculation will be stored in the variable 'temp1'
        local temp1 = slice($seq, i, i+k) not in slice($seq, 1, i+k-1);
        until i + k > n or temp1 {
            k++;
            temp1 = slice($seq, i, i+k) not in slice($seq, 1, i+k-1);
        }
        # If we haven't reached the end of the sequence, take `seq[i:i+k]`, else take the remaining tail
        if i + k <= n {
            phrase = slice($seq, i, i+k);
        } else {
            phrase = slice($seq, i, n+1);
        }

        add phrase to lempel_ziv_complexity;
        i += length phrase;
    }

    return length lempel_ziv_complexity;
}
