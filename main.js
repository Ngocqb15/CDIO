function DangKyThanhCong() {
    // Lấy giá trị từ các trường nhập liệu
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    var email = document.getElementById("emailInput").value;
    var fullName = document.getElementById("fullNameInput").value;
    var user={
        username : username,
        password : password,
        email : email,
        fullName : fullName,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng kí thành công");

}
