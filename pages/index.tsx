import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Home page</h1>
      <ul>
        <li>
          {" "}
          <Link href="/categories/indexCategory">
            <a>Choose a category</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="categories/random">
            <a>Random</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
