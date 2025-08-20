document.addEventListener("DOMContentLoaded", () => {
  // ====== DOM ======
  const stepLis = Array.from(document.querySelectorAll("#position_box li"));
  const formBox = document.querySelector("#form_box");
  const form    = document.querySelector("#applyform");
  const submitImg = form.querySelector('input.submit[type="image"]');

  const errBox = document.querySelector(".errm"); // khối lỗi
  const errBackWrap = errBox?.nextElementSibling?.id === "confirm_btn" ? errBox.nextElementSibling : null; // nút quay lại ngay sau khối lỗi

  const confirmBox = document.querySelector(".submittable"); // khối xác nhận
  const confirmForm = confirmBox?.querySelector("form");
  const confirmSendImg = confirmBox?.querySelector('input.submit[type="image"]');
  const confirmBtnsWrap = confirmBox?.querySelector("#confirm_btn");

  // đoạn cảm ơn (là <p> cuối cùng trong #form_box)
  const thanksP = (() => {
    const ps = Array.from(formBox.querySelectorAll("p"));
    return ps[ps.length - 1];
  })();

  // Ẩn mặc định mọi thứ ngoài STEP1
  show(errBox, false);
  show(errBackWrap, false);
  show(confirmBox, false);
  show(thanksP, false);
  setStep(1);

  // Gỡ inline history.back() rồi gán handler quay về STEP1
  document.querySelectorAll(".h_back").forEach(btn => {
    btn.removeAttribute("onclick");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      setStep(1);
      window.scrollTo({ top: formBox.offsetTop - 20, behavior: "smooth" });
    });
  });

  // ====== Helpers ======
  function show(el, vis){ if(!el) return; el.style.display = vis ? "" : "none"; }
  function setStep(n){
    stepLis.forEach((li,i)=> li.classList.toggle("active", i === n-1));
    show(form, n === 1);
    // STEP2 có 2 chế độ: lỗi hoặc xác nhận → điều khiển riêng lúc validate
    show(thanksP, n === 3);
    // luôn ẩn phần kia nếu không ở step tương ứng
    if (n !== 2){ show(errBox,false); show(errBackWrap,false); show(confirmBox,false); }
  }
  function emailOK(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  function onlyDigits(v){ return (v||"").replace(/\D/g,""); }
  function values(){
    return {
      name:  (form.querySelector('input[name="お名前"]').value || "").trim(),
      kana:  (form.querySelector('input[name="フリガナ"]').value || "").trim(),
      tel:   onlyDigits(form.querySelector('input[name="電話番号"]').value || ""),
      email: (form.querySelector('input[name="email"]').value || "").trim(),
      email2:(form.querySelector('input[name="email2"]').value || "").trim(),
      body:  (form.querySelector('textarea[name="お問い合わせ内容"]').value || "").trim(),
    };
  }
  function renderErrors(list){
    if (!errBox) return;
    errBox.innerHTML = [
      "<h4>未入力項目があります</h4>",
      ...list.map(t => `<font color="#ff0000">${t}</font><br>`)
    ].join("");
  }
  function fillConfirm(nameAttr, val){
    const hidden = confirmBox.querySelector(`input[name="${nameAttr}"]`);
    if (hidden) hidden.value = val;
    const td = hidden ? hidden.closest("td") : null;
    if (td){
      // xóa text node cũ, giữ lại hidden
      td.childNodes.forEach(n => { if (n.nodeType === Node.TEXT_NODE) td.removeChild(n); });
      td.insertBefore(document.createTextNode(val || "—"), td.firstChild);
    }
  }

  // ====== B1 -> B2 (validate) ======
  function handleConfirm(e){
    e.preventDefault();
    const v = values();
    const errs = [];
    if (!v.name)  errs.push("「お名前」は必須入力項目です。");
    if (!v.email) errs.push("「メールアドレス」は必須入力項目です。");
    if (!v.email2)errs.push("「メールアドレス：確認用」は必須入力項目です。");
    if (!v.body)  errs.push("「お問い合わせ内容」は必須入力項目です。");
    if (v.email && !emailOK(v.email)) errs.push("メールアドレスの形式が正しくありません。");
    if (v.email && v.email2 && v.email !== v.email2) errs.push("メールアドレス確認用が一致しません。");
    if (v.tel && (v.tel.length < 9 || v.tel.length > 11)) errs.push("電話番号は9〜11桁の数字で入力してください。");

    if (errs.length){
      // STEP2 (LỖI)
      renderErrors(errs);
      setStep(2);
      show(confirmBox, false);
      show(errBox, true);
      show(errBackWrap, true);
      window.scrollTo({ top: formBox.offsetTop - 20, behavior: "smooth" });
      return;
    }

    // STEP2 (XÁC NHẬN)
    show(errBox, false);
    show(errBackWrap, false);
    fillConfirm("お名前", v.name);
    fillConfirm("フリガナ", v.kana);
    fillConfirm("電話番号", v.tel);
    fillConfirm("email", v.email);
    fillConfirm("お問い合わせ内容", v.body);
    const hEmail2 = confirmBox.querySelector('input[name="email2"]');
    if (hEmail2) hEmail2.value = v.email2;

    setStep(2);
    show(confirmBox, true);
    window.scrollTo({ top: formBox.offsetTop - 20, behavior: "smooth" });
  }

  // click ảnh xác nhận hoặc nhấn Enter trong form
  submitImg.addEventListener("click", handleConfirm);
  form.addEventListener("submit", handleConfirm);

  // ====== B2 (XÁC NHẬN) -> B3 ======
  function handleFinalSend(e){
    // Nếu muốn gửi thật về server PHP, bỏ comment dòng dưới và xóa e.preventDefault()
    // return; // cho submit mặc định
    e.preventDefault(); // demo UI
    show(confirmBox, false);
    setStep(3);
    window.scrollTo({ top: formBox.offsetTop - 20, behavior: "smooth" });
  }
  if (confirmSendImg) confirmSendImg.addEventListener("click", handleFinalSend);
  if (confirmForm) confirmForm.addEventListener("submit", handleFinalSend);
});
