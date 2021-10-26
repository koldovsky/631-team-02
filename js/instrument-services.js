class InstrumentsService {
  constructor() {
    if (!InstrumentsService._instance) InstrumentsService._instance = this;
    return InstrumentsService._instance;
  }
  async getInstruments() {
    if (!this.instruments) {
      this.instruments = await (await fetch("js/instruments.json")).json();
    }
    return this.instruments;
  }
}
const instrumentsS = new InstrumentsService();
