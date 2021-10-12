import { v4 as uuidv4 } from "uuid";
import { formatDistanceToNow } from "date-fns";

const tableData = {
  headers: ["Date", "Status", "Summary"],
  scrapingData: [
    {
      date: "10/12/2021, 3:26:32 AM",
      status: "Submitted",
      summary: {
        casesCount: 10,
      },
    },
    {
      date: "10/12/2021, 4:26:32 AM",
      status: "Submitted",
      summary: {
        casesCount: 15,
      },
    },
    {
      date: "10/12/2021, 5:26:32 AM",
      status: "Submitted",
      summary: {
        casesCount: 4,
      },
    },
  ],
};

function ScrapingTable() {
  function renderTableData() {
    return tableData.scrapingData.map((row) => {
      const { date, summary, status } = row;
      const { casesCount } = summary;
      return (
        <tr key={uuidv4()}>
          <td>
            {formatDistanceToNow(new Date(date), {
              addSuffix: true,
              includeSeconds: true,
            })}
          </td>
          <td>{status}</td>
          <td>{casesCount}</td>
        </tr>
      );
    });
  }

  return (
    <div className="col s12">
      <table className="striped centered highlight responsive">
        <thead>
          <tr>
            {tableData.headers.map((header) => (
              <th key={uuidv4()}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
}

export default ScrapingTable;
