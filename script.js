const openLogoutButton = document.getElementById('logout');
const cancelLogout = document.getElementById('cancelLogout');
const confirmLogout = document.getElementById('confirmLogout');
const logoutPopup = document.getElementById('logoutPopup');

openLogoutButton.addEventListener('click', function() {
  logoutPopup.style.display = 'block';
});

cancelLogout.addEventListener('click', function() {
  logoutPopup.style.display = 'none';
});

confirmLogout.addEventListener('click', function(event) {
  event.preventDefault(); 
  alert('Đăng xuất thành công!');
  logoutPopup.style.display = 'none';
  window.location.href = 'TrangChinh.html'; 
});

function showForm(formId) {
    // Ẩn tất cả các form
    var forms = document.querySelectorAll(".thongtin-group form");
    forms.forEach((form) => {
      form.style.display = "none";
    });
  
    // Hiển thị form được chọn
    var selectedForm = document.getElementById(formId);
    if (selectedForm) {
      selectedForm.style.display = "block";
    }
  }
  
  /* đánh giá */
  const stars = document.querySelectorAll('.star');
  
  stars.forEach(star => {
    star.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      alert('Bạn đã đánh giá ' + value + ' sao.');
    });
  });


  /*list*/
  function toggleAccordion(event) {
    const header = event.currentTarget;
    const content = header.nextElementSibling;
    const isOpen = content.style.display === 'block';

    // Close all other accordion items
    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach(item => item.style.display = 'none');

    // Open or close the clicked item
    content.style.display = isOpen ? 'none' : 'block';
}

