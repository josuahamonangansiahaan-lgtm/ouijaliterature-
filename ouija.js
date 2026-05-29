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

  if (!input.trim()) {
    return;
  }

  responseArea.innerHTML =
  "<span class='loading'>" +
  "ROH SEDANG MENGETIK..." +
  "</span>";

  try {

    const response =
    await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {

        method: "POST",

        headers: {

          "Authorization":
          `Bearer ${API_KEY}`,

          "Content-Type":
          "application/json",

          "HTTP-Referer":
          "https://josuahamonangansiahaan-lgtm.github.io",

          "X-Title":
          "Ouija AI",
        },

        body: JSON.stringify({

          model:
          "google/gemma-2-9b-it:free",
          messages: [

            {
              role:
              "system",

              content:
              "Kamu adalah roh papan Ouija " +
              "yang misterius dan gelap.",
            },

            {
              role:
              "user",

              content:
              input,
            },
          ],

          temperature:
          0.9,

          max_tokens:
          100,
        }),
      },
    );

    const data =
    await response.json();

    console.log(data);

    if (data.error) {

      responseArea.innerHTML =
      data.error.message;

      return;
    }

    responseArea.innerHTML =
    data
    .choices[0]
    .message
    .content;

  } catch (err) {

    console.log(err);

    responseArea.innerHTML =
    err.message;
  }
}
