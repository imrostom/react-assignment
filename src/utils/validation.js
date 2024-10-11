export const validateLoginForm = (email, password) => {
    let errors = {};
    let isValid = true;

    if (!email) {
        errors.email = "Email is required.";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Invalid email address.";
        isValid = false;
    }

    if (!password) {
        errors.password = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        errors.password = "Password must be at least 6 characters.";
        isValid = false;
    }

    return { errors, isValid };
};

export const validateRegisterForm = (name, email, password) => {
    let errors = {};
    let isValid = true;

    if (!name) {
        errors.name = "Name is required.";
        isValid = false;
    } else if (name.length < 6) {
        errors.name = "Name must be at least 6 characters.";
        isValid = false;
    }

    if (!email) {
        errors.email = "Email is required.";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Invalid email address.";
        isValid = false;
    }

    if (!password) {
        errors.password = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        errors.password = "Password must be at least 6 characters.";
        isValid = false;
    }

    return { errors, isValid };
};
