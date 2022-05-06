import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  const [getSearchParam, setSearchParam] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices
          .filter((invoice) =>
            invoice.name.includes(getSearchParam.get("filter") || "")
          )
          .map((invoice) => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              })}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <input
        value={getSearchParam.get("filter") || ""}
        onChange={(e) => {
          const filter = e.target.value;
          setSearchParam({ filter });
        }}
      ></input>
      <Outlet />
    </div>
  );
}
