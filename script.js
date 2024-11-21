// Ngày Tết Nguyên Đán 2025
const tetDate = new Date("January 29, 2025 00:00:00").getTime();

// Hàm đếm ngược
function countdown() {
    const now = new Date().getTime();
    const timeLeft = tetDate - now;

    // Tính ngày, giờ, phút, giây
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Hiển thị trên giao diện
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Nếu hết thời gian
    if (timeLeft < 0) {
        clearInterval(interval);
        document.querySelector(".calendar").innerHTML = "<h2>Chúc Mừng Năm Mới! 🎉</h2>";
    }
}

// Cập nhật mỗi giây
const interval = setInterval(countdown, 1000);
