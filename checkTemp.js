function checkTemp(q) {
    if (q <= 20 && q >= 0) { return -1 }
    else if (q > 40 && q <= 60) { return 1 }
    else if (q <= 60 && q >= 0) { return 0 }
}
