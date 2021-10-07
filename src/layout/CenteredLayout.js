function CenteredLayout({ children }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col s10 offset-s1">{children}</div>
      </div>
    </div>
  );
}

export default CenteredLayout;
