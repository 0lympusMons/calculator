        if (!(isRepeatingOperations())) {
            if (countNumbers() % 2 == 0) {
                equals();
            }
            multiply();
        }
    } else if (e.target.className === 'button divide') {
        if (!(isRepeatingOperations())) {
            if (countNumbers() % 2 == 0) {
                equals();
            }
            divide();
        }
    }
    else if (e.target.className === 'button equals') {
        equals();
    };