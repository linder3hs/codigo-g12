// select
const targetLanguage = document.querySelector("#target-language");
const sourceLanguage = document.querySelector("#source-language");
// textarea
const sourceText = document.querySelector("#source-text");
const targetText = document.querySelector("#target-text");
// button
const btnTranslate = document.querySelector("#btn-translate");

async function getLanguages() {
  const response = await fetch(
    "https://text-translator2.p.rapidapi.com/getLanguages",
    {
      headers: {
        "X-RapidAPI-Key": "b5657878f2mshcaf7d95f6103647p1f3120jsnbe67f1f13e54",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
    }
  );
  const data = await response.json();
  renderLanguages(data.data.languages, sourceLanguage);
  renderLanguages(data.data.languages, targetLanguage);
}

getLanguages();

function renderLanguages(languages, select) {
  languages.forEach((language) => {
    select.innerHTML += `<option value="${language.code}">${language.name}</option>`;
  });
}

sourceText.onkeypress = async function () {
  if (!sourceLanguage.value || !targetLanguage.value || !sourceText.value)
    return;

  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", sourceLanguage.value);
  encodedParams.append("target_language", targetLanguage.value);
  encodedParams.append("text", sourceText.value);

  const response = await fetch(
    "https://text-translator2.p.rapidapi.com/translate",
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "b5657878f2mshcaf7d95f6103647p1f3120jsnbe67f1f13e54",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: encodedParams,
    }
  );
  const data = await response.json();

  targetText.value = data.data.translatedText;
};
