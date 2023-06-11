import TableBasic from "src/components/common/table/TableBasic";

interface TColumn {
  field?: string;
  headerName: string;
  section?: string;
  column?: TColumn[];
}

interface TData {
  No: string;
  a1: string;
  a2: string;
  b: string;
  c1: string;
  c2: string;
  c3: string;
  d: string;
}
const DataGrid = () => {
  const row: TData[] = [
    {
      No: "1",
      a1: "a1Name",
      a2: "a2Name",
      b: "bName",
      c1: "cName",
      c2: "cName",
      c3: "cName",
      d: "dName",
    },
    {
      No: "2",
      a1: "a1Name",
      a2: "a2Name",
      b: "bName",
      c1: "cName",
      c2: "cName",
      c3: "cName",
      d: "dName",
    },
    {
      No: "3",
      a1: "a1Name",
      a2: "a2Name",
      b: "bName",
      c1: "cName",
      c2: "cName",
      c3: "cName",
      d: "dName",
    },
    {
      No: "4",
      a1: "a1Name",
      a2: "a2Name",
      b: "bName",
      c1: "cName",
      c2: "cName",
      c3: "cName",
      d: "dName",
    },
    {
      No: "5",
      a1: "a1Name",
      a2: "a2Name",
      b: "bName",
      c1: "cName",
      c2: "cName",
      c3: "cName",
      d: "dName",
    },
  ];

  const columns: TColumn[] = [
    {
      field: "No",
      headerName: "No",
    },
    {
      field: "b",
      headerName: "b",
    },
    {
      headerName: "a",
      section: "a",
      column: [
        {
          field: "a1",
          headerName: "a1",
        },
        {
          field: "a2",
          headerName: "a2",
        },
      ],
    },
    {
      headerName: "c",
      section: "c",
      column: [
        {
          field: "c1",
          headerName: "c1",
        },
        {
          field: "c2",
          headerName: "c2",
        },
        {
          field: "c3",
          headerName: "c3",
        },
      ],
    },
    {
      field: "d",
      headerName: "d",
    },
    // {
    //     field: 'name',
    //     headerName: t('POLICY.POLICY_NAME'),
    //     type: 'string',
    //     flex: 1,
    //     renderCell: (params) =>
    //         RenderLink({
    //             value: params.formattedValue,
    //             url: `/policy/management/${params.id}/`,
    //             target: '_self',
    //         }),
    // },
  ];
  return (
    <>
      <TableBasic columns={columns} rows={row} />
    </>
  );
};

export default DataGrid;
