import feed from '../../../json/feed'

export default async (req, res) => {
    res.status(200).json(feed);
  };