document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const submitBtn = document.getElementById("submit-btn");
    const section1 = document.getElementById("section-1");
    const section2 = document.getElementById("section-2");
    const awardSelect = document.getElementById("award");
    const mitigationsDiv = document.getElementById("mitigations");
    const reasonInput = document.getElementById("reason");
    const surveyForm = document.getElementById("survey-form");
    const thankYouMessage = document.getElementById("thank-you-message");
    const thankYouText = document.getElementById("thank-you-text");

    section2.style.display = "none";

    const mitigations = {
        Vulcan: [
            "For their outstanding dedication to coaching and mentoring team members",
            "For fostering a culture of continuous learning and development",
            "For empowering others to grow into effective leaders and mentors",
            "For offering guidance that results in substantial professional and personal growth",
            "For inspiring a legacy of leadership that reaches beyond their immediate team"
        ],
        GameChanger: [
            "For successfully implementing a guideline change or clarification",
            "For their support of a peer in navigating a guideline change or clarification",
            "For facilitating a project or initiative that ensures all guideline changes and clarifications are captured, reviewed, and implemented on schedule",
            "For leading impactful changes and initiatives in guidelines that benefit the entire team",
            "For offering clear and practical improvements that establish a new standard of excellence"
        ],
        Village: [
            "Because they exemplify the core leadership principles necessary for this award",
            "For their significant contributions to the team’s success through their innovation, dedication, and persistent efforts to drive important changes, improvements, or implementations that enhance the overall success of the team and its partners",
            "For their eagerness to learn, active participation in various projects, consistent support, and unwavering availability during critical times, all of which greatly contribute to the overall success of the team",
            "As a prime example of true leadership, demonstrating effective contributions that drive the success of both the team and the organization"
        ],
        Spotlight: [
            "For introducing innovative ideas or solutions that significantly improve processes, guidelines, or clarification. This could be a project that introduces a new way of doing things.",
            "Based on their exceptional performance. They consistently exceed their role's expectations, delivering outstanding results that have a positive impact on the team or organization. This includes surpassing performance metrics, achieving ambitious goals, or managing critical projects with excellence.",
            "For their impactful initiatives. They have launched a project or program that has made a measurable and positive difference to the organization.",
            "For their outstanding leadership and collaboration. They have exhibited exceptional leadership skills or effective teamwork, including guiding a team through challenges, fostering a positive work environment, or driving successful cross-functional projects.",
            "For their adaptability and resilience. They have shown exceptional problem-solving abilities by successfully navigating crisis, adapting to new technologies or market conditions, and overcoming significant obstacles to achieve success."
        ],
        MoversShakers: [
            "For consistently excelling in taking on projects beyond the usual auditor responsibilities.",
            "For their outstanding leadership in driving innovative initiatives that greatly boost the overall success of our team.",
            "For their proactive approach in addressing and overcoming unexpected challenges.",
            "For their exceptional dedication in going above and beyond to contribute to team goals, extending well beyond their core responsibilities.",
            "For demonstrating exceptional leadership in areas that extend beyond traditional auditing responsibilities."
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
        document.getElementById("award-question").innerText = `I want to nominate for ${awardSelect.options[awardSelect.selectedIndex].text}`;
        if (mitigations[selectedAward]) {
            mitigations[selectedAward].forEach(mitigation => {
                const container = document.createElement("div");
                container.style.display = "flex";
                container.style.alignItems = "left";
                container.style.marginBottom = "8px";

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "mitigation";
                checkbox.value = mitigation;
                checkbox.style.marginRight = "10px";
                checkbox.addEventListener("change", validateSection2);

                const label = document.createElement("label");
                container.style.textAlign = "left";
                label.appendChild(document.createTextNode(mitigation));

                container.appendChild(checkbox);
                container.appendChild(label);
                mitigationsDiv.appendChild(container);
            });
        }
    }

    function validateSection2() {
        const checkedBoxes = document.querySelectorAll("input[name='mitigation']:checked").length;
        const reasonText = reasonInput.value.trim();
        const wordCount = reasonText.split(/\s+/).filter(word => word).length;
        submitBtn.disabled = !(checkedBoxes > 0 || wordCount >= 15);
    }

    nextBtn.addEventListener("click", function () {
        section1.style.display = "none";
        section2.style.display = "block";
    });

    prevBtn.addEventListener("click", function () {
        section1.style.display = "block";
        section2.style.display = "none";
    });

    surveyForm.addEventListener("submit", function (event) {
        event.preventDefault();
        thankYouText.innerText = `Thank you, ${document.getElementById("nominator").value} for your nomination! Your recognition helps foster a culture of appreciation and excellence.`;
        thankYouMessage.style.display = "block";
        surveyForm.style.display = "none";
    });

    awardSelect.addEventListener("change", updateMitigations);
    document.getElementById("nominator").addEventListener("input", validateSection1);
    document.getElementById("nominee").addEventListener("input", validateSection1);
    awardSelect.addEventListener("change", validateSection1);
    reasonInput.addEventListener("input", validateSection2);
});



/*

document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const submitBtn = document.getElementById("submit-btn");
    const section1 = document.getElementById("section-1");
    const section2 = document.getElementById("section-2");
    const awardSelect = document.getElementById("award");
    const mitigationsDiv = document.getElementById("mitigations");
    const reasonInput = document.getElementById("reason");
    const surveyForm = document.getElementById("survey-form");
    const thankYouMessage = document.getElementById("thank-you-message");
    const thankYouText = document.getElementById("thank-you-text");

    section2.style.display = "none";

    const mitigations = {
        Vulcan: [
            "For outstanding coaching",
            "For mentoring team members",
            "For providing consistent support",
            "For improving team efficiency"
        ],
        GameChanger: [
            "For leading impactful changes",
            "For ensuring smooth guideline transitions",
            "For implementing new strategies",
            "For bringing innovative solutions"
        ],
        Village: [
            "For being a key contributor to team success",
            "For fostering a collaborative work environment",
            "For continuously supporting peers",
            "For enhancing team morale"
        ],
        Spotlight: [
            "For innovative ideas and exceeding expectations",
            "For demonstrating exceptional skills",
            "For setting new standards",
            "For achieving remarkable performance"
        ],
        MoversShakers: [
            "For excelling beyond responsibilities",
            "For driving impactful initiatives",
            "For consistently delivering high-quality work",
            "For taking proactive measures to improve processes"
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
        document.getElementById("award-question").innerText = `I want to nominate for ${awardSelect.options[awardSelect.selectedIndex].text}`;
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

    nextBtn.addEventListener("click", function () {
        section1.style.display = "none";
        section2.style.display = "block";
    });

    prevBtn.addEventListener("click", function () {
        section1.style.display = "block";
        section2.style.display = "none";
    });

    surveyForm.addEventListener("submit", function (event) {
        event.preventDefault();
        thankYouText.innerText = `Thank you, ${document.getElementById("nominator").value} for your nomination! Your recognition helps foster a culture of appreciation and excellence.`;
        thankYouMessage.style.display = "block";
        surveyForm.style.display = "none";
    });

    awardSelect.addEventListener("change", updateMitigations);
    document.getElementById("nominator").addEventListener("input", validateSection1);
    document.getElementById("nominee").addEventListener("input", validateSection1);
    awardSelect.addEventListener("change", validateSection1);
    reasonInput.addEventListener("input", validateSection2);
});

*/




/*document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const submitBtn = document.getElementById("submit-btn");
    const section1 = document.getElementById("section-1");
    const section2 = document.getElementById("section-2");
    const awardSelect = document.getElementById("award");
    const mitigationsDiv = document.getElementById("mitigations");
    const reasonInput = document.getElementById("reason");
    const surveyForm = document.getElementById("survey-form");
    const thankYouMessage = document.getElementById("thank-you-message");
    const thankYouText = document.getElementById("thank-you-text");

    // Hide Section 2 initially
    section2.style.display = "none";

    // Mitigations options
    const mitigations = {
        Vulcan: ["for outstanding coaching", "for mentoring team members"],
        GameChanger: ["for leading impactful changes", "for ensuring smooth guideline transitions"],
        Village: ["for being a key contributor to team success"],
        Spotlight: ["for innovative ideas and exceeding expectations"],
        MoversShakers: ["for excelling beyond responsibilities"]
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
        document.getElementById("award-question").innerText = `I want to nominate for ${awardSelect.options[awardSelect.selectedIndex].text}`;
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

    // Show Section 2 and hide Section 1 when "Next" is clicked
    nextBtn.addEventListener("click", function () {
        section1.style.display = "none";
        section2.style.display = "block";
    });

    // Show Section 1 and hide Section 2 when "Previous" is clicked
    prevBtn.addEventListener("click", function () {
        section1.style.display = "block";
        section2.style.display = "none";
    });

    // Submit and show Thank You message
    surveyForm.addEventListener("submit", function (event) {
        event.preventDefault();
        thankYouText.innerText = `Thank you, ${document.getElementById("nominator").value} for your nomination! Your recognition helps foster a culture of appreciation and excellence.`;
        thankYouMessage.style.display = "block";
        surveyForm.style.display = "none";
    });

    // Event listeners
    awardSelect.addEventListener("change", updateMitigations);
    document.getElementById("nominator").addEventListener("input", validateSection1);
    document.getElementById("nominee").addEventListener("input", validateSection1);
    awardSelect.addEventListener("change", validateSection1);
    reasonInput.addEventListener("input", validateSection2);
});

*/



/* 

3rd JS Code
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

    section2.style.display = "none"; // Hide Section 2 initially
    nextBtn.disabled = true; // Disable Next button initially

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
        nextBtn.disabled = !(nominator && nominee && award); // Enable Next button only if all fields are filled
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

    nextBtn.addEventListener("click", function () {
        section2.style.display = "block"; // Show Section 2 only when Next is clicked
        updateMitigations();
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
*/

/*

Second JS Code


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

    section2.style.display = "none"; // Hide Section 2 initially

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

    nextBtn.addEventListener("click", function () {
        section2.style.display = "block";
    });

    awardSelect.addEventListener("change", function () {
        updateMitigations();
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
*/


/*
First JS code

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
*/
