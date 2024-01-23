// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,

    mutate() {
      const ramdomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();

      while (newBase === this.dna[randomIndex]) {
        newBase = returnRandBase();
      }

      this.dna[randomIndex] = newBase;
      return this.dna;
    },

    compareDNA(otherOrganism) {
      const commonBases = this.dna.filter((base, index) => base === otherOrganism.dna[index]);
      const commonPercentage = (commonBases.length / this.dna.length) * 100;
      return `Specimen #${this.specimenNum} and Specimen #${otherOrganism.specimenNum} have ${commonPercentage.toFixed(2)}% DNA in common.`;
    },

    willLikelySurvive() {
      const cgBases = this.dna.filter(base => base === 'C' || base === 'G');
      const cgPercentage = (cgBases.length / this.dna.length) * 100;
      return cgPercentage >= 60;
    },

    complementStrand() {
      const complementMap = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
      const complementedDNA = this.dna.map(base => complementMap[base]);
      return complementedDNA;
    }
  }
};

const pAequorInstances = [];

const generatePAequorInstances = () => {
  let specimenNum = 1;

  while (pAequorInstances.length < 30) {
    const newOrganism = pAequorFactory(specimenNum, mockUpStrand());

    if (newOrganism.willLikelySurvive()) {
      pAequorInstances.push(newOrganism);
      specimenNum++;
    }
  }
};

console.log(pAequorFactory(1, mockUpStrand()));
console.log(pAequorFactory(2, mockUpStrand()));

generatePAequorInstances();
console.log(pAequorInstances);