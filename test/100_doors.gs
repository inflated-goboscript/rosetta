costumes "assets/blank.svg";

list doors;

proc do_100_doors {
    delete doors;
    repeat 100 {add false to doors;}

    local pass_i = 1;
    repeat 100 {
        local i = 0;
        repeat length doors / pass_i {
            i += pass_i;
            log "toggle " & i;
            doors[i] = not doors[i];
        }
        
        pass_i++;
    }
}

onflag{main;}
proc main {
    do_100_doors;

    show doors;
    local i = 1;
    repeat length doors {
        if doors[i] {
            local state = "open";
        } else {
            local state = "closed";
        }

        log "Door " & i & " is " & state;
        i++;
    }
}