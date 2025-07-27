function notifyDiscord(message) {
  fetch("https://discordapp.com/api/webhooks/1398890967628779561/spl9o7xAiwF-7aV6T750J0Yw3Nc849Het9kP1t3_RfEavR661rLB-Yx918Ajpo6c9Rz-", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content: message })
  })
  .then(res => {
    if (res.ok) {
      console.log("Message sent to Discord!");
    } else {
      console.error(" Discord response error:", res.status);
    }
  })
  .catch(error => console.error(" Fetch error:", error));
}
