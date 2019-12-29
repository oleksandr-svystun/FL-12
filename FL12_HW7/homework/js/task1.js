const LENGTH = 5;
const P_LENGTH = 6;

let email = prompt('Enter your email.', '');

if (email.length === 0 || email === null) {
    alert('Canceled');
} else if (email.length < LENGTH) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {

    let password = prompt('Enter your password', '');

    if (password.length === 0 || password === null) {
        alert('Canceled');

    } else if (email === 'user@gmail.com' && password === 'UserPass' ||
                email === 'admin@gmail.com' && password === 'AdminPass') {

        let passwordChange = confirm('Do you want to change your password?');

        if (passwordChange === false) {
            alert('Error');
        } else {

            let password_1 = prompt('Enter your current password', '');

            if (password_1.length === 0) {
                alert('Canceled');
            } else if (password === password_1) {

                let newPassword = prompt('Enter your new password', '');

                if (newPassword.length === 0) {
                    alert('Canceled');
                } else {

                    let password_2 = prompt('Reenter yourpassword', '');

                    if (password_2 === null) {
                        alert('Canceled');
                    }
                }
            } else {
                alert('Wrong');
            }
        }
    } else {
        alert('Wrong');
    }
} else {
    alert('I don\'t know you.');
}
