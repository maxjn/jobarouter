import { Link, useLocation } from "react-router-dom";
function BreadCrumbs() {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumbs) => crumbs !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return <div className="breadcrumbs">{crumbs}</div>;
}

export default BreadCrumbs;
