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
  async getInstrumentById(id) {
    const instruments = await this.getInstruments();
    return instruments.find((instrument) => instrument.id === id);
  }
}
const instrumentsS = new InstrumentsService();
