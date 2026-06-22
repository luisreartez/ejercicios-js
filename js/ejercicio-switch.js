let menu = prompt(" Elija un menú: carne, pescado o verdura");

switch (menu.toLowerCase()) {
  case "carne":
    console.log("🥩 Ha elegido carne. Se le ofrecerá vino tinto 🍷");
    break;

  case "pescado":
    console.log("🐟 Ha elegido pescado. Se le ofrecerá vino blanco 🥂");
    break;

  case "verdura":
    console.log("🥗 Ha elegido verdura. Se le ofrecerá agua 💧");
    break;

  default:
    console.log("❌ Elija carne, pescado o verdura.");
}