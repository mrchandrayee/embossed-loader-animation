const snippets = {
  chaser: `.loader-runner {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--bg-color);
  box-shadow: 6px 6px 12px var(--shadow-dark),
              -6px -6px 12px var(--shadow-light);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.runner-dot {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-color);
  box-shadow: inset 4px 4px 8px var(--shadow-dark),
              inset -4px -4px 8px var(--shadow-light);
  animation: trackSpin 1.1s linear infinite;
}
@keyframes trackSpin {
  to { transform: rotate(360deg); }
}`,
  morph: `.loader-morph {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: var(--bg-color);
  box-shadow: 7px 7px 14px var(--shadow-dark),
              -7px -7px 14px var(--shadow-light);
  animation: morphing 2.4s ease-in-out infinite;
}
@keyframes morphing {
  0%, 100% { border-radius: 50%; }
  25% { border-radius: 42% 58% 64% 36% / 42% 42% 58% 58%; }
  50% { border-radius: 62% 38% 38% 62% / 52% 60% 40% 48%; }
  75% { border-radius: 38% 62% 55% 45% / 60% 38% 62% 40%; }
}`,
  wave: `.loader-wave {
  display: flex;
  gap: 13px;
  align-items: center;
  justify-content: center;
}
.loader-wave span {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--bg-color);
  box-shadow: 4px 4px 8px var(--shadow-dark),
              -4px -4px 8px var(--shadow-light);
  animation: wavePress 1.05s ease-in-out infinite;
}
.loader-wave span:nth-child(1) { animation-delay: 0s; }
.loader-wave span:nth-child(2) { animation-delay: .15s; }
.loader-wave span:nth-child(3) { animation-delay: .3s; }`,
  ping: `.loader-ping {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--bg-color);
  box-shadow: 6px 6px 12px var(--shadow-dark),
              -6px -6px 12px var(--shadow-light);
  position: relative;
}
.loader-ping::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  border: 2px solid var(--accent);
  border-radius: 50%;
  animation: pingOut 1.4s ease-out infinite;
}
@keyframes pingOut {
  0% { transform: translate(-50%, -50%) scale(.8); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
}`,
  dial: `.loader-dial {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: linear-gradient(40deg, var(--bg-color) 48%, #cbd3df 52%);
  box-shadow: 6px 6px 12px var(--shadow-dark),
              -6px -6px 12px var(--shadow-light);
  position: relative;
  animation: smoothSpin 2s cubic-bezier(.68,-.55,.265,1.55) infinite;
}
.loader-dial::before {
  content: '';
  position: absolute;
  top: 10px; left: 18px; right: 10px; bottom: 10px;
  border-radius: 50%;
  background: var(--bg-color);
  box-shadow: inset 4px 4px 8px var(--shadow-dark),
              inset -4px -4px 8px var(--shadow-light);
}
@keyframes smoothSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`
};

document.querySelectorAll(".source-code").forEach((code) => {
  code.textContent = snippets[code.dataset.code] || "";
});

document.querySelectorAll(".copy-code").forEach((button) => {
  button.addEventListener("click", async () => {
    const code = button.closest(".code-panel").querySelector("code").textContent;
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const helper = document.createElement("textarea");
      helper.value = code;
      document.body.append(helper);
      helper.select();
      document.execCommand("copy");
      helper.remove();
    }
    const previous = button.textContent;
    button.textContent = "Copied!";
    window.setTimeout(() => { button.textContent = previous; }, 1200);
  });
});
