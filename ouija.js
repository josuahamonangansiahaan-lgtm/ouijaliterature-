const API_KEY =
"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";

async function askSpirits() {

  const input =
  document.getElementById(
    "user-input"
  ).value;

  const responseArea =
  document.getElementById(
    "response-area"
  );

  if (!input.trim()) return;

  responseArea.innerHTML =
  "<span class='loading'>" +
  "Roh sedang mengetik..." +
  "</span>";

  try {

    const response =
    await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          Authorization:
          `Bearer ${API_KEY}`,

          "Content-Type":
          "application/json",
        },

        body: JSON.stringify({

          model:
          "mistralai/" +
          "mistral-7b-" +
          "instruct:free",

          messages: [
            {
              role:
              "system",

              content:
              "Kamu roh Ouija " +
              "misterius.",
            },

            {
              role:
              "user",

              content:
              input,
            },
          ],
        }),
      },
    );

    const data =
    await response.json();

    responseArea.innerHTML =
    data
      .choices[0]
      .message
      .content;

  } catch (err) {

    responseArea.innerHTML =
    "Koneksi gagal";
  }
}