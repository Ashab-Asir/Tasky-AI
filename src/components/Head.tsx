import { Helmet } from "react-helmet";
type HeadProp = {
  title: string;
};
const Head: React.FC<HeadProp> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Head;
