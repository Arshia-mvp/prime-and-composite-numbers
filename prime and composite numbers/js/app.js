let userNumber = prompt('رفیق عزیز برای اینکه بفهمی عددی اول است یا مرکب اینجا عدد مورد نطرت رو وارد کن👍😉');

let number = 0;

for (let primeAndComposite = 1; primeAndComposite <= userNumber; primeAndComposite++) {
    if (userNumber % primeAndComposite === 0) {
        number++
    }
}

if (userNumber < 2 && userNumber >= 0) {
    alert('این عددی که وارد کردی نه اول است نه مرکب است');
}

else if (number === 2) {
    alert('بله این عدد اول است مرکب نیست');
}

else if (number > 2) {
    alert('خیر این عدد مرکب است اول نیست');
}

else {
    alert('رفیق عزیز متاسفانه ی مشکلی داریم 😞 ، ممکنه که ی چیز دیگه ای وارد کرده باشی که اصلا عدد نیست با عدد همخونی یا مطابقتی نداره 😒');
}