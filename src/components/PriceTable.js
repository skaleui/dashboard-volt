
import React, { useMemo, useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import {
  useTable,
  usePagination,
  useSortBy,
} from 'react-table';
// import "react-table/react-table.css";

// const ValueChange = ({ value, suffix }) => {
//   const valueIcon = value < 0 ? faAngleDown : faAngleUp;
//   const valueTxtColor = value < 0 ? "text-danger" : "text-success";

//   return (
//     value ? <span className={valueTxtColor}>
//       <FontAwesomeIcon icon={valueIcon} />
//       <span className="fw-bold ms-1">
//         {Math.abs(value)}{suffix}
//       </span>
//     </span> : "--"
//   );
// };



export const PriceDataTable = () => {

  const [requestData, setData] = useState({ data: [], isFetching: false });

  useEffect(() => {
    setData({ data: [], isFetching: true });

    const doFetchPricingData = async () => {
      const response = await fetch('https://6093046a85ff510017214172.mockapi.io/api/products/ecomproducts');
      const priceData = await response.json();

      setData({ data: priceData, isFetching: false });
    };

    doFetchPricingData();
  }, []);


  const columns = useMemo(() => (
    [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Product Name',
        accessor: 'product',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
      },
      {
        Header: 'Store ID',
        accessor: 'storeid',
      },
      {
        Header: 'Image',
        accessor: 'image',
        Cell: ({ cell: { value } }) => (
          <div className="blog-comments__avatar mr-3">
            <img
              src={value} alt={value}
              style={{width:'12%'}}
            />
          </div>
        )
      }
    ]
  ), []);

  return (
    <RTable columns={columns} data={requestData.data} />
  )

  // React-Table functionality

    // Define a default UI for filtering
    // function DefaultColumnFilter({
    //   column: { filterValue, preFilteredRows, setFilter },
    // }) {
    //   const count = preFilteredRows.length

    //   return (
    //     <input
    //       value={filterValue || ''}
    //       onChange={e => {
    //         setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
    //       }}
    //       placeholder={`Search ${count} records...`}
    //     />
    //   )
    // }


   function RTable ({columns, data}) {
     const {
       getTableProps,
       getTableBodyProps,
       headerGroups,
       footerGroups,
       prepareRow,
       page,
       canPreviousPage,
       canNextPage,
       pageCount,
       gotoPage,
       nextPage,
       previousPage,
       setPageSize,
       state: { pageIndex, pageSize }
     } = useTable(
       {
         columns,
         data,
         initialState: { pageSize: 25 }
       },
       useSortBy,
       usePagination,
     );

    return (
      <div>
        {
          requestData.isFetching ? <div>Fetching</div> :
            <div>
            <Table
              {...getTableProps()}
              border={2}
              style={{ borderCollapse: "collapse", width: "100%" }}
            >
              <thead>
                {headerGroups.map((group) => (
                  <tr {...group.getHeaderGroupProps()}>
                    {group.headers.map((column) => (
                      <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}<span>{
                        column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''
                      }</span></th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                {footerGroups.map((group) => (
                  <tr {...group.getFooterGroupProps()}>
                    {group.headers.map((column) => (
                      <td {...column.getFooterProps()}>{column.render("Footer")}</td>
                    ))}
                  </tr>
                ))}
              </tfoot>
            </Table>
                 <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageCount}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[2, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        </div>
        </div>
        }
      </div>
    )
  };
};
