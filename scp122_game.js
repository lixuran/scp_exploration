const gameState = {
  resources: 40,
  days: 20,
  info: 0,
  currentExperiment: "start"
};

const experiments = {
  start: {
    experiment_description: `SCP-122 Text Adventure Game: Project NIGHTLIGHT

You are: Senior Researcher Dr. Elin Reyes, Site-135 
Assignment: SCP-122 Investigation and Containment Protocol 
Revision Start Date: [REDACTED]

[INITIAL SCP FILE - ACCESS LEVEL 3]

SCP-122 - CLASS: Euclid

Object Description: SCP-122 is a plastic night light in the shape of a star, currently housed at Site-135. It is under the care of a child, designated SCP-122-1 (currently Anna Talinn).

Known Effects: When powered and in the presence of SCP-122-1, it emits a calming field within a 20-kilometer radius. Personnel across Site-135 have reported decreased anxiety and improved morale.

Special Containment Procedures:

Security camera installed for monitoring.

SCP-122-1 is to be housed with the object."`,
    "choices": [
      { "experiment_description": "Interview SCP-122-1", "next": "experiment_01_talk_child" },
      { "experiment_description": "Replace SCP-122-1", "next": "experiment_02_replace_child" },
      { "experiment_description": "Use Dual Subject Test", "next": "experiment_03_dual_subject" }
    ]
  },
  "experiment_01_talk_child": {
"experiment_description": "Interview SCP-122-1 to gather subjective reports.",
"success_log": [
"Experiment Log 122-E01: Interview with SCP-122-1 revealed consistent visualizations of SCP-122-2. Described as 'a big angel with wings who stands guard at night.' Subject shows affection and no signs of fear.",
"Emotional biometrics stable. SCP-122 showed no flickering during session."
],
"failure_log": [
"Experiment Log 122-E01: SCP-122-1 appeared drowsy and unwilling to communicate. No meaningful data gathered."
],
"resource cost": 3,
"time cost": 1,
"success chance": 95,
"info gathered if successful": 5,
"choices": [
{
"experiment_description": "Compare answers across multiple interviews.",
"next": "experiment_04_repeat_interview"
},
{
"experiment_description": "Introduce art therapy session to explore subconscious detail.",
"next": "experiment_06_art_therapy"
}
]
},

"experiment_02_replace_child": {
"experiment_description": "Replace SCP-122-1 with another religious child subject.",
"success_log": [
"Experiment Log 122-E02: New subject introduced (female, 8, Abrahamic background). SCP-122 activated properly. Subject reported: 'I saw a tall man with a glowing face. He told me I was safe here.'",
"Calming effect radius remained consistent. SCP-122-2 manifestation observed in dream logs."
],
"failure_log": [
"Experiment Log 122-E02: New subject failed to establish connection. SCP-122 flickered. Subject reported nightmares. SCP-122-2 not reported. SCP-122-1 reintroduced."
],
"resource cost": 8,
"time cost": 4,
"success chance": 60,
"info gathered if successful": 8,
"choices": [
{
"experiment_description": "Compare cognitive profiles of Anna and new subject.",
"next": "experiment_05_psych_analysis"
},
{
"experiment_description": "Introduce both children to SCP-122 simultaneously.",
"next": "experiment_03_dual_subject"
}
]
},

"experiment_03_dual_subject": {
"experiment_description": "Place two SCP-122-1 candidates in containment simultaneously.",
"success_log": [
"Experiment Log 122-E03: Two subjects placed in shared room. SCP-122 glowed steadily. Both reported dreams of SCP-122-2 appearing more 'detailed' and 'louder' than usual.",
"One subject recalled: 'He sang to us in the dark, like a hymn.'"
],
"failure_log": [
"Experiment Log 122-E03: SCP-122 flickered rapidly. One subject had night terrors. Other subject remembered 'two angels fighting.' Test aborted."
],
"resource cost": 10,
"time cost": 6,
"success chance": 50,
"info gathered if successful": 10,
"choices": [
{
"experiment_description": "Attempt to isolate dream paths of each subject.",
"next": "experiment_07_dream_divergence"
},
{
"experiment_description": "Monitor SCP-122-2 behavior for split manifestation.",
"next": "experiment_08_dual_entity"
}
]
}
  // ...Add experiment_02_replace_child, experiment_03_dual_subject etc.
};

function updateStatus() {
  document.getElementById("status").innerText =
    `🧪 Resources: ${gameState.resources} | 📆 Days left: ${gameState.days} | 📚 Info: ${gameState.info}`;
}

function runExperiment(expKey) {
  const exp = experiments[expKey];
  gameState.currentExperiment = expKey;
  const gameDiv = document.getElementById("game");
  const logDiv = document.getElementById("log");

  gameDiv.innerHTML = `<div class="experiment"><b>${exp.experiment_description || 'No description available'}</b></div>`;
  logDiv.innerText = "";

  // Skip deduction for start node
  if (exp.resource_cost && exp.time_cost) {
    if (gameState.resources < exp.resource_cost || gameState.days < exp.time_cost) {
      logDiv.innerText = "❌ Not enough resources or days to perform this experiment.";
      return;
    }

    // Deduct resources and days
    gameState.resources -= exp.resource_cost;
    gameState.days -= exp.time_cost;

    // Roll for success/failure
    const success = Math.random() * 100 < exp.success_chance;
    const log = success ? exp.success_log : exp.failure_log;
    logDiv.innerText = `🔍 ${log[Math.floor(Math.random() * log.length)]}`;

    if (success) {
      gameState.info += exp.info_gathered_if_successful;
    }
  }

  updateStatus();

  // Show buttons for next choices
  if (exp.choices && exp.choices.length > 0) {
    exp.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.innerText = choice.experiment_description || "Continue";
      btn.onclick = () => runExperiment(choice.next);
      gameDiv.appendChild(btn);
    });
  } else {
    // If no choices
    if (gameState.resources <= 0 || gameState.days <= 0) {
      gameDiv.innerHTML += "<p>🔚 You've run out of time or resources. The investigation ends here.</p>";
    } else {
      gameDiv.innerHTML += "<p>✅ Experiment complete. Choose your next step wisely.</p>";
    }
  }
}
window.onload = () => {
  updateStatus();
  runExperiment("start");
};