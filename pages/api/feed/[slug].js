import feed from '../../../json/feed';

export default async (req, res) => {
    const { query: { slug } } = req;

    const filtered = feed.find(item => item.slug === slug);
    res.status(200).json(filtered);
  };