/* =========================================================
   YatraX — Auth Page
   ========================================================= */

let mode = "login";

function switchMode(newMode) {
    mode = newMode;

    document.querySelectorAll(".tab").forEach((t) => {
        t.classList.toggle("active", t.dataset.mode === newMode);
    });

    document.getElementById("nameField").style.display =
        newMode === "signup" ? "block" : "none";
    document.getElementById("cardTitle").innerText =
        newMode === "signup" ? "Create account" : "Welcome back";
    document.getElementById("cardSub").innerText =
        newMode === "signup"
            ? "Join YatraX and start exploring"
            : "Sign in to continue your journey";
    document.getElementById("submitBtn").innerText =
        newMode === "signup" ? "Create account" : "Login";
    document.getElementById("password").autocomplete =
        newMode === "signup" ? "new-password" : "current-password";

    hideMessages();
}

function showError(msg) {
    const el = document.getElementById("errorBox");
    el.innerText = msg;
    el.classList.add("show");
    document.getElementById("successBox").classList.remove("show");
}

function showSuccess(msg) {
    const el = document.getElementById("successBox");
    el.innerText = msg;
    el.classList.add("show");
    document.getElementById("errorBox").classList.remove("show");
}

function hideMessages() {
    document.getElementById("errorBox").classList.remove("show");
    document.getElementById("successBox").classList.remove("show");
}

function togglePassword() {
    const input = document.getElementById("password");
    const btn = document.getElementById("togglePw");
    if (input.type === "password") {
        input.type = "text";
        btn.innerText = "HIDE";
    } else {
        input.type = "password";
        btn.innerText = "SHOW";
    }
}

function handleSubmit(e) {
    e.preventDefault();
    hideMessages();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const btn = document.getElementById("submitBtn");

    if (mode === "signup" && !name) {
        showError("Please enter your name.");
        return;
    }
    if (!email || !password) {
        showError("Email and password are required.");
        return;
    }
    if (password.length < 4) {
        showError("Password must be at least 4 characters.");
        return;
    }

    btn.disabled = true;
    btn.innerText = mode === "signup" ? "Creating account..." : "Signing in...";

    const url =
        mode === "signup" ? API_BASE + "/auth/register" : API_BASE + "/auth/login";
    const body =
        mode === "signup"
            ? { name: name, email: email, password: password }
            : { email: email, password: password };

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    })
        .then(async (r) => {
            const text = await r.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch (err) {
                data = { raw: text };
            }
            return { ok: r.ok, status: r.status, data: data };
        })
        .then((res) => {
            btn.disabled = false;
            btn.innerText = mode === "signup" ? "Create account" : "Login";

            if (mode === "signup") {
                if (res.ok) {
                    showSuccess("Account created! Logging you in...");
                    setTimeout(() => autoLogin(email, password), 500);
                } else {
                    const msg =
                        typeof res.data === "string"
                            ? res.data
                            : res.data.raw || "Signup failed.";
                    showError(msg);
                }
            } else {
                if (res.ok && res.data && res.data.id) {
                    localStorage.setItem(
                        "yatrax_user",
                        JSON.stringify({
                            id: res.data.id,
                            name: res.data.name || res.data.email,
                            email: res.data.email,
                        })
                    );
                    showSuccess("Login successful! Redirecting...");
                    setTimeout(() => {
                        window.location.href = "index.html";
                    }, 600);
                } else if (res.status === 401) {
                    showError("Invalid email or password.");
                } else {
                    showError("Login failed. Please try again.");
                }
            }
        })
        .catch((err) => {
            btn.disabled = false;
            btn.innerText = mode === "signup" ? "Create account" : "Login";
            showError("Cannot reach server. Make sure the backend is running.");
            console.error(err);
        });
}

function autoLogin(email, password) {
    fetch(API_BASE + "/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
    })
        .then((r) => (r.ok ? r.json() : null))
        .then((user) => {
            if (user && user.id) {
                localStorage.setItem(
                    "yatrax_user",
                    JSON.stringify({
                        id: user.id,
                        name: user.name || user.email,
                        email: user.email,
                    })
                );
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 400);
            } else {
                showSuccess("Account created! Please log in.");
                switchMode("login");
            }
        })
        .catch(() => {
            showSuccess("Account created! Please log in.");
            switchMode("login");
        });
}