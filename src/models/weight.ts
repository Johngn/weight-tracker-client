class Weight {
  id: string;
  text: string;

  constructor(weightText: string) {
    this.text = weightText;
    this.id = new Date().toISOString();
  }
}

export default Weight;
