const alphabets = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function calculateLoveScore(name1, name2) {
  let name1Score = 0;
  let name2Score = 0;

  for (const letter of name1) {
    const value = alphabets[letter];
    name1Score += value;
  }

  for (const letter of name2) {
    const value = alphabets[letter];
    name2Score += value;
  }

  const score = name1Score + name2Score;

  let finalscore = 0;

  function addScore(digitScore) {
    const valueLen = String(digitScore).length;

    for (let i = 0; i < valueLen; i++) {
      const adVal = Number(String(digitScore)[i]);
      finalscore += adVal;
    }
  }

  addScore(score);

  let real = finalscore;

  if (String(finalscore).length > 1) {
    finalscore = 0;
    addScore(real);
    real = finalscore;
  }

  return real;
}

document
  .getElementById("loveForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name1 = document
      .getElementById("name1")
      .value.toLowerCase()
      .replace(/\s/g, "");
    const name2 = document
      .getElementById("name2")
      .value.toLowerCase()
      .replace(/\s/g, "");

    const loveScore = calculateLoveScore(name1, name2);

    const resultDiv = document.getElementById("result");
    const loveScoreSpan = document.getElementById("loveScore");
    const loveMeaning = document.getElementById("loveMeaning");

    loveScoreSpan.textContent = loveScore;
    resultDiv.classList.remove("hidden");
    switch (loveScore) {
      case 1:
        loveMeaning.textContent =
          "Independence, individuality, leadership, self-confidence, and self-reliance. A love score of 1 suggests a relationship that is driven by strong personalities who are not afraid to take charge and lead.";
        break;
      case 2:
        loveMeaning.textContent =
          "Partnership, balance, harmony, diplomacy, and sensitivity. A love score of 2 suggests a relationship that is based on mutual understanding and respect, and where both partners value cooperation and compromise.";
        break;
      case 3:
        loveMeaning.textContent =
          "Creativity, self-expression, optimism, and socialization. A love score of 3 suggests a relationship that is likely to be fun, lively, and full of laughter and creative expression.";
        break;
      case 4:
        loveMeaning.textContent =
          "Stability, structure, organization, and practicality. A love score of 4 suggests a relationship that is likely to be grounded, reliable, and focused on building a stable foundation for the future.";
        break;
      case 5:
        loveMeaning.textContent =
          "Freedom, change, adaptability, and exploration. A love score of 5 suggests a relationship that is likely to be exciting, unpredictable, and full of adventure and new experiences.";
        break;
      case 6:
        loveMeaning.textContent =
          "Love, harmony, family, responsibility, and nurturing. A love score of 6 suggests a relationship that is likely to be warm, loving, and focused on building a strong family unit.";
        break;
      case 7:
        loveMeaning.textContent =
          "Spirituality, introspection, intuition, and mysticism. A love score of 7 suggests a relationship that is likely to be deep, meaningful, and focused on personal growth and spiritual development.A love score of 7 suggests a deep, spiritual connection between two individuals. It is a highly intuitive and sensitive number, associated with spiritual enlightenment, mysticism, and creativity. Individuals with a love score of 7 are often very emotionally sensitive and empathetic, and they may feel an intense connection with their partner that goes beyond the physical realm.";
        break;
      case 8:
        loveMeaning.textContent =
          "Ambition, power, success, and material abundance. A love score of 8 suggests a relationship that is likely to be focused on achieving financial stability and material success.";
        break;
      case 9:
        loveMeaning.textContent =
          "Compassion, generosity, forgiveness, and humanitarianism. A love score of 9 suggests a relationship that is likely to be focused on helping others and making a positive impact in the world.";
        break;
      default:
        loveMeaning.textContent =
          "Sorry, the meaning of this love score is not available.";
        break;
    }
  });
