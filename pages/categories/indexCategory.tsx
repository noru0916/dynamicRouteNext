import { GetServerSideProps } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const category = await response.json();

  return {
    props: {
      listCategory: category,
    },
  };
};

const categoryIndex: React.FC<{ listCategory: string[] }> = ({
  listCategory,
}) => {
  return (
    <div className="container">
      <div>
        <h2>Category :</h2>
        {listCategory.map((element) => {
          return (
            <ul>
              <li>
                <Link href={`/categories/${element}`}>
                  <a>{element}</a>
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default categoryIndex;
