const plans = {
    pro: { monthly: "4.00", annual: "40.80" },
    ultra: { monthly: "9.95", annual: "95.52" },
    mega: { monthly: "35.00", annual: "315.00" }
};

function getPlanAmount() {
    const selectedPlan = document.getElementById("plan-selector").value;
    return plans[selectedPlan] ? plans[selectedPlan].monthly : "0.00";
}

document.getElementById("plan-selector").addEventListener("change", () => {
    updatePlan();
});

function updatePlan() {
    const planTitle = document.getElementById("plan-title");
    const totalDue = document.getElementById("total-due");

    const selectedPlan = document.getElementById("plan-selector").value;
    const planAmount = plans[selectedPlan] ? plans[selectedPlan].monthly : "0.00";

    planTitle.textContent = `${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan`;
    totalDue.textContent = `$${planAmount} USD`;
}
