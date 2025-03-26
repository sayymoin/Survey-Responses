document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.getElementById("next-btn");
    const submitBtn = document.getElementById("submit-btn");
    const awardSelect = document.getElementById("award");
    const section2 = document.getElementById("section-2");
    const awardQuestion = document.getElementById("award-question");
    const mitigationsDiv = document.getElementById("mitigations");
    const reasonInput = document.getElementById("reason");
    const surveyForm = document.getElementById("survey-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    const mitigations = {
        Vulcan: [
            "for their outstanding dedication to coaching and mentoring team members",
            "for fostering a culture of continuous learning and development",
            "for empowering others to grow into effective leaders and mentors",
            "for offering guidance that results in substantial professional and personal growth",
            "for inspiring a legacy of leadership that reaches beyond their immediate team"
        ],
        GameChanger: [
            "for successfully implementing a guideline change or clarification",
            "for their support of a peer in navigating a guideline change or clarification",
            "for facilitating a project or initiative that ensures all guideline changes and clarifications are captured, reviewed, and implemented on schedule",
            "for leading impactful changes and initiatives in guidelines that benefit the entire team",
            "for offering clear and practical improvements that establish a new standard of excellence"
        ],
        Village: [
            "because they exemplify the core leadership principles necessary for this award",
            "for their significant contributions to the team’s success through innovation and dedication",
            "for their eagerness to learn, active participation in projects, and consistent support",
            "as a prime example of true leadership, demonstrating contributions that drive success"
        ],
        Spotlight: [
            "for introducing innovative ideas or solutions that significantly improve processes, guidelines, or clarifications",
            "based on their exceptional performance, consistently exceeding expectations",
            "for their impactful initiatives that have made a measurable difference",
            "for their outstanding leadership and collaboration",
            "for their adaptability and resilience in overcoming challenges"
        ],
        MoversShakers: [
            "for consistently excelling in taking on projects beyond usual responsibilities",
            "for outstanding leadership in driving innovative initiatives",
            "for a proactive approach in addressing and overcoming unexpected challenges",
            "for exceptional dedication in contributing to team goals beyond core responsibilities",
            "for demonstrating exceptional leadership beyond traditional auditing roles"
        ]
    };

    function validateSection1() {
        const nominator = document.getElementById("nominator").value.trim();
        const nominee = document.getElementById("nominee").value.trim();
        const award = awardSelect.value;
        nextBtn.disabled = !(nominator && nominee && award);
    }

    function updateMitigations() {
        const selectedAward = awardSelect.value;
        mitigationsDiv.innerHTML = "";
        awardQuestion.innerText = `I want to nominate This/These Individual(s) for ${awardSelect.options[awardSelect.selectedIndex].text}`;
        if (mitigations[selectedAward]) {
            mitigations[selectedAward].forEach(mitigation => {
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "mitigation";
                checkbox.value = mitigation;
                checkbox.addEventListener("change", validateSection2);

                const label = document.createElement("label");
                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(mitigation));
                mitigationsDiv.appendChild(label);
                mitigationsDiv.appendChild(document.createElement("br"));
            });
        }
    }

    function validateSection2() {
        const checkedBoxes = document.querySelectorAll("input[name='mitigation']:checked").length;
        const reasonText = reasonInput.value.trim();
        const wordCount = reasonText.split(/\s+/).filter(word => word).length;
        submitBtn.disabled = !(checkedBoxes > 0 || wordCount >= 15);
    }

    awardSelect.addEventListener("change", function () {
        updateMitigations();
        section2.style.display = "block";
        validateSection2();
    });

    document.getElementById("nominator").addEventListener("input", validateSection1);
    document.getElementById("nominee").addEventListener("input", validateSection1);
    awardSelect.addEventListener("change", validateSection1);
    reasonInput.addEventListener("input", validateSection2);

    surveyForm.addEventListener("submit", function (event) {
        event.preventDefault();
        thankYouMessage.innerText = `Thank you, ${document.getElementById("nominator").value} for your nomination! Your recognition helps foster a culture of appreciation and excellence.`;
        thankYouMessage.style.display = "block";
        surveyForm.style.display = "none";
    });
});
