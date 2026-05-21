function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.querySelector('.login-btn');
  const guestBtn = document.querySelector('.guest-btn');
  
  loginBtn?.addEventListener('click', () => {
    showPage('home-page');
  });
  
  guestBtn?.addEventListener('click', () => {
    showPage('home-page');
  });

  const categories = document.querySelectorAll('.category');
  categories.forEach(category => {
    category.addEventListener('click', () => {
      categories.forEach(c => c.classList.remove('active'));
      category.classList.add('active');
    });
  });

  const addBtns = document.querySelectorAll('.add-btn');
  addBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const cartCount = document.getElementById('cart-count');
      if (cartCount) {
        const count = parseInt(cartCount.textContent);
        cartCount.textContent = count + 1;
      }
      btn.style.transform = 'scale(1.2)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
      }, 200);
    });
  });

  const qtyBtns = document.querySelectorAll('.qty-btn');
  qtyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const quantityEl = btn.parentElement.querySelector('.quantity');
      let quantity = parseInt(quantityEl.textContent);
      if (btn.classList.contains('plus')) {
        quantity++;
      } else if (btn.classList.contains('minus') && quantity > 1) {
        quantity--;
      }
      quantityEl.textContent = quantity;
    });
  });

  const paymentOptions = document.querySelectorAll('.payment-option');
  paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
      paymentOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
    });
  });

  const clearCartBtn = document.querySelector('.clear-cart');
  clearCartBtn?.addEventListener('click', () => {
    if (confirm('确定清空购物车吗？')) {
      const cartItems = document.querySelectorAll('.cart-item');
      cartItems.forEach(item => item.remove());
      const cartCount = document.getElementById('cart-count');
      if (cartCount) {
        cartCount.textContent = '0';
      }
    }
  });

  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const orderNumber = btn.previousElementSibling.textContent.replace('订单号: ', '');
      navigator.clipboard.writeText(orderNumber).then(() => {
        btn.textContent = '已复制';
        setTimeout(() => {
          btn.textContent = '复制';
        }, 2000);
      });
    });
  });

  const socialBtns = document.querySelectorAll('.social-btn');
  socialBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      showPage('home-page');
    });
  });

  const getCodeBtn = document.querySelector('.get-code-btn');
  getCodeBtn?.addEventListener('click', () => {
    if (getCodeBtn.textContent === '获取验证码') {
      let count = 60;
      getCodeBtn.textContent = `${count}秒`;
      getCodeBtn.style.background = '#ccc';
      const timer = setInterval(() => {
        count--;
        if (count <= 0) {
          clearInterval(timer);
          getCodeBtn.textContent = '获取验证码';
          getCodeBtn.style.background = '#6EC1E4';
        } else {
          getCodeBtn.textContent = `${count}秒`;
        }
      }, 1000);
    }
  });

  const payBtn = document.querySelector('.pay-btn');
  payBtn?.addEventListener('click', () => {
    showPage('orders-page');
  });
});