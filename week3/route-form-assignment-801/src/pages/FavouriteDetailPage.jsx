import { useParams, useSearchParams } from "react-router-dom";

function FavouriteDetailPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const getParam = (key, defaultValue = "unknown") => searchParams.get(key) || defaultValue;

  return (
    <div>
      <p>
        Your favourite post is <span className="font-semibold">{getParam("q")}</span>. 
        Post ID is <span className="font-semibold">{id}</span>. 
        Size is <span className="font-semibold">{getParam("size")}</span>.
      </p>
    </div>
  );
}

export default FavouriteDetailPage;
