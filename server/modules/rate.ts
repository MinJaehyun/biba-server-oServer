import Comment from '../models/comments';
import Beer from '../models/beers';

const AverageRate = async (id: string, rate: number) => {
  let avg = 0;
  const allRate = await Comment.findAll({
    where: {
      beer_id: id,
    },
    raw: true,
    attributes: ['rate'],
  });
  if (allRate.length !== 0) {
    for (let i = 0; i < allRate.length; i++) {
      rate += allRate[i].rate;
    }
    avg = Math.round(rate / allRate.length);
  }
  await Beer.update(
    {
      rate: avg,
    },
    {
      where: { id: id },
    }
  );
};

export default AverageRate;
