$(document).ready(function () {
    $('#submit').on('click', function () {

        $('.form-group').find('.invalid-feedback').detach();

        if ($('form #mail').val().includes('@')) {
        } else {
            $('#mail').addClass('is-invalid');
            $('.mail-group').append('<div class="invalid-feedback">მიუთითეთ მეილი სწორად!</div > ');
            return;
        }

        if ($('#uname').val().length < 6) {
            $('#uname').addClass('is-invalid');
            $('.uname-group').append('<div class="invalid-feedback">მიუთითეთ username სწორად!</div > ');
            return;
        }

        if ($('#pass').val().length < 6) {
            alert('ჩაწერეთ ძლიერი პაროლი!');
            return;
        }

        if ($('#pass').val() != $('#passtwo').val()) {
            alert('პაროლები არ ემთხვევა!');
            return;
        }

        alert('Your form has been send!');
    })



})
/* 
First name: უნდა შეიცავდეს მინ 2 სიმბოლოს

Last name : უნდა შეიცავდეს მინ 4 სიმბოლოს
და უნდა მთავდებოდეს ან "ძე" თი ან "შვილი"თ

Email: უნდა შეიცავდეს "@" ს

Password: უნდა შეიცავდეს მინ 8 სიმბოლოს და
ემთხვეოდეს ერთმანეთს.
*/