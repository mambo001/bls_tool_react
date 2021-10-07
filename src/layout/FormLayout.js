function FormLayout({ children }) {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row valign-wrapper">
            {children}
        </div>
      </form>
    </div>
  );
}

export default FormLayout;
