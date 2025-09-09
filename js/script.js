// js/script.js

// Example Chart.js setup (for Investor Relations page)
document.addEventListener("DOMContentLoaded", function () {
  const chartEl = document.getElementById("performanceChart");
  if (chartEl) {
    const ctx = chartEl.getContext("2d");
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2023', '2024', '2025 (YTD)'],
        datasets: [{
          label: 'Average Annualized Return (%)',
          data: [12, 14, 13.5],
          backgroundColor: 'rgba(30,144,255,0.7)',
          borderColor: 'rgba(30,144,255,1)',
          borderWidth: 1,
          borderRadius: 5
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: { enabled: true }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 20
          }
        }
      }
    });
  }
});

// Example: smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

