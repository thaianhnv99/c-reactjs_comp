import TableBasic from "src/components/common/table/TableBasic";

interface TColumn {
    field: keyof TData,
    headerName: string,
    groupBy?: string
}

interface TData {
    a1: string,
    a2: string,
    b: string,
    c: string
}
const DataGrid = () => {
    const row = [
        {
            a1: 'a1Name', a2: 'a2Name', b: 'bName', c: 'cName'
        },
        {
            a1: 'a1Name', a2: 'a2Name', b: 'bName', c: 'cName'
        },
        {
            a1: 'a1Name', a2: 'a2Name', b: 'bName', c: 'cName'
        },
        {
            a1: 'a1Name', a2: 'a2Name', b: 'bName', c: 'cName'
        },
        {
            a1: 'a1Name', a2: 'a2Name', b: 'bName', c: 'cName'
        },
    ];
    const columns: TColumn[] = [
        {
            field: 'a1',
            headerName: 'a1',
            groupBy: 'a'
        },
        {
            field: 'a2',
            headerName: 'a2',
            groupBy: 'a'
        },
        {
            field: 'b',
            headerName: 'b',
        },
        {
            field: 'c',
            headerName: 'c',
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
    ]
    return (<>
        <TableBasic columns={columns} rows={row} />
    </>);
}

export default DataGrid;