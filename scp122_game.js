const gameState = {
  resources: 40,
  days: 20,
  info: 0,
  currentExperiment: "start"
};
const experimentHistory = [];

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
"resource_cost": 3,
"time_cost": 1,
"success_chance": 95,
"info_gathered_if_successful": 5,
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
"resource_cost": 8,
"time_cost": 4,
"success_chance": 60,
"info_gathered_if_successful": 8,
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
"resource_cost": 10,
"time_cost": 6,
"success_chance": 50,
"info_gathered_if_successful": 10,
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
},
experiment_04_repeat_interview: {
"experiment_description": "Conduct repeated interviews over one week.",
"success_log": [
"Experiment Log 122-E04: Subject repeated consistent patterns in dream descriptions. SCP-122-2 appears regularly during dreams, closer to the bed each time.",
"Language shifted to more affectionate. Reports of physical touch began: 'He brushed my hair. He tucked me in.'"
],
"failure_log": [
"Experiment Log 122-E04: Subject became fatigued and began resisting interview. Descriptions became vague."
],
"resource_cost": 4,
"time_cost": 3,
"success_chance": 85,
"info_gathered_if_successful": 6,
"choices": [
{
"experiment_description": "Introduce dream journal to improve memory recall.",
"next": "experiment_09_dream_journal"
}
]
},

experiment_05_psych_analysis: {
"experiment_description": "Run deep psychological profiling on subject pool.",
"success_log": [
"Experiment Log 122-E05: SCP-122-1 scores highest in religious conviction, empathy, and vivid dream capability. SCP-122 appears attuned to these qualities.",
"High emotional IQ correlates to stable SCP-122-2 behavior. New profile matrix constructed."
],
"failure_log": [
"Experiment Log 122-E05: No clear correlation identified across tested candidates. Data inconclusive."
],
"resource_cost": 6,
"time_cost": 4,
"success_chance": 70,
"info_gathered_if_successful": 7,
"choices": [
{
"experiment_description": "Match future candidates using refined profile matrix.",
"next": "experiment_10_candidate_matrix"
}
]
},

experiment_06_art_therapy: {
"experiment_description": "Guide SCP-122-1 through drawing sessions focused on dream imagery.",
"success_log": [
"Experiment Log 122-E06: Artwork revealed increasingly humanoid form with glowing eyes and exaggerated wingspan. Symbolic items appeared in drawings over time.",
"Subject reported: 'He has a key. He says it’s for the sky.'"
],
"failure_log": [
"Experiment Log 122-E06: Subject uninterested in art therapy. Sketches were erratic or unrelated."
],
"resource_cost": 5,
"time_cost": 3,
"success_chance": 75,
"info_gathered_if_successful": 6,
"choices": [
{
"experiment_description": "Attempt dream-triggered sketching via lucid suggestion.",
"next": "experiment_11_sketch_lucid"
}
]
},

experiment_07_dream_divergence: {
"experiment_description": "Explore divergent dream experiences between dual subjects.",
"success_log": [
"Experiment Log 122-E07: Subjects described SCP-122-2 behaving differently for each child. One reported protection, the other silence.",
"SCP-122 possibly interacting on separate frequency per subject. Entity may exhibit multi-threaded presence."
],
"failure_log": [
"Experiment Log 122-E07: One subject dominated dream recall; second had no memory. SCP-122-2 presence inconclusive."
],
"resource_cost": 7,
"time_cost": 4,
"success_chance": 65,
"info_gathered_if_successful": 7,
"choices": []
},

experiment_08_dual_entity: {
"experiment_description": "Monitor for presence of more than one SCP-122-2 during dual test.",
"success_log": [
"Experiment Log 122-E08: Infrared dream overlays detected two discrete EM anomalies. Both described identically by each subject.",
"Entities did not interact. Possible duplication or split-state anomaly. No aggression recorded."
],
"failure_log": [
"Experiment Log 122-E08: EM anomalies within margin of error. Subjects may have shared the same dream entity. No proof of dual presence."
],
"resource_cost": 9,
"time_cost": 5,
"success_chance": 60,
"info_gathered_if_successful": 9,
"choices": []
},

experiment_09_dream_journal: {
"experiment_description": "Instruct SCP-122-1 to maintain a nightly journal of dream content.",
"success_log": [
"Experiment Log 122-E09: Entries show emotional and symbolic evolution of SCP-122-2. Transition from distant observer to 'dream guardian'. Notable quote: 'He hummed a song. I think I knew it.'"
],
"failure_log": [
"Experiment Log 122-E09: Inconsistent journaling. Many entries blank or irrelevant."
],
"resource_cost": 2,
"time_cost": 2,
"success_chance": 85,
"info_gathered_if_successful": 4,
"choices": []
},

experiment_10_candidate_matrix: {
"experiment_description": "Use profile matrix to predict high-suitability SCP-122-1 candidates.",
"success_log": [
"Experiment Log 122-E10: Matrix successfully predicted positive response in three new candidates. SCP-122 remained stable.",
"SCP-122-2 consistent in dream presence across matrix matches. Key traits: faith, empathy, low anxiety."
],
"failure_log": [
"Experiment Log 122-E10: Matrix produced false positives. Subjects displayed agitation. SCP-122 flickered violently."
],
"resource_cost": 8,
"time_cost": 4,
"success_chance": 75,
"info_gathered_if_successful": 9,
"choices": []
},

experiment_11_sketch_lucid: {
"experiment_description": "Train SCP-122-1 in lucid dreaming to produce sketches post-dream.",
"success_log": [
"Experiment Log 122-E11: Subject produced detailed sketches of SCP-122-2 anatomy. Includes sigil-like markings on wings, described as 'warm writing.'\nNeural patterns showed enhanced dream recall capacity."
],
"failure_log": [
"Experiment Log 122-E11: Lucid training unsuccessful. Subject woke disoriented. No usable data."
],
"resource_cost": 7,
"time_cost": 4,
"success_chance": 70,
"info_gathered_if_successful": 8,
"choices": []
},
experiment_12_redundant_system: {
"experiment_description": "Design a multilayer failsafe system to prevent total power loss again.",
"success_log": [
"Experiment Log 122-E12: Engineering team developed a three-tiered power redundancy system, including manual crank generator and Faraday-shielded capacitors. System tested under simulated outage conditions.",
"No disruption observed. SCP-122-1 remained asleep, reporting 'The angel was quiet and peaceful again. He didn't look scared.'",
"Security logs show no abnormal fluctuations. Dream reports consistent with baseline calming behavior."
],
"failure_log": [
"Experiment Log 122-E12: Redundancy system failed during simulated outage. Emergency protocol had to be activated manually. SCP-122-1 woke crying. Dream log included: 'He kept flickering. I didn’t know which one was really him.'"
],
"resource_cost": 12,
"time_cost": 4,
"success_chance": 95,
"info_gathered_if_successful": 8,
"choices": [
{
"experiment_description": "Integrate dream logs with live biometric overlays for real-time emotional telemetry.",
"next": "experiment_14_biometrics_mapping"
},
{
"experiment_description": "Temporarily remove SCP-122-1 and observe object behavior without a host.",
"next": "experiment_16_no_host_test"
}
]
},

experiment_13_entity_contact: {
"experiment_description": "Attempt vocal communication with the figures using audio prompts.",
"success_log": [
"Experiment Log 122-E13: Audio playback device installed near SCP-122. Messages directed at SCP-122-2 played during REM cycle: 'Who are you? Why are you here?'\nResult: Subject Anna began sobbing mid-sleep. Dream record: 'He looked like he wanted to answer, but then he screamed. He sounded like a hundred voices. It hurt.'\nAudio feedback loop recorded low-frequency static during event. Anomaly spiked in EM activity."
],
"failure_log": [
"Experiment Log 122-E13: No discernible response to audio prompts. SCP-122-1 reported a dreamless sleep. All biometric readings remained flat."
],
"resource_cost": 10,
"time_cost": 5,
"success_chance": 60,
"info_gathered_if_successful": 12,
"choices": [
{
"experiment_description": "Attempt dream interview via drug-induced lucidity.",
"next": "experiment_17_drug_lucid"
},
{
"experiment_description": "Use audio cues to try calming SCP-122-2 before communication.",
"next": "experiment_18_soothing_audio"
}
]
},

experiment_14_biometrics_mapping: {
"experiment_description": "Integrate dream logs with live biometric overlays for real-time emotional telemetry.",
"success_log": [
"Experiment Log 122-E14: Full biometric suite (EEG, ECG, skin conductivity, thermal IR) integrated with dream reporting timeline.",
"Observed strong correlation between SCP-122-1 REM fluctuations and shifts in SCP-122-2 form. Higher stress = distorted angel. Calm state = classic description.",
"Entity likely empathic, mimicking subject's emotional state. Possible feedback loop explains increasing flickers during distress episodes."
],
"failure_log": [
"Experiment Log 122-E14: Technical malfunction with EEG and IR sensors. Data lost. Subject unable to recall any dream content for correlation."
],
"resource_cost": 9,
"time_cost": 4,
"success_chance": 85,
"info_gathered_if_successful": 10,
"choices": [
{
"experiment_description": "Administer stress-relieving therapy prior to bedtime to stabilize SCP-122-2.",
"next": "experiment_19_therapy_effect"
},
{
"experiment_description": "Expose SCP-122-1 to various trauma-themed dreams and map results.",
"next": "experiment_20_dream_trauma_exposure"
}
]
},

experiment_15_iconic_stimulus: {
"experiment_description": "Expose SCP-122 to symbolic religious icons to gauge reaction.",
"success_log": [
"Experiment Log 122-E15: Placed symbolic artifacts (Christian cross, Islamic prayer rug, Star of David) near SCP-122 and observed dream impact.",
"Result: SCP-122-1 reported: 'He was brighter tonight. He stood between all the things. He held them like treasures.'",
"Entity showed no signs of distress; visual temperature mapping revealed increased warmth and glow radius around night light. SCP-122-2 appears to respond favorably to symbolic harmony."
],
"failure_log": [
"Experiment Log 122-E15: No difference observed. SCP-122-1 reported 'He was quiet tonight. I don’t think he noticed the stuff.' Minor dimming recorded, inconclusive."
],
"resource_cost": 8,
"time_cost": 3,
"success_chance": 90,
"info_gathered_if_successful": 9,
"choices": [
{
"experiment_description": "Introduce conflicting religious icons and observe outcome.",
"next": "experiment_21_icon_conflict"
},
{
"experiment_description": "Test SCP-122 with icon-free environment to establish control.",
"next": "experiment_22_iconless_control"
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

  // Clear and show current experiment
  gameDiv.innerHTML = `<div class="experiment"><b>${exp.experiment_description || 'No description available'}</b></div>`;
  logDiv.innerText = "";

  let resultLog = "";

  if (exp.resource_cost && exp.time_cost) {
    if (gameState.resources < exp.resource_cost || gameState.days < exp.time_cost) {
      resultLog = "❌ Not enough resources or days to perform this experiment.";
      logDiv.innerText = resultLog;
      return;
    }

    // Deduct
    gameState.resources -= exp.resource_cost;
    gameState.days -= exp.time_cost;

    // Roll
    const success = Math.random() * 100 < exp.success_chance;
    const log = success ? exp.success_log : exp.failure_log;
    resultLog = `🔍 ${log[Math.floor(Math.random() * log.length)]}`;

    if (success) {
      gameState.info += exp.info_gathered_if_successful;
    }

    logDiv.innerText = resultLog;

    // Add to history
    experimentHistory.push({
      title: exp.experiment_description,
      result: resultLog
    });
  }

  updateStatus();

  // Add choices
  if (exp.choices && exp.choices.length > 0) {
    exp.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.innerText = choice.experiment_description || "Continue";
      btn.onclick = () => runExperiment(choice.next);
      gameDiv.appendChild(btn);
    });
  } else {
    gameDiv.innerHTML += (gameState.resources <= 0 || gameState.days <= 0)
      ? "<p>🔚 You've run out of time or resources. The investigation ends here.</p>"
      : "<p>✅ Experiment complete. Choose your next step wisely.</p>";
  }

  // Render experiment history
  const historyDiv = document.getElementById("history");
  historyDiv.innerHTML = `<h3>🧾 Experiment Log</h3>`;
  experimentHistory.forEach(entry => {
    historyDiv.innerHTML += `<div><b>${entry.title}</b><br>${entry.result}</div><hr>`;
  });
}


// function runExperiment(expKey) {
//   const exp = experiments[expKey];
//   gameState.currentExperiment = expKey;
//   const gameDiv = document.getElementById("game");
//   const logDiv = document.getElementById("log");

//   gameDiv.innerHTML = `<div class="experiment"><b>${exp.experiment_description || 'No description available'}</b></div>`;
//   logDiv.innerText = "";

//   // Skip deduction for start node
//   if (exp.resource_cost && exp.time_cost) {
//     if (gameState.resources < exp.resource_cost || gameState.days < exp.time_cost) {
//       logDiv.innerText = "❌ Not enough resources or days to perform this experiment.";
//       return;
//     }

//     // Deduct resources and days
//     gameState.resources -= exp.resource_cost;
//     gameState.days -= exp.time_cost;

//     // Roll for success/failure
//     const success = Math.random() * 100 < exp.success_chance;
//     const log = success ? exp.success_log : exp.failure_log;
//     logDiv.innerText = `🔍 ${log[Math.floor(Math.random() * log.length)]}`;

//     if (success) {
//       gameState.info += exp.info_gathered_if_successful;
//     }
//   }

//   updateStatus();

//   // Show buttons for next choices
//   if (exp.choices && exp.choices.length > 0) {
//     exp.choices.forEach(choice => {
//       const btn = document.createElement("button");
//       btn.innerText = choice.experiment_description || "Continue";
//       btn.onclick = () => runExperiment(choice.next);
//       gameDiv.appendChild(btn);
//     });
//   } else {
//     // If no choices
//     if (gameState.resources <= 0 || gameState.days <= 0) {
//       gameDiv.innerHTML += "<p>🔚 You've run out of time or resources. The investigation ends here.</p>";
//     } else {
//       gameDiv.innerHTML += "<p>✅ Experiment complete. Choose your next step wisely.</p>";
//     }
//   }
// }
window.onload = () => {
  updateStatus();
  runExperiment("start");
};