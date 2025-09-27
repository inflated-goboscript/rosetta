%include inflator/cmath

costumes "assets/blank.svg";

# onflag {main;}
proc main {
    Complex z1 = Complex(1.5, 3);
    Complex z2 = Complex(1.5, 1.5);

    log c_str(c_add(z1, z2));
    log c_str(c_sub(z1, z2));
    log c_str(c_mul(z1, z2));
    log c_str(c_div(z1, z2));
    log c_str(c_mul(z1, Complex(-1, 0)));
    log c_str(c_conj(z1));
    log c_abs(z1);
    log c_str(c_pow(z1, z2));
    log z1.r;
    log z1.i;
}