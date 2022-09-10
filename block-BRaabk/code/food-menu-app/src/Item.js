function Items(props) {
  return (
    <main className="menu-container">
      {props.menuItem.map((food, index) => {
        return (
          <div key={index} className="menu-item">
            <div className="menu-image"></div>
            <div className="menu-detail">
              <div className="menu-title">
                {capitalizeFirstLetter(food.title)}
                <div className="menu-price">${food.price}</div>
              </div>
              <hr />
              <div className="menu-desc">{food.desc}</div>
            </div>
          </div>
        );
      })}
    </main>
  );
}

let capitalizeFirstLetter = (string) => {
  return string
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
};

export default Items;
