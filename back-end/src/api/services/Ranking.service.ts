/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable max-len */
import CompetitionResults from '../models/CompetitionResults.model';

class RankingService {
  public model = CompetitionResults;

  public async findAll() {
    const ranking = await this.model.findAll();
    const competition = ranking.map((comp) => comp.competition_name);
    const uniqueCompetition = [...new Set(competition)];
    const points = ranking.map((comp) => {
      let { value } = comp;
      let { unit } = comp;
      if (comp.unit === 'l' || comp.unit === 'kg') {
        value = Number(comp.value) * 100;
      }
      if (comp.unit === 'l') {
        unit = 'ml';
      }
      if (comp.unit === 'kg') {
        unit = 'g';
      }
      if (comp.competition_name === 'competição yoga' && comp.unit === 'm') {
        value = Number(comp.value) * 60;
        unit = 's';
      }
      return `${comp.athelete_name}: ${value} ${unit}`;
    });
    console.log(points);

    // eslint-disable-next-line no-restricted-syntax
    // for (const value of points) {
    //   const array: any = [];
    //   const split = value.split(':')[0];
    //   console.log(split);
    //   for (const va of points) {
    //     const split2 = va.split(':')[0];
    //     if (split === split2) {
    //       array.push(split[1]);
    //     }
    //   }
    //   console.log(array);
    // }

    const array: any[any] = [];

    for (let i = 0; i <= uniqueCompetition.length - 1; i += 1) {
      const obj: any = {
        competition_name: `${uniqueCompetition[i]}` };
      for (let j = 0; j <= uniqueCompetition.length - 1; j += 1) {
        obj[`${j + 1}º`] = `${points[i + i + j]}`;
      }
      array.push(obj);
    }
    
    if (!ranking) {
      return null;
    }

    return array;
  }
}

export default RankingService;
