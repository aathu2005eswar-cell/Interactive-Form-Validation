// Helper validators
const validators = {
  name: v => v.trim().length >= 2 || "Name must be at least 2 characters",
  email: v => /^\S+@\S+\.\S+$/.test(v) || "Enter a valid email",
  phone: v => /^\d{10}$/.test(v) || "Phone must be 10 digits",
  password: v => v.length >= 8 || "Password must be at least 8 characters",
  confirmPassword: (v, all) => v === all.password || "Passwords do not match"
};

function setState(el, ok, message = "") {
  const small = el.parentElement.querySelector("small.error");
  el.classList.remove("valid","invalid");
  el.classList.add(ok ? "valid" : "invalid");
  small.textContent = ok ? "" : message;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("regForm");
  const fields = ["name","email","phone","password","confirmPassword"];

  // Real-time validation on input
  fields.forEach(name => {
    const el = document.getElementById(name);
    el.addEventListener("input", () => {
      const value = el.value;
      const all = Object.fromEntries(fields.map(f => [f, document.getElementById(f).value]));
      const result = validators[name](value, all);
      setState(el, result === true || result === undefined || result === true, result === true ? "" : result);
    });
  });

  // On submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    const data = {};
    fields.forEach(name => {
      const el = document.getElementById(name);
      const value = el.value;
      data[name] = value;
      const result = validators[name](value, data);
      const passed = result === true || result === undefined;
      setState(el, passed, passed ? "" : result);
      if (!passed) ok = false;
    });

    if (!ok) return;

    // All validations passed — store to localStorage (demo)
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    storedUsers.push({ name: data.name, email: data.email, phone: data.phone, date: new Date().toISOString() });
    localStorage.setItem("users", JSON.stringify(storedUsers));
    document.getElementById("success").classList.remove("hidden");
    document.getElementById("success").textContent = "Form submitted successfully!";
    form.reset();
    fields.forEach(f => document.getElementById(f).classList.remove("valid"));
  });
});