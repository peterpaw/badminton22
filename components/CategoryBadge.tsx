import Link from "next/link"

const CategoryBadge = ({
  category,
}: {
  category: { name: string; slug: string; color: string }
}) => {
  return (
    <Link href={`/presse/kategorie/${category.slug}`} key={category.slug}>
      <a>
        <span
          className={`badge ${
            category.color === "blue"
              ? "badge-blue"
              : category.color === "green"
              ? "badge-green"
              : category.color === "yellow"
              ? "badge-yellow"
              : category.color === "red"
              ? "badge-red"
              : ""
          }`}
        >
          {category.name}
        </span>
      </a>
    </Link>
  )
}

export default CategoryBadge
