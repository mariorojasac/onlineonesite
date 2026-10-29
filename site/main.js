// Site settings. Fill in PHONE (digits only, e.g. "2605551234") to show the
// Call buttons; leave it empty to hide them.
const PHONE = "";

// EmailJS account used by the contact form (same IDs as the old React site).
const EMAILJS = {
  serviceId: "service_m90ndxc",
  templateId: "template_cc5aygd",
  publicKey: "7LwL2asTqRaOmps-9",
};

document.getElementById("year").textContent = new Date().getFullYear();

if (PHONE) {
  document.querySelectorAll(".js-call").forEach((a) => {
    a.href = "tel:+1" + PHONE;
    a.hidden = false;
  });
  document.querySelectorAll(".js-call-line").forEach((el) => (el.hidden = false));
}

// Package buttons preselect the matching option in the form.
const interest = document.getElementById("f-interest");
document.querySelectorAll("[data-package]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const opt = [...interest.options].find((o) => o.text === btn.dataset.package);
    if (opt) interest.value = opt.text;
  });
});

const form = document.getElementById("lead-form");
const status = form.querySelector(".form-status");
const submit = form.querySelector("button[type=submit]");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form));
  if (data.company_url) return; // bot filled the hidden field

  // The EmailJS template reads from_name, from_email and message, so the
  // extra fields are folded into message.
  const message = [
    `Business: ${data.business}`,
    `Phone: ${data.phone || "-"}`,
    `Current website: ${data.website || "-"}`,
    `Interested in: ${data.interest}`,
    "",
    data.notes || "",
  ].join("\n");

  submit.disabled = true;
  status.className = "form-status";
  status.textContent = "Sending…";
  try {
    await window.emailjs.send(
      EMAILJS.serviceId,
      EMAILJS.templateId,
      { ...data, message },
      EMAILJS.publicKey
    );
    form.reset();
    status.classList.add("ok");
    status.textContent = "Thanks! I'll get back to you within one business day.";
  } catch (err) {
    status.classList.add("err");
    status.textContent = PHONE
      ? "Sorry, that didn't send. Please call or text me instead."
      : "Sorry, that didn't send. Please try again in a minute.";
  } finally {
    submit.disabled = false;
  }
});
