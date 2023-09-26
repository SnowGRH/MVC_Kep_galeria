class NagykepView {
  #kep;
  constructor(szul, kep) {
    this.#kep = kep;
    this.Szuloelem = szul;
    this.htmlcreate();
    this.balgomb = $("#balGomb");
    this.jobbgomb = $("#jobbGomb");
    this.NagyIMGElem= $("#nagyIMG");

    this.balgomb.on("click", () => {
      this.#esemeny("bal");
    });

    this.jobbgomb.on("click", () => {
      this.#esemeny("jobb");
    });
  }
  NagyKepelembe(kep){
    this.NagyIMGElem.attr("src",kep);
    this.NagyIMGElem.attr("alt",kep);
  }
  #esemeny(nev) {
    const esemeny = new CustomEvent(nev);
    window.dispatchEvent(esemeny);
  }
  htmlcreate() {
    let txt = "<button id='balGomb'>bal</button>";
    txt += `<div class="fokeptar"><img id='nagyIMG' src="${this.#kep}" alt="${
      this.#kep
    }"></div>`;
    txt += "<button id='jobbGomb'>jobb</button>";
    this.Szuloelem.html(txt);
  }
}
export default NagykepView;
