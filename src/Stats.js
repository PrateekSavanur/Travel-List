export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        {" "}
        <em>Start adding items to your list 🎒🎒</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything ready 🚀🚀"
          : `👜👜You have {numItems} items in your list and you packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
