document.addEventListener("DOMContentLoaded", function () {

  /* ==========================
     FORMEL 1: Trefferchance
     ========================== */
  const hitBtn = document.getElementById("berechnen-btn");

  if (hitBtn) {
    hitBtn.addEventListener("click", function () {

      const ausweichInput = document.getElementById("ausweichwert");
      const genauigkeitInput = document.getElementById("genauigkeit");
      const output = document.getElementById("ergebnis");

      if (
        ausweichInput.value === "" ||
        genauigkeitInput.value === ""
      ) {
        output.textContent = "Invalid Input";
        return;
      }

      const ausweichwert = Number(ausweichInput.value);
      const genauigkeit = Number(genauigkeitInput.value);

      if (
        isNaN(ausweichwert) || isNaN(genauigkeit) ||
        ausweichwert < 0 || genauigkeit < 0
      ) {
        output.textContent = "Invalid Input";
        return;
      }

      let ergebnis = 67 + (genauigkeit - ausweichwert) * 0.15;
      ergebnis = Math.max(3, Math.min(97, ergebnis));

      output.textContent = ergebnis.toFixed(2);
    });
  }

  /* ==========================
     FORMEL 2: Gear-Level-NPC
     ========================== */
  const gearBtnNpc = document.getElementById("gear-berechnen-btn");

  if (gearBtnNpc) {
    gearBtnNpc.addEventListener("click", function () {

      const winner = Number(document.getElementById("winner_gear_level").value);
      const owner = Number(document.getElementById("owner_gear_level").value);
      const output = document.getElementById("gear-ergebnis");

      if (
        isNaN(winner) || isNaN(owner) ||
        winner < 1 || winner > 15 ||
        owner < 1 || owner > 15
      ) {
        output.textContent = "Invalid Input";
        return;
      }

      let wert = Math.pow(
        ((18) - (winner - owner + 0.0000001)) / 15.0,
        4
      );

      wert = Math.max(0, Math.min(1, wert));
      output.textContent = wert.toFixed(4);
    });
  }

  /* ==========================
     FORMEL 3: Gear-Level-PVP
     ========================== */
  const gearBtnPvp = document.getElementById("gear-berechnen-btn_pvp");

  if (gearBtnPvp) {
    gearBtnPvp.addEventListener("click", function () {

      const winner = Number(document.getElementById("winner_gear_level_pvp").value);
      const owner = Number(document.getElementById("owner_gear_level_pvp").value);
      const output = document.getElementById("gear-ergebnis_pvp");

      if (
        isNaN(winner) || isNaN(owner) ||
        winner < 1 || winner > 15 ||
        owner < 1 || owner > 15
      ) {
        output.textContent = "Invalid Input";
        return;
      }

      let wert = Math.pow(
        ((18) - (winner - owner + 0.0000001)) / 15.0,
        3.5
      );

      wert = Math.max(0, Math.min(1, wert));
      output.textContent = wert.toFixed(4);
    });
  }

/* ==========================
   FORMEL 4: Duration
   ========================== */
const durationBtn = document.getElementById("duration-berechnen-btn");

if (durationBtn) {
  durationBtn.addEventListener("click", function () {

    const emitterInput = document.getElementById("emitter_rating");
    const firewallInput = document.getElementById("firewall_rating");
    const baseInput = document.getElementById("base_duration");
    const output = document.getElementById("duration-ergebnis");

    // prevent empty labels
    if (
      emitterInput.value === "" ||
      firewallInput.value === "" ||
      baseInput.value === ""
    ) {
      output.textContent = "Invalid Input";
      return;
    }

    const emitter = Number(emitterInput.value);
    const firewall = Number(firewallInput.value);
    const baseDuration = Number(baseInput.value);

    // check for only numerical and positive entries
    if (
      isNaN(emitter) || isNaN(firewall) || isNaN(baseDuration) ||
      emitter < 0 || firewall < 0 || baseDuration <= 0
    ) {
      output.textContent = "Invalid Input";
      return;
    }

    const result =
      baseDuration * ((100 + emitter) / (100 + firewall));

    output.textContent = result.toFixed(2);
  });
}

});
