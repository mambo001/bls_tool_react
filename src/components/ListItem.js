function ListItem({ title, children }) {
    return (
        <li className="collection-item" style={{ boxSizing: "border-box" }}>
          <div>
            {title}
            {children}
          </div>
        </li>
    )
}

export default ListItem
