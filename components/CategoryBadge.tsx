const CategoryBadge = ({
  category,
}: {
  category: { name: string; slug: string; color: string }
}) => {
  return (
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
  )
}

export default CategoryBadge
