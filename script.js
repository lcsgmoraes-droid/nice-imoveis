const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function onAnchorClick(event) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.pageYOffset - 76;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const fields = {
  homeValue: document.getElementById('homeValue'),
  downPayment: document.getElementById('downPayment'),
  years: document.getElementById('years'),
  annualRate: document.getElementById('annualRate'),
  homeValueLabel: document.getElementById('homeValueLabel'),
  downPaymentLabel: document.getElementById('downPaymentLabel'),
  yearsLabel: document.getElementById('yearsLabel'),
  annualRateLabel: document.getElementById('annualRateLabel'),
  result: document.querySelector('#simulatorResult strong')
};

function formatMoney(value) {
  return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
}

function calculateInstallment(principal, monthlyRate, months) {
  if (principal <= 0 || months <= 0) return 0;
  if (monthlyRate === 0) return principal / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return principal * ((monthlyRate * factor) / (factor - 1));
}

function refreshSimulator() {
  const homeValue = Number(fields.homeValue.value);
  const downPayment = Number(fields.downPayment.value);
  const years = Number(fields.years.value);
  const annualRate = Number(fields.annualRate.value);

  const financed = Math.max(homeValue - downPayment, 0);
  const monthlyRate = (annualRate / 100) / 12;
  const months = years * 12;
  const installment = calculateInstallment(financed, monthlyRate, months);

  fields.homeValueLabel.textContent = formatMoney(homeValue);
  fields.downPaymentLabel.textContent = formatMoney(downPayment);
  fields.yearsLabel.textContent = `${years} anos`;
  fields.annualRateLabel.textContent = `${annualRate.toFixed(1)}%`;
  fields.result.textContent = `${formatMoney(installment)}/mes`;
}

['homeValue', 'downPayment', 'years', 'annualRate'].forEach((id) => {
  fields[id].addEventListener('input', refreshSimulator);
});

refreshSimulator();

const sendButton = document.getElementById('sendWhatsApp');
sendButton.addEventListener('click', () => {
  const form = document.querySelector('.contact__form');
  const name = form.querySelector('input[type="text"]').value || 'Cliente';
  const whatsapp = form.querySelectorAll('input')[1].value || 'Nao informado';
  const email = form.querySelector('input[type="email"]').value || 'Nao informado';
  const msg = form.querySelector('textarea').value || 'Quero atendimento para encontrar um imovel';

  const text = encodeURIComponent(`Oi Nice, sou ${name}.\nWhatsApp: ${whatsapp}\nEmail: ${email}\nMensagem: ${msg}`);
  window.open(`https://wa.me/5518997170733?text=${text}`, '_blank');
});
